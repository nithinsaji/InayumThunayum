import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style/Interest.css'

const Interest = () => {
  
  return (
    <section className='Interest__container'>
      <div className="interest__nav">
      <NavLink to={'fromyou'}>My request</NavLink>
        <NavLink to={'onyou'} >Interested on you</NavLink>
      </div>
      <div className="Interest__outlet">
        <Outlet />
      </div>
    </section>
  )
}

export default Interest