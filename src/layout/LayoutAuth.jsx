import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutAuth() {
  return (
    <div className='h-screen bg-[#E0E7FF] flex items-center justify-center'>
        <Outlet/>
    </div>
  )
}

export default LayoutAuth