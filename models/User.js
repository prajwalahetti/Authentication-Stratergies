const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  authId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    
  },
  lastName: {
    type: String,
   
  },
  image: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
