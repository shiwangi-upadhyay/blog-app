const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    try{
            const {title, body} = req.body;
            const post = new Post({
                title,body,
            });
            const savedPost = await post.save();

            res.json({
                post:savedPost,
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};

//need some more testing after completing like wala controleer
exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}

exports.deletePost  = async(req,res) =>{
    try {
        const {id} = req.params;

        await Post.findByIdAndDelete(id);



        res.status(200).json({
            success: true,
            message:"Deleted Successfully",
        })

    } catch (error) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}