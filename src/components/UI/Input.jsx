import React from 'react'
import './style/Input.css'

const Input = ({name, type}) => {
  return (
    <div className='input__box'>
        <input type={type} required/>
        <span>{name}</span>
    </div>
  )
}

export default Input