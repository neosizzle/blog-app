//server related code

//requiring dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
require('../db/mongoose')//run db init

//get routers
const postsRoutes = require("../routes/posts")

app.set('port', process.env.PORT || 3000) 

app.use(bodyParser.json({limit : '30mb' , extended : 'true'}))//bodyparser for parsing json reqs and responses. good lib
app.use(bodyParser.urlencoded({limit : '30mb' , extended : 'true'}))//bodyparser for parsing json reqs and responses. good lib

app.use(cors());

app.use('/posts', postsRoutes)


app.get('/', (req, res, next) =>{
    res.send('<h1>Hello to memories!<h1>');
})

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})