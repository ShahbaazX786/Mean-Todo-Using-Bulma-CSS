const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const cors=require('cors');
//loading middleware
app.use(bodyParser.json());
app.use(cors());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, HEAD, OPTIONS, PUT");
    res.header("Access-Control-Allow-Headers","Origin, X-requested-With, Content-Type, Accept");
    next();
});

//importing models

const List=require('./db/models/listmodel');
const Task=require('./db/models/taskmodel');

//APIs for LISTS
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

app.patch('/lists/:id',(req,res)=>{
    List.findByIdAndUpdate({ _id: req.params.id },{$set:req.body}).then(()=>{
        res.sendStatus(200);
    });
});


app.delete('/lists/:id',(req,res)=>{
    List.findByIdAndRemove({ _id: req.params.id }).then((removedListDoc)=>{
        res.send(removedListDoc);
    });
});

//APIS for TASKS
app.get('/lists/:listid/tasks',(req,res)=>{
    Task.find({_listId:req.params.listid}).then((tasks)=>{
        res.send(tasks);
    });
})

app.post('/lists/:listid/tasks',(req,res)=>{
    let newTask=new Task({
        title:req.body.title,
        _listId:req.params.listid
    })
    newTask.save().then((taskDoc)=>{
        res.send(taskDoc);
    })
});

app.patch('/lists/:listid/tasks/:taskid',(req,res)=>{
    Task.findByIdAndUpdate({ _id: req.params.taskid,_listId:req.params.listid},{$set:req.body}).then(()=>{
        res.sendStatus({message:'Updated Successfully'});
    });
});


app.delete('/lists/:listid/tasks/:taskid',(req,res)=>{
    Task.findByIdAndRemove({ _id: req.params.taskid,_listId:req.params.listid }).then((removedTaskDoc)=>{
        res.send(removedTaskDoc);
    });
});


app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
})