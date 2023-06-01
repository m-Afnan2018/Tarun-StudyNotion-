// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  Signup,
  sendOtp,
  changePassword,
  Login,
} = require("../Controller/Auth")
const {
  resetPasswordToken, 
  resetPassword,
} = require("../Controller/ResetPassword");
const  {auth}  = require("../middleware/auth");


// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", Login)

// Route for user signup
router.post("/signup", Signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendOtp)

// Route for Changing the password 
router.post("/changepassword" , changePassword)
 
// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router;