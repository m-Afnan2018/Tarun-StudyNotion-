const Course = require("../Model/Course");
const Section = require("../Model/Section");


exports.createSection = async (req, res) => {

    try {
        // fetch data from req.body
        const { name, courseId } = req.body;
        // validation
        if (!name || !courseId) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory"
            });
        }
        // create section 
        const createdSection = await Section.create({ name });
        // update the Object id in course 
        const updatedCourse = await Course.findByIdAndUpdate({ _id: courseId }, {
            $push: {
                section: createdSection._id
            }
        })
        // return response  

        return res.status(200).json({
            success: true,
            message: "Section created Successfully",
            response: updatedCourse
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to create section"
        });
    }

}

exports.updateSection = async (req, res) => {

    try {
        //  fetch data 
        const { name, sectionId } = req.body;
        // validation
        if (!name || !sectionId) {
            return res.status(500).json({
                success: false,
                message: "please fill all the required fields"
            });
        }
        // update Data
        const updatedData = await Section.findByIdAndUpdate({ _id: sectionId }, {
            name
        })
        // return response
        return res.status(200).json({
            success: true,
            message: "Section Updated Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update course"
        });
    }

}


exports.deleteSection = async(req,res) => {
    try{
        // fetch sectionId 
        const{sectionId} = req.body;
        // delete section
        const deletedSection = await Section.findByIdAndDelete({_id:sectionId});
        // TODO do we have to manually delete the object id of section in course DB ?
        // return response
        return res.status(200).json({
            success:true,
            message:"Section removed",
            response:deletedSection
        });
    }catch(error){
        return res.status(500).json({
            success:true,
            message:"Section removal failed"
        });
    }
}

exports.getAllSections = async(req,res)=>{
    try{
         const sections = await Section.find({}).populate("subSection");
         return res.status(200).json({
            success:true,
            message:"Section fetched successfully",
            response:sections
         });
         
    } catch(error){
        return res.status(500).json({
            success:false,
            message:"failed to fetch courses"
        });
    }
}