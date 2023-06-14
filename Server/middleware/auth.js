
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Auth
exports.auth = (req, res, next) => {

    try {
        // fetching token from different methods (Getting error here while fetching token for enrolled courses)
        const  token  = req.cookies.token 
        || req.body.token 
        || req.header("Authorisation").replace("Bearer ", "");
        // storing the payload value in decode using verify method
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);
        req.user = decode;
        console.log(req.user.accountType);
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Invalid Token"
        })
    }
}

// Is Student
exports.isStudent = (req, res, next) => {

    try {
        const user = req.user;
        // Checking weather user type is student 
        if (user.accountType !== "Student") {

            return res.status(403).json({
                success: false,
                message: "This is a protected route for Students"
            })

        }

        else {
            next();
            return res.status(200).json({
                success: true,
                message: "welcome to Students Page"
            });

        }


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while authenticating"
        })
    }
}

// Is Admin

exports.isAdmin = (req, res, next) => {

    try {
        const user = req.user;
        // Checking weather user type is student 

        if (user.accountType !== "Admin") {

            return res.status(403).json({
                success: false,
                message: "This is a protected route for Admin"
            })

        }

        else {
            next();
            return res.status(200).json({
                success: true,
                message: "welcome to Admin Page",

            });
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while authenticating"
        })
    }
}



// Is Instructor

exports.isInstructor = (req, res, next) => {

    try {
        const user = req.user;
        // Checking weather user type is student 

        if (user.accountType !== "Instructor") {

            return res.status(403).json({
                success: false,
                message: "This is a protected route for Instructor"
            })

        }

        // else {
        //     next();
        //     return res.status(200).json({
        //         success: true,
        //         message: "welcome to Instructor Page",

        //     });
        // }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while authenticating"
        })
    }
}




