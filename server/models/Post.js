//*********************************************************************************************************
//* Explanation : schema for Posts 
//* 
//*********************************************************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostsSchema  = new Schema({

    //your fields name goes here
    title:{
        type : String,
        required : true
    },

    message:{
        type : String,
        required : true
    },

    creator:{
        type : String,
        required : true
    },

    tags : [String],

    selectedFile:{
        type : String,
        required : true
    },

    likeCount:{
        type : Number,
        default : 0
    },

    is_deleted: {
        type: Boolean,
        default: false
    },
    created_on: {
        type: Date,
        default: new Date()
    },
    created_timestamp: {
        type: Number,
        default: new Date().valueOf()
    },
    updated_on: Date,
    updated_timestamp: {
        type: Number,
        default: new Date().valueOf()
    }
});

module.exports = mongoose.model('Posts', PostsSchema);