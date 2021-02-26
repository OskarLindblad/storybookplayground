import React, { useState } from "react";
import "./InputDate.css";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

export const InputDate = ({
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
    <div className="inputdate">
      <label
        className={`
          inputdate-label 
          ${error ? "inputdate-error" : ""}
          ${smallField ? "inputdate-smallField" : ""}
        `}
      >
        {label && (
          <p
            className={`inputdate-label-text
            inputdate-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "inputdate-label-selected" : ""}
            
            `}
          >
            {label}
          </p>
        )}
        <div className="inputdate-container">
          <NumberFormat
            className={`inputdate-inputfield ${
              selected ? "inputdate-inputfield-selected" : ""
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
            mask={["D", "D", "M", "M", "Y", "Y"]}
            placeholder={selected ? "DD/MM/YY" : ""}
            format="##/##/##"
            {...rest}
          />
          <div
            className={`inputdate-suffix 
            ${selected ? "inputdate-suffix-selected" : ""}
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
        <div className="inputdate-helper-text">
          {errorMessage && error ? <p>{errorMessage}</p> : <p>{helperText}</p>}
        </div>
      </label>
    </div>
  );
};

export default InputDate;

InputDate.propTypes = {
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

InputDate.defaultProps = {
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
