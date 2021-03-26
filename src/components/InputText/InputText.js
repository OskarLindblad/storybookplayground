import React, { useState } from "react";
import "./InputText.css";
import PropTypes from "prop-types";
//import { useFormContext } from 'react-hook-form'

export const InputText = ({
  readOnly,
  defaultValue,
  suffix,
  suffixImg,
  label,
  maxLength, // Maximum number of charachters
  helperText,
  smallField,
  className,
  error,
  errorMessage,
  onChange,
  width,
  placeHolderMaxWidth,
  id,
  name,
  reference,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(
    defaultValue || readOnly ? true : false
  );
  const [selected, setSeleted] = useState(false);
  //const { getValues } = useFormContext()

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="inputText" stye={{ width: width }}>
      <label
        className={`
          inputText-label 
          ${error ? "inputText-error" : ""}
          ${smallField ? "inputText-smallField" : ""}
          ${className ? className : ""}
        `}
      >
        {label && (
          <div
            className={`inputText-label-text
              inputText-label-text-${labelShrink ? "label" : "placeholder"}
            ${selected ? "inputText-label-selected" : ""}`}
          >
            <p
              className="inputText-label-text-p"
              style={
                labelShrink
                  ? { maxWidth: width }
                  : { maxWidth: placeHolderMaxWidth }
              }
            >
              {label}
            </p>
            {labelShrink && <div className="inputText-label-background"></div>}
          </div>
        )}
        <div className="inputText-container" style={{ width: width }}>
          <input
            type="text"
            className={`inputText-inputfield ${
              selected ? "inputText-inputfield-selected" : ""
            }
            ${className ? className : ""}
            `}
            defaultValue={defaultValue}
            onChange={handleChange}
            onFocus={() => {
              setLabelShrink(true);
              setSeleted(true);
            }}
            onBlur={() => {
              /*!getValues(name)*/ defaultValue && setLabelShrink(false);
              setSeleted(false);
            }}
            maxLength={maxLength ? maxLength : "none"}
            readOnly={readOnly ? readOnly : false}
            ref={reference}
            name={name}
            id={id}
            {...rest}
          />
          <div
            className={`inputText-suffix 
            ${selected ? "inputText-suffix-selected" : ""}
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
        <div className="inputText-helper-text">
          {errorMessage && error ? <p>{errorMessage}</p> : <p>{helperText}</p>}
        </div>
      </label>
    </div>
  );
};

export default InputText;

InputText.propTypes = {
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
  suffix: PropTypes.string,
  suffixImg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  smallField: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  width: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputText.defaultProps = {
  defaultValue: "",
  readOnly: false,
  suffix: "",
  suffixImg: false,
  label: "",
  className: "",
  helperText: "",
  smallField: false,
  error: false,
  errorMessage: "",
  maxLength: "none",
  onChange: undefined,
  width: "200px",
  placeHolderMaxWidth: "100%",
  id: undefined,
  name: undefined,
};
