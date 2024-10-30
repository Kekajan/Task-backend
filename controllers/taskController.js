import asyncHandler from "express-async-handler";
import Task from "../modals/taskModal.js";

const createTask = asyncHandler(async (req, res) => {
    const {
        title,
        description,
    } = req.body;

    const task = await Task.create({
        title,
        description,
    })

    if (task) {
        res.status(201).json(task)
    } else {
        res.status(400).json({status: "FAILED", message: "Invalid Data"});

    }
});


const getAllTasks = asyncHandler(async (req, res) => {
    const Tasks = await Task.find({}).sort({createdAt: -1});
    if (Tasks) {
        res.json(Tasks);
    } else {
        res.status(404).json({status: "FAILED", message: "Task not found"});

    }
});

const editTask = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const task = await Task.findById(_id);
    if (task) {
        task.title = req.body.title || task.title;
        task.status = req.body.status || task.status;
        task.description = req.body.description || task.description;


        const updatedTask = await task.save();
        res.json(updatedTask);
    } else {
        res.status(404).json({status: "FAILED", message: "Task not found"});

    }
})

const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (task) {
        await task.deleteOne();
        res.json({message: 'Task removed'});
    } else {
        res.status(404).json({status: "FAILED", message: "Task not found"});
    }
})

export {createTask, editTask, getAllTasks, deleteTask};