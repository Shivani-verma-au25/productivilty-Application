import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Features from "../components/Features";
import { featuresData } from "../featuresData";


const HomePage = () => {
  
  return (
    <div className="max-w-7xl h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      {/* top section */}
      <div className="w-full flex justify-center  ">
        {/* left part */}
        <div className="w-2/2 bg-gray-50 flex justify-center items-start py-20 dark:bg-gray-900">
          {/* container */}
          <div className="relative max-w-xl w-full bg-white rounded-2xl px-8 py-6 shadow-xl flex flex-col md:flex-row items-center gap-6 dark:bg-gray-300 ">
            {/* text section */}
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h1 className="text-3xl font-bold text-gray-800">Hi, Alex! 👋</h1>

              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                What are we doing today? Let’s explore the new features of our
                application.
              </p>

              {/* feature list */}
              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  { color: "border-blue-400", label: "Todo list" },
                  { color: "border-yellow-400", label: "Analytics" },
                  { color: "border-pink-400", label: "Messages" },
                  { color: "border-green-400", label: "Settings" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaChevronRight
                      size={18}
                      className={`border ${item.color} rounded-full p-1 text-gray-100 `}
                    />
                    <span className="text-xs font-semibold text-gray-600">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* image section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./bear.png"
                alt="Bear Illustration"
                className="w-55 md:w-56 object-contain"
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 bg-red-200">
          <p>Time weather</p>
        </div>
      </div>

      {/* botton list of features */}

      <div className="w-full flex justify-start items-center gap-5 p-10">
        {featuresData?.map((feature,indx) =>(
          <Features feature={feature} indx={indx} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
