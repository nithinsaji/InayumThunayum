import React, { useState } from "react";
import "./style/Input.css";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, placeholder, id, ...inputProps } =
    props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input__box">
      {inputProps.type !== "select" ? (
        <>
          <label className="label">
            {label} {inputProps?.required && <span> (required)</span>}
          </label>
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            placeholder={placeholder}
            onFocus={() =>
              inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
          />
          {inputProps?.type === "radio" && inputProps?.value}
          <span className="error">{errorMessage}</span>
        </>
      ) : (
        <Select props={props} />
      )}
    </div>
  );
};

export default Input;

const Select = ({ props }) => {
  const { label, onChange, options, ...inputProps } = props;
  return (
    <>
      <label>{label}</label>
      <div class="select-box">
        <select onChange={onChange} name="place">
          <option hidden>Choose</option>
          {options?.map((value) => (
            <option selected = {inputProps.defaultValue === value}>{value}</option>
          ))}
        </select>
      </div>
    </>
  );
};
