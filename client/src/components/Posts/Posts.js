import { Container, Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post'
import { useSelector } from "react-redux" // access global store states

import useStyles from './styles'

const Posts = ({setCurrentId}) => {

    const posts = useSelector(state => state.posts)
    const classes = useStyles()//apply styling 

    return (
        //conditional rendering to render spinner if no posts
        !posts.length? <CircularProgress></CircularProgress> : (
            <Grid className={classes.mainContainer} container alignItems = "stretch" spacing = {3}>

                {
                    posts.map((post)=>{
                        console.log("map reached")
                        return <Grid item key={post._id} xs={12} sm={6}>

                        <Post post = {post} setCurrentId = {setCurrentId}>

                        </Post>

                        </Grid>
                    })
                }

            </Grid>
        )


        
     );
}
 
export default Posts;