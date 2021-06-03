import React, { useState } from "react";
import PropTypes from "prop-types";
//import { useFormContext } from "react-hook-form";

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
  type,
  borderColor,
  tagcolor,
  backgroundColor,
  boldBorder,
  localStyle,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(
    defaultValue || readOnly ? true : false
  );
  const [selected, setSeleted] = useState(false);
  //const { getValues } = useFormContext();

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={`input inputText ${boldBorder ? "boldBorder" : ""}`}>
      <label
        className={`
          input-label 
          ${error ? "input-error" : ""}
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
            type={type}
            className={`input-inputfield ${
              selected ? "input-inputfield-selected" : ""
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
              //!getValues(name) &&
              setLabelShrink(false);
              setSeleted(false);
            }}
            maxLength={maxLength ? maxLength : "none"}
            readOnly={readOnly ? readOnly : false}
            ref={reference}
            name={name}
            id={id}
            style={{
              borderColor: error
                ? "#b00020"
                : selected
                ? borderColor === "#818181"
                  ? "#2c79f7"
                  : borderColor
                : borderColor,
              backgroundColor: backgroundColor,
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

export default InputText;

InputText.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
  type: PropTypes.string,
  borderColor: PropTypes.string,
  tagcolor: PropTypes.string,
  boldBorder: PropTypes.bool,
  localStyle: PropTypes.bool,
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
  width: "250px",
  placeHolderMaxWidth: "100%",
  id: undefined,
  name: undefined,
  type: "text",
  borderColor: "#818181",
  tagcolor: "#979797",
  boldBorder: true,
  localStyle: null,
};
