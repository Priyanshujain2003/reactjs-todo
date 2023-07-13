const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email : String,
    password : String,
    name : String,
    phone_number : Number,
    address : String

});

const UsersModel = new mongoose.model("users",UserSchema);

module.exports = UsersModel;