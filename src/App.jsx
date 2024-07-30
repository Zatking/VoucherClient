import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './page/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  

  return (
    <div className="w-full h-full">
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default App
