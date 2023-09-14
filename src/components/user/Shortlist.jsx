import React from 'react'
import './style/Shortlist.css'
import Card from '../UI/Card'
import bride1 from '../../assets/bride1.jpg'
import bride2 from '../../assets/bride2.jpg'
import bride3 from '../../assets/bride3.jpg'

const Shortlist = () => {
  return (
    <div className='shortlist__container'>
      <Card src={bride1}></Card>
      <Card src={bride2}></Card>
      <Card src={bride3}></Card>
      <Card src={bride1}></Card>
      <Card src={bride2}></Card>
      <Card src={bride3}></Card>
    </div>
  )
}

export default Shortlist