import React, { useState } from "react";
import "./InputNumReadOnly.css";
import PropTypes from "prop-types";
//import { useFormContext } from 'react-hook-form'
import { numToString, stringToNum } from "./formatNum";

export const InputNumReadOnly = ({
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
  value,
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
    value || readOnly || value === 0 /*|| getValues(name) !== ''*/
      ? true
      : false
  );

  const handleChange = (e) => {
    if (isNaN(e.target.value) || e.target.value === "") {
      e.target.value = "0";
    } else {
      e.target.value = decimalLimit(stringToNum(e.target.value), maxDecimals);
    }

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
  var newDefaultValue;
  if (typeof value === "number") {
    newDefaultValue = numToString(value);
  } else {
    newDefaultValue = numToString(parseFloat(value));
  }

  return (
    <div className="inputNum-RO" stye={{ width: width }}>
      <label
        className={`
          inputNum-RO-label 
          ${error ? "inputNum-RO-error" : ""}
          ${smallField ? "inputNum-RO-smallField" : ""}
          ${className ? className : ""}
        `}
      >
        {label && (
          <div
            className={`inputNum-RO-label-text
            inputNum-RO-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "inputNum-RO-label-selected" : ""}`}
          >
            <p
              className="inputNum-RO-label-text-p"
              style={
                labelShrink
                  ? { maxWidth: width, color: error ? "#b00020" : tagcolor }
                  : { maxWidth: placeHolderMaxWidth }
              }
            >
              {label}
            </p>
            {labelShrink && (
              <div className="inputNum-RO-label-background"></div>
            )}
          </div>
        )}
        <div className="inputNum-RO-container" style={{ width: width }}>
          <input
            type="text"
            className={`inputNum-RO-inputfield ${
              selected ? "inputNum-RO-inputfield-selected" : ""
            } 
            ${className ? className : ""}
            ${noButton ? "inputNum-RO-noButton" : ""}

            `}
            value={newDefaultValue}
            onChange={handleChange}
            onFocus={() => {
              setLabelShrink(true);
              setSelected(true);
            }}
            onBlur={() => {
              /*!getValues(name)*/ value && setLabelShrink(false);

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
            className={`inputNum-RO-suffix 
            ${selected ? "inputNum-RO-suffix-selected" : ""}
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
        <div className="inputNum-RO-helper-text">
          {errorMessage && error ? <p>{errorMessage}</p> : <p>{helperText}</p>}
        </div>
      </label>
    </div>
  );
};

export default InputNumReadOnly;

InputNumReadOnly.propTypes = {
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

InputNumReadOnly.defaultProps = {
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
