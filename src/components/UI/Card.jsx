import React from 'react'
import './style/Card.css'


const Card = ({ src }) => {
    return (
        <div className='profile__card' >
            <div className="profile__card-image">
                <img src={src} alt="" srcset="" />
            </div>
            <div className="profile__card-content">
                <div className='profile__top'>
                    <span><i class="fa-solid fa-xmark"></i> ignore</span>
                    <span><i class="fa-regular fa-images"></i> 3</span>
                </div>
                <div className='profile__bottom'>
                    <div className='profile__desc'>
                        <h1>No Name</h1>
                        <h4>Job role and job location</h4>
                        <h4> Age height feet/cm</h4>
                        <h4>Home details</h4>
                    </div>
                    <div className='profile__btn'>
                        <a className='card__button'>
                        <i class="fa-solid fa-phone"></i>Call Now
                        </a>
                        <a className='card__button'>
                        <i class="fa-regular fa-heart"></i>Send Interest
                        </a>
                        <a className='card__button'>
                            <i class="fa-regular fa-star"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card