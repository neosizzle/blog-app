const Post = require("../models/Post")

const getPosts = async (req,res)=>{

    try{
        const posts = await Post.find()
        res.status(200).json(posts)
    }
    catch(error){
        res.status(404).json({message : error.message});
    }

    
}

const createPost = async (req,res) =>{

    try {
        const newPost = new Post(req.body);
        await newPost.save();

        res.status(201).json(newPost)
        
    } catch (error) {
        
        res.status(409).json({message : error.message})

    }

}

module.exports = {
    getPosts,
    createPost
}