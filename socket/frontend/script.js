let socket=io();
socket.on('connected',()=>{
    console.log("connected finally "+socket.id)
})


$(function () {
    let msglist=$('#msglist')
    let sendbtn=$('#sendmsg')
    let msgbox=$('#msgbox')
    let loginbox=$('#loginbox')
    let loginDiv=$('#login-div')
    let loginBtn=$('#login-btn')
    let chatDiv=$('#chat-div')
    let user="";



    sendbtn.click(function () {
        socket.emit('send_msg',{ user:user,message:msgbox.val()})

    })


    loginBtn.click(function () {

        user=loginbox.val()
        chatDiv.show()
        loginDiv.hide()
        socket.emit('login',{
            user:user
        })
    })



    socket.on('recv_msg',function (data) {

        msglist.append('<li>'+data.user + ':' + data.message+'</li>')
    })


})