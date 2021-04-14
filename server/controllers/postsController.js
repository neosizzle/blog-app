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
        console.log(error.name)
        if(error.name == 'ValidationError'){
            return res.status(400).json({message : "Bad input"})
        }
        res.status(409).json({message : error.message})

    }

}

const updatePost = async(req,res) =>{
    const {id} = req.params
    const completedPost = {
        _id : id,
        ...req.body
    }
    try {

        const updatedPost = await Post.findByIdAndUpdate(id,completedPost, {new : true})

        if(!updatedPost){
            res.status(404).json({message : "Post not found"})
        }

        res.status(200).json(updatedPost)
    } catch (e) {

        res.status(500).json({message : e.message})        
    }
}

const deletePost = async(req,res) =>{
    const {id} = req.params

    try {

        const deletedPost = await Post.findByIdAndDelete(id)

        if(!deletedPost){
            res.status(404).json({message : "Post not found"})
        }

        res.status(200).json(deletedPost)
    } catch (e) {

        res.status(500).json({message : e.message})        
    }
} 

const likePost = async(req, res, next)=>{
    try {
        const { id } = req.params

        if(!id){
            res.status(404).json({message : "Post not found"})
        }

        const post = await Post.findById(id);
        const updatedPost = await Post.findByIdAndUpdate(id , { likeCount : post.likeCount + 1} , { new : true })

        res.status(200).json(updatedPost)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
}