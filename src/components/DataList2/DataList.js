import React, { useState } from "react";
import "./DataList.css";
import PropTypes from "prop-types";
//import { useFormContext } from 'react-hook-form'
import { numToString, stringToNum } from "./formatNum";

// 0,0001 = almost zero

export const DataList = ({
  readOnly,
  suffix,
  suffixImg,
  noButton,
  label,
  maxLength, // Maximum number of charachters
  maxDecimals, // Minimum number of decimals
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
  id,
  name,
  reference,
  ...rest
}) => {
  const [selected, setSelected] = useState(false);
  //const { getValues } = useFormContext()
  const [labelShrink, setLabelShrink] = useState(
    defaultValue || readOnly || defaultValue === 0 /*|| getValues(name) !== ''*/
      ? true
      : false
  );

  const handleChange = (e) => {
    e.target.value = stringToNum(e.target.value);

    onChange(e);
    document.getElementById(id).value = numToString(
      decimalLimit(e.target.value, maxDecimals)
    );
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
  const newDefaultValue = numToString(defaultValue);

  return (
    <div className="dataList" stye={{ width: width }}>
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
              //console.log(!getValues(name));
              /*!getValues(name)*/ !defaultValue && setLabelShrink(false);

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
          >
            {suffixImg ? (
              <img src={suffixImg} className="suffixImg" alt="suffixImg" />
            ) : (
              suffix && <p>{suffix}</p>
            )}
          </div>
        </div>
        <div className="dataList-helper-text">
          {errorMessage && error ? <p>{errorMessage}</p> : <p>{helperText}</p>}
        </div>
      </label>
    </div>
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
};

DataList.defaultProps = {
  readOnly: false,
  suffix: "",
  suffixImg: false,
  label: "",
  className: "",
  helperText: "",
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
  id: Math.random().toString(36).substr(2, 9),
};
