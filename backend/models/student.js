const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const studentSchema=new Schema({
    name:{
       type:String,
       required:true,
       trim:true
    },
    class:{
      type:Number,
      required:true,
      min:1,
      max:12
    },
    RollNo:{
       type:Number,
       required:true,
       unique:true
    }
})

module.exports=mongoose.model("Student",studentSchema);