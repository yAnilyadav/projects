const route=require('express').Router()
const db=require('../db')
const newuser=db.newuser
const checkuser=db.checkuser
route.post('/add',function(req,res){
    
newuser(req.body.name,req.body.email,req.body.password)
.then(function(data){
    console.log(data+"is")
    res.send(true)
})
.catch(function(err){
    res.send({error:"error"})
})
})

route.post('/check',function(req,res){
    checkuser(req.body.name,req.body.email,req.body.password)
    .then(function(data){
   res.send(true)
    })
    .catch(function(err){
    res.send({error:"no such user"})
    })
})
module.exports={route};