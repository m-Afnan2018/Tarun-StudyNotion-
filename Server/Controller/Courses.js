const Tags = require("../Model/Tags");
const User = require("../Model/User");
const Course = require("../Model/Course");
const uploadFileToCloudinary = require('../util/uploadFiles');
const { populate } = require("../Model/User");



exports.createCourse = async (req, res) => {

    try {
        //  fetch Details from body

        const { courseTitile, courseDescription, price, whatYouWillLearn, tag } = req.body;
        const thumbnail = req.files.Thumbnail;
        // Validation
        if (!courseTitile || courseDescription || !price || !whatYouWillLearn || !tag || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory"
            });
        }
        // fetch user id from req user which was added in authentication middleware
        const userId = req.user.id;
        // fetch instructor details by using this Id
        const instructorDetails = await User.findById({ userId });
        // chek for instructor
        if (!instructorDetails) {
            return res.status(404).json({
                success: false,
                message: "Instructor Details not found"
            });
        }
        // get tag details from db 
        const tagdetails = await Tags.findById({ tag });
        // check for tag details 
        if (!tagdetails) {
            return res.status(404).json({
                success: false,
                message: "Tag details not found"
            });
        }
        // get url from response of cloudinary image upload
        const imageUrl = uploadFileToCloudinary(thumbnail, process.env.FOLDER_NAME);
        // create entry in db 
        const createdCourse = await Course.create({
            courseTitile,
            courseDescription,
            price,
            whatYouWillLearn,
            tag: tagdetails._id,
            imageUrl: imageUrl.secure_url,
            instructor: instructorDetails._id
        });
        // update course entry in user and tag as well
        const updatedUser = await User.findByIdAndUpdate({ _id: instructorDetails._id }, {
            $push: {
                courses: createdCourse._id
            }
        });

        // H W  Update Tag db for course as well

       const updatedTag = await Tags.findByIdAndUpdate(
        {_id:tagdetails._id},{
            $push:{
                course:createdCourse._id
            }
        }
       )

        // return response  


        return res.status(200).json({
            success: true,
            message: "Course Added Successfully",
            response: createdCourse
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to add course"
        });
    }

}


exports.getAllCourses = async (req, res) => {

    try {
            const allCourses = await Course.find({}).populate().exec();
            return res.status(200).json({
                success:true,
                message:"Courses fetched successfully",
                response:allCourses
            });
    } catch (error) {
              return res.status(500).json({
                success:false,
                message:"Failed to get Courses"
              })  
    }

}


// get all course details

exports.getCourseDetails = async(req,res)=>{
    try{
        
        // fetch user id from req body
        const courseId = req.body.courseId;
        // Fetch course details by making DB call
        const courseDetails = await Course.findById({_id:courseId})
                                                   .populate({
                                                    path:"instructor",
                                                    populate:{
                                                        path:"additionalDetails"
                                                    }
                                                   })
                                                   .populate("tag")
                                                   .populate("ratingAndReviews")
                                                   .populate({
                                                    path:"courseContent",
                                                    populate:{
                                                        path:"subSection"
                                                    }
                                                   });
        // if no details found return response
        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"No course details found"
            });
        }      
        // If found return response
        return res.status(200).json({
            success:true,
            response:courseDetails,
            message:"Course details found successfully"
        });

    } catch(error){
            return res.status(500).json({
                success:false,
                message:"Unable to load course details"
            });
    }
 }