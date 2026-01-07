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

// delete task controller
export const deleteTask = asyncHandler ( async (req, res) =>{
    const {id} = req.params;
    if(!id) return res.status(404).json({
        success : false,
        message : "Task id is required."
    })  

    const task = await Task.findByIdAndDelete(id);

    if(!task) return res.status(401).json({
        success : false,
        message : "No task found."
    })

    return res.status(200).json({
        success : true,
        message : "Task deleted successfully."
    })


    // const task = await Task.findById(id);
    // if(!task) return res.json({
    //     success : false,
    //     message : "No task found."
    // })
    // await task.remove();

    // return res.status(200).json({
    //     success : true,
    //     message : "Task deleted successfully."
    // })
    
})