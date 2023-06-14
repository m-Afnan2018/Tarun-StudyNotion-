const User = require('../Model/User')
const Profile = require('../Model/Profile');
const sendMail = require('../Config/mailSender');
const { feedbackMail } = require('../mail/feedbackMail');
const { feedbackConformation } = require('../mail/templates/feedbackConfirmation');
const uploadFileToCloudinary = require('../util/uploadFiles');

exports.updateProfile = async (req, res) => {
    try {
        //  fetch data from req body
        const { gender, dob = "", about = "", phone } = req.body;
        // validation
        if (!gender || !dob || !about || !phone) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory"
            });
        }
        // profile is already created so we will update the data instead of creating
        // get the id from user as we will be logged in during this 
        const userId = req.user.id;
        // fetch user details from user id
        const userDetails = await User.findById({ _id: userId });
        // then fetch profile details from profile id fetched from user
        const profileId = userDetails.additionalDetails;
        // update the profile data
        const updatedProfile = await Profile.findByIdAndUpdate({ _id: profileId }, {
            gender,
            dob,
            about,
            phone
        }, { new: true });
        // Try it with save method also
        // return response
        return res.status(200).json({
            success: true,
            message: "profile updated successfully",
            response: updatedProfile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update  Profile "
        });
    }
}

exports.deleteProfile = async (req, res) => {
    try {
        // fetch profile Id

        const { id } = req.user;
        // validation
        const userDetails = await User.findById({ _id: id });
        // remove entry freom db
        const deletedProfile = await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });
        const deletedUser = await User.findByIdAndDelete({ _id: id })
        // return response
        return res.status(200).json({
            success: true,
            mesage: "Profile removed successfully",
            response: deletedProfile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to remove profile"
        });
    }
}

// Check it once
exports.getUserDetails = async (req, res) => {
    try {
        // fetch data from req.body , we are fetching user details not profile details...
        const userId = req.user.id;
        const userDetails = await User.findById({ _id: userId }).populate("additionalDetails").exec();
        // validate user details
        if (!userDetails) {
            return res.status(400).json({
                success: false,
                message: "Invalid User"
            });
        }
        // get details from db and check if any populate method is pending in class code
        // return response
        return res.status(200).json({
            success: true,
            message: "user details fetched successfully",
            response: userDetails
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to fetch  details"
        });
    }
}


exports.sendFeedback = async (req, res) => {


    try {
        console.log("Called");
        // fetch form details from req.body
        const { firstName, lastName, phone, message, email } = req.body;
        // validate data
        // if (!firstName || !lastName || !email || !message || !phone) {
        //     return res.status(402).json({
        //         success: false,
        //         message: "Please Enter all the required fields"
        //     });
        // }
        // send mail 
        const response = await sendMail(email, "Your Data was submitted Successfully", feedbackMail(email, firstName, lastName, message, phone));
        // send a copy of this  mail to admin (studynotion1@gmail.com)
        const copyResponse = await sendMail(email, 'Copy of data Submission', feedbackConformation(email, firstName, lastName, message, phone));

        console.log(response);

        return res.status(200).json({
            success: true,
            message: "Email For Form response sent successfully",
            response: response
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            message: "failed to send email for form response",
            error: error
        });
    }

}

// Get Enrolled course function

exports.getEnrolledCourses = async (req, res) => {


    try {
        // get user id from req body  
        const userId = req.user.id
        // find user details including courses (By using populate method)
        const userDetails = await User.findById({ _id: userId }).populate("courses").exec();
        // check weather user is present or not 
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: `Unable to find details for user : ${userId}`
            })
        }
        // if user is present return response with  user courses as data

        return res.status(200).json({
            success: true,
            message: "User enrolled courses fetched successfully...",
            data: userDetails.courses
        })

    } catch (error) {
        console.log(error);
        return res.staus(500).json({
            success: false,
            message: `Unable  to fetch user  enrolled courses....`,
            error: error
        })
    }

}

exports.updateDisplayPicture = async (req, res) => {

    console.log('called inside updated display picture');

    try {
        // get image file from req body
        console.log("req.files........",req.files);
        const { newImage } = req.files;
        const userId = req.user.id;

        // validation
        if (!newImage) {
            return res.status(404).json({ 
                success: false,
                message: "Unable to find image , try to re upload it"
            });
        }
        // upload this image to cloudinary
        const uploadResponse = await uploadFileToCloudinary(newImage, "myFolder", 1000, 1000);
        console.log("File upload response........", uploadResponse);
        // get the secure url from the response 
        const updatedImage = uploadResponse.secure_url;
        // update the new  image url into db 
        const updatedUser = await User.findByIdAndUpdate({ _id: userId }, { image: updatedImage }, { new: true });
        // return image url as response
        return res.status(200).json({
            success: true,
            response: updatedImage
        })
    } catch (error) {
        console.log(error);
        return res.status(402).json({
            success: false,
            message: "Unable to change display picture...."
        })
    }

}