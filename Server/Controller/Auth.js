const User = require('../Model/User');
const Otp = require('../Model/Otp');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcryptjs');
const Profile = require('../Model/Profile');
const jwt = require('jsonwebtoken');
const sendMail = require('../Config/mailSender');
require('dotenv').config();

// Send Otp 

exports.sendOtp = async (req, res) => {

    try {

        // Fetching email from body

        const { email } = req.body;

        // Checking if user is already present 
        const userPresent = await User.findOne({ email });

        if (userPresent) {
            return res.status(401).json({
                success: false,
                message: "Email Id Already Exists... "
            });
        }
        // Generating Otp
        const createdOtp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });

        // Checking if the otp generated Is unique , if not making it unique
        let uniqueOtp = await Otp.findOne({ otp: createdOtp });

        while (uniqueOtp) {

            createdOtp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });

            // uniqueOtp = await Otp.findOne({ otp: createdOtp });

        }
        console.log(createdOtp);
        // Storing into Db
        const addedOtp = await Otp.create({ email, otp: createdOtp });

        return res.status(200).json({
            success: true,
            message: "Otp Created Successfully",
            otp: addedOtp
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to send Otp",
            error: error
        })
    }

}


exports.Signup = async (req, res) => {

    try {

        // Fetching user details from the server

        const {
            firstName, lastName, email, password,
            confirmPassword, accountType, otp, contactNumber } = req.body;

        // Validating Data

        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(402).json({
                success: false,
                message: "Please fill all the required Fields"
            });
        }

        // Checking if any user exist with this email

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email id already in use  , please use a different One"
            });
        }

        // Taking  the recent otp for specific email and comparing it with otp from client side

        const recentOtp = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log("Recent Otp", recentOtp[0].otp);
        if (recentOtp.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Otp Not Found"
            });
        }

        else if (otp !== recentOtp[0].otp) {
            return res.status(402).json({
                success: false,
                message: "Invalid Otp"
            });
        }

        // Hashing the password

        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating Profile so than we can store ref of it in additional details

        const addedProfile = await Profile.create({
            gender: null,
            dob: null,
            about: null,
            phone: null
        })

        // add Entry In Db 

        const addedUser = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password: hashedPassword,
            accountType,
            additionalDetails: addedProfile._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        });

        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            addedUser
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "User registration failed"
        });
    }

}

exports.Login = async (req, res) => {
    try {
        // Fetch id and password from req body
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the required Field"
            });
        }

        // Checking if the user is registered up or not 
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(402).json({
                success: false,
                message: "User Not Registered , please Signup First"
            });
        }

        // Comparing Password and creating JWT Token
        if (!bcrypt.compare(password, user.password)) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Password"
            });
        }

        else {
            const payload = {
                email: user.email,
                id: user._id,
                accountType: user.accountType
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '2h'
            });
            // Adding token into user fetched from db
            user.token = token;
            user.password = undefined; 

            const options = {
                expiresIn: new Date(Date.now() + 2 * 24 * 60 * 1000)
            }
            // Sending Cookie
            res.cookie("token", token, options);


            return res.status(200).json({
                success: true,
                message: "Login Success",
                user
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,

            message: "Something went wrong , please try again"
        })
    }
}

// Change Password Hw 
exports.changePassword = async (req, res) => {
    try {
        // Get user Data from req.user
        const userDetails = User.findOne({ id_: req.user.id })
        // Get old password new and confirm password
        const { oldPassword, newPassword, confirmPassword } = req.body;
        // validate old password
        const validatePassword = await bcrypt.compare(
            oldPassword,
            userDetails.password
        );
            // if passwords donot match return bad req 400
            if(!validatePassword){
                return res.status(400).json({
                    success: false,
                    message: "Password donot match with used password"
                });
            }
            // match new and confirm password
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password donot match"
            });
        }
        // Update password in the db 
        // hash the new password
        const newHashedPassword = bcrypt.hash(newPassword, 10);
        const updatedUser = await User.findOneAndUpdate({
            _id: req.user.id,
            password: newHashedPassword
        }, { new: true });
        // Send Email of notification
        try {
            const emailResponse = await sendMail(
                userDetails.email,
                "Pasword reset Successful",
                `<h3>Password updated successfully for ${updatedUser.firstName} ${updatedUser.lastName}</h3>`
            );
            console.log("email sent successfully", emailResponse);
        }
        // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error

        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to send Email for password change"
            })
        }

        // Return success response
        return res.status(200).json({
            success: true,
            message: "Password changed successfully",

        })
        // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error


    } catch (error) {
        console.error("Error occurred while updating password:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to change password"
        })
    }
}