import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UserService from "../../services/user.service";
import { Secondary } from "../UI/Button";
import { ButtonLoader } from "../UI/Loader";
import Modal from "../UI/Modal";
import { ParagraphText } from "../UI/Text";
import "./style/Search.css";

const Search = () => {
  const [values, setValues] = useState({
    from: "",
    to: "",
    status: "",
    religion: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  var profile = JSON.parse(localStorage.getItem("profile"));

  const validateToken = (message) => {
    if(message === 'The token has expired', message === 'The token is not vaild') {
        toast.error(message);
        localStorage.clear();
        navigate("/signin")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const gender = profile?.gender == "male" ? "female" : "male";

    await UserService.searchAPI(gender, values).then((response) => {
      console.log(response?.message);
    validateToken(response?.message)
      response.status === "success"
        ? toast.success(response.message)
        : toast.error(response.message);
      setLoading(false);
      response.status === "success" && navigate("/Dashboard/");
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const text = "Please update your profile before going to search.";

  return (
    <>
      {profile?.gender ? (
          <section class="searchcontainer">
            <header>Search Your Partner</header>
            <form class="form" onSubmit={handleSubmit}>
              <div class="input-box">
                <label>Age</label>
                <div class="column">
                  <input
                    type="number"
                    min="18"
                    max="98"
                    placeholder="from"
                    required
                    onChange={onChange}
                    name="from"
                  />
                  <input
                    type="number"
                    min="19"
                    max="99"
                    placeholder="to"
                    required
                    onChange={onChange}
                    name="to"
                  />
                </div>
              </div>
              <div class="input-box">
                <label>Place</label>
                <div class="select-box">
                  <select onChange={onChange} name="place">
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
              <button>Search {loading && <ButtonLoader />}</button>
            </form>
          </section>
      ) : (
        <Modal>
          <ParagraphText>{text}</ParagraphText>
          <Secondary
            onClick={() => navigate("/Dashboard/settings", { replace: true })}
          >
            Go To Profile
          </Secondary>
        </Modal>
      )}
    </>
  );
};

export default Search;
