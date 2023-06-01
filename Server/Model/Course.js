const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        required: true
    },
    section: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Section"
        }
    ],
    whatYouWillLearn: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    tag: 
        {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Tags"
        },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }
    ],
    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"RatingAndReview"
        }
    ],

    instructor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        }
    ],
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Section"
        }
    ]

});

module.exports = mongoose.model("Course",courseSchema);