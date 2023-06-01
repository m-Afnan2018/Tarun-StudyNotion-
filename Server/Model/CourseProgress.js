const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({

    ID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true
    },
    completedVideos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection",
            required:true
        }
    ]

});

module.exports = mongoose.model("CourseProgress",progressSchema);