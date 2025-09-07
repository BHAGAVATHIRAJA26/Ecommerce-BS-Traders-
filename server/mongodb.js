const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  useremail: String,
  password: String
});

const productSchema = new mongoose.Schema({
  name: String,
  url: String,
  public_id: String,
  desc: String,
  cos: Number,
  dis: Number,
  nop: Number,
  mob: Number
});

const Users = mongoose.model("usernames", userSchema);
const Products = mongoose.model("products", productSchema);

module.exports = { Users, Products };
