import React from "react";
import './style/Modal.css'

const Modal = ({ children}) => {

    return (
      <div className='modalStyles' >
        <div className="modalContent">
        {children}
        </div>
      </div>
    );
};

export default Modal