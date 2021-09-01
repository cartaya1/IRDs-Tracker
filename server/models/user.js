const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 8, "Password should be longer or equal to 8 Characters."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model("User", userSchema, 'user')

module.exports = User
