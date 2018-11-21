$(function(){

   console.log("hello")


    let login_box=$('#login')
    let registerbox=$('#register')
    let signinbox=$('#signin')
    let register_link=$('#rlink')
    let signin_link=$('#slink')
    let mypoems=$('#mypoems')
    registerbox.hide()
    signinbox.hide()
    mypoems.hide()

    register_link.click(function(){
      registerbox.show()
      signinbox.hide()
    })
    signin_link.click(function(){
      signinbox.show()
      registerbox.hide()
    })

    let rname=$('#rname')
    let rpassword=$('#rpassword')
    let sname=$('#sname')
    let spassword=$('#spassword')
    let rsubmit=$('#rsubmit')
    let ssubmit=$('#ssubmit')
    let poemdiv=$('.poem')

    grabpoems=function(){
      
      $.get('/api/getpoems',function(poems){
        console.log("going to print poems")
            for(poem of poems){
              console.log("there you go")
              console.log(poem.Work)
             // poemdiv.empty()
              poemdiv.append("<h1>"+poem.Work+"</h1>" +"  BY "+"<h4>"+poem.Name+"</h4>")
            }
      })
    }
    rsubmit.click(function(){
      let name=rname.val()
      let password=rpassword.val()
      $.post('/api/register',{name:name,password:password},function(data){
        console.log("returned")
        if(data==true){
        mypoems.show()
        login_box.hide()
        registerbox.hide()
        signinbox.hide()
        grabpoems()
        }
      })
    })

    ssubmit.click(function(){
      console.log("check user")
      let name=sname.val()
      let password=spassword.val()
      $.post('/api/signin',{name,password},function(data){
        console.log("signed in")
    if(data==true){
      mypoems.show()
      login_box.hide()
      registerbox.hide()
      signinbox.hide()
      grabpoems();
    }
      })
    })


    let work_box=$('#work')
    let myname_box=$('#myname')
    let submitpoem=$('#submitpoem')
    submitpoem.click(function(){
      let work=work_box.val()
      let myname=myname_box.val()
      $.post('/api/addpoem',{name:myname,work:work},function(data){
          if(data==true){
           // window.prompt("added successfully")
           poemdiv.empty()
            grabpoems()
          }
      })
    })
    

  
})