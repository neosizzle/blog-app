//post routes file

const express = require('express')
const {getPosts , createPost, updatePost, deletePost, likePost} = require('../controllers/postsController')

const router = express.Router();


router.get('/' , getPosts)
router.post('/create' , createPost)
router.patch('/:id' , updatePost)
router.delete('/:id' , deletePost)
router.patch('/:id/likePost' , likePost)

module.exports = router;