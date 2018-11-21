const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password12345',
    database:'poetry'
})

addUser=function(name,password){
    console.log("inside db")
    return new Promise(function(resolve,reject){
    connection.query(
        `Insert into login(Name,Password) Values(?,?)`,
        [name,password],
        function(err,result){
          if(err){
              reject(err)
          }
          else{
              console.log("returning back")
              resolve(true)
          }
        }
    )
    })
}

addPoem=function(name,poem){
return new Promise(function(resolve,reject){
connection.query(
    `Insert into Poems(Name,Work) Values(?,?)`,
    [name,poem],
    function(err,result){
     if(err){
         reject(err)
     }
     else{
         resolve(true)
     }
    }
)
})
}


getPoems=function(){
    return new Promise(function(resolve,reject){
        connection.query(
            `select * from poems`,
            function(err,rows){
                  if(err){
                      reject(err)
                  }
                  else{
                      
                      console.log(rows)
                      resolve(rows)
                  }
            }
        )
    })
}

checkUser=function(name,password){
    return new Promise(function(resolve,reject){
        console.log("inside db")
        connection.query(
            `select * from Login where(Name='${name}' AND Password='${password}')`,
            function(err,rows){
                if(rows.length>0){
                    resolve(true)
                }
                else{
                    reject (err)
                }
            }
        )
    })
}


module.exports={
    addUser,addPoem,getPoems,checkUser
}