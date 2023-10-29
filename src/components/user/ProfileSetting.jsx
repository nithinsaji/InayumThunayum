import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";
import UpdateImage from "./UpdateImage";
import UpdateProfile from "./UpdateProfile";

const ProfileSetting = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [edit, setEdit] = useState(false);

  const getProfile = async () => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      setUser(user);
      await UserService.getProfileAPI(user?.id).then((res) => {
        if(res.status === 'success')
            {setProfile(res.data);}else{
                console.log(res.message);
            }
      });
    } else {
      setUser({});
    }
  };

  useEffect(() => {
    setLoading(true);
    getProfile();
    setLoading(false);
  }, []);

  const tick = <i class="fa-solid fa-circle-check"></i>;
  return (
    <>
      {!loading && (
        <div className="view__profile-details">
            {!edit ? <>
              <button onClick={() => setEdit(true)}>Edit</button>
          <div className="details__conatiner">
            <UpdateImage id={user.id} />
            <h2 className="view__title">
              <i class="fa-solid fa-bars"></i>Basic Details
            </h2>
            <table>
              <tr>
                <td>Name :</td>
                <td>{user?.name}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>House Name :</td>
                <td>{profile?.house_name}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>{profile?.dob}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Mother Tongue</td>
                <td>{profile?.mother_tongue}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>{user?.mobile}</td>
                <td>{tick}</td>
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
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Caste :</td>
                <td>{profile?.caste}</td>
                <td>{tick}</td>
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
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Height :</td>
                <td>{profile?.height}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Weight :</td>
                <td>{profile?.weight}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>{profile?.blood_group}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Qualification :</td>
                <td>{profile?.qualification}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Occupation :</td>
                <td>{profile?.ocupation}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Any Disability :</td>
                <td>{profile?.disability}</td>
                <td>{tick}</td>
              </tr>
              <tr>
                <td>Nationality :</td>
                <td>{profile?.nationality}</td>
                <td>{tick}</td>
              </tr>
            </table>
          </div>
          </>: <UpdateProfile setEdit={setEdit} />}
        </div>
      )}
    </>
  );
};

export default ProfileSetting;