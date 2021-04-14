import * as api from '../api'
import * as actions from '../constants/actionTypes'

//actions are fired from the front end and are managed by redux
//use api module to create actions for redux
export const getPosts = ()=> async(dispatch)=>{

    try{
        const {data} = await api.fetchPosts()
        

        const action = {
            type : actions.FETCH_ALL,
            payload : data
        }

        
    dispatch(action)//redux thunk for async operations
    
    }
    catch(e){
        console.log(e.message)
    }


}


export const createPost = (post)=> async(dispatch)=>{

    try{
        const {data} = await api.createPost(post)
        

        const action = {
            type : actions.CREATE,
            payload : data
        }

        
    dispatch(action)//redux thunk for async operations
    
    }
    catch(e){
        console.log(e.message)
    }


}


export const updatePost = (id, post)=> async(dispatch)=>{

    try{

        const {data} = await api.updatePost(id, post)
        

        const action = {
            type : actions.PATCH,
            payload : data
        }

        
    dispatch(action)//redux thunk for async operations
    
    }
    catch(e){
        console.log(e.message)
    }


}

export const deletePost = (id)=> async(dispatch)=>{

    try{

        const {data} = await api.deletePost(id)
        

        const action = {
            type : actions.DELETE,
            payload : data
        }

        
    dispatch(action)//redux thunk for async operations
    
    }
    catch(e){
        console.log(e)
    }


}

export const likePost = (id)=> async(dispatch)=>{

    try{

        const {data} = await api.likePost(id)
        

        const action = {
            type : actions.PATCH,
            payload : data
        }

        
    dispatch(action)//redux thunk for async operations
    
    }
    catch(e){
        console.log(e.message)
    }


}