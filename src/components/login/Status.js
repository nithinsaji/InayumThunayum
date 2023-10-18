import React from 'react'
import { useLocation } from 'react-router-dom'

const Status = () => {
    const {state} = useLocation();
    const {status} = state;
  return (
    <div className='container status'>
        <h1>Inayum Thunayum</h1>
        <h2>Account {status}</h2>
    </div>
  )
}

export default Status