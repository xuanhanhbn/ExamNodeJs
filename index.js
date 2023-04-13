require("dotenv").config();
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

const studentRouter = require("./src/routes/student.route");
app.use("/students",studentRouter);
const authRouter = require("./src/routes/auth.route");
app.use("/auth",authRouter);


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
