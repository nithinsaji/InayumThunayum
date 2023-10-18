import React from 'react'
import {  NavLink } from 'react-router-dom'
import SmallCard from '../UI/SmallCard'

const Onyou = () => {
  return (<>
  <div className="interest__nav">
        <NavLink to={''} end>Requested</NavLink>
        <NavLink to={'accepted'}>Accepted</NavLink>
        <NavLink to={'rejected'}>Rejected</NavLink>
      </div>
    <div className='shortlist'>
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  </>
  )
}

export default Onyou