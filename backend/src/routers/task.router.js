import {Router} from 'express';
import { createTask, deleteTask, getAllTasks } from '../controller/tasklist.controller.js';

const router = Router();

// Example route for getting all tasks

router.route('/create-task').post(createTask);
router.route('/get-allTasks').get(getAllTasks);
router.route('/delete-task/:id').delete(deleteTask);

export default router;