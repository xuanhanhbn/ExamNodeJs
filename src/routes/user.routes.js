const express = require("express");
const authController = require("../controllers/user.controller");

let router = express.Router();

router.get("/add", authController.add);
router.post("/login", authController.authentication);
router.get("/list", authController.list);
router.post("/register", authController.create);

module.exports = router;