const mongoose=require("mangoose");

const employeeschema=new mongoose.schema({
    fullname:{
        type:String,
        required:true
    },
    age:{
        type:Number,

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
