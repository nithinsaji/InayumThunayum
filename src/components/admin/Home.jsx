import React, { useEffect, useState } from 'react'
import './style/Home.css'
import groom from '../../assets/groom.png'
import bride from '../../assets/bride.png'
import AdminService from '../../services/admin.service';

var total = null;
const Home = () => {
    const [loading, setloading] = useState(true);
    const getTotal = async() =>{
        setloading(true)
        await AdminService.getTotalAPI().then(
          (res) => {
            total = res.data;
            console.log(total);
            setloading(false)
          }
        )
        
      }

    useEffect(() => {
        getTotal();
    }, [])
    
    return (
        <section className=''>
            {!loading && <div className="card__section">
                <div className="card__container">
                    <div className="card__label">
                        <h1>{total?.groom || 0}</h1>
                        <span>Grooms</span>
                    </div>
                    <div className="card__image">
                        <img className="card__image" src={groom} alt="" />
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__label">
                        <h1>{total?.bride || 0}</h1>
                        <span>Brides</span>
                    </div>
                    <div >
                        <img className="card__image" src={bride} alt="" />
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__label">
                        <h1>{total?.unknown || 0}</h1>
                        <span>Unknown Users</span>
                    </div>
                    <div className="card__image">
                        <img className="card__image" src={groom} alt="" />
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__label">
                        <h1>{total?.total || 0}</h1>
                        <span>Total Members</span>
                    </div>
                    <div className="card__image">
                        <img className="card__image" src={groom} alt="" />
                    </div>
                </div>
            </div>}
        </section>
    )
}

export default Home