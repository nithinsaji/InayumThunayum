import React from 'react'
import './style/About.css'
import hero from '../../assets/hero.png'
import { ParagraphText, TitleText } from '../UI/Text'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="list__container container grid">
            <div className="list__content">
                <h5>About Us</h5>
                <TitleText>
                    Your Business Success Built On A Powerful Customer Experience Platform
                </TitleText>
                <ParagraphText className="home__description">
                    We bring people together. Love unites them...
                </ParagraphText>
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
        <div className="list__container container">
            <div className="list__content">
                <h5>How it works</h5>
                <TitleText>
                    Simplify Your Search In 3 Easy Steps
                </TitleText>
                <ParagraphText className="home__description">
                    Here is how to use our service.
                </ParagraphText>
            </div>
            <div className="process_flex">
            <div className="list__content">
            <i class="fa-regular fa-clipboard icon"></i>
                <TitleText>
                    Register
                </TitleText>
                <ParagraphText className="home__description">
                    Here is how to use our service.
                </ParagraphText>
            </div>
            <div className="list__content">
            <i class="fa-solid fa-magnifying-glass icon"></i>
                <TitleText>
                    Search & Connect
                </TitleText>
                <ParagraphText className="home__description">
                    Here is how to use our service.
                </ParagraphText>
            </div>
            <div className="list__content">
            <i class="fa-solid fa-handshake icon"></i>
                <TitleText>
                    Meet & Marry
                </TitleText>
                <ParagraphText className="home__description">
                    Here is how to use our service.
                </ParagraphText>
            </div>
            </div>
        </div>
        <div className="list__container container grid">
            <div className="list__content">
                <h5>Why Us</h5>
                <TitleText>
                    Why Choose My Matrimony?
                </TitleText>
                <ParagraphText className="home__description">
                    Here why lots of people choose my Matrimony.
                </ParagraphText>
            </div>
            <div className="grid">
            <div className="list__content">
            <i class="fa-solid fa-user-pen icon"></i>
                <TitleText>
                    Simple to use
                </TitleText>
                <ParagraphText className="home__description">
                    Here is how to use our service.
                </ParagraphText>
            </div>
            <div className="list__content">
            <i class="fa-regular fa-compass icon"></i>
                <TitleText>
                    Smart Matching
                </TitleText>
                <ParagraphText className="home__description">
                    Here is how to use our service.
                </ParagraphText>
            </div>
            <div className="list__content">
            <i class="fa-regular fa-comment-dots icon"></i>
                <TitleText>
                    Cool Community
                </TitleText>
                <ParagraphText className="home__description">
                    Here is how to use our service.
                </ParagraphText>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About