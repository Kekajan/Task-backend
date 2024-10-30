import express from 'express';
import {createTask, deleteTask, editTask, getAllTasks} from "../controllers/taskController.js";

const router = express.Router();


router.route('/tasks').get(getAllTasks);
router.route('/task/:id').put(editTask).delete(deleteTask);
router.route('/task').post(createTask);


export default router;