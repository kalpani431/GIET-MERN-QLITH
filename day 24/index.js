const express =require("express");
const dotenv=require("dotenv");
const connectdb=require("./db.config/db");
dotenv.config()

const app =express();

connectdb();

// app.use("/api",(req,res)=>{
//     res.send("welcome to the server");
// })

app.use("/api",router);

const port=process.env.port;

app.listen(port,()=>{
    console.log("my server is starting....", port)
})