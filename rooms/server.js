const express=require('express')
const app=express()
const server=app.listen(2222)
const path=require('path')
app.use(express.static(path.join(__dirname,'/public')))
const socketio=require('socket.io')
const io=socketio(server)
/*io.on("connection",(socket)=>{
socket.emit("connected")
})*/

io.on("connection",(socket)=>{
    console.log("joining")
    socket.on('join',(room)=>{
        socket.join(room)
        console.log("joined"+ room)
    })
    
    //socket.emit("msg")
  //  io.to(roomname).emit('new-user',{msg:"new user connected"})

    socket.on('msg',(data)=>{
        console.log("server "+data.room)
       io.to(data.room).emit('message',data)
    })
})



