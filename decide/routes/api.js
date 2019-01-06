const route=require('express').Router()
const db=require('../db')
route.get('/gettodos',function(req,res){
    db.getTodos()
    .then((todos)=>{
        res.send(todos)
    })
    .catch((err)=>{res.send({error:err})})
})


route.post('/addtodo',function(req,res){
    
    db.addtodos(req.body.task)
    .then(()=>{res.redirect('/api/gettodos')})
    .catch((err)=>{res.send({error:err})})
})



route.get('/deletetodo/:task',function(req,res){
    console.log("del")
    console.log(req.params.task)
      db.deletetodo(req.params.task)
      .then(()=>{
          res.redirect('/')
      })
      .catch((err)=>{
           res.send({error:err})
      })
})

module.exports=route;














module.exports=route;