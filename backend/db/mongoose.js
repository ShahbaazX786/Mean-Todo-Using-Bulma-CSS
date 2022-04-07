const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskMaster', { useNewUrlParser:true }).then(()=>{
    console.log("Connection to mongoDB Successful!");
}).catch((e)=>{
    console.log("Error occured while connecting to MongoDB:"+e);
});

module.exports=mongoose;