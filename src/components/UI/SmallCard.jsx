import React from 'react'
import './style/Smallcard.css'
import bride1 from '../../assets/bride2.jpg';
import Button from './Button';

const SmallCard = () => {
  return (
    <div className='sm-container'>
        <div className='sm-image'>
            <img src={bride1} alt="" srcset="" />
        </div>
        <div className='sm-details'>
            <span>No Name</span>
            <div className='sm-btn'>
            <Button style={'outline'}>
            <i class="fa-regular fa-heart"></i>
            Send Interest
            </Button>
            <Button style={'outline'}>
            Remove
            </Button>
            </div>
        </div>
    </div>
  )
}

export default SmallCard