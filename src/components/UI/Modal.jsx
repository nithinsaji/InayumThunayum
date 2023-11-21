import React from "react";
import { Secondary } from "./Button";
import './style/Modal.css'
import { ParagraphText } from "./Text";

const Modal = ({ updateModalState }) => {

    return (
      <div className='modalStyles' >
        <div className="modalContent">
        <ParagraphText>This feature is currently unavailable. Did you forgot your password you can contact our support team and get password.</ParagraphText>
        <Secondary onClick={updateModalState}>Ok</Secondary>
        </div>
      </div>
    );
};

export default Modal