import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { IoReturnDownBack } from "react-icons/io5";
import { Input } from "./ui/input";
import TaskListcard from "./TaskListcard";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "@/utils/axios";
import { toast } from "sonner";

const TaskList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData,setFormData] = useState({
    taskTitle : "",
    taskDetails : ""
  })

  const handleTask = async (e) => {
    e.preventDefault();
    try {
      const resp = await AxiosInstance.post("/v1/tasks/create-task" , formData);
      console.log("created task",resp);
      if(resp.data?.success){
        toast.success(resp.data?.message || "Task created successfully");
      }

      
    } catch (error) {
      console.log("error in creating task", error);
    }
  };


  // input change handler
  const handlerInptChange =(e) =>{
    setFormData((prev) =>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  // getting all tasks
  const getAllTasks = async () => {
    try {
      const resp = await AxiosInstance.get("/v1/tasks/get-allTasks");
      console.log("all tasks", resp.data?.data?.tasks);
      setData(resp.data?.data?.tasks);
    } catch (error) {
      console.log("error in getting all task", error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden dark:bg-gray-800 my-10">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-2xl md:text-4xl p-5 font-semibold tracking-tighter dark:text-gray-100">
          Your Personalised Task List
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700"
          onClick={() => navigate("/")}
        >
          <IoReturnDownBack size={22} />
        </Button>
      </div>

      {/* Form */}
      <form onSubmit={handleTask}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-10 border-b bg-gray-50 dark:bg-gray-800">
        {/* Task Title */}
        <div className="md:col-span-4">
          <label className="text-md font-medium text-gray-600 dark:text-gray-200">
            Task Title
          </label>
          <Input
            type="text"
            required
            placeholder="Add your task here..."
            className="mt-1 border-0 border-b rounded-none focus-visible:ring-0 bg-transparent hover:py-5 transition-all duration-400 ease"
            onChange={handlerInptChange}
            name="taskTitle"
            value={formData.taskTitle}
          />
        </div>

        {/* Task Description */}
        <div className="md:col-span-5">
          <label className="text-md font-medium text-gray-600 dark:text-gray-200">
            Task Details
          </label>
          <Input
            type="text"
            required
            placeholder="Add your task details here..."
            className="mt-1 border-0 border-b rounded-none focus-visible:ring-0 bg-transparent hover:py-5 transition-all duration-400 ease"
            onChange={handlerInptChange}
            name="taskDetails"
            value={formData.taskDetails}
          />
        </div>

        {/* Button */}
        <div className="md:col-span-3 flex md:items-end">
          <Button type="submit" className="w-full cursor-pointer">
            Add Task
          </Button>
        </div>
      </form>

      {/* tasks listed here */}
      <div className="px-6 py-10 space-y-5 ">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Your Tasks</h2>
        {data ? (data?.map((task) => (
          <TaskListcard task={task} />
        ))) : <div className="text-2xl text-center dark:grey-200 text-gray-800">No tasks available</div>}
      </div>
    </div>
  );
};

export default TaskList;
