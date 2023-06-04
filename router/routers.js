const express=require("express");
const routers=express.Router();
var connection=require("../db/dbconnect");


routers.get("/products",function(req,resp){
    connection.query("select * from product",(err,data,fields)=>{
        if(err){
        resp.status(500).send("data not found"+JSON.stringfy(err));
        }
        else{
            resp.render("index",{proddata:data});
        }

    })

})
routers.get("/displayaddform",(req,resp)=>{
    resp.render("add-prod")

})

routers.post("/insertproduct",(req,resp)=>{
    var pid=req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    connection.query("insert into product values(?,?,?)",[pid,pname,price],(err,result)=>{
        if(err){
        resp.status(500).send("data not inserted"+JSON.stringify(err));
        }
        else{
            
            resp.redirect("/products")
        }
    })
})

routers.get("/edit/:pid",(req,resp)=>{
    console.log("prodid",req.params.pid)
    connection.query("select * from product where pid=?",[req.params.pid],(err,data,fields)=>{
        console.log(data);
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err));
        }
        else{
            resp.render("update-prod",{prod:data[0]})
        }
    })
})
routers.post("/updateProduct",(req,resp)=>{
    var pid=req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    connection.query("update product set pname=?,price=? where pid=?",[pname,price,pid],(err,result)=>{
    if(err){
        resp.status(500).send("data not added"+JSON.stringify(err));
    }
    else{
        resp.redirect("/products");
    }
    })
})

routers.get("/delete/:pid",(req,resp)=>{
    connection.query("delete from product where pid=?",[req.params.pid],(err,result)=>
    {
        if(err){
            resp.status(500).send("data not deletd"+JSON.stringify(err));
        }
        else{
            resp.redirect("/products");
        }
    })
})

module.exports=routers;