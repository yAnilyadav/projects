$(function(){
    let sb=$('#sb')
    let rb=$('#rb')
    let signinbox=$('#signin')
    let registerbox=$('#register')
    let signedinbox=$('#signedin')
let register_name=$('#Rname')
let register_email=$('#Remail')
let register_password=$('#Rpassword')
let signin_name=$('#Sname')
let signin_email=$('#Semail')
let signin_password=$('#Spassword')
let submit_register=$('#Rsubmit')
let submit_signin=$('#Ssubmit')


registerbox.hide();
signinbox.hide();
signedinbox.hide();

sb.click(function(){
    
    
    registerbox.hide()
    signinbox.show()

})
rb.click(function(){
    signinbox.hide()
    registerbox.show()
    
})
submit_register.click(function(){
    sb.hide();
    rb.hide();
    let Rname=register_name.val()
    let Remail=register_email.val()
    let Rpassword=register_password.val()
$.post('/api/add',{name:Rname,email:Remail,password:Rpassword},function(data){
    if (data==1){
        signedinbox.show();
        signinbox.hide();
        registerbox.hide();
        
    }
    else{

    }    
})
})

submit_signin.click(function(){
    let Sname=signin_name.val()
    let Semail=signin_email.val()
    let Spassword=signin_password.val()
    sb.hide();
    rb.hide();
    
    $.post('/api/check',{name:Sname,email:Semail,password:Spassword},function(data){
        console.log(data)
        if(data==1){
            signedinbox.show();
            signinbox.hide();
            registerbox.hide();
        }
        }
    )
})

})