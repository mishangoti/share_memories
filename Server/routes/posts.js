import express from 'express';
import { getPost, createPost } from '../controllers/posts.js';

const router = express.Router();

// http://localhost:5000/posts
router.get('/', getPost);
router.post('/', createPost);

export default router;