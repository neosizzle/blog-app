import { Typography, TextField, Paper, Button} from "@material-ui/core";
import { useState , useEffect } from 'react'
import FileBase from 'react-file-base64'

import { useDispatch , useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

import useStyles from './styles'

const Form = ({currentId , setCurrentId}) => {

    const classes = useStyles()//apply styling 
    const post = useSelector(state => currentId ? state.posts.find((p)=>p._id === currentId): null)//get post if currentid is not null
    
    //useSelector is a hook that helps us to retrive states from the store instead of passing them from parent to children
    //state paramter is the entire global redux store

    const dispatch = useDispatch();


    //post data state
    const [postData, setPostData] = useState({
        creator : "",
        title : "",
        message : "",
        tags : "",
        selectedFile : ""
    })

    //everytime the post changes, populate form 
    useEffect(() => {

        if(post) setPostData(post)
                
        }, [currentId])

    //dispatch action on submit
    const handleSubmit = (e) => {
        e.preventDefault();


        if(currentId){
          dispatch(updatePost(currentId , postData))
                
        }else{
          dispatch(createPost(postData))
        }

            clear()
      };

    //clear function to clear form data
    const clear = ()=>{

        setPostData({
          creator : "",
          title : "",
          message : "",
          tags : "",
          selectedFile : ""
      })

      setCurrentId(null)
    }
    
    return ( 
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{ currentId ? 'Editing' :'Creating'} a blog</Typography>

            <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator"
            value = {postData.creator}
            onChange = {(event)=>{
                    setPostData({...postData , creator : event.target.value})
            }} 
            required = {true}
            fullWidth />

            <TextField 
            name="title" 
            variant="outlined" 
            label="Title"
            value = {postData.title}
            onChange = {(event)=>{
                    setPostData({...postData , title : event.target.value})
            }} 
            required = {true}
            fullWidth />

            <TextField 
            name="message" 
            variant="outlined" 
            label="Message"
            value = {postData.message}
            onChange = {(event)=>{
                    setPostData({...postData , message : event.target.value})
            }}
            required = {true}
            fullWidth />

            <TextField 
            name="tags" 
            variant="outlined" 
            label="Tags"
            value = {postData.tags}
            onChange = {(event)=>{
                    setPostData({...postData , tags : event.target.value.split(',')})
            }} 
            fullWidth
            multiline rows={4} />




        


          <div className={classes.fileInput}>
              <FileBase
              type = "file"
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
              required = {true}
              >

              </FileBase>
          </div>
          
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick = {()=> clear()} fullWidth>Clear</Button>
        </form>
      </Paper>
     );
}
 
export default Form;