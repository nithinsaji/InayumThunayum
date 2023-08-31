import React from 'react'
import './style/Home.css'
import hero from '../../assets/second.png'
import Search from '../landingPage/Search'

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
            <div className="home__data">
                <h1 className="home__title">
                    Find Your
                    <div className="home__title-box">
                        <div>Perfect</div> Partner.
                    </div>
                </h1>
                <p className="home__description">
                    We bring people together. Love unites them...
                </p>
                <a href="" className="button">
                    Get Started <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <img src={hero} alt="home-image" srcset="" className='home__img' />
        </div>
        <Search />
    </section>
  )
}

export default Home