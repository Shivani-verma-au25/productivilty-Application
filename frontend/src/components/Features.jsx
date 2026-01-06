import React from "react";
import { useNavigate } from "react-router-dom";

const Features = ({feature}) => {
    const { icon: Icon, title, description, color,path } = feature;
    const navigate = useNavigate()
      

  return (
    <div 
    onClick={()=>navigate(path)}
    className="group w-40 bg-white rounded-xl shadow-md p-4 flex flex-col items-start gap-3 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* icon */}
      <div className={`p-2 rounded-lg bg-${color}-50 group-hover:bg-${color}-100 transition-colors`}>
        <Icon
          size={28}
          className={`text-${color}-500 group-hover:text-${color}-500 transition-colors`}
        />

      </div>

      {/* text */}
      <p className="text-sm font-semibold text-gray-700">
        {title}
      </p>

      <span className="text-xs text-gray-500 leading-tight">
        {description}
      </span>
    </div>
  );
};

export default Features;
