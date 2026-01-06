import React from 'react'
import Navbar from './components/ui/Navbar'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import DaliyPlanner from './components/DaliyPlanner'
import MotivationalQuots from './components/MotivationalQuots'
import PromodromoTimer from './components/PromodromoTimer'
import DailyGoals from './components/DailyGoals'
import { Toaster } from './components/ui/sonner'

const App = () => {
  return (
    <div className='min-w-screen'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/tasklist' element={<TaskList/>} />
          <Route path='/daliyplanner' element={<DaliyPlanner/>} />
          <Route path='/motivationalquots' element={<MotivationalQuots/>} />
          <Route path='/pomodorotimer' element={<PromodromoTimer/>} />
          <Route path='/dailygoals' element={<DailyGoals/>} />

        </Routes>   
        <Toaster/> 
      </div>
  )
}

export default App