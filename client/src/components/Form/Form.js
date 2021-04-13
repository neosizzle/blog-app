import { Typography, TextField, Paper, Button} from "@material-ui/core";
import { useState } from 'react'
import FileBase from 'react-file-base64'

import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

import useStyles from './styles'

const Form = () => {

    const classes = useStyles()//apply styling 

    const dispatch = useDispatch();

    //post data state
    const [postData, setPostData] = useState({
        creator : "",
        title : "",
        message : "",
        tags : "",
        selectedFile : ""
    })

    //dispatch action
    const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(createPost(postData))
      };
    
    return ( 
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a new blog</Typography>

            <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator"
            value = {postData.creator}
            onChange = {(event)=>{
                    setPostData({...postData , creator : event.target.value})
            }} 
            fullWidth />

            <TextField 
            name="title" 
            variant="outlined" 
            label="Title"
            value = {postData.title}
            onChange = {(event)=>{
                    setPostData({...postData , title : event.target.value})
            }} 
            fullWidth />

            <TextField 
            name="message" 
            variant="outlined" 
            label="Message"
            value = {postData.message}
            onChange = {(event)=>{
                    setPostData({...postData , message : event.target.value})
            }} 
            fullWidth />

            <TextField 
            name="tags" 
            variant="outlined" 
            label="Tags"
            value = {postData.tags}
            onChange = {(event)=>{
                    setPostData({...postData , tags : event.target.value})
            }} 
            fullWidth
            multiline rows={4} />




        


          <div className={classes.fileInput}>
              <FileBase
              type = "file"
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
              >

              </FileBase>
          </div>
          
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </form>
      </Paper>
     );
}
 
export default Form;