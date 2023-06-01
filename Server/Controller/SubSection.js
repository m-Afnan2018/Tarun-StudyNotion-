const SubSection = require("../Model/SubSection");
const uploadFileToCloudinary = require("../util/uploadFiles");
const Section = require("../Model/Section");
require('dotenv').config();

exports.createSubSection = async (req, res) => {

    try {
        // fetch data and video
        const { title, timeDuration, description, sectionId } = req.body;
        const video = req.files.video
        // validation
        if (!title || !timeDuration || description || !sectionId) {
            return res.status(400).json({
                success: false,
                message: "please fill all the required fields"
            });
        }
        // upload video to cloudinary and get url
        const uploadedFile = await uploadFileToCloudinary(video, process.env.FOLDER_NAME);
        // create entry in DB 
        const createdSubSection = await SubSection.create({
            title,
            timeDuration,
            description,
            videoUrl: uploadedFile.secure_url
        })
        // update the sub section id in section schema
        const updatedSection = await Section.findByIdAndUpdate({ _id: sectionId }, {
            $push: {
                subSection: createdSubSection._id
            }
        });

        return res.status(200).json({
            success: true,
            message: "SubSection created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Subsection addition failed"
        })
    }

}


// HW Update and delete subsection 


exports.updateSubSection = async (req, res) => {
    try {
        //fetch data to update and subsection id 
        const { title, timeDuration, description, subSectionId } = req.body;
        // validation
        if (!title || !timeDuration || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory"
            });
        }
        // update the data 
        const updatedData = await SubSection.findByIdAndUpdate({ _id: subSectionId }, {
            title,
            timeDuration,
            description
        },{new:true});
        // send response
        return res.status(200).json({
            success: true,
            message: "SubSection updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: "Subsection Updation Failed"
        });
    }
}


exports.deleteSubSection = async(req,res)=>{

    try{
        // fetch subsection id
        const{subSectionId} = req.body;
        // delete entry in DB
        const deletedEntry = await SubSection.findByIdAndDelete({_id:subSectionId});
        // return response
        res.status(200).json({
            success:true,
            message:"Subsection deleted successfully",
            response:deletedEntry
        });
    } catch(error){
                return res.status(500).json({
                    success:false,
                    message:"Falied to delete course"
                });
    }

}