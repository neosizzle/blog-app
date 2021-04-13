import { Container } from '@material-ui/core';
import Post from './Post/Post'
import { useSelector } from "react-redux" // access global store states

import useStyles from './styles'

const Posts = () => {

    const posts = useSelector(state => state.posts)
    const classes = useStyles()//apply styling 

    return ( 
        <Container>
            <Post>

            </Post>
        </Container>
        
     );
}
 
export default Posts;