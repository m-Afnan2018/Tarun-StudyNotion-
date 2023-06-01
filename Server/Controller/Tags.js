const { default: mongoose } = require("mongoose");
const Tags = require("../Model/Tags");

exports.createTags = async (req, res) => {


    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "Please Fill All The fields"
            });
        } 

        const createdTag = await Tags.create({
            name: name,
            description: description
        });

       return res.status(200).json({
            success: true,
            response: createdTag,
            message: "Tag Created SuccessFully"
        })

    } catch (error) {
        console.log(error);
       return res.status(500).json({
            success: false,
            message: "Failed To add Tag",
            error: error
        })
    }

}

exports.getTags = async (req, res) => {

    try {

        const allTags = await Tags.find({}, { name: true, description: true });

        if (!allTags) {
            return res.status(400).json({
                success: false,
                message: "No Tags Found"
            });

        }

        return res.status(200).json({
            success: true,
            response: allTags,
            message: "Tags Fetched Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed To get Tags",
            error: error
        });
    }

}

exports.categoryPageDetails = async (req, res) => {
    try {
        // fetch category
        const { categoryId } = req.body;
        // get courses for specific category
        const sameCategoryCourse = await Tags.findById({ _id: categoryId })
                                                        .populate("course")
                                                        .exec();
        // validation
            if(!selectedCategory){
                return res.status(404).json({
                    success:false,
                    message:"no courses found"
                });
            }
        // get courses for different categories
        const diffCategory = await Tags.findById({ _id: { $ne: categoryId } })
                                                .populate("course")
                                                .exec();
        // get top selling courses
        const topSellingCourses = await Tags.aggregate({
            $match :{
                    _id:new mongoose.Schema.Types.ObjectId(categoryId)
            },
            $group:{
                id:categoryId,
            }
        })
        // return response  
        return res.status(200).json({
            success: true,
            sameCourses: sameCategoryCourse,
            differentCourse: diffCategory
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to find categories"
        });
    }
}


