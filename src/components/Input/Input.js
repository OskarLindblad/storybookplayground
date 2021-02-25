import React, { useState } from "react";
import "./Input.css";
import PropTypes from "prop-types";

export const Input = ({
  value,
  onChange,
  suffixInput,
  suffixImg,
  label,
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
          <input
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
  suffixInput: PropTypes.string,
  suffixImg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  boldBorder: PropTypes.bool,
  boldText: PropTypes.bool,
  smallField: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  suffixInput: "",
  suffixImg: false,
  label: "",
  helperText: "",
  boldBorder: false,
  boldText: false,
  smallField: false,
  error: false,
  errorMessage: "",
  onChange: undefined,
};
