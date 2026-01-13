import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";

const DailyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState("");

  // Load goals from localStorage
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("dailyGoals")) || [];
    setGoals(savedGoals);
  }, []);

  // Save goals to localStorage
  useEffect(() => {
    localStorage.setItem("dailyGoals", JSON.stringify(goals));
  }, [goals]);

  // Add goal
  const addGoal = () => {
    if (!text.trim()) return;

    setGoals([
      ...goals,
      {
        id: Date.now(),
        title: text,
        completed: false,
      },
    ]);
    setText("");
  };

  // Toggle goal
  const toggleGoal = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? { ...goal, completed: !goal.completed }
          : goal
      )
    );
  };

  // Delete goal
  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const completedCount = goals.filter((g) => g.completed).length;

  return (
    <div className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl p-6 my-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        🎯 Daily Goals
      </h2>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Add a daily goal..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={addGoal} className='cursor-pointer'>Add</Button>
      </div>

      {/* Progress */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 cursor-pointer">
        {completedCount} / {goals.length} goals completed
      </p>

      {/* Goals List */}
      <div className="space-y-3">
        {goals.length === 0 && (
          <p className="text-gray-400 text-sm text-center">
            No goals yet. Add one.
          </p>
        )}

        {goals.map((goal) => (
          <div
            key={goal.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 rounded-xl p-3 "
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
                className="w-5 h-5"
              />
              <span
                className={`text-sm ${
                  goal.completed
                    ? "line-through text-gray-400 "
                    : "dark:text-white"
                }`}
              >
                {goal.title}
              </span>
            </div>

            <Trash2
              size={18}
              className="cursor-pointer text-gray-400 hover:text-red-500"
              onClick={() => deleteGoal(goal.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyGoals;

