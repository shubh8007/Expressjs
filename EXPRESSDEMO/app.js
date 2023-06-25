
const express=require("express");
const app=express()
const bodyparser=require("body-parser")
var f=require("./formmodule")

app.use=(bodyparser.urlencoded({extended:false}))


app.get("/form",function(req,resp){
    resp.sendFile("/views/form.html",{root:__dirname})
})
app.get("/submit-form",function(req,resp){
    if(req.query.btn==="add"){
        var num1=parseInt(req.query.n1);
        var num2=parseInt(req.query.n2);
        var ans=f.addition(num1,num2)

        resp.send(`<h1>num1: ${req.query.n1} num2: ${req.query.n2} addition: ${ans} </h1>`)
    }
    else{
        var num1=parseInt(req.query.n1);
        var ans=f.factorial(num1);
        resp.send(`<h1> num1: ${req.query.n1} Factorial: ${ans} </h1>`)
    }
})

app.listen(8007,function(){
    console.log("your server load on port 8007")
})