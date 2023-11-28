import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UserService from "../../services/user.service";
import { Primary, Secondary } from "../UI/Button";
import Input from "../UI/Input";
import FullScreenLoading from "../UI/Loading";

const UpdateProfile = ({ setEdit }) => {
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")) || {});

  const navigate = useNavigate();

  const getProfile = async () => {
    if (user !== null && user !== undefined) {
      const data = await UserService.getProfileAPI(user?.id);
      setProfile({
        ...data,
        name: user.name,
        mobile: user.mobile,
        id: user.id,
      });
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

  const onSubmitHandler = async () => {
    setLoading(true)
    await UserService.updateProfileAPI(profile).then((res) => {
      if(res.status === 'success'){
        toast.success(res.message)
        setEdit(false)
      }else{
        toast.error(res.message)
      }
      setLoading(false)
    });
  };

  var dob = new Date(profile?.dob);
  dob.setDate(dob.getDate() + 1);


  const BasicDetailsInputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage:
        "Full Name shouldn't include any special character & numbers!",
      label: "Full Name",
      pattern: "^[A-Za-z ]{3,16}$",
      required: true,
      placeholder: "Enter your Full Name",
      defaultValue: user?.name,
    },
    {
      id: 2,
      name: "house_name",
      type: "text",
      label: "House Name",
      errorMessage:
        "House Name shouldn't include any special character & numbers!",
      pattern: "^[A-Za-z ]{3,16}$",
      placeholder: "Enter your House Name",
      defaultValue: profile?.house_name,
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      label: "D.O.B",
      errorMessage:
        "House Name shouldn't include any special character & numbers!",
      pattern: "^[A-Za-z ]{3,16}$",
      placeholder: "MM/dd/yyyy",
      defaultValue: profile?.dob && dob.toISOString().split('T')[0],
      required: true,
    },
    {
      id: 4,
      name: "mother_tongue",
      type: "text",
      label: "Mother Tongue",
      errorMessage:
        "Mother Tongue shouldn't include any special character & numbers!",
      pattern: "^[A-Za-z ]{3,16}$",
      placeholder: "Enter your Mother Tongue",
      defaultValue: profile?.mother_tongue,
    },
    {
      id: 5,
      name: "number",
      type: "tel",
      errorMessage: "It should not be a valid Mobile number!",
      label: "Mobile Number",
      pattern: "^[0-9]{10}$",
      required: true,
      placeholder: "eg :- 9876543210",
      defaultValue: user?.mobile,
    },
    {
      id: 6,
      name: "age",
      type: "number",
      label: "Age",
      errorMessage: "Age between 18 to 99",
      min: "18",
      max: "99",
      placeholder: "Enter your Age",
      required: true,
      defaultValue: profile?.age,
    },
  ];

  const ReligionDetailsInput = [
    {
      id: 1,
      name: "religion",
      type: "select",
      label: "Religion",
      options: ["Christian"],
      defaultValue: profile?.religion,
    },
    {
      id: 2,
      name: "caste",
      type: "select",
      label: "Caste",
      options: ["RC"],
      defaultValue: profile?.caste,
    },
  ];

  const PersonalDetailsInput = [
    {
      id: 1,
      name: "marital_status",
      type: "select",
      label: "Marital Status",
      options: ["First Marriage", "Second Marriage"],
      defaultValue: profile?.marital_status,
    },
    {
      id: 2,
      name: "height",
      type: "text",
      label: "Height",
      placeholder: "eg :- 180cm",
      defaultValue: profile?.height,
    },
    {
      id: 3,
      name: "weight",
      type: "text",
      label: "Weight",
      placeholder: "eg:- 65kg",
      defaultValue: profile?.weight,
    },
    {
      id: 4,
      name: "blood_group",
      type: "text",
      label: "Blood Group",
      placeholder: "eg:- A+",
      defaultValue: profile?.blood_group,
    },
    {
      id: 5,
      name: "qualification",
      type: "text",
      label: "Qualification",
      placeholder: "Enter your qualification",
      defaultValue: profile?.qualification,
    },
    {
      id: 6,
      name: "ocupation",
      type: "text",
      label: "Occupation",
      placeholder: "Enter your Job",
      defaultValue: profile?.ocupation,
    },
    {
      id: 7,
      name: "disability",
      type: "text",
      label: "Disability",
      placeholder: "eg:- Enter Normal or disability name",
      defaultValue: profile?.disability,
    },
    {
      id: 8,
      name: "nationality",
      type: "select",
      label: "Nationality",
      options: ["Indian"],
      defaultValue: profile?.nationality,
    },
  ];

  return (
        <>
          <div className="details__conatiner form__container">
            <h2 className="view__title">
              <i class="fa-solid fa-bars"></i>Basic Details
            </h2>
            {BasicDetailsInputs.map((info) => (
              <Input
                {...info}
                defaultValue={info.defaultValue}
                onChange={onChange}
              />
            ))}
            <div className="radio_group">
              <label htmlFor="">Gender</label>:
              <input
                type="radio"
                name="gender"
                value="male"
                id=""
                onChange={onChange}
                defaultChecked={profile?.gender === "male" && true}
              />
              <span>Male</span>
              <input
                type="radio"
                name="gender"
                value="female"
                id=""
                onChange={onChange}
                defaultChecked={profile?.gender === "female" && true}
              />
              <span>Female</span>
            </div>
          </div>
          <div className="details__conatiner">
            <h2 className="view__title">
              <i class="fa-solid fa-person-praying"></i>Religion Details
            </h2>
            {ReligionDetailsInput.map((info) => (
              <Input
                {...info}
                defaultValue={info.defaultValue}
                onChange={onChange}
              />
            ))}
          </div>
          <div className="details__conatiner form__container">
            <h2 className="view__title">
              <i class="fa-regular fa-user"></i>Personal Details
            </h2>
            {PersonalDetailsInput.map((info) => (
              <Input
                {...info}
                defaultValue={info.defaultValue}
                onChange={onChange}
              />
            ))}
          </div>
          <div className="btn_group">
            <Secondary onClick={() => setEdit(false)}>Cancel</Secondary>
            <Primary onClick={onSubmitHandler} loading={loading}>Update</Primary>
          </div>
        </>
  );
};

export default UpdateProfile;
