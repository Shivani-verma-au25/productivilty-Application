import axios from "axios";
import React, { useState } from "react";
import { Button } from "./ui/button";

const MotivationalQuotes = () => {
  const [quote, setQuotes] = useState(
    "https://generated.inspirobot.me/a/5keGxvKAJA.jpg"
  );
  const [loading, setLoading] = useState(false);

  const generateGqutes = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://inspirobot.me/api?generate=true");
      setQuotes(res?.data);
    } catch (error) {
      console.log("error generate quotes", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" max-w-7xl mx-auto flex flex-col items-center rounded-2xl gap-5 py-10 bg-gray-300 mt-2">
      <div className="relative max-w-lg">
        <img
          src={quote}
          alt="Motivational Quote"
          className={`rounded-xl shadow-md transition-opacity duration-300 ${
            loading ? "opacity-50" : "opacity-100"
          }`}
        />

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-lg font-semibold">Loading...</div>
          </div>
        )}
      </div>

      <Button
        onClick={generateGqutes}
        disabled={loading}
        className="px-4 py-2 rounded-lg cursor-pointer disabled:opacity-50"
      >
        {loading ? "Loading..." : "New Quote"}
      </Button>
    </div>
  );
};

export default MotivationalQuotes;
