const mysql=require("mysql")

var mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"8007992007",
    "database":"exam",
    "port":"3306"
})

mysqlconnection.connect((err)=>{
if(err){
    console.log("error occured in database"+JSON.stringify)
}
else{
    console.log("your database connection sucessfully connected")
}

})

module.exports=mysqlconnection;