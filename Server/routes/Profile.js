const express = require("express")
const router = express.Router()
const { auth } = require("../middleware/auth")
const { deleteProfile, updateProfile, getUserDetails } = require("../Controller/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", deleteProfile)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getUserDetails)
// Get Enrolled Courses
// router.get("/getEnrolledCourses", auth, get)
// router.put("/updateDisplayPicture", auth, updateDisplayPicture)

module.exports = router