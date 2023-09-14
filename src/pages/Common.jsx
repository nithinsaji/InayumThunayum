import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/landingPage/Footer'
import NavBar from '../components/landingPage/NavBar'

const Common = () => {
  return (
    <>
    <NavBar />
        <Outlet />
    <Footer />
    </>
  )
}

export default Common