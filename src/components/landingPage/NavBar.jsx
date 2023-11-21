import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button, { Primary, Secondary } from '../UI/Button';
import './style/Navbar.css'

const NavBar = () => {
    const [Menu, setMenu] = useState(false);
    return (
        <header className='header' id='header'>
            <nav className="nav container">
                <a href="" className="nav__logo">Inayum & Thunayum</a>
                <div className={`nav__menu ${Menu && 'show-menu'}`} id='nav-menu'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link" onClick={() => setMenu(false)}>Home</Link>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={() => setMenu(false)}>About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#testimonial" className="nav__link" onClick={() => setMenu(false)}>Testimonial</a>
                        </li>
                        <li className="nav__item">
                            <Link to="/signin" style={{ textDecoration: "none" }} className="nav__logo" onClick={() => setMenu(false)}>
                            <Secondary>SignIn</Secondary>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/signup" style={{ textDecoration: "none" }} onClick={() => setMenu(false)}>
                                <Primary>
                                    SignUp
                                    <i class="fa-solid fa-arrow-right"></i>
                                </Primary>

                            </Link>
                        </li>

                    </ul>

                    {/* Close button */}
                    <div className="nav__close" onClick={() => setMenu(false)}>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>

                {/* Toggle Button */}
                <div className="nav__toggle" onClick={() => setMenu(true)}>
                    <i class="fa-solid fa-bars-staggered"></i>
                </div>
            </nav>
        </header>
    )
}

export default NavBar