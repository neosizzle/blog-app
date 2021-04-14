import { Typography , Card, CardActions, CardContent , CardMedia, Button } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


import { useDispatch , useSelector } from 'react-redux'
import { deletePost , likePost} from '../../../actions/posts'

import useStyles from './styles'

const Post = ({post , setCurrentId}) => {

    const classes = useStyles()//apply styling 
    
    const dispatch = useDispatch();//initialize redux to send actions

    const deletePostFunc = ()=>{
        dispatch(deletePost(post._id))
    }

    const likePostFunc = ()=>{
        dispatch(likePost(post._id))
    }

    return ( 
        <Card className={classes.card}>
            <CardMedia title = {post.title} image={post.selectedFile} className={classes.media}></CardMedia>
            <div className = {classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick = {()=>{ setCurrentId(post._id) }}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
            <Typography gutterBottom variant="body1" component="h2">{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=> likePostFunc()}><ThumbUpAltIcon fontSize="small"/> Like {post.likeCount} </Button>
                <Button size="small" color="primary"  onClick={()=> deletePostFunc()} ><DeleteIcon fontSize="small"/> Delete</Button>
            </CardActions>
        </Card>
     );
}
 
export default Post;