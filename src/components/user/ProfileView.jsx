import React from 'react'
import './style/profileview.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from '../UI/Card';

const ProfileView = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const details = location.state

    const tick = <i class="fa-solid fa-circle-check"></i>
    

    return (
        <div className={`profileview`}>
            <div className='profileview__fixed'>
                <i class="fa-solid fa-chevron-left" onClick={() => navigate(-1)}></i>
                <span>Back</span>
            </div>
            <div>
                <div className='view__container'>
                    <div className='view__scroll-image'>
                        <Carousel details={details} />
                    </div>
                    <div className='view__profile-details'>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-solid fa-bars"></i>Basic Details</h2>
                            <table>
                                <tr>
                                    <td>Name :</td>
                                    <td>{details.name}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>House Name :</td>
                                    <td>{details.house_name}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>{details.age}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>DOB</td>
                                    <td>{details.dob}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Mother Tongue</td>
                                    <td>{details.mother_tongue}</td>
                                    <td>{tick}</td>
                                </tr></table>
                        </div>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-solid fa-person-praying"></i>Religion Details</h2>
                            <table>
                                <tr>
                                    <td>Religion :</td>
                                    <td>{details.religion}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Caste :</td>
                                    <td>{details.caste}</td>
                                    <td>{tick}</td>
                                </tr></table>
                        </div>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-regular fa-user"></i>Personal Details</h2>
                            <table>
                                <tr>
                                    <td>Marital Status :</td>
                                    <td>{details.marital_status}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Height :</td>
                                    <td>{details.height}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Weight :</td>
                                    <td>{details.weight}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>{details.blood_group}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Qualification :</td>
                                    <td>{details.qualification}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Occupation :</td>
                                    <td>{details.ocupation}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Any Disability :</td>
                                    <td>{details.disability}</td>
                                    <td>{tick}</td>
                                </tr>
                                <tr>
                                    <td>Nationality :</td>
                                    <td>{details.nationality}</td>
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