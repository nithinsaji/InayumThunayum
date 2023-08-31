import React from 'react'
import './style/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div>
                        <a href="" className="footer__logo">My Matrimony</a>
                        <p className="footer__description">
                            Find your perfect partner.
                        </p>
                    </div>
                    <div className="footer__data grid">
                        <div>
                            <h3 className="footer__title">
                                Address
                            </h3>
                            <p className="footer__info">
                                12345, Ambalamoola, <br /> Gudalur, Tamilnadu.
                            </p>
                        </div>
                        <div>
                            <h3 className="footer__title">
                                Contact
                            </h3>
                            <p className="footer__info">
                                +91 12345 67890 <br />
                                mymatri@gmail.com
                            </p>
                        </div>
                        <div>
                            <h3 className="footer__title">
                                office
                            </h3>
                            <p className="footer__info">
                                Monday - Sunday <br />
                                9AM - 10PM
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="footer__group">
                        <ul className="footer__social">
                            <li>
                                <a href="" className="footer__social-link">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                </li>
                                <li>
                                <a href="" className="footer__social-link">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                </li>
                                <li>
                                <a href="" className="footer__social-link">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </a>
                                </li>
                                <li>
                                <a href="" className="footer__social-link">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                        <span className="footer__copy">
                            &#169; Copyright MyMatrimony. All rights reserved.
                        </span>
                    </div>
            </div>
        </footer>
    )
}

export default Footer