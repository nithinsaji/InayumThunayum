import React, { useState } from 'react'
import './style/Input.css'

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input__box">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <label className="label">{label}</label>
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default Input