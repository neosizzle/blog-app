//db init file
  
const mongoose = require('mongoose')

//connect to db with db url
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser : true,
    useCreateIndex : true,
    userFindAndModify : false
})
.then((data)=>{
    console.log("Connection to mongodb successful")
})
.catch((e)=>{
    console.log(e)
})



