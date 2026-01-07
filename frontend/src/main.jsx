import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './Context/ThemeProvider'
import TaskProvider from './Context/TaskProvider'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <TaskProvider>
      <App />
      </TaskProvider>
    </ThemeProvider>
  </BrowserRouter>
)
