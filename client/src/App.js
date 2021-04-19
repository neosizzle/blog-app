import React, { useState, useEffect }from 'react';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import { getPosts }from './actions/posts'
import { useDispatch } from 'react-redux'


import logo from './images/logo.png'
import useStyles from './styles'

//custom theme start
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },});

  //custom theme end


const App = () => {

    const classes = useStyles()//apply styling 

    //dispatch action creation to fetch all blogs
    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null)

    //useeffect hook to get the posts and plug it into store
    useEffect(() => {

     dispatch(getPosts())

    }, [dispatch , currentId])


    return ( 

        <ThemeProvider theme = {theme}>
                    <Container maxidth = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
            <Typography className = {classes.heading} variant = "h2" align = "center">Blog App</Typography>
        <img className = {classes.image} src = {logo} alt = "logo" height = "60"></img>
            </AppBar>



            <Grow in>
                <Container>
                    <Grid container className = {classes.mainContainer} justify = "space-between" alignItems = "stretch" spacing = {3}>

                    <Grid item xs={12} sm = {7}>
                        <Posts setCurrentId = {setCurrentId} ></Posts>
                    </Grid>

                    <Grid item xs={12} sm = {4}>
                        <Form setCurrentId = {setCurrentId} currentId = {currentId}></Form>
                    </Grid>

                    </Grid>
                </Container>
            </Grow>
        </Container>

        </ThemeProvider>

     );
}
 
export default App;