const socket=io();
socket.on('msg',()=>{
    console.log("welcome to game-room")
})
socket.on("new-user",(data)=>{
    console.log("hello")
console.log(data.msg)
})

$(function(){
    roomselectdiv=$('.roomselect')
    messagediv=$('.messages')
    roomselectsubmitbtn=$('#roomselectsubmit')
   roomname=$('#roomname')
    message=$('#message')
    send=$('#send')
    msglist=$('#msglist')
   // socket.on('connected',console.log("connected"))
   messagediv.hide()
   
   roomselectsubmitbtn.click(function(){
       let room=roomname.val()
       
   console.log("lets see"+room)
       roomselectdiv.hide()
       messagediv.show()
      console.log("my room is"+room)
       socket.emit('join',room)
   })
   
   send.click(function(){
       console.log("checking name"+ roomname.val())
    socket.emit('msg',{msg:message.val(),room:roomname.val()})
   })
   
   socket.on('message',(data)=>{
  msglist.append("<li>"+data.msg+"</li>")
   })
})