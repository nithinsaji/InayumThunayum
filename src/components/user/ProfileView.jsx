import React from 'react'
import './style/profileview.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from '../UI/Card';
import Back from '../UI/Back';

const ProfileView = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const details = location.state

    const tick = <i class="fa-solid fa-circle-check"></i>

    var dob = new Date(details?.dob);
    dob?.setDate(dob?.getDate() + 1);

    return (
        <div className={`profileview`}>
            <Back title={details.name}/>
            <div>
                <div className='view__container'>
                    <div className='view__scroll-image'>
                        <Carousel image={details?.images} />
                    </div>
                    <div className='view__profile-details'>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-solid fa-bars"></i>Basic Details</h2>
                            <table>
                                <tr>
                                    <td>Name :</td>
                                    <td>{details.name}</td>
                                    {details.name && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>House Name :</td>
                                    <td>{details.house_name}</td>
                                    {details.house_name && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>{details.age}</td>
                                    {details.age && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>DOB</td>
                                    <td>{details?.dob && dob?.toISOString().split('T')[0]}</td>
                                    {details?.dob && dob?.toISOString().split('T')[0] && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Mother Tongue</td>
                                    <td>{details.mother_tongue}</td>
                                    {details.mother_tongue && <td>{tick}</td>}
                                </tr></table>
                        </div>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-solid fa-person-praying"></i>Religion Details</h2>
                            <table>
                                <tr>
                                    <td>Religion :</td>
                                    <td>{details.religion}</td>
                                    {details.religion && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Caste :</td>
                                    <td>{details.caste}</td>
                                    {details.caste && <td>{tick}</td>}
                                </tr></table>
                        </div>
                        <div className="details__conatiner">
                            <h2 className="view__title"><i class="fa-regular fa-user"></i>Personal Details</h2>
                            <table>
                                <tr>
                                    <td>Marital Status :</td>
                                    <td>{details.marital_status}</td>
                                    {details.marital_status && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Height :</td>
                                    <td>{details.height}</td>
                                    {details.height && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Weight :</td>
                                    <td>{details.weight}</td>
                                    {details.weight && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>{details.blood_group}</td>
                                    {details.blood_group && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Qualification :</td>
                                    <td>{details.qualification}</td>
                                    {details.qualification && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Occupation :</td>
                                    <td>{details.ocupation}</td>
                                    {details.ocupation && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Any Disability :</td>
                                    <td>{details.disability}</td>
                                    {details.disability && <td>{tick}</td>}
                                </tr>
                                <tr>
                                    <td>Nationality :</td>
                                    <td>{details.nationality}</td>
                                    {details.nationality && <td>{tick}</td>}
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