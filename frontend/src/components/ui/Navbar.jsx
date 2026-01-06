import { useTheme } from "@/themeContext/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import React from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="max-w-7xl bg-gray-100  mx-auto dark:bg-gray-800  shadow-md rounded-b-2xl ">
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-200">Productivity App</div>
        <div className="flex justify-center  items-center gap-5">
          <button 
          onClick={toggleTheme}
          className="cursor-pointer hover:scale-105 transition-scale duration-300">
            {theme === "light" ? (
              <Moon className="text-gray-800" size={20} />
            ) : (
              <Sun className="text-white" size={20} />
            )}
          </button>
          <div className="flex  items-end gap-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full hover:scale-105 transition-scale duration-300 cursor-pointer"
              src="https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww"
              alt=""
            />
            <p className="text-xs font-semibold tracking-tighter text-gray-500">
              Name
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
