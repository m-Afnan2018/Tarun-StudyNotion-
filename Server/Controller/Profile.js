const User = require('../Model/User')
const Profile = require('../Model/Profile')


exports.updateProfile = async (req, res) => {
    try {
        //  fetch data from req body
        const { gender, dob="", about="", phone } = req.body;
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
       
        const {id} = req.user;
        // validation
        const userDetails = await User.findById({_id:id});
        // remove entry freom db
        const deletedProfile = await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });
        const deletedUser  = await User.findByIdAndDelete({_id:id})
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
        if(!userDetails){
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