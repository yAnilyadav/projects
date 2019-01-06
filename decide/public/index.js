$(function(){
    
    tasks=$('#tasks')
    nexttask=$('#nexttask')
    submit=$('#submit')
  table=$('#table')
   
  
  
function refreshtable(todos){
    table.empty();
    console.log("inside refresh")
    for(let item of todos){
        table.append(
            `<tr>
            <td>${item.task}</td>
            <td><a href="api/deletetodo/${item.task}">delete</td>
            </tr>`
        )
    }
}


  submit.click(function(){
        let newtodo=nexttask.val()
        
        $.post('/api/addtodo',{task:newtodo},function(data){
            refreshtable(data)
        })
    })



    $.get('/api/gettodos',function(data){
          refreshtable(data)
    })

})