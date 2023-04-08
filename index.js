const express = require("express");
// connect mongodb
const database = require("./src/database");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function (req,res){
    let student = {
        name: "Nguyễn Văn An",
        age: 19
    };
    let classRoom = {
        name: "T2203E",
        room: "B14"
    }
   res.render("home",{
       student: student,
       classRoom: classRoom
   });
});
app.get("/students",function (req,res){
    const Student = require("./src/models/student");
    Student.find({}).then(rs=>{
        res.render("student/list",{
            items: rs
        });
    }).catch(err=>{
        res.send(err);
    });
});
app.get("/create-student",(req,res)=>{
    res.render("student/form");
})
app.post("/create-student",(req,res)=>{
    let s = req.body;
    res.send(s);
});