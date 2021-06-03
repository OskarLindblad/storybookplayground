import React, { useState } from "react";
import PropTypes from "prop-types";
//import { useFormContext } from "react-hook-form";

export const InputDate = ({
  defaultValue,
  onChange,
  suffix,
  suffixImg,
  label,
  helperText,
  readOnly,
  tagcolor,
  smallField,
  error,
  errorMessage,
  width,
  placeHolderMaxWidth,
  backgroundColor,
  className,
  reference,
  name,
  borderColor,
  boldBorder,
  localStyle,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(
    defaultValue || readOnly || defaultValue === "" ? true : false
  );
  const [selected, setSeleted] = useState(false);
  //const { getValues } = useFormContext();

  /*
  
              onBlur={() => {
              !getValues(name) && setLabelShrink(false)

              setSelected(false)
            }}
   */

  const handleChange = (e) => {
    onChange(e);
    setSeleted(false);
  };

  return (
    <>
      <div className={`input inputdate ${boldBorder ? "boldBorder" : ""}`}>
        <label
          className={`
          input-label 
          ${error ? "input-error" : ""}
          ${smallField ? "input-smallField" : ""}
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
              type="date"
              autoComplete="nope"
              className={`input-inputfield ${
                selected ? "input-inputfield-selected" : ""
              }
            ${className ? className : ""}
            `}
              readOnly={readOnly ? readOnly : false}
              defaultValue={defaultValue}
              name={name}
              ref={reference}
              onChange={handleChange}
              onFocus={() => {
                !defaultValue && setLabelShrink(true);
                setSeleted(true);
              }}
              onBlur={() => {
                !defaultValue && setLabelShrink(true);
                setSeleted(false);
              }}
              style={{
                color: labelShrink ? "black" : "white",
                borderColor: error
                  ? "#b00020"
                  : selected
                  ? borderColor === "#818181"
                    ? "#2c79f7"
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
        </label>
        <div className="input-helper-text">
          {errorMessage && error ? (
            <p className="input-error-message">{errorMessage}</p>
          ) : (
            <p>{helperText}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default InputDate;

InputDate.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  suffix: PropTypes.string,
  suffixImg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  smallField: PropTypes.bool,
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  tagcolor: PropTypes.string,
  width: PropTypes.string,
  placeHolderMaxWidth: PropTypes.string,
  className: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  boldBorder: PropTypes.bool,
  localStyle: PropTypes.object,
};

InputDate.defaultProps = {
  defaultValue: "",
  suffix: "",
  suffixImg: false,
  label: "",
  helperText: "",
  smallField: false,
  error: false,
  errorMessage: "",
  onChange: undefined,
  width: "250px",
  tagcolor: "#979797",
  placeHolderMaxWidth: "100%",
  readOnly: false,
  className: "",
  borderColor: "#818181",
  backgroundColor: "#ffffff",
  boldBorder: true,
  localStyle: null,
};
