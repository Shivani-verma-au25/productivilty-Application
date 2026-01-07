import React, { createContext, useContext, useState } from 'react'
import { toast } from 'sonner';

export const TaskContext = createContext()

export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({children}) => {

    const [tasks ,setTask] = useState([]);

    const addTask = (task)=>{
        if (!task) return toast.error("Task cannot be empty");
        setTask((prevTask) => [...prevTask, { _id : task._id,taskTitle :task.taskTitle,taskDetails: task.taskDetails}]);
    }

    const deleteTask = (id)=>{
        setTask((prevTask) => prevTask.filter((task) => task._id !== id)) 
    }

  return (
    <TaskContext.Provider value={{tasks , addTask , deleteTask,setTask}}>{children}</TaskContext.Provider>
  )
}

export default TaskProvider