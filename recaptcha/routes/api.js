const route=require('express').Router()
const db=require('../db')


route.post('/checkuser',(req,res)=>{
  console.log("api")
    db.checkuser(req.body.name,req.body.email,req.body.password,req.body.ip)
    .then((count)=>{
       //console.log(count)
       console.log("back to api")
       console.log("count is"+count)
       if(count==0){
         console.log("user not present")
         res.send({data:'0'})
       }
       else if(count>0 && count<3)
       {console.log("valid user")
      // res.redirect('/api/increaseEntry')
         res.send({data:'1'})
       }
       else if(count>3){
         console.log("limit exceeded")
         res.send({data:'3'})
       }
      
    })
    .catch((err)=>{
       console.log(err)
       console.log("back to api in error")
       res.send({error:err})
    })

})

route.post('/adduser',(req,res)=>{
db.adduser(req.body.name,req.body.email,req.body.password,req.body.ip)
.then(()=>{
res.send({data:'1'})
})
.catch((err)=>{
res.send({data:'0'})
})
})


route.post('/increaseEntry',(req,res)=>{
db.increaseEntry(req.body.name,req.body.email,req.body.password,req.body.ip)
.then(()=>{
res.send({data:'1'})
})
.catch((err)=>{
res.send({error:err})
})
})

route.post('/recap',(req,res)=>{
  if(req.body.captcha===undefined ||
    req.body.captcha==='' ||
    req.body.captcha===null){
      return res.json({"success":false})
    }
})


module.exports=route;