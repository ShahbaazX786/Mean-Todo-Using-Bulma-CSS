const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');

//loading middleware
app.use(bodyParser.json());

//importing models

const List=require('./db/models/listmodel');
const Task=require('./db/models/taskmodel');

app.get('/lists',(req,res)=>{
    List.find({}).then((lists)=>{
        res.send(lists);
    });
})

app.post('/lists',(req,res)=>{
    let title=req.body.title;
    let newList=new List({title});
    newList.save().then((listDoc)=>{
        res.send(listDoc);
    })
});

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
})