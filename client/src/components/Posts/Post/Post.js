import { Typography } from "@material-ui/core";

import useStyles from './styles'

const Post = () => {

    const classes = useStyles()//apply styling 

    return ( 
        <Typography variant = "h3">
            POST
        </Typography> 
     );
}
 
export default Post;