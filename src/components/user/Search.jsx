import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../../services/user.service';
import './style/Search.css'

const Search = () => {
  const [values, setValues] = useState({
    from: "",
    to: "",
    status: "",
    religion:""
  });

  const [loading , setLoading] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var profile = localStorage.getItem('profile');
    const gender = JSON.parse(profile);
    console.log(gender);
    const genders = gender?.gender == 'male' ? 'female':'male';
     console.log(genders);
    setLoading(true)
    
    await UserService.searchAPI(genders, values).then(
      (response) => {
        console.log(response)
        setLoading(false)
          navigate('/Dashboard/');
      }
    )
    
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section class="searchcontainer">
      <header>Search Your Partner</header>
      <form class="form" onSubmit={handleSubmit}> 

        <div class="input-box">
          <label>Age</label>
          <div class="column">
            <input type="number" min='18' max='98' placeholder="from" required onChange={onChange} name="from"/>
            <input type="number" min='19' max='99' placeholder="to" required onChange={onChange} name="to"/>
          </div>
        </div>
        <div class="input-box">
          <label>Place</label>
          <div class="select-box">
              <select onChange={onChange} name="place" >
                <option hidden>Place</option>
                <option>Nilgiris</option>
                <option>Malapuram</option>
                <option>Wayanad</option>
                <option>Kozhikode</option>
              </select>
            </div>
            </div>
            <div class="input-box">
          <label>Marital Status</label>
          <div class="select-box">
              <select onChange={onChange} name="status">
                <option hidden>Choose</option>
                <option>Never Married</option>
                <option>second Marriage</option>
              </select>
            </div>
            </div>
            <div class="input-box">
          <label>Religion</label>
          <div class="select-box">
              <select onChange={onChange} name="religion">
                <option hidden>Religion</option>
                <option>Christian</option>
              </select>
            </div>
            </div>
        <button>Search</button>
      </form>
    </section>
  )
}

export default Search