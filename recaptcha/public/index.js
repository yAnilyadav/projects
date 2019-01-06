$(function(){
    Name=$('#name')
    Email=$('#email')
    Password=$('#password')
    submit=$('#submit')
    var ipad;
    $.get('/ip',function(data){
        console.log("recieved ip")
        console.log(data)
         ipad=data;
     console.log("ipad is"+ipad)
       })
    submit.click(function(){
        console.log("jquery")
        n=Name.val()
        e=Email.val()
        p=Password.val()
        console.log(n+","+e+","+p)
        
        
        adduser=function(){
            console.log("called")
            console.log(n+p+e)
            $.post('/api/adduser',{name:n,email:e,password:p,ip:ipad},function(data){
              console.log("added successfully")
            })
        }

        increase=function(){
            console.log("called increase in jquery with ip"+ipad)
            $.post('/api/increaseEntry',{name:n,email:e,password:p,ip:ipad},function(data){
                
                console.log("entry increases successfully")
                console.log(data)
            })
        }




        $.post('/api/checkuser',{name:n,email:e,password:p,ip:ipad},function(result){
            console.log("back to jquery"+result.data)
            if(result.data==='1'){
                console.log("calling increase fn in jquery")
                increase()
            }
            

            else if(result.data==='0'){
                console.log("calling adduser")
            adduser()
        }
            else if(result.data==='3'){
            
            }
        })

        
    
    })
})