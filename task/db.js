const sql=require('mysql2')
const connection=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'password12345',
    database:'Users'
})

newuser=function(name,email,password){
    console.log("inside db")
    return new Promise(function(resolve,reject){
        connection.query(
            `Insert into info (Name,Email,Password) Values (?,?,?)`,
            [name,email,password],
            function(err,results){
                if(err){
                    console.log("error")
                    reject(err)
                    
                }
                else{
                    //console.log(results)
                    resolve(1)
                }
              }
        )
        
    })

}

checkuser=function(name,email,password){
return new Promise(function(resolve,reject){
    console.log("user check")
connection.query(
    `select * from info where (Name='${name}'AND Email='${email}' AND Password='${password}')`,
    function(err,row,col){
       if(err){
           reject(err);
           console.log(err)
       }
       else{
           let r=row[0].Id;
           if(r>=0)
           resolve(1);
       }
    }
)
})
}
exports=module.exports={
    newuser,checkuser
}