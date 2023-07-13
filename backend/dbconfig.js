const mongoose = require("mongoose");

const connectDB = async () => {

    mongoose.connect("mongodb+srv://hellopriyanshu2003:pavq73NkNxVG7Q4T@cluster0.ljw6nxf.mongodb.net/todolist?retryWrites=true&w=majority").then(() => {
        console.log("connencted");
    }).catch((err) => {
        console.log("err", err);
    })


    
}

module.exports = connectDB                      