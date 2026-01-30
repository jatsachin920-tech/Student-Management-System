const express=require("express");
const router=express.Router();
const Student = require("../models/student.js");

router.get("/",async(req,res)=>{
    try{
       const allstudents=await Student.find({});
       res.status(200).send(allstudents);
    }catch(err){
      res.status(500).send(err.message);
    }
 })

 router.post("/new",async(req,res)=>{
     try{
    const newstudent=new Student(req.body);
    await newstudent.save();
    res.status(201).send("data added succesfully");
     }catch(err){
    res.status(400).send(err.message);
     }
 });

 router.delete("/:id",async(req,res)=>{
     try{
     const {id}=req.params;
     const deletedstudent=await Student.findByIdAndDelete(id);
     if(!deletedstudent){
         res.status(400).send("student not found");
     }else{
     res.status(200).send("student deleted");
     }
 }catch(err){
     res.status(500).send(err.message);
 }
  })
  
 router.put("/:id",async(req,res)=>{
      try{
      let {id}=req.params;
      const updatedstudent=await Student.findByIdAndUpdate(id,req.body,{ new: true });
      if(!updatedstudent){
          res.status(400).send("student not found");
      }else{
      res.status(200).send("student updated succesfully");
      }
    }catch(err){
      res.status(500).send(err.message);
  }
   })

   module.exports = router;