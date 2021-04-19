//to handle front end side of api calls
import axios from 'axios';

const url = "https://memories-clone-app.herokuapp.com/posts"

export const fetchPosts = ()=>{
     return axios.get(url)
}

export const createPost = (newPost)=>{
    return axios.post(`${url}/create`, newPost)
}

export const updatePost = (id, updatedPost)=>{
    return axios.patch(`${url}/${id}`, updatedPost)
}

export const deletePost = (id)=>{
    return axios.delete(`${url}/${id}`)
}

export const likePost = (id)=>{
    return axios.patch(`${url}/${id}/likePost`)
}


