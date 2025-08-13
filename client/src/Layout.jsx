import React from 'react'
import NavBar from './ui/NavBar'
import Footer from './ui/Footer'
import {Outlet} from 'react-router'
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <NavBar/>
      <div className="flex-grow ">
        
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout