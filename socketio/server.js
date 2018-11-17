const express=require('express')
const path=require('path')
const app=express();
const socketio=require('socket.io')
app.use('/',express.static(path.join(__dirname,"frontend")))
const http=require('http')
const server=http.createServer(app)

const io=socketio(server)





server.listen(2345,()=>console.log("server started"))