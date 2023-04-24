const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        const regExp = /^(\([0-9]{3}\) |[0-9]{3})[0-9]{3}[0-9]{4}/;
        return v.match(regExp) && v.startsWith("0");
      },
      message: (t) => `${t.value} is not a valid phone number!`,
    }
  },
  username: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  passwordHash: {
    type:String,
    required: true,
    minLength:6,
    maxLength:255
  },
});
const User = mongoose.model("user", schema);

module.exports = User;
