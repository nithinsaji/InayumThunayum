import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import useLogout from '../../hooks/useLogout';

const UserDashboard = () => {
    const [open, setOpen] = useState(false);

    const logout = useLogout();

  return (
    <div>
            <div className={`sidebar ${open && 'open'}`}>
                <div className="logo-details">
                    <div className="logo_name">LOGO</div>
                    <i className={`bx ${open ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={() => setOpen(!open)}></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <Link to=''>
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Home</span>
                        </Link>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <Link to='search'>
                            <i className='bx bx-user' ></i>
                            <span className="links_name">Search</span>
                        </Link>
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <Link to='interest/fromyou'>
                        <i class="fa-regular fa-heart"></i>
                            <span className="links_name">Interest</span>
                        </Link>
                        <span className="tooltip">Interest</span>
                    </li>
                    <li>
                        <Link to='shortlist'>
                        <i class="fa-regular fa-star"></i>
                            <span className="links_name">Shortlist</span>
                        </Link>
                        <span className="tooltip">Shortlist</span>
                    </li>

                    <li>
                    <Link to='settings'>
                            <i className='bx bx-cog' ></i>
                            <span className="links_name">Setting</span>
                        </Link>
                        <span className="tooltip">Setting</span>
                    </li>
                    <li className={`profile ${open && 'open'}`}>
                        <div className="profile-details">
                            <img src="profile.jpg" alt="profileImg" />
                            <div className="name_job">
                                <div className="name">Prem Shahi</div>
                                <div className="job">Web designer</div>
                            </div>
                        </div>
                        <i className='bx bx-log-out' id="log_out" onClick={logout}></i>
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