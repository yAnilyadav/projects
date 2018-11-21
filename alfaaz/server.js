const express=require('express')
const server=express();

const path=require('path')
server.use(express.json())
const serverPort=process.env.PORT || 2222
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname,'public')))

server.use('/api',require('./routes/api').route)
server.listen(serverPort,()=>{console.log("server started on 2222")});