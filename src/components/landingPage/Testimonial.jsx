import React from 'react'
import hero from '../../assets/second.png'
import './style/Testimonial.css'

const Testimonial = () => {
    return (
        <section className='testimonial' id='testimonial'>
            <div className="list__container container grid">
                <div className="list__content">
                    <h5>Testimonials</h5>
                    <h1>
                        What Our Client Says About Us.
                    </h1>
                    <div className="card__list">
                    <div className="card">
                        <i class="fa-solid fa-quote-left"></i>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nihil, quas doloribus corrupti architecto itaque. </p>
                        <i class="fa-solid fa-quote-right"></i>
                        <div>
                        <img src={hero} alt="home-image" srcset="" className='card__image' />
                        <span>Demo User</span>
                        </div>
                        
                    </div>
                    
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial