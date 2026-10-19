import express from 'express'
import { upload } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPosts } from '../../controllers/postController.js';

const router = express.Router();

router.post('/', upload.single('image'), createPost)

router.get('/', getAllPosts)

router.delete('/:id', deletePost)

export default router;