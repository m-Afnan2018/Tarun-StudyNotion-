const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const cloudinaryConnect = ()=>{

  try {
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.CLOUD_SECRET
        });
        
  } catch(error){
        console.log("Connection to cloudinary Failed ",error)
  }

}

module.exports = cloudinaryConnect;