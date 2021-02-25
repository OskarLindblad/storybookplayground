import React, { useState } from "react";
import "./DropDown.css";
import PropTypes from "prop-types";
import down from "./down.svg";

export const DropDown = ({
  label,
  value,
  name,
  className,
  onChange,
  notSelectedOption,
  options,
  error,
  errorMessage,
  helperText,
  smallField,
  //width,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(false);
  const [selected, setSeleted] = useState(false);

  return (
    <div
      className={`dropdown
    ${error ? "dropdown-error" : ""}
    ${smallField ? "dropdown-smallField" : ""}

    `}
    >
      <label
        className={`
              input-label 
              ${error ? "input-error" : ""}
            `}
      >
        <p
          className={`
            dropdown-label-text
            dropdown-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "dropdown-label-selected" : ""}
            `}
        >
          {label}
        </p>
        <select
          name={name}
          className={`dropdown-select ${
            selected ? "dropdown-select-selected" : ""
          }`}
          value={value}
          onChange={onChange}
          onFocus={() => {
            value === "notSelected" && setLabelShrink(true);
            setSeleted(true);
          }}
          onBlur={() => {
            value === "notSelected" && setLabelShrink(false);
            setSeleted(false);
          }}
          {...rest}
        >
          <option
            value="notSelected"
            className="dropdown-notSelected"
            disabled
          ></option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
        <div className="dropdown-down-icon-container">
          <div className="dropdown-down-icon">
            <img src={down} alt="down" />
          </div>
        </div>

        <div className="dropdown-helper-text">
          {errorMessage && error ? (
            <p className="dropdown-error-message">{errorMessage}</p>
          ) : (
            <p>{helperText}</p>
          )}
        </div>
      </label>
    </div>
  );
};

export default DropDown;

DropDown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  notSelectedOption: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  smallField: PropTypes.bool,
};

DropDown.defaultProps = {
  label: "",
  value: "notSelected",
  className: "",
  notSelectedOption: "",
  onChange: undefined,
  options: [{ value: "", title: "" }],
  error: false,
  errorMessage: "",
  helperText: "",
  smallField: false,
};
