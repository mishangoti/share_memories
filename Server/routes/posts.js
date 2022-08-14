import express from 'express';
import { getPostsBySearch, getPost, getPosts, createPost, updatePost, deletePost, likePost, commentPost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

// http://localhost:5000/posts
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
// router.get('/:id', getPost)
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

export default router;