import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './style/Card.css'


const Card = ({ src }) => {
    return (
        <>
            <div className='profile__card'>
                <div className="profile__card-image">
                    <img src={src} alt="" srcset="" />
                </div>
                <div className="profile__card-content">
                    <div className='profile__top'>
                        <Button style={'glassy'}>
                            <i class="fa-solid fa-xmark"></i> ignore
                        </Button>
                        <Button style={'glassy'}>
                            <i class="fa-regular fa-images"></i> 3
                        </Button>
                    </div>
                    <div className='profile__bottom'>
                        <Link to='/Dashboard/profileview'>
                            <div className='profile__desc'>
                                <h1>No Name</h1>
                                <h4>Job role and job location</h4>
                                <h4> Age height feet/cm</h4>
                                <h4>Home details</h4>
                            </div></Link>
                        <div className='profile__btn'>
                            <Button style={'normal'}>
                                <i class="fa-solid fa-phone"></i>Call Now
                            </Button>
                            <Button style={'normal'}>
                                <i class="fa-regular fa-heart"></i>Send Interest
                            </Button><Button style={'normal'}>
                                <i class="fa-regular fa-star"></i>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card