import { LuListTodo, LuCalendarCheck, LuQuote, LuTimer, LuTarget } from "react-icons/lu";

export const featuresData = [
  {
    icon: LuListTodo ,
    title: "All TODO's",
    description: "View and manage all your daily tasks easily.",
    color: "red",
    path:'/tasklist'
  },
  {
    icon: LuCalendarCheck,
    title: "Daily Planner",
    description: "Plan your day efficiently with scheduled tasks.",
    color: "blue",
    path:'/daliyplanner'
  },
  {
    icon: LuQuote,
    title: "Motivation Quotes",
    description: "Stay inspired with daily motivational quotes.",
    color: "yellow",
    path:'/motivationalquots'
  },
  {
    icon: LuTimer,
    title: "Pomodoro Timer",
    description: "Boost productivity using focused work sessions.",
    color: "pink",
    path:'/pomodorotimer'
  },
  {
    icon: LuTarget ,
    title: "Daily Goals",
    description: "Set, track, and achieve your daily goals.",
    color: "green",
    path:'/dailygoals'
  },

];
