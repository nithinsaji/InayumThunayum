import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

const Fromyou = () => {
  return (
    <>
      <div className="interest__nav">
        <NavLink to={""} end>
          Requested
        </NavLink>
        <NavLink to={"accepted"}>Accepted</NavLink>
      </div>
      <div className="shortlist">
        <Outlet />
      </div>
    </>
  )
}

export default Fromyou