import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  

  return (
    <div className="w-full h-full">
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
