import * as actions from '../constants/actionTypes'

export default (posts = [],action)=>{ //reducers are functions that help process data called by apis and returns the new state
//posts[] is the default state that is accisible globally by the store

//the following methods are just changing the global state according to its needs
    switch (action.type) {
        case actions.FETCH_ALL:

            return action.payload

        case actions.CREATE:
        
            return [...posts , action.payload];

        case actions.PATCH:

            return  posts.map((post) => (post._id === action.payload._id ? action.payload : post));//find the outdated post and replaces it with the new post;
        
        case actions.DELETE:

            return posts.filter((post)=> post._id !== action.payload._id)//returns posts array without the deleted post

    
        default:
            return posts;
          
    }
}
