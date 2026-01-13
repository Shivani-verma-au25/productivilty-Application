import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import MotivationalQuots from './components/MotivationalQuots'
import PromodromoTimer from './components/PromodromoTimer'
import DailyGoals from './components/DailyGoals'
import { Toaster } from './components/ui/sonner'
import NotFound from './components/NotFound'
import DailyPlanner from './components/DailyPlanner'

const App = () => {
  return (
    <div className='min-w-screen px-1 '>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/tasklist' element={<TaskList/>} />
          <Route path='/daliyplanner' element={<DailyPlanner/>} />
          <Route path='/motivationalquots' element={<MotivationalQuots/>} />
          <Route path='/pomodorotimer' element={<PromodromoTimer/>} />
          <Route path='/dailygoals' element={<DailyGoals/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>   
        <Toaster/> 
      </div>
  )
}

export default App