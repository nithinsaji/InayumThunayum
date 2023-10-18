import React from 'react'
import './style/Button.css'

const Button = ({children, onClick, style}) => {
    return (
        <button className={`button ${style}`} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button