const express=require("express");
const router=express.Router();
const Teacher = require("../models/teacher.js");

router.get("/",async(req,res)=>{
    try{
       const allteachers=await Teacher.find({});
       res.status(200).send(allteachers);
    }catch(err){
      res.status(500).send(err.message);
    }
 })

 router.post("/new",async(req,res)=>{
     try{
    const newteacher=new Teacher(req.body);
    await newteacher.save();
    res.status(201).send("data added succesfully");
     }catch(err){
    res.status(400).send(err.message);
     }
 });

 router.delete("/:id",async(req,res)=>{
     try{
     const {id}=req.params;
     const deletedteacher=await Teacher.findByIdAndDelete(id);
     if(!deletedteacher){
         res.status(400).send("teacher not found");
     }else{
     res.status(200).send("teacher deleted");
     }
 }catch(err){
     res.status(500).send(err.message);
 }
  })
  
 router.put("/:id",async(req,res)=>{
      try{
      let {id}=req.params;
      const updatedteacher=await Teacher.findByIdAndUpdate(id,req.body,{ new: true });
      if(!updatedteacher){
          res.status(400).send("teacher not found");
      }else{
      res.status(200).send("teacher updated succesfully");
      }
    }catch(err){
      res.status(500).send(err.message);
  }
   })

   module.exports = router;