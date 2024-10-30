import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "TO_DO",
    },
    description: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


const Task = mongoose.model('Task', taskSchema);
export default Task;
