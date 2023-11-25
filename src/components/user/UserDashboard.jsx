import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import useLogout from '../../hooks/useLogout';
import logo from '../../assets/logo.png'

const UserDashboard = () => {
    const [open, setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));

    const logout = useLogout();

  return (
    <div>
            <div className={`sidebar ${open && 'open'}`}>
                <div className="logo-details">
                    <div className="logo_name">
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <i className={`bx ${open ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={() => setOpen(!open)}></i>
                </div>
                <ul className="nav-list">
                    <li onClick={() => setOpen(false)}>
                        <Link to=''>
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Home</span>
                        </Link>
                        <span className="tooltip">Home</span>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link to='search'>
                            <i className='bx bx-user' ></i>
                            <span className="links_name">Search</span>
                        </Link>
                        <span className="tooltip">Search</span>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link to='interest/fromyou'>
                        <i class="fa-regular fa-heart"></i>
                            <span className="links_name">Interest</span>
                        </Link>
                        <span className="tooltip">Interest</span>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link to='shortlist'>
                        <i class="fa-regular fa-star"></i>
                            <span className="links_name">Shortlist</span>
                        </Link>
                        <span className="tooltip">Shortlist</span>
                    </li>

                    <li onClick={() => setOpen(false)}>
                    <Link to='settings'>
                            <i className='bx bx-cog' ></i>
                            <span className="links_name">Setting</span>
                        </Link>
                        <span className="tooltip">Setting</span>
                    </li>
                    <li className='logout' onClick={logout}>
                        <i className='bx bx-log-out'></i>
                        <span className="links_name">Log out</span>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <nav className='dash-nav'></nav>
                <Outlet />
            </section>

        </div>
  )
}

export default UserDashboard