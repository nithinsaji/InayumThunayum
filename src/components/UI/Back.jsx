import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/back.css'

const Back = ({title}) => {
    const navigate = useNavigate();
  return (
    <div className='back'>
        <i class="fa-solid fa-chevron-left" onClick={()=> navigate(-1)}></i>
        <div className="back-title">
            {title}
        </div>
    </div>
  )
}

export default Back