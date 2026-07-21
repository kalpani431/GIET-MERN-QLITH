const express=require("express");

const router=express.Router();

Router.get("/",(req,res)=>{
    res.send("get request called")
})

router.post("/create",(req,res)=>{
    res.send("post request called")
})

module.exports=router