import { createPostService, deletePostService, getAllPostsService } from "../services/postService.js";

export const createPost = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const post = await createPostService({
      caption: req.body.caption,
      isPublic: req.body.isPublic,
      file: req.file,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully!",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Something went wrong.",
    });
  }
};

export const getAllPosts = async (req,res) => {
  try {
  
    const offSet = req.query.offset || 0
    const limit = req.query.limit || 10

    const paginatedPosts = await getAllPostsService(offSet, limit);

    return res.status(200).json({
      success: true,
      message: "All Posts fetched successfully!",
      data: paginatedPosts,
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Something went wrong.",
    });
  }
}
export const deletePost = async (req,res) => {
  try {
  
    const postId = req.params.id

    const response = await deletePostService(postId);

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully!",
      data: response,
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Something went wrong.",
    });
  }
}
