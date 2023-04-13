const Student = require("../models/student");
exports.get = async function(req,res){
    try{
        const ls1 = await Student.find({});
        const ls2 = await Student.find({name:"Nam"});
        res.send({
            list1: ls1,
            list2: ls2
        });
    }catch(err){
        res.send(err);
    }

}
exports.createForm = (req,res)=>{
    res.render("student/form");
};
exports.save = (req,res)=>{
    let s = req.body;
    let newStudent = new Student(s);
    newStudent.save().then(rs=>{
        res.redirect("/students");
    }).catch(err=>{
        res.send(err);
    })
};
exports.editForm = (req,res)=>{
    let id = req.params.id;
    Student.findById(id).then(rs=>{
        res.render("student/edit",{
            data: rs
        });
    }).catch(err=>{
        res.send(err);
    })
};
exports.update = (req,res)=>{
    let id = req.params.id;
    let data = req.body;
    Student.findByIdAndUpdate(id,data)
        .then(rs=>res.redirect("/students"))
        .catch(err=>res.send(err));
};
exports.delete = (req,res)=>{
    let id = req.params.id;
    Student.findByIdAndDelete(id)
        .then(rs=>res.redirect("/students"))
        .catch(err=>res.send(err));
};