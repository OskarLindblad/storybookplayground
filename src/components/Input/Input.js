import React, { useState } from "react";
import "./Input.css";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

export const Input = ({
  readOnly,
  suffixInput,
  suffixImg,
  label,
  maxLength, // Maximum number of charachters
  maxDecimals, // Minimum number of decimals
  helperText,
  smallField,
  className,
  error,
  errorMessage,
  onChange,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(false);
  const [selected, setSeleted] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let value = e.target.value.replace(/^0+/, "");
    value = value.replace(/ /g, "");
    console.log(value);
    setValue(value);
    onChange(value.replace(/,/g, "."));
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
            ${selected ? "input-label-selected" : ""}`}
          >
            {label}
          </p>
        )}
        <div className="input-container">
          <NumberFormat
            className={`input-inputfield ${
              selected ? "input-inputfield-selected" : ""
            }
            ${className ? className : ""}
            `}
            value={value}
            onChange={handleChange}
            onFocus={() => {
              setLabelShrink(true);
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
            ${suffixImg ? "suffix-image" : ""}
            `}
          >
            {suffixImg ? (
              <img src={suffixImg} className="suffixImg" alt="suffixImg" />
            ) : (
              suffixInput && <p>{suffixInput}</p>
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
  readOnly: PropTypes.bool,
  suffixInput: PropTypes.string,
  suffixImg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  smallField: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxDecimals: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  readOnly: false,
  suffixInput: "",
  suffixImg: false,
  label: "",
  className: "",
  helperText: "",
  smallField: false,
  error: false,
  errorMessage: "",
  maxLength: "none",
  maxDecimals: 200,
  onChange: undefined,
};
