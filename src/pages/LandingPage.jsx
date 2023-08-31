import React from 'react'
import About from '../components/landingPage/About'
import Footer from '../components/landingPage/Footer'
import Home from '../components/landingPage/Home'
import NavBar from '../components/landingPage/NavBar'
import Newsletter from '../components/landingPage/Newsletter'
import Testimonial from '../components/landingPage/Testimonial'

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>

  )
}

export default LandingPage