import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";


const TaskListcard = () => {
    const [markedDone ,setMarkedDone] = useState(true);
  return (
    <>
      
        {/* Task Card
        <div className="flex justify-between items-start bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
          <div>
            <h3 className="font-semibold text-gray-800">Learn React Router</h3>
            <p className="text-sm text-gray-500 mt-1">
              Implement navigation between feature pages.
            </p>
          </div>

          <div>
            <Button 
            onClick={() => setMarkedDone(!markedDone)}
            variant="ghost" size="icon" className="cursor-pointer">
              <MdOutlineDone size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <IoClose size={18} />
            </Button>
          </div>
        </div> */}

        {/* Task Card */}
        <div className="flex justify-between items-start bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
          <div>
            <h3 className="font-semibold text-gray-800">Build Task UI</h3>
            {markedDone ? (
              <p className="text-sm text-green-500 font-bold mt-1 line-through">
                Design the task list component with add, edit, delete features. </p>) : (
              <p className="text-sm text-gray-500 mt-1">
                Design the task list component with add, edit, delete features.
              </p>
            )}
            
          </div>

          <div>
            <Button 
            onClick={() => setMarkedDone(!markedDone)}
            variant="ghost" size="icon" className="cursor-pointer">
              <MdOutlineDone size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <IoClose size={18} />
            </Button>
          </div>
        </div>
     
    </>
  );
};

export default TaskListcard;
