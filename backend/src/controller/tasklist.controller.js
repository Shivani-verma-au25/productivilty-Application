import { Task } from '../models/taskList.model.js';
import {asyncHandler} from '../utils/asyncHnadler.js'

// create task controller
export const createTask = asyncHandler(async (req , res) => {
    const {taskTitle , taskDetails,isCompleted} = req.body;
    // Here you can add logic to save the task to the database
    if ([taskDetails,taskTitle].some((task) => !task  || task.trim() === '')){
        return res.json({
            success : false,
            message : 'Task Title and Details are required'
            });
        }

    const task = await Task.create({
        taskTitle,
        taskDetails,
        isCompleted : false
    })    
    if (!task) return res.json({
        success : false,
        message :"Failed to create Task."
    })
   
    res.status(201).json({
        success:true,
        message:'Task Created successfully',
        data:{task}
    });
})


//get all task conteroller
export const getAllTasks = asyncHandler(async(req ,res) =>{
    const tasks = await Task.find();
    console.log(tasks);
    
    
    if(!tasks) return res.json({
        success :false,
        message :"No tasks found."
    })

    return res.status(200).json({
        success : true,
        message : "Tasks fetched successfully.",
        data :{tasks}
    })
})