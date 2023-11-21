import React from 'react'
import './style/Home.css'
import hero from '../../assets/second.png'
import Button from '../UI/Button'
import { BannerText, ParagraphText } from '../UI/Text'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
        
            <div className="home__data">
                <BannerText>
                    Find Your
                    <div className="home__title-box">
                        <div>Perfect</div> Partner.
                    </div>
                </BannerText>
                <ParagraphText>
                    We bring people together. Love unites them...
                </ParagraphText>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button style={'gradient hover'}>
                    Get Started
                    <i class="fa-solid fa-arrow-right"></i>
                </Button>
                </Link>
            </div>
            <img src={hero} alt="home-image" srcset="" className='home__img' />
        </div>
    </section>
  )
}

export default Home