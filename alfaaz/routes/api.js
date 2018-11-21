const route=require('express').Router()

const db=require('../db')


route.post('/register',(req,res)=>{
    console.log("inside api")
db.addUser(req.body.name,req.body.password)
.then(function(data){
    console.log("returning")
if(data==1){
    res.send(true)
}
})
.catch(function(err){
res.send(false)
})
})

route.post('/signin',(req,res)=>{
    console.log("checking")
db.checkUser(req.body.name,req.body.password)
.then(function(data){
   if(data==true){
  res.send(true)
   }
})
.catch(function(err){
res.send(false)
})
})

route.post('/addpoem',(req,res)=>{
    console.log("going to add poem")
    db.addPoem(req.body.name,req.body.work)
    .then(function(data){
       if(data==true){
       res.send(true)
       }
    })
    .catch(function(err){
     res.send(false)
    })
})

route.get('/getpoems',(req,res)=>{
    console.log("getting poems")
db.getPoems()
.then(function(data){
    console.log("got poems in api")
    res.send(data)
})
.catch(function(err){
    res.send(err)
})
})


module.exports={route}