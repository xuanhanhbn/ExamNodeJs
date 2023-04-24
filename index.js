//import region
const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./src/routes/user.routes");
const database = require("./src/database");

//app config
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

app.get("/", async (req, res) => {
  res.render("home");
});
app.use("/user", userRouter);
