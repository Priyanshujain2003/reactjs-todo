const express = require("express");
const app = express();
const connectDB = require("./dbconfig")
const cors = require("cors")
const bodyParser = require("body-parser")
const UsersModel = require("./schemas/Users");
const TasksModel = require("./schemas/Tasks");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("./middleware/auth")


const port = 8800;


app.use(cors());
// database call
connectDB();
app.use(bodyParser.json());

// create server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})


// create first api
app.get("/hello", (req, res) => {
    // res.send("hello world!");
    res.send([{
        name: "priyanshu",
        age: 21,
        address: "jaipur"
    }])
})


// let users = [];

// create signup api
// app.post("/signup", (req, res) => {
//     const data = req.body;
//     if (data.email && data.password) {
//         const user = users.find((user) => user.email === data.email.toLowerCase());
//         if (user) {
//             res.send({ success: false, message: "User Already Exit" });
//         }
//         else {
//             users.push({ ...data, email: data.email.toLowerCase() })
//             res.send({ success: true, message: "Signup Successfully" });
//         }
//     }
//     else {
//         res.send({ success: false, message: "No data Found" })
//     }
//     console.log(data)
// });




// data store in database
// using postman

let users = [];

app.post("/signup", async (req, res) => {
    const data = req.body;
    if (data.email && data.password) {
        const user = await UsersModel.findOne({ email: data.email.toLowerCase() });
        if (user) {
            res.send({ success: false, message: "User Already Exit" });
        }
        else {
            const userData = {
                name: data.name,
                email: data.email.toLowerCase(),
                password: data.password,
                phone_number: data.phone_number,
                address: data.address
            };
            const newUser = await UsersModel.create(userData);
            res.send({ success: true, message: "Signup Successfully", data: newUser });
        }
    }
    else {
        res.send({ success: false, message: "No data Found" })
    }
    console.log(data)
});



// password hash (encrypted form)

// let users = [];

// app.post("/signup", async (req, res) => {
//     const data = req.body;
//     // hash form
//     const hashPassword = await bcrypt.hash(data.password , 16)
//     if (data.email && data.password) {
//         const user = await UsersModel.findOne ({email : data.email.toLowerCase() });
//         if (user) {
//             res.send({ success: false, message: "User Already Exit" });
//         }
//         else {
//             const userData = {
//                 name : data.name,
//                 email : data.email.toLowerCase(),
//                 password : hashPassword,
//                 phone_number : data.phone_number,
//                 address : data.address
//             };
//             const newUser = await UsersModel.create(userData);
//             res.send({ success: true, message: "Signup Successfully" , data: newUser });
//         }
//     }
//     else {
//         res.send({ success: false, message: "No data Found" })
//     }
//     console.log(data)
// });






























// Create Login Api

// app.post("/login", (req, res) => {
//     const data = req.body;
//     if (data.email && data.password) {
//         const user = users.find((user) => user.email === data.email);
//         if (user) {
//             if (user.password === data.password) {
//                 res.send({ success: true, message: "Login Successfully" });
//             }
//             else {
//                 res.send({ success: false, message: "Password is incorrect" });
//             }
//         }
//         else {
//             res.send({ success: false, message: "User Not Found" })
//         }
//     }
//     else {
//         res.send({ success: false, message: "No data Found" })
//     }
// });


// Create Login Api
// fetch data database

// app.post("/login", async (req, res) => {
//     const data = req.body;
//     if (data.email && data.password) {
//         const user = await UsersModel.findOne ({email : data.email.toLowerCase() });
//         if (user) {
//             if (user.password === data.password) { // 
//                 res.send({ success: true, message: "Login Successfully" });
//             }
//             else {
//                 res.send({ success: false, message: "Password is incorrect" });
//             }
//         }
//         else {
//             res.send({ success: false, message: "User Not Found" })
//         }
//     }
//     else {
//         res.send({ success: false, message: "No data Found" })
//     }
// });


// using hash compare
// app.post("/login", async (req, res) => {
//     const data = req.body;
//     if (data.email && data.password) {
//         const user = await UsersModel.findOne ({email : data.email.toLowerCase() });
//         if (user) {
//             if (await bcrypt.compare(data.password , user.password)) {
//                 res.send({ success: true, message: "Login Successfully" });
//             }
//             else {
//                 res.send({ success: false, message: "Password is incorrect" });
//             }
//         }
//         else {
//             res.send({ success: false, message: "User Not Found" })
//         }
//     }
//     else {
//         res.send({ success: false, message: "No data Found" })
//     }
// });



// Create Login Api
// fetch data database
// usong jwt(json web Tokens)
app.post("/login", async (req, res) => {
    const data = req.body;
    if (data.email && data.password) {
        const user = await UsersModel.findOne({ email: data.email.toLowerCase() });
        if (user) {
            if (user.password === data.password) {
                //  jwt use
                const token = jwt.sign({_id:user._id, email:user.email} , "HDFJDHFD5nbvjh454s6c.yto(gihfuscscsnh", {expiresIn: "50m"})
                // const token = jwt.sign({user} , "HDFJDHFD5nbvjh454s6c.yto(gihfuscscsnh", {expiresIn: "50m"})
                console.log(token)
                res.send({
                    success: true,
                    message: "Login Successfully",
                    token: token
                });
            }
            else {
                res.send({ success: false, message: "Password is incorrect" });
            }
        }
        else {
            res.send({ success: false, message: "User Not Found" })
        }
    }
    else {
        res.send({ success: false, message: "No data Found" })
    }
});



// app.get("/userget", (req, res) => {
//     const data = req.body;
//     res.send(data);
// })
























// let tasks = [];
// create task api
// app.post("/task", (req, res) => {
//     const data = req.body;
//     if (!data.taskname || !data.taskdate) {
//         res.send({ success: false, message: "Please Fill This Column" })
//     }
//     else {
//         tasks.push({ ...data })
//         res.send({ success: true, message: "Successfull" })
//     }
//    console.log(data)
// });





let tasks = [];
// // create task api
// Auth only use for token(jwt)
app.post("/addtask", Auth, async (req, res) => {
    const data = req.body;
    if (!data.task || !data.date) {
        res.send({ success: false, message: "Please Fill This Column" })
    }
    else {
        // tasks.push({ ...data })
        const tasksData = {
            task: data.task,
            date: data.date
        }
        const newTask = await TasksModel.create({...tasksData, userId: req.userId});
        res.send({ success: true, message: "Successfull", data: newTask })
    }
    console.log(data)
});


// normal all user fetch data
// app.get("/getdata", Auth, async (req, res) => {
//     const task = await TasksModel.find()
//     res.send(task)
// })


// specifird user id throgh fetch data
// app.get("/getdata", Auth, async (req, res) => {
//     const userId = req.userId
//     const task = await TasksModel.find({userId})
//     res.send(task)
// })



// using normal fetch and searchbar fetch data
app.get("/getdata", Auth, async (req, res) => {
    const userId = req.userId
    const searchText = req.query.searchText
    const filter = {userId : userId}
    if(searchText)
    {
        const re = new RegExp(searchText, "i")
        filter.task = {$regex:re}
    }
    const task = await TasksModel.find(filter)
    res.send(task)
})



app.patch("/mark-as-complete/:taskId", async (req, res) => {
    const taskId = req.params.taskId;
    const data = await TasksModel.updateOne(
        { _id: taskId },
        { $set: { isCompleted: true } }
    )
    res.send({ success: true, message: " task updated successfully" })
})



app.delete("/delete-task/:taskId", async (req, res) => {
    const taskId = req.params.taskId;
    const result = await TasksModel.deleteOne(
        { _id: taskId }
    )
    res.send({ success: true, message: " task Deleated successfully" })
})
