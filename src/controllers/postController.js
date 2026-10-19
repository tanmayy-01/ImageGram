import { createPostService } from "../services/postService.js";

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
    //TODO: Implement logic
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Something went wrong.",
    });
  }
}
