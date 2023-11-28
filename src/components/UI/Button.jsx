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

export const Primary = ({children, onClick}) => {
    return (
        <button className={`button gradient hover`} onClick={onClick} >
            {children}
        </button>
    )
}

export const Secondary = ({children, onClick}) => {
    return (
        <button className={`button secondary`} onClick={onClick} >
            {children}
        </button>
    )
}
export const Delete = ({children, onClick}) => {
    return (
        <button className={`button delete`} onClick={onClick} >
            {children}
        </button>
    )
}