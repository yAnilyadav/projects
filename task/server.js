const express=require('express')
const server=express();

const path=require('path')

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname,'public')))

server.use('/api',require('./routes/api').route)
server.listen(2222,()=>{console.log("server started on localhost:2222")})