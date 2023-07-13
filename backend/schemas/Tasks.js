const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId

const TaskSchema = new mongoose.Schema({
    task : String,
    date : Date,
    isCompleted : {
        type:Boolean , default:false
    },
    userId: ObjectId

});

const TasksModel = new mongoose.model("tasks",TaskSchema);

module.exports = TasksModel;