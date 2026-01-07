import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { toast } from "sonner";
import { AxiosInstance } from "@/utils/axios";
import { useTasks } from "@/Context/TaskProvider";

const TaskListcard = ({ task }) => {
  const [markedDone, setMarkedDone] = useState(false);
  const { deleteTask } = useTasks();

  const hanldeDeleteTask = async (taskId) => {
    try {
      const resp = await AxiosInstance.delete(
        `/v1/tasks/delete-task/${taskId}`
      );
      if (resp.data.success) {
        deleteTask(taskId);
        toast.success(resp.data?.message || "Task deleted successfully");
      }
    } catch (error) {
      console.log("error while deleteing task", error);
      toast.error("Error while deleting task");
    }
  };

  return (
    <>
      {" "}
      {/* Task Card */}
      <div className="flex justify-between items-start bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">
            {task.taskTitle}
          </h3>
          {markedDone ? (
            <p className="text-sm text-green-500 font-bold mt-1 line-through dark:text-green-500">
              {task.taskDetails}
            </p>
          ) : (
            <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
              {task.taskDetails}
            </p>
          )}
        </div>

        <div>
          <Button
            onClick={() => setMarkedDone(!markedDone)}
            variant="ghost"
            size="icon"
            className="cursor-pointer"
          >
            <MdOutlineDone size={18} />
          </Button>
          <Button
            disabled={!markedDone}
            onClick={() => hanldeDeleteTask(task._id)}
            variant=""
            size="icon"
            className={`cursor-pointer transition ${
              !markedDone
                ? "opacity-40 cursor-not-allowed "
                : "hover:bg-red-700 bg-red-900 text-white"
            }`}
          >
            <IoClose size={18} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TaskListcard;
