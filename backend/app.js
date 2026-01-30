const express=require("express");
const app=express();
const mongoose=require("mongoose");
const studentRoutes = require("./routes/studentRoutes.js"); 
const teacherRoutes = require("./routes/teacherRoutes.js");

const cors = require("cors");
app.use(cors()); // Ye routes se upar likhna hai

app.use(express.json());

const dbUrl="mongodb://127.0.0.1:27017/studentDB";

main()
.then((res)=>{
    console.log("connected to database")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);

app.get("/",(req,res)=>{
    res.send("welcome to root directory!");
})

app.listen(8080,()=>{
    console.log("listening on port 8080");
});
