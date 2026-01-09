import React, { useEffect, useRef, useState } from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

const PromodromoTimer = () => {
  const navigate = useNavigate();
  const [timeLeft ,setTimeLefts] = useState(30*60) // 25 minutes
  const [isRunning ,setIsRunning] = useState(false);
  const intevalRef = useRef(null)
  
  const minutes = Math.floor(timeLeft/60);
  const seconds = timeLeft % 60;

  // timer 
  useEffect(() => {
  if (!isRunning) return;

  intevalRef.current = setInterval(() => {
    setTimeLefts((prev) => {
      if (prev <= 1) {
        // clearinterval if time less tha 1
        clearInterval(intevalRef.current);
        return 0;
      }
      return prev - 1;
    });
  }, 1000); 

  return () => clearInterval(intevalRef.current);
}, [isRunning]);


  // start
  const handleStart = () => setIsRunning(true);

  // pause
  const hanldePause =() =>{
    setIsRunning(false);
    clearInterval(intevalRef.current);
  };

  // reset
  const handleReset = () =>{
    clearInterval(intevalRef.current);
    setIsRunning(false);
    setTimeLefts(30*60)
  }

  return (
    <div className="max-w-5xl mx-auto bg-gray-100 dark:bg-gray-800 shadow-xl rounded-2xl my-10 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight dark:text-gray-100">
            Study with me?
        </h1>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => navigate("/")}
        >
          <IoReturnDownBack size={22} />
        </Button>
      </div>

      {/* Timer Card */}
      <Card className="max-w-xl mx-auto p-10 bg-gray-100 dark:bg-gray-950 dark:from-gray-900 dark:to-gray-800 shadow-2xl rounded-3xl">
        
        {/* Timer Circle */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 rounded-full border-[10px] border-red-500 flex items-center justify-center bg-white dark:bg-gray-900 shadow-inner">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 dark:text-gray-100">
               {minutes}:{seconds.toString().padStart(2,'0')}
            </h1>
          </div>
        </div>

        {/* Session Label */}
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
          Focus Session
        </p>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button 
          onClick={handleStart}
          disabled={isRunning}
          className="px-6 py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 cursor-pointer">
            Start
          </Button>

          <Button
          onClick ={hanldePause}
            variant="secondary"
            className="px-6 py-3 text-lg font-semibold cursor-pointer border border-black hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            Pause
          </Button>

          <Button
          onClick={handleReset}
            variant="destructive"
            className="px-6 py-3 text-lg font-semibold cursor-pointer"
          >
            Reset
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PromodromoTimer;
