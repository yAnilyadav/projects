const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password12345',
    database:'todos'
})

function getTodos(){
    console.log("getting todos")
    return new Promise(function(resolve,reject){
        connection.query(
            `select * from todolist`,function(err,rows,col){
               if(err){
                   reject(err)
               }
                resolve(rows)
            }
            
        )
    })
}

function deletetodo(item){
           console.log("deleting "+ item)
       return new Promise(function(resolve,reject){
          connection.query(
              `delete  from todolist where(task='${item}')`,function(err,result){
               if(err){
                   console.log(err)
                   reject(err)
                   
               }
               else{
                   console.log("resolved")
                   resolve()

               }
              }
          )
       })
}

addtodos=function(item){
    console.log("adding todos")
        return new Promise(function(resolve,reject){
            connection.query(
                `insert into todolist(task) values(?)`,
                [item],
                function(err,results){
                    if(err){
                        console.log("err")
                        reject(err) 
                    }
                    else{
                        console.log("added")
                        resolve()
                    }
                }
            )
        })
}

exports=module.exports={
    addtodos,
    deletetodo,
    getTodos
}