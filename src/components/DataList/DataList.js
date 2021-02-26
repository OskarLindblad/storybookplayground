import React, { useState } from "react";
import "./DataList.css";
import down from "./down.svg";
import trash from "./trash.svg";
import NumberFormat from "react-number-format";

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
  ...rest
}) => {
  const [pick, setPick] = useState("");
  const [selected, setSelected] = useState(false);
  const [labelShrink, setLabelShrink] = useState(false);
  const [dropDown, showDropDown] = useState(false);

  const handleChange = (e) => {
    const data = parseInt(e.target.value);
    showDropDown(true);
    if (!isNaN(data)) {
      setPick(data);
    } else {
      setPick("");
    }
  };

  const handleClick = (likelyHood) => {
    setPick(likelyHood);
  };

  return (
    <div
      className={`datalist ${error ? "datalist-error" : ""} ${
        smallField ? "datalist-smallField" : ""
      }`}
    >
      <div className="datalist-container">
        <div className="datalist-input-container">
          <p
            className={`
            datalist-label-text
            datalist-label-text-${labelShrink || pick ? "label" : "placeholder"}
            ${selected ? "datalist-label-selected" : ""}
            `}
          >
            {label}
          </p>
          <NumberFormat
            className={`datalist-input ${
              selected ? "datalist-input-selected" : ""
            }`}
            value={pick}
            onInput={handleChange}
            onFocus={() => {
              setSelected(true);
              setLabelShrink(true);
            }}
            onBlur={() => {
              setSelected(false);
              !pick && setLabelShrink(false);
              setTimeout(() => {
                showDropDown(false);
              }, 200);
            }}
            onMouseLeave={() => {
              showDropDown(false);
            }}
            autoComplete="off"
            step="0.5"
            isAllowed={(values) => {
              const { floatValue } = values;
              console.log(floatValue);
              return floatValue >= 5 && floatValue <= 10000;
            }}
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
      {pick && <p className="datalist-likelyhood">{pick}%</p>}
      <div className="datalist-trash-container">
        <img src={trash} alt="trash" className="datalist-trash" />
      </div>
    </div>
  );
};

export default DataList;

DataList.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
