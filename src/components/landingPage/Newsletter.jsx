import React from 'react'
import './style/Newsletter.css'

const Newsletter = () => {
  return (
    <section className='join section'>
      <div className="join__container container grid">
        <div className="join__content">
          <div>
            <h2 className='join__title'>
              Join Our Newsletter
            </h2>
            <p className='join__description'>Subscribe our newsletter to be aware of many things on discounts, gifts, training and much more. Just enter your email.</p>
          </div>
          <form action="" className="join__form">
            <input type="text" placeholder='Enter your email here...' className='join__input' />
            <button className="button join__button">
              Subscribe <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter