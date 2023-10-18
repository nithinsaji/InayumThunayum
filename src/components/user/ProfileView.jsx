import React from 'react'
import './style/profileview.css'
import bride1 from '../../assets/bride1.jpg'
import { useNavigate } from 'react-router-dom';

const ProfileView = () => {

    const navigate = useNavigate();

    const tick = <i class="fa-solid fa-circle-check"></i>

    return (
        <div className={`profileview`}>
            <div className='profileview__fixed'>
                <i class="fa-solid fa-chevron-left" onClick={() => navigate(-1)}></i>
                <span>No Name </span>
            </div>
            <div>
                <div className='view__container'>
                    <div className='view__scroll-image'>
                        <img src={bride1} alt="" srcset="" />
                    </div>
                    <div className='view__profile-details'>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-solid fa-bars"></i>Basic Details</h2>
                            <table>
                                <tr>
                                    <td>Name :</td>
                                    <td>No Name</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>House Name :</td>
                                    <td>House name</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>DOB</td>
                                    <td>1-1-1999</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Mother Tongue</td>
                                    <td>Malayalam</td>
                                    <td>{tick}</td>
                                </tr></table>
                        </div>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-solid fa-person-praying"></i>Religion Details</h2>
                            <table>
                                <tr>
                                    <td>Religion :</td>
                                    <td>Chirstian</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Caste :</td>
                                    <td>RC</td>
                                    <td>{tick}</td>
                                </tr></table>
                        </div>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-regular fa-user"></i>Personal Details</h2>
                            <table>
                                <tr>
                                    <td>Marital Status :</td>
                                    <td>Never Married</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Height :</td>
                                    <td>5.6 | 167cm</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Weight :</td>
                                    <td>55 kg</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>A+</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Qualification :</td>
                                    <td>MCA</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Occupation :</td>
                                    <td>Manager</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Any Disability :</td>
                                    <td>Normal</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Nationality :</td>
                                    <td>Indian</td>
                                    <td>{tick}</td>
                                </tr>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView