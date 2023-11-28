import React from 'react'
import { ButtonLoader } from './Loader'
import './style/Button.css'

const Button = ({children, onClick, style,loading}) => {
    return (
        <button className={`button ${style}`} onClick={onClick} >
            {children}{loading && <ButtonLoader />}
        </button>
    )
}

export default Button

export const Primary = ({children, onClick,loading}) => {
    return (
        <button className={`button gradient hover`} onClick={onClick} >
            {children}{loading && <ButtonLoader />}
        </button>
    )
}

export const Secondary = ({children, onClick,loading}) => {
    return (
        <button className={`button secondary`} onClick={onClick} >
            {children}{loading && <ButtonLoader />}
        </button>
    )
}
export const Delete = ({children, onClick,loading}) => {
    return (
        <button className={`button delete`} onClick={onClick} >
            {children}{loading && <ButtonLoader />}
        </button>
    )
}