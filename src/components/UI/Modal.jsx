import React from "react";
import { Secondary } from "./Button";
import './style/Modal.css'
import { ParagraphText } from "./Text";

const Modal = ({ updateModalState ,text}) => {

    return (
      <div className='modalStyles' >
        <div className="modalContent">
        <ParagraphText>{text}</ParagraphText>
        <Secondary onClick={updateModalState}>Ok</Secondary>
        </div>
      </div>
    );
};

export default Modal