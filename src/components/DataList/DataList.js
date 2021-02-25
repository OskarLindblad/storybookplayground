import React, { useState } from "react";
import "./DataList.css";
import down from "./down.svg";
import PropTypes from "prop-types";

export const DataList = ({
  label,
  value,
  name,
  className,
  onChange,
  options,
  error,
  errorMessage,
  helperText,
  smallField,
  //width,
  ...rest
}) => {
  const [pick, setPick] = useState("");
  const [selected, setSelected] = useState(false);
  const [labelShrink, setLabelShrink] = useState(false);
  const [dropDown, showDropDown] = useState(false);

  const handleChange = (e) => {
    showDropDown(true);
    setPick(e.target.value);
  };

  const handleClick = (likelyHood) => {
    setPick(likelyHood);
  };

  return (
    <div className="datalist">
      <div className="datalist-container">
        <div className="datalist-input-container">
          <p
            className={`
            datalist-label-text
            datalist-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "datalist-label-selected" : ""}
            `}
          >
            {label}
          </p>
          <input
            className={`datalist-input ${
              selected ? "datalist-input-selected" : ""
            }`}
            type="number"
            name="number"
            value={pick}
            onInput={handleChange}
            onFocus={() => {
              setSelected(true);
              !pick && setLabelShrink(true);
              showDropDown(true);
            }}
            onBlur={() => {
              setSelected(false);
              !pick && setLabelShrink(false);
              setTimeout(() => {
                showDropDown(false);
              }, 200);
            }}
            autoComplete="off"
            step="0.5"
          />
          <div className="datalist-down-icon-container">
            <div
              onClick={() => showDropDown(true)}
              className="datalist-down-icon"
            >
              <img src={down} alt="down" />
            </div>
          </div>
        </div>

        {dropDown && (
          <div
            className="datalist-dropdown-container"
            onMouseEnter={() => {
              showDropDown(true);
            }}
            onMouseLeave={() => {
              showDropDown(false);
            }}
          >
            <ul className="datalist-dropdown">
              {options.map((option, index) => (
                <li
                  key={index}
                  value={option.value}
                  onClick={() => handleClick(option.value)}
                >
                  {option.title}
                </li>
              ))}
            </ul>
            <div className="datalist-dropdown-background"></div>
          </div>
        )}
        <div className="datalist-helper-text">
          {errorMessage && error ? (
            <p className="datalist-error-message">{errorMessage}</p>
          ) : (
            <p>{helperText}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataList;

DataList.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
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

DataList.defaultProps = {
  label: "",
  value: "",
  className: "",
  onChange: undefined,
  options: [{ value: "", title: "" }],
  error: false,
  errorMessage: "",
  helperText: "",
  smallField: false,
};
