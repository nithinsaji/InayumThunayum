import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Onyou = () => {
  return (
    <>
      <div className="interest_sub">
        <NavLink to={""} end>
          Received
        </NavLink>
        <NavLink to={"accepted"}>Accepted</NavLink>
        <NavLink to={"rejected"}>Rejected</NavLink>
      </div>
      <div className="shortlist">
        <Outlet />
      </div>
    </>
  );
};

export default Onyou;
