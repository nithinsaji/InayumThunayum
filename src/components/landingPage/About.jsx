import React from 'react'
import './style/About.css'
import hero from '../../assets/hero.png'
import ring from '../../assets/ring.png'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="list__container container grid">
            <div className="list__content">
                <h5>About Us</h5>
                <h1>
                    Your Business Success Built On A Powerful Customer Experience Platform
                </h1>
                <p className="home__description">
                    We bring people together. Love unites them...
                </p>
                <div className="home__box">
                    <div>
                        <h3>300+</h3>
                        <span>Grooms</span>
                    </div>
                    <div>
                        <h3>100+</h3>
                        <span>Brides</span>
                    </div>
                    <div>
                        <h3>30+</h3>
                        <span>Engaged</span>
                    </div>
                </div>
            </div>
            <img src={hero} alt="home-image" srcset="" className='home__img' />
        </div>
        <div className="list__container container grid">
            <div className="list__content">
                <h5>How it works</h5>
                <h1>
                    Simplify Your Search In 3 Easy Steps
                </h1>
                <p className="home__description">
                    Here is how to use our service.
                </p>
            </div>
            <div className="grid">
            <div className="list__content">
            <i class="fa-regular fa-clipboard icon"></i>
                <h1>
                    Register
                </h1>
                <p className="home__description">
                    Here is how to use our service.
                </p>
            </div>
            <div className="list__content">
            <i class="fa-solid fa-magnifying-glass icon"></i>
                <h1>
                    Search & Connect
                </h1>
                <p className="home__description">
                    Here is how to use our service.
                </p>
            </div>
            <div className="list__content">
            <i class="fa-solid fa-handshake icon"></i>
                <h1>
                    Meet & Marry
                </h1>
                <p className="home__description">
                    Here is how to use our service.
                </p>
            </div>
            </div>
        </div>
        <div className="list__container container grid">
            <div className="list__content">
                <h5>Why Us</h5>
                <h1>
                    Why Choose My Matrimony?
                </h1>
                <p className="home__description">
                    Here why lots of people choose my Matrimony.
                </p>
            </div>
            <div className="grid">
            <div className="list__content">
            <i class="fa-solid fa-user-pen icon"></i>
                <h1>
                    Simple to use
                </h1>
                <p className="home__description">
                    Here is how to use our service.
                </p>
            </div>
            <div className="list__content">
            <i class="fa-regular fa-compass icon"></i>
                <h1>
                    Smart Matching
                </h1>
                <p className="home__description">
                    Here is how to use our service.
                </p>
            </div>
            <div className="list__content">
            <i class="fa-regular fa-comment-dots icon"></i>
                <h1>
                    Cool Community
                </h1>
                <p className="home__description">
                    Here is how to use our service.
                </p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About