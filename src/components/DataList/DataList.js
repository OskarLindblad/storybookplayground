import React, { useState } from "react";
import "./DataList.css";
import PropTypes from "prop-types";
//import { useFormContext } from 'react-hook-form'
import { numToString, stringToNum } from "./formatNum";
import down from "./down.svg";
import { cursorPlacement } from "./cursorPlacement";

export const DataList = ({
  readOnly,
  suffix,
  suffixImg,
  noButton,
  options,
  label,
  maxLength, // Maximum number of charachters
  maxDecimals, // Minimum number of decimals
  maxValue, // Maximum value
  minValue, // Minimum value
  helperText,
  smallField,
  className,
  error,
  errorMessage,
  placeHolderMaxWidth,
  defaultValue,
  onChange,
  width,
  tagcolor,
  id, // Always add id if there is multiple Datalists
  name,
  reference,
  ...rest
}) => {
  const [selected, setSelected] = useState(false);
  const [dropDown, showDropDown] = useState(false);
  const [tempValue, setTempValue] = useState(""); //ignore

  //const { getValues } = useFormContext()
  const [labelShrink, setLabelShrink] = useState(
    defaultValue || readOnly || defaultValue === 0 /*|| getValues(name) !== ''*/
      ? true
      : false
  );

  const handleChange = (e) => {
    e.target.value = decimalLimit(stringToNum(e.target.value), maxDecimals);
    let cursorIndex = cursorPlacement(e.target.value, tempValue);
    setTempValue(e.target.value);

    if (cursorIndex !== undefined) {
      console.log("yay");
      document.getElementById(id).focus();
      document.getElementById(id).setSelectionRange(cursorIndex, cursorIndex);
    }
    e.target.value = decimalLimit(
      limitValue(stringToNum(e.target.value)),
      maxDecimals
    );
    onChange(e);
    document.getElementById(id).value = numToString(
      decimalLimit(e.target.value, maxDecimals)
    );
  };

  const handleClick = (val, e) => {
    onChange(e, val);
    document.getElementById(id).value = numToString(decimalLimit(val));
  };

  let optionsList = [];
  for (let i = 0; i < options.length; i++) {
    if (typeof options[i] === "string" || typeof options[i] === "number") {
      optionsList.push({ value: options[i], title: options[i] });
    } else {
      optionsList.push(options[i]);
    }
  }

  const limitValue = (value) => {
    const minCheck = parseFloat(value) < minValue;
    const maxCheck = parseFloat(value) > maxValue;
    // minValue is quite lazily done since it never will be used, just a precaution
    if (value === "") {
      return "";
    }

    const maxReached = (val) => {
      let v = val.toString();
      return v.slice(0, -1);
    };

    if (minCheck || maxCheck) {
      let v = value.toString();
      if (v.includes(".")) {
        let num = v.split(".");
        let decimal = num[1] ? num[1] : "";
        if (parseFloat(num[0]) < minValue) {
          return minValue + "." + decimal;
        } else if (parseFloat(num[0]) > maxValue) {
          return maxReached(num[0]) + "." + decimal;
        }
      } else {
        if (minCheck) {
          return minValue;
        } else if (maxCheck) {
          return maxReached(value);
        }
      }

      return minValue;
    }
    return value;
  };

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const decimalLimit = (value, limit) => {
    value = value.toString();
    if (value.includes(".") || value.includes(",")) {
      let newNum = [];
      value.includes(".") && (newNum = value.split("."));
      value.includes(",") && (newNum = value.split(","));
      let newDec = newNum[1].substr(0, limit);
      return newNum[0] + "." + newDec;
    }
    return value;
  };

  const handleDropDown = () => {
    setTimeout(() => {
      document.getElementById(id).focus();

      showDropDown(true);
    }, 50);
  };

  const newDefaultValue = numToString(defaultValue);
  return (
    <>
      <div className="dataList" style={{ width: width }}>
        <label
          className={`
          dataList-label 
          ${error ? "dataList-error" : ""}
          ${smallField ? "dataList-smallField" : ""}
          ${className ? className : ""}
        `}
        >
          {label && (
            <div
              className={`dataList-label-text
            dataList-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "dataList-label-selected" : ""}`}
            >
              <p
                style={
                  labelShrink
                    ? { maxWidth: width, color: tagcolor }
                    : { maxWidth: placeHolderMaxWidth }
                }
                className="testing"
              >
                {label}
              </p>
            </div>
          )}
          <div className="dataList-container" style={{ width: width }}>
            <input
              type="text"
              className={`dataList-inputfield ${
                selected ? "dataList-inputfield-selected" : ""
              } 
            ${className ? className : ""}
            ${noButton ? "dataList-noButton" : ""}

            `}
              defaultValue={newDefaultValue}
              onChange={handleChange}
              onFocus={() => {
                setLabelShrink(true);
                setSelected(true);
              }}
              onBlur={() => {
                /*!getValues(name)*/ !defaultValue && setLabelShrink(false);
                setTimeout(() => {
                  showDropDown(false);
                }, 200);
                setSelected(false);
              }}
              onKeyDown={blockInvalidChar}
              maxLength={maxLength}
              readOnly={readOnly ? readOnly : false}
              ref={reference}
              name={name}
              id={id}
              {...rest}
            />
            <div
              className={`dataList-suffix 
            ${selected ? "dataList-suffix-selected" : ""}
            ${suffixImg ? "suffix-image" : ""}
            `}
              onClick={handleDropDown}
            >
              <div
                className="dataList-dropDown-button"
                onClick={handleDropDown}
              >
                <img alt="downArrow" src={down} />
              </div>

              {suffixImg ? (
                <img src={suffixImg} className="suffixImg" alt="suffixImg" />
              ) : suffix ? (
                <p>{suffix}</p>
              ) : (
                <p className="dataList-suffix-empty"></p>
              )}
            </div>
          </div>
          {dropDown && (
            <div
              className="datalist-dropdown-container"
              onMouseEnter={() => {
                showDropDown(true);
              }}
              style={{ width: width }}
            >
              <ul className="datalist-dropdown">
                {optionsList.map((option, index) => (
                  <li
                    key={index}
                    value={option.value}
                    onClick={(e) => handleClick(option.value, e)}
                    className={className}
                    name={name}
                    id={id}
                    {...rest}
                  >
                    {option.title}
                  </li>
                ))}
              </ul>
              <div className="datalist-dropdown-background"></div>
            </div>
          )}
          <div className="dataList-helper-text">
            {errorMessage && error ? (
              <p>{errorMessage}</p>
            ) : (
              <p>{helperText}</p>
            )}
          </div>
        </label>
      </div>
    </>
  );
};

export default DataList;

DataList.propTypes = {
  readOnly: PropTypes.bool,
  suffix: PropTypes.string,
  suffixImg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        value: PropTypes.string,
        title: PropTypes.string,
      }),
      PropTypes.string,
      PropTypes.number,
    ])
  ),
  smallField: PropTypes.bool,
  noButton: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxDecimals: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  width: PropTypes.string,
  placeHolderMaxWidth: PropTypes.string,
  tagcolor: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
};

DataList.defaultProps = {
  readOnly: false,
  suffix: "",
  suffixImg: false,
  label: "",
  className: "",
  helperText: "",
  options: [{ value: "", title: "" }],
  smallField: false,
  error: false,
  noButton: false,
  errorMessage: "",
  maxLength: 13,
  maxDecimals: 3,
  onChange: undefined,
  width: "200px",
  placeHolderMaxWidth: "100%",
  tagcolor: "#818181",
  id: [...Array(10)].map((i) => (~~(Math.random() * 36)).toString(36)).join(""),
  maxValue: 100,
  minValue: 0,
};
