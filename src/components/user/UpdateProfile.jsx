import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";

const UpdateProfile = ({setEdit}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    let user = localStorage.getItem("user");
    if (user != null && user != undefined) {
      user = JSON.parse(user);
      setUser(user);
      await UserService.getProfileAPI(user?.id).then((res) => {
        if (res.status === "success") {
          setProfile({...res.data,name : user.name,mobile : user.mobile,id : user.id});
        } else {
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

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async() =>{
    await UserService.updateProfileAPI(profile).then((res) => {
        console.log(res?.message);
        })
      };

  const BasicDetailsInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Name",
      defaultValue: user?.name,
    },
    {
      id: 2,
      name: "house_name",
      type: "text",
      label: "House Name",
      defaultValue: profile?.house_name,
    },
    {
      id: 3,
      name: "dob",
      type: "text",
      label: "D.O.B",
      defaultValue: profile?.dob,
    },
    {
      id: 4,
      name: "mother_tongue",
      type: "text",
      label: "Mother Tongue",
      defaultValue: profile?.mother_tongue,
    },
    {
      id: 5,
      name: "mobile",
      type: "tel",
      label: "Mobile Number",
      defaultValue: user?.mobile,
    },
    {
      id: 6,
      name: "age",
      type: "number",
      label: "Age",
      defaultValue: profile?.age,
    }
  ];

  const ReligionDetailsInput = [
    {
      id: 1,
      name: "religion",
      type: "text",
      label: "Religion",
      defaultValue: profile?.religion,
    },
    {
      id: 2,
      name: "caste",
      type: "text",
      label: "Caste",
      defaultValue: profile?.caste,
    },
  ];

  const PersonalDetailsInput = [
    {
      id: 1,
      name: "marital_status",
      type: "text",
      label: "Marital Status",
      defaultValue: profile?.marital_status,
    },
    {
      id: 2,
      name: "height",
      type: "text",
      label: "Height",
      defaultValue: profile?.height,
    },
    {
        id: 3,
        name: "weight",
        type: "text",
        label: "Weight",
        defaultValue: profile?.weight,
      },
      {
        id: 4,
        name: "blood_group",
        type: "text",
        label: "Blood Group",
        defaultValue: profile?.blood_group,
      },{
        id: 5,
        name: "qualification",
        type: "text",
        label: "Qualification",
        defaultValue: profile?.qualification,
      },
      {
        id: 6,
        name: "ocupation",
        type: "text",
        label: "Occupation",
        defaultValue: profile?.ocupation,
      },
      {
        id: 7,
        name: "disability",
        type: "text",
        label: "Disability",
        defaultValue: profile?.disability,
      },
      {
        id: 8,
        name: "nationality",
        type: "text",
        label: "Nationality",
        defaultValue: profile?.nationality,
      },
  ];

  return (
    <>
      {!loading && <>
          <div className="details__conatiner">
            <h2 className="view__title">
              <i class="fa-solid fa-bars"></i>Basic Details
            </h2>
            <table>
            <tbody>
              {BasicDetailsInputs.map((info) => (
                <tr key={info.id}>
                  <td>{info.label}</td>
                  <td>
                    :&nbsp;
                    <input
                      type={info.type}
                      name={info.name}
                      defaultValue={info.defaultValue}
                      onChange={onChange}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td>Gender</td>
                <td>
                  <input type="radio" name="gender" value="male" id="" onChange={onChange}/>Male
                  <input type="radio" name="gender" value="female" id="" onChange={onChange}/>Female
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="details__conatiner">
            <h2 className="view__title">
              <i class="fa-solid fa-person-praying"></i>Religion Details
            </h2>
            <table>
            <tbody>
              {ReligionDetailsInput.map((info) => (
                <tr key={info.id}>
                  <td>{info.label}</td>
                  <td>
                    :&nbsp;
                    <input
                      type={info.type}
                      name={info.name}
                      defaultValue={info.defaultValue}
                      onChange={onChange}
                    />
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="details__conatiner">
            <h2 className="view__title">
              <i class="fa-regular fa-user"></i>Personal Details
            </h2>
            <table>
            <tbody>
            {PersonalDetailsInput.map((info) => (
                <tr key={info.id}>
                  <td>{info.label}</td>
                  <td>
                    :&nbsp;
                    <input
                      type={info.type}
                      name={info.name}
                      defaultValue={info.defaultValue}
                      onChange={onChange}
                    />
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <button onClick={() => setEdit(false)}>Cancel</button>
          <button onClick={onSubmitHandler}>Update</button>
</>
      }
    </>
  );
};

export default UpdateProfile;

