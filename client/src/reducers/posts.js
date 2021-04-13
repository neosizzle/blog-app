export default (posts = [],action)=>{ //reducers are functions that help process data called by apis
    switch (action.type) {
        case 'FETCH_ALL':

            return action.payload;

        case 'CREATE':
        
            return [...posts , action.payload];

         
    
        default:
            return posts;
          
    }
}
