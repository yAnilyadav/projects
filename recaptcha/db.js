const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password12345',
    database:'recaptcha'
})

function checkuser(name,email,password,ip){
    return new Promise(function(resolve,reject){
        console.log("in db")
        connection.query(
            
            `select * from users where(Name='${name}' AND Email='${email}' AND Password='${password}' AND IpAddress='${ip}') `,
            function(err,rows){
                if(rows.length==0){
                    console.log("user not present")
                    resolve(rows.length)
                }
               else if(rows.length>0 && rows[0].Entries<3){
                    console.log("hi there"+rows[0].Name)
                    resolve(rows[0].Entries)
                }
                else if(rows[0].Entries>3){
                    console.log("limit exceeded")
                   resolve(rows[0].Entries)
                }
                else{
                    reject(err)
                }

            }
        )
    })
}

function adduser(name,email,password,ip){
return new Promise(function(resolve,reject){
    console.log(" in db adduser")
connection.query(
    `Insert into users(Name,Email,Password,IpAddress,Entries) Values(?,?,?,?,?)`,
    [name,email,password,ip,1],
    function(err,result){
      if(err){
          console.log("hmm error"+err)
          reject(err)
      }
      else{
          console.log("user added")
          resolve()
      }
    }
)
})
}

function increaseEntry(name,email,password,ip){
    console.log("changing"+name+email+password+ip)
    return new Promise(function(resolve,reject){
        
      connection.query(
          `Update  users SET Entries=Entries+1 where (Name =? AND Email=? AND Password=? AND IpAddress=?)`,[name,email,password,ip],
          function(err,result){
              if(err){
                  console.log("oops"+err)
                  console.log(result)
                 reject(err)
              }
              else{
                  console.log("entry updated")
                  resolve()
              }
          }
      )
    })
}

exports=module.exports={
    checkuser,adduser,increaseEntry
}