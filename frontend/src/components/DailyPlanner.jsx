import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import DailyPlannerCard from "./DailyPlannerCard";



const DailyPlanner = () => {
  const navigate = useNavigate();

// format time for am and pm
  const formatTime = (hour) =>{
    const period = hour >= 12 ? 'PM' : 'AM';
    const formatehours = hour % 12 || 12;
    return `${formatehours}:00 ${period}`
  }

  const hours = Array.from({ length: 18 }, (_, idx) => {
    // return `${6 + idx}:00 - ${7 + idx}:00`;
    return formatTime(idx + 6);
  });


//   clear all plans
const clearAllDayPlans = () =>{
    localStorage.removeItem('dayPlanner');
    // reload the window 
    window.location.reload();
}

  return (
    <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-800 shadow-xl rounded-2xl my-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight dark:text-gray-100">
          Plan your day to be more productive
        </h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <IoReturnDownBack size={22} />
        </Button>
      </div>

      {/* Planner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {hours.map((hrs, idx) => (
          <DailyPlannerCard hrs={hrs} key={idx} />
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Button 
        onClick={clearAllDayPlans}
        variant="destructive" className='m-5 cursor-pointer'>Clear all Plan</Button> 
      </div>
    </div>
  );
};

export default DailyPlanner;
