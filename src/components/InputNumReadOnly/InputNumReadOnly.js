import React, { useState } from "react";
import PropTypes from "prop-types";
//import { useFormContext } from "react-hook-form";
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
  borderColor,
  backgroundColor,
  localStyle,
  boldBorder,
  ...rest
}) => {
  const [selected, setSelected] = useState(false);
  /*const { getValues } = useFormContext()  ----   validation library*/
  const [labelShrink, setLabelShrink] = useState(
    value ? /*|| getValues(name) !== ''*/ true : false
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
  let newDefaultValue;
  if (typeof value === "number") {
    newDefaultValue = numToString(value);
  } else if (value === "") {
    newDefaultValue = "";
  } else {
    newDefaultValue = numToString(parseFloat(value));
  }

  return (
    <div className={`input inputNum-RO ${boldBorder ? "boldBorder" : ""}`}>
      <label
        className={`
          input-label 
          ${error ? "input-error" : ""}
          ${smallField ? "input-smallField" : ""}
          ${className ? className : ""}
        `}
      >
        {label && (
          <div
            className={`input-label-text
            input-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "input-label-selected" : ""}`}
          >
            <p
              className="input-label-text-p"
              style={
                labelShrink
                  ? borderColor
                    ? {
                        maxWidth: width,
                        color: error ? "#b00020" : tagcolor,
                      }
                    : { maxWidth: width, color: error ? "#b00020" : tagcolor }
                  : borderColor
                  ? { maxWidth: placeHolderMaxWidth, color: borderColor }
                  : { maxWidth: placeHolderMaxWidth }
              }
            >
              {label}
            </p>
            {labelShrink && (
              <div
                className="input-label-background"
                style={{ backgroundColor: backgroundColor }}
              ></div>
            )}
          </div>
        )}
        <div className="input-container" style={{ width: width }}>
          <input
            type="text"
            autoComplete="nope"
            className={`input-inputfield ${
              selected ? "input-inputfield-selected" : ""
            } 
            ${className ? className : ""}
            ${noButton ? "input-noButton" : ""}

            `}
            value={newDefaultValue}
            onChange={handleChange}
            onFocus={() => {
              setLabelShrink(true);
              setSelected(true);
            }}
            onBlur={() => {
              !value && setLabelShrink(false);

              setSelected(false);
            }}
            onKeyDown={blockInvalidChar}
            maxLength={maxLength}
            readOnly={readOnly ? readOnly : false}
            ref={reference}
            name={name}
            id={id}
            style={{
              borderColor: error
                ? "#b00020"
                : selected
                ? borderColor === "#818181"
                  ? "#818181" //Does "nothing" but if a select border is wanted, change
                  : borderColor
                : borderColor,
              backgroundColor: backgroundColor,
              ...localStyle,
            }}
            {...rest}
          />
          <div
            className={`input-suffix 
            ${suffixImg ? "suffix-image" : ""}
            `}
          >
            <div className="input-suffix-content">
              {suffixImg ? (
                <img src={suffixImg} className="suffixImg" alt="suffixImg" />
              ) : (
                suffix && <p>{suffix}</p>
              )}
            </div>
          </div>
        </div>
        <div className="input-helper-text">
          {errorMessage && error ? (
            <p className="input-error-message">{errorMessage}</p>
          ) : (
            <p>{helperText}</p>
          )}
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
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  localStyle: PropTypes.object,
  placeHolderMaxWidth: PropTypes.string,
  tagcolor: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  boldBorder: PropTypes.bool,
};

InputNumReadOnly.defaultProps = {
  readOnly: true,
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
  width: "250px",
  placeHolderMaxWidth: "100%",
  tagcolor: "#979797",
  id: Math.random().toString(36).substr(2, 9),
  borderColor: "#818181",
  backgroundColor: "#ffffff",
  boldBorder: true,
  localStyle: null,
};
