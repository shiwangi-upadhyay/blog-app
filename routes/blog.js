const express = require("express");
const router = express.Router();

const {createComment, deleteComment} = require("../controllers/CommentController");
const {createPost, getAllPosts, deletePost} = require("../controllers/PostController");
const{likePost, unlikePost} = require("../controllers/LikeController")


router.post("/comments/create", createComment);
router.post("/comments/delete", deleteComment)
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.delete("/posts/delete/:id", deletePost)
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;