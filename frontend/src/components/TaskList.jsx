import React from "react";
import { Button } from "./ui/button";
import { IoClose, IoReturnDownBack } from "react-icons/io5";
import { Input } from "./ui/input";
import TaskListcard from "./TaskListcard";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-2xl md:text-4xl p-5 font-semibold tracking-tighter text-gray-800">
          Your Personalised Task List
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <IoReturnDownBack size={22} />
        </Button>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-10 border-b bg-gray-50">
        {/* Task Title */}
        <div className="md:col-span-4">
          <label className="text-sm font-medium text-gray-600">
            Task Title
          </label>
          <Input
            type="text"
            placeholder="Add your task here..."
            className="mt-1 border-0 border-b rounded-none focus-visible:ring-0 bg-transparent"
          />
        </div>

        {/* Task Description */}
        <div className="md:col-span-5">
          <label className="text-sm font-medium text-gray-600">
            Task Details
          </label>
          <Input
            type="text"
            placeholder="Add your task details here..."
            className="mt-1 border-0 border-b rounded-none focus-visible:ring-0 bg-transparent"
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
      <div className="px-6 py-10 space-y-5">
        <h2 className="text-lg font-semibold text-gray-700">Your Tasks</h2>
        <TaskListcard />  
      
       </div>  

    </div>
  );
};

export default TaskList;
