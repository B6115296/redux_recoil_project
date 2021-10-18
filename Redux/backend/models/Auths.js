const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, default: null } ,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthday: { type: String, default: null },
    address: {type: String, default: null },
    phone: { type: String, default: null},
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Auths = mongoose.model("users", authSchema);

module.exports = Auths;
