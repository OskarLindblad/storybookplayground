import React, { useState } from "react";
import "./Input.css";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

export const Input = ({
  value,
  setValue,
  readOnly,
  suffixInput,
  suffixImg,
  label,
  maxLength, // Maximum number of charachters
  maxDecimals, // Minimum number of decimals
  helperText,
  boldBorder,
  boldText,
  smallField,
  error,
  errorMessage,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(false);
  const [selected, setSeleted] = useState(false);

  const onChange = (e) => {
    let value = e.target.value.replace(/^0+/, "");
    value = value.replace(/ /g, "");
    setValue(value);
  };

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  return (
    <div className="input">
      <label
        className={`
          input-label 
          ${error ? "input-error" : ""}
          ${smallField ? "input-smallField" : ""}
        `}
      >
        {label && (
          <p
            className={`input-label-text
            input-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "input-label-selected" : ""}
            
            `}
          >
            {label}
          </p>
        )}
        <div className="input-container">
          <NumberFormat
            className={`input-inputfield ${
              selected ? "input-inputfield-selected" : ""
            }
            ${boldText ? "bold-text" : ""}
            ${boldBorder ? "bold-border" : ""}
            `}
            value={value}
            onChange={onChange}
            onFocus={() => {
              !value && setLabelShrink(true);
              setSeleted(true);
            }}
            onBlur={() => {
              !value && setLabelShrink(false);
              setSeleted(false);
            }}
            onKeyDown={blockInvalidChar}
            decimalScale={maxDecimals ? maxDecimals : "none"}
            maxLength={maxLength ? maxLength : "none"}
            thousandSeparator=" "
            decimalSeparator=","
            readOnly={readOnly ? readOnly : false}
            {...rest}
          />
          <div
            className={`input-suffix 
            ${selected ? "input-suffix-selected" : ""}
            ${boldBorder ? "bold-border" : ""}
            ${suffixImg ? "suffix-image" : ""}
            `}
          >
            {suffixImg ? (
              <img src={suffixImg} className="suffixImg" alt="suffixImg" />
            ) : (
              suffixInput && (
                <p className={`${boldText ? "bold-text" : ""}`}>
                  {suffixInput}
                </p>
              )
            )}
          </div>
        </div>
        <div className="input-helper-text">
          {errorMessage && error ? <p>{errorMessage}</p> : <p>{helperText}</p>}
        </div>
      </label>
    </div>
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
  readOnly: PropTypes.bool,
  suffixInput: PropTypes.string,
  suffixImg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  boldBorder: PropTypes.bool,
  boldText: PropTypes.bool,
  smallField: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxDecimals: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  value: "",
  setValue: undefined,
  readOnly: false,
  suffixInput: "",
  suffixImg: false,
  label: "",
  helperText: "",
  boldBorder: false,
  boldText: false,
  smallField: false,
  error: false,
  errorMessage: "",
  maxLength: "none",
  maxDecimals: "none",
};
