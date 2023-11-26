import React from "react";
import { Link } from "react-router-dom";
import { ParagraphText, TitleText } from "../UI/Text";
import './style/settings.css'

const Settings = () => {
  return (
    <div>
      <div className="setting-heading">
        <TitleText>Account</TitleText>
      </div>
      <div className="setting-list">
        <div className="setting-items">
        <Link to='profile'>
          <i className="bx bx-user"></i>
          <ParagraphText>Profile</ParagraphText>
          </Link>
          <Link to='images'>
          <i class="fa-regular fa-images"></i>
          <ParagraphText>Upload Images</ParagraphText>
          </Link>
          <Link to='resetpassword'>
          <i class="fa-solid fa-lock"></i>
          <ParagraphText>Password</ParagraphText>
          </Link>
          <Link to='deleteaccount'>
          <i class="fa-regular fa-trash-can"></i>
          <ParagraphText>Delete Account</ParagraphText>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
