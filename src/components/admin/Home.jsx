import React from 'react'
import './style/Home.css'
import groom from '../../assets/groom.png'
import bride from '../../assets/bride.png'

const Home = () => {
    return (
        <section className=''>
            <div className="card__section">
                <div className="card__container">
                    <div className="card__label">
                        <h1>30</h1>
                        <span>Grooms</span>
                    </div>
                    <div className="card__image">
                        <img className="card__image" src={groom} alt="" />
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__label">
                        <h1>30</h1>
                        <span>Brides</span>
                    </div>
                    <div >
                        <img className="card__image" src={bride} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home