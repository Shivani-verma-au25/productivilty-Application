import React, { createContext, useContext, useEffect, useState } from 'react'
export const ThemeContext = createContext()



const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState('light');


  // load theme from local storage
  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  },[])

  // toggle dark theme
  const toggleTheme = ()=>{
    const newTheme = theme === 'light'? 'dark' : 'light';
    setTheme(newTheme);

    document.documentElement.classList.toggle('dark',newTheme === 'dark');
    localStorage.setItem('theme',newTheme);
  }


  return (
    <ThemeContext.Provider value={{theme , setTheme, toggleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider


 // custom hook to toggle theme
 export const useTheme = () =>{
  return useContext(ThemeContext);
 }