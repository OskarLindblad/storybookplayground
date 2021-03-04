import React, { useState } from "react";
import "./DataList.css";
import down from "./down.svg";
import trash from "./trash.svg";
import NumberFormat from "react-number-format";

import PropTypes from "prop-types";

export const DataList = ({
  label,
  value,
  setValue,
  name,
  className,
  options,
  error,
  errorMessage,
  helperText,
  smallField,
  width,
  ...rest
}) => {
  const [selected, setSelected] = useState(false);
  const [labelShrink, setLabelShrink] = useState(false);
  const [dropDown, showDropDown] = useState(false);

  const handleChange = (e) => {
    let data = e.target.value;
    data = data.replace(",", ".");
    showDropDown(true);

    if (!isNaN(data)) {
      if (data <= 100 && data >= 0) {
        data = data.replace(".", ",");
        setValue(data);
      } else {
        setValue(value);
      }
    } else {
      setValue("");
    }
  };

  const handleClick = (likelyHood) => {
    setValue(likelyHood);
  };

  const removeValue = () => {
    setValue("");
  };

  return (
    <div
      className={`datalist ${error ? "datalist-error" : ""} ${
        smallField ? "datalist-smallField" : ""
      }`}
      style={{ width: width }}
    >
      <div className="datalist-container">
        <div className="datalist-input-container">
          <p
            className={`
            datalist-label-text
            datalist-label-text-${
              labelShrink || value ? "label" : "placeholder"
            }
            ${selected ? "datalist-label-selected" : ""}
            `}
          >
            {label}
          </p>
          <NumberFormat
            className={`datalist-input ${
              selected ? "datalist-input-selected" : ""
            }`}
            value={value}
            onInput={handleChange}
            onFocus={() => {
              setSelected(true);
              setLabelShrink(true);
            }}
            onBlur={() => {
              setSelected(false);
              !value && setLabelShrink(false);
              setTimeout(() => {
                showDropDown(false);
              }, 200);
            }}
            onMouseLeave={() => {
              showDropDown(false);
            }}
            autoComplete="off"
            step="0.5"
            maxLength="4"
            decimalSeparator=","
            decimalScale="1"
            {...rest}
            style={{ width: `calc(${width} - 30px)` }}
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
      {value && <p className="datalist-likelyhood">{value}%</p>}
      <div className="datalist-trash-container">
        <img
          src={trash}
          alt="trash"
          className="datalist-trash"
          onClick={removeValue}
        />
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
  width: PropTypes.string,
};

DataList.defaultProps = {
  label: "",
  value: "",
  className: "",
  onChange: undefined,
  options: [{ value: "addArray", title: "addArray" }],
  error: false,
  errorMessage: "",
  helperText: "",
  smallField: false,
  width: "250px",
};
