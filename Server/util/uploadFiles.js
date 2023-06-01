
const cloudinary = require('cloudinary').v2;


const uploadFileToCloudinary = async (file, folder, quality, height) => {   

    try {
        const options = {
            folder
        }

        if (quality) {
            options.quality = quality;
        }
        if (height) {
            options.height = height;
        }

        return await cloudinary.uploader.upload(file, options);

    } catch (error) {
        console.log("Error in uploading file to cloudinary ", error);
    }

}

module.exports = uploadFileToCloudinary;