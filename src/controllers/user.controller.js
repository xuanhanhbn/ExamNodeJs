const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.list = async (req, res) => {
  let users = await User.find();
  res.render("list", {
    users: users
  });
};
exports.create = async (req, res) => {
  let existedUser = await User.findOne({ email: req.body.email });
  if (existedUser) {
    return res.send("User existed!");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  //save to db
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: hash,
  });
  try {
    await User.create(newUser);
    return res.send("done");
  } catch (err) {
    return res.send(err);
  }
};
exports.add = async (req, res) => {
  res.render("add");
};
exports.authentication = async (req, res) => {
  let existedUser = await User.findOne({ email: req.body.email });
  if (!existedUser) {
    return res.send("User not existed!");
  }
  let isUserAuthenticated = await bcrypt.compare(
    req.body.password,
    existedUser.passwordHash
  );
  if (isUserAuthenticated) {
    return res.send("User is authenticated");
  } else {
    return res.status(401).send("User credential is not correct!");
  }
};
