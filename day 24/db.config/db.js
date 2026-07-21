const mongoose=require("mangoose");

async function connectdb(){
    try{
        const connect =await mangoose.connect(process.env.mongo_url);
        console.log("db connected");

    } catch (error) {
        console.log("failed to connect db")
    }
}
module.exports=connectdb 