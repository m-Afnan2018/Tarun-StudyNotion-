const User = require('../Model/User');
const crypto = require('crypto');
const sendMail = require('../Config/mailSender');
const { response } = require('express');
const bcrypt = require('bcryptjs');

exports.resetPasswordToken = async (req, res) => {

    try {

        // fetch email from req body 
        const { email } = req.body;

        // Validate Email
        if (!email) {
            return res.status(401).json({
                success: false,
                message: "Please fill email Field Properly"
            })
        }

        // check if user registered or not
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "Email Id is not registered"
            });
        }
        // Create Token using crypto library
        const token = crypto.randomUUID();
        const tokenExpiresIn = new Date(Date.now() + 5 * 60 * 1000);
        // update the token and expiry time in user 
        const updatedUser = await User.findOneAndUpdate({ email },
            { token, resetPasswordToken: tokenExpiresIn }, { new: true });
        // create url and send mail containing that url
        const url = `http://localhost:3000/reset-password/${token}`;
        await sendMail(email, "Password Reset Link", `Here is your link to reset password:${url}`);
        // return response
        return res.status(200).json({
            success: true,
            message: "Mail for password reset Sent Successfully"
        });


    } catch (error) {
        console.log("error",error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while Sending Password reset link"
        });
    }
}


exports.resetPassword = async (req, res) => {

    try {
        

        // fetch password confirmpassword and token from req body
        const { password, confirmPassword, token } = req.body;
        // Validation
        if (!password || !confirmPassword || !token) {
            
            return res.status(401).json({
                success: false,
                message: "Please fill all the fields"
            });
        }
        // compare both password are equal or not , if not equal return response success failed
        if (password !== confirmPassword) {
            return res.status(403).json({
                success: false,
                message: "Passwords donot Match"
            });
        }
        // get user details from token
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(402).json({
                success: false,
                message: "Invalid Token"
            });
        }
        // Check if the token is valid or not

        if (user.resetPasswordToken < Date.now()) {
            return res.status(402).json({
                success: false,
                message: "Token Expired , Please Generate a new one"
            });
        }
        // if no details found return token expired 
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Update the password in db 
        const updatedPassword = await User.findOneAndUpdate(
            { token }, 
            { password: hashedPassword }, 
            { new: true });
            console.log(updatedPassword);
        // return response
        return res.status(200).json({
            success: true,
            message: "Password reset Successful",
        })


    } catch (error) {
        console.log("error" , error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while Updating the password"
        });
    }
}