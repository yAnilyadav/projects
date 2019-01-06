const express=require('express')
const server=express();
const path=require('path')
server.use(express.json())
server.use(express.urlencoded({extended:true}));
server.use('/',express.static(path.join(__dirname,'public')))

server.use('/api',require('./routes/api'))

server.listen(2222,()=>{console.log("started")})