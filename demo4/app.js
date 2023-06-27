const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./router/router")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.use("/",router);


app.listen(3001,()=>{
    console.log("your port is running on 8007")
})