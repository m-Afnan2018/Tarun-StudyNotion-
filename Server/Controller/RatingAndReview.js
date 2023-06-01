const User = require("../Model/User");
const RatingAndReview = require("../Model/RatingAndReview");
const Course = require("../Model/Course");
const { default: mongoose } = require("mongoose");

exports.createRating = async (req, res) => {
    try {
        // fetch data
        const { rating, review, courseId } = req.body;
        // fetch userId
        const { Id } = req.body;
        // check if user is enrolled in the course or not
        const courseDetails = await User.findOne({ _id: Id }, { studentsEnrolled: { $eleMatch: { $eq: Id } } });

        if (!courseDetails) {
            return res.status(403).json({
                success: false,
                message: "Student not enrolled"
            })
        };
        // check if user has already reviewed the course or not
        const alreadyReviewed = await RatingAndReview.findOne({ user: Id ,course:courseId});

        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: "Already reviewed"
            });
        }
        // create Rating entryu in DB
        const createdRating = await RatingAndReview.create({ rating, review, Id,courseId });
        // update Id of review in course
        const updatedCourse = await Course.findByIdAndUpdate({ _id: Id }, {
            $push: {
                ratingAndReviews: createdRating._id
            }
        }, { new: true });
        // return response
        return res.status(200).json({
            success: true,
            message: "Review Added Succcessfully",
            response: createdRating
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to submit rating"
        });

    }
}


exports.getAllRating = async (req, res) => {
    try {
        //   No need to fetch Data
        // Make a db call , check the path values once
        const allRatings = await RatingAndReview.find({})
            .populate({
                path: "User",
                select: "firstName lastName"
            })
            .populate({
                path: "Course",
                select: "title"
            });

        // return response
        return res.status(200).json({
            success: true,
            message: "Ratings fetched successfully",
            response: allRatings
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "unable to fetch all ratings "
        })
    }
}


// get average rating 
exports.getAvgRating = async (req, res) => {
    try {
        // fetch courseId
        const { courseId } = req.body;
        // get average rating
        const avgRating = await RatingAndReview.aggregate({
            $match: {
                course: new mongoose.Schema.Types.ObjectId(courseId)
            },
            $group: {
                _id: null,
                avgRating: { $avg: "$rating" }
            }
        });
        // check weather there is any rating given to the course or not
        if (avgRating.length > 0) {
            return res.status(200).json({
                success: true,
                rating: avgRating,
                message: "Average rating fetched successfully"
            });
        }
        // if no rating fonund then return avg rating 0
        else {
            return res.status(200).json({
                success: true,
                rating: 0,
                message: "No ratings Given , average rating is 0"
                
            })
        }

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Unable to get average rating"
        });
    }
}