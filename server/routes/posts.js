//post routes file

const express = require('express')
const {getPosts , createPost} = require('../controllers/postsController')

const router = express.Router();


router.get('/' , getPosts)
router.post('/create' , createPost)

module.exports = router;