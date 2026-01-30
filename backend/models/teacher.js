const mongoose=require("mongoose");
const Schema=mongoose.Schema;
 
const teacherSchema=new Schema({
     name:{
       type:String,
       required:true,
       trim:true
    },
     teacherid:{
       type:Number,
       required:true,
       unique:true
    },
     department:{
        type:String,
        required:true,
        trim:true
     }
})

module.exports=mongoose.model("Teacher",teacherSchema);