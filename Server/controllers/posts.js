import PostMessage from '../models/postMessage.js';
import postMessage from '../models/postMessage.js'

export const getPost = async (req, res) => {
    try {
        // gert all the data from database 
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessage);        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new PostMessage(post);
    
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}