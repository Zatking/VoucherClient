import Create from './page/CreateVoucher'
import './App.css'
import GetListVoucher from './page/GetListVoucher'
import React from 'react'
import { Outlet } from 'react-router-dom'
const App = () => {
  

  return (
    <div className="w-full h-full">
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
