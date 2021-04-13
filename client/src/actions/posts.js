import * as api from '../api'

//actions are fired from the front end and are managed by redux
//use api module to create actions for redux
export const getPosts = ()=> async(dispatch)=>{

    try{
        const {data} = await api.fetchPosts()
        

        const action = {
            type : 'FETCH_ALL',
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
            type : 'CREATE',
            payload : data
        }

        
    dispatch(action)//redux thunk for async operations
    
    }
    catch(e){
        console.log(e.message)
    }


}