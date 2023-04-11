const express = require("express");
let router = express.Router();
let studentController = require("../controllers/student.controller");
router.get("/",studentController.get);
router.get("/create-student",studentController.createForm);
router.post("/create-student",studentController.save);
router.get("/edit-student/:id",studentController.editForm);
router.post("/edit-student/:id",studentController.update);
router.post("/delete-student/:id",studentController.delete);

module.exports = router;