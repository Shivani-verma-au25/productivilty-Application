import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";

const DailyPlannerCard = ({ hrs }) => {
    const [time, setTime] = useState('')


    // get the saved value

    useEffect(() =>{
        const savedplan = JSON.parse(localStorage.getItem('dayPlanner')) || {};
        if (savedplan[hrs]) {
            setTime(savedplan[hrs])
        }
    },[])

    const handleChange = (e) =>{
        const {name ,value} = e.target;
        setTime(value)

        // find existing value
        const existingplanner = JSON.parse(localStorage.getItem('dayPlanner')) || {};

        const updatePalnner = {
            ...existingplanner,
            [hrs]:value,
        }

        // set planner
        localStorage.setItem('dayPlanner',JSON.stringify(updatePalnner))

    }
  
  return (
    <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-900 rounded-xl p-4 shadow-sm">
      {/* Time */}
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 sm:w-32">
        {hrs}
      </span>

      {/* Input */}
      <Input
        placeholder="..."
        name='time'
        value={time || ""}
          onChange={handleChange}
        className="border-0 border-none rounded-none focus-visible:ring-0 placeholder:text-2xl  outline-none"
      />
    </div>
  );
};

export default DailyPlannerCard;
