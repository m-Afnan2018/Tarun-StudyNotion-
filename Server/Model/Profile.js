const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({

    gender:{
        type:String,
        
    },
    dob:{
        type:String,
    },
    about:{
        type:String,
        trim:true
    },
    phone:{
        type:Number,
    }

});

module.exports = mongoose.model("Profile",profileSchema);