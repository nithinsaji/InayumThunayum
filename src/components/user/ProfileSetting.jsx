import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";
import Button from "../UI/Button";
import UpdateImage from "./UpdateImage";
import UpdateProfile from "./UpdateProfile";

const ProfileSetting = () => {
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")) || {});
  const [edit, setEdit] = useState(false);

  const getProfile = async () => {
    if (user != null && user != undefined) {
      const data = await UserService.getProfileAPI(user?.id);
      setProfile(data);
    } 
  };

  useEffect(() => {
    setLoading(true);
    getProfile();
    setLoading(false);
  }, [edit]);

  var dob = new Date(profile?.dob);
  dob?.setDate(dob?.getDate() + 1);

  return (
    <>
      {!loading && (
        <div className="view__profile-details">
          {!edit ? (
            <>
              <Button style={'glassy'} onClick={() => setEdit(true)}>Edit</Button>
              <div className="image__conatiner">
                <UpdateImage id={user.id} images={profile?.images} />
              </div>
              <div className="profile_container">
              <div className="details__conatiner">
                <h2 className="view__title">
                  <i class="fa-solid fa-bars"></i>Basic Details
                </h2>
                <table>
                  <tr>
                    <td>Name :</td>
                    <td>{user?.name}</td>
                  </tr>
                  <tr>
                    <td>House Name :</td>
                    <td>{profile?.house_name}</td>
                  </tr>
                  <tr>
                    <td>DOB</td>
                    <td>{profile?.dob && dob?.toISOString().split('T')[0]}</td>
                  </tr>
                  <tr>
                    <td>Mother Tongue</td>
                    <td>{profile?.mother_tongue}</td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>{user?.mobile}</td>
                  </tr>
                </table>
              </div>
              <div className="details__conatiner">
                <h2 className="view__title">
                  <i class="fa-solid fa-person-praying"></i>Religion Details
                </h2>
                <table>
                  <tr>
                    <td>Religion :</td>
                    <td>{profile?.religion}</td>
                  </tr>
                  <tr>
                    <td>Caste :</td>
                    <td>{profile?.caste}</td>
                  </tr>
                </table>
              </div>
              <div className="details__conatiner">
                <h2 className="view__title">
                  <i class="fa-regular fa-user"></i>Personal Details
                </h2>
                <table>
                  <tr>
                    <td>Marital Status :</td>
                    <td>{profile?.marital_status}</td>
                  </tr>
                  <tr>
                    <td>Height :</td>
                    <td>{profile?.height}</td>
                  </tr>
                  <tr>
                    <td>Weight :</td>
                    <td>{profile?.weight}</td>
                  </tr>
                  <tr>
                    <td>Blood Group</td>
                    <td>{profile?.blood_group}</td>
                  </tr>
                  <tr>
                    <td>Qualification :</td>
                    <td>{profile?.qualification}</td>
                  </tr>
                  <tr>
                    <td>Occupation :</td>
                    <td>{profile?.ocupation}</td>
                  </tr>
                  <tr>
                    <td>Any Disability :</td>
                    <td>{profile?.disability}</td>
                  </tr>
                  <tr>
                    <td>Nationality :</td>
                    <td>{profile?.nationality}</td>
                  </tr>
                </table>
              </div>
              </div>
            </>
          ): (
            <UpdateProfile setEdit={setEdit} />
          )}
        </div>
      )}
    </>
  );
};

export default ProfileSetting;
