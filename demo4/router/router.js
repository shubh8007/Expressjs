const express=require('express')
const router=express.Router();
const  connection=require('../db/dbconnect')


router.get("/products",(req,resp)=>{
connection.query("select * from product",(err,data)=>{
if(err){
    resp.status(500).send("error occured",JSON.stringify)
}
else{
    resp.send(data)
}
})
})

router.get("/products/product/:id",(req,resp)=>{
    connection.query("select * from product where id=?",[req.params.id],(err,data)=>{
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.send(data[0])
        }
    })
})

router.get("/products/delete/:id",(req,resp)=>{
    connection.query("delete from product where id=?",[req.params.id],(err,data)=>{
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.send("product deleted sucessfully")
        }
    })
})

router.post("/products/add",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name;
    var price=req.body.price;

    connection.query("insert into product values(?,?,?)",[id,name,price],(err,data)=>{
        if(err){
            resp.status(500).send("product not added"+JSON.stringify(err))
        }else{
            resp.send("inserted data sucessfully")
        }
    })
})

router.put("/products/update/:id",(req,resp)=>{
    console.log(1)
    var id=req.body.id
    var name=req.body.name;
    var price=req.body.price;
    connection.query("update product set name=?,price=? where id=?",[name,price,id],(err,data)=>{
        if(err){
            resp.status(500).send("product not updated"+JSON.stringify(err))
        }else{
            
            resp.send("updated sucessfully")

        }
    })
   
})
module.exports=router;