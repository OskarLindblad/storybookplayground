import React, { useState } from "react";
import PropTypes from "prop-types";
//import { useFormContext } from 'react-hook-form'
import { cursorPlacement } from "./cursorPlacement";
import { numToString, stringToNum } from "./formatNum";

export const InputNum = ({
  readOnly,
  suffix,
  suffixImg,
  noButton,
  label,
  maxLength, // Maximum number of charachters(space included)
  maxDecimals, // Minimum number of decimals
  maxValue, // Maximum value
  minValue, // Minimum value
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
  id, // Always add InputNum if there is multiple InputNum
  name,
  reference,
  borderColor,
  backgroundColor,
  boldBorder,
  localStyle,
  ...rest
}) => {
  // Current index
  const [indexTracker, setIndexTracker] = useState(0);
  const [selected, setSelected] = useState(false);

  // Prevous value (for comparement)
  const [prevValue, setPrevValue] = useState(
    typeof defaultValue === "number"
      ? numToString(defaultValue)
      : defaultValue === ""
      ? ""
      : numToString(parseFloat(defaultValue))
  );

  //const { getValues } = useFormContext()
  const [labelShrink, setLabelShrink] = useState(
    defaultValue || readOnly || defaultValue === 0 ? true : false
  );

  const handleChange = (e) => {
    e.target.value = decimalLimit(
      limitValue(stringToNum(e.target.value)),
      maxDecimals
    );
    onChange(e);

    // Moves the cursor
    let cursorIndex = cursorPlacement(
      prevValue,
      numToString(decimalLimit(e.target.value, maxDecimals)),
      indexTracker
    );

    setPrevValue(numToString(decimalLimit(e.target.value, maxDecimals)));
    document.getElementById(id).focus();
    setIndexTracker(cursorIndex);
    document.getElementById(id).value = numToString(
      decimalLimit(e.target.value, maxDecimals)
    );
    document.getElementById(id).setSelectionRange(cursorIndex, cursorIndex);
  };

  const blockInvalidChar = (e) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  };

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

  // Keep track on arrow
  const moveCursor = (e) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

    if ((e.charCode || e.keyCode) === 37) {
      console.log("left", indexTracker);

      // left arrow
      setIndexTracker(indexTracker <= 0 ? 0 : indexTracker - 1);
    }
    if ((e.charCode || e.keyCode) === 39) {
      console.log("right", indexTracker);

      // right arrow
      setIndexTracker(
        indexTracker + 1 > numToString(defaultValue).length
          ? numToString(defaultValue).length
          : indexTracker + 1
      );
    }
    if ((e.charCode || e.keyCode) === 38) {
      setIndexTracker(0);
    }
    if ((e.charCode || e.keyCode) === 40) {
      // down arrow
      setIndexTracker(defaultValue.length);
    }
  };

  //console.log(indexTracker)

  const limitValue = (value) => {
    const minCheck = parseFloat(value) < minValue;
    const maxCheck = parseFloat(value) > maxValue;
    // minValue is quite lazily done since it never will be used, just a precaution
    if (value === "") {
      return "";
    }
    const maxReached = (val) => {
      let v = val.toString();
      return v.slice(0, -1);
    };
    if (minCheck || maxCheck) {
      let v = value.toString();
      if (v.includes(".")) {
        let num = v.split(".");
        let decimal = num[1] ? num[1] : "";
        if (parseFloat(num[0]) < minValue) {
          return minValue + "." + decimal;
        } else if (parseFloat(num[0]) > maxValue) {
          return maxReached(num[0]) + "." + decimal;
        }
      } else {
        if (minCheck) {
          return minValue;
        } else if (maxCheck) {
          return maxReached(value);
        }
      }
      return minValue;
    }
    return value;
  };

  let newDefaultValue;
  if (typeof defaultValue === "number") {
    newDefaultValue = numToString(defaultValue);
  } else if (defaultValue === "") {
    newDefaultValue = "";
  } else {
    newDefaultValue = numToString(parseFloat(defaultValue));
  }

  return (
    <div className={`input inputNum ${boldBorder ? "boldBorder" : ""}`}>
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
            className={`input-inputfield ${
              selected ? "input-inputfield-selected" : ""
            } 
            ${className ? className : ""}
            ${noButton ? "input-noButton" : ""}

            `}
            defaultValue={newDefaultValue}
            onChange={handleChange}
            onFocus={() => {
              setLabelShrink(true);
              setSelected(true);
            }}
            onBlur={() => {
              /*!getValues(name) &&*/ setLabelShrink(false);

              setSelected(false);
            }}
            onKeyDown={(e) => {
              blockInvalidChar(e);
              moveCursor(e);
            }}
            onClick={() =>
              setIndexTracker(document.getElementById(id).selectionStart)
            }
            maxLength={maxLength}
            readOnly={readOnly ? readOnly : false}
            ref={reference}
            name={name}
            autoComplete="nope"
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

export default InputNum;

InputNum.propTypes = {
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
  borderColor: PropTypes.string,
  tagcolor: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  backgroundColor: PropTypes.string,
  boldBorder: PropTypes.bool,
  localStyle: PropTypes.object,
};

InputNum.defaultProps = {
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
  width: "250px",
  placeHolderMaxWidth: "100%",
  tagcolor: "#979797",
  id: [...Array(10)].map((i) => (~~(Math.random() * 36)).toString(36)).join(""),
  maxValue: 99999999,
  minValue: 0,
  borderColor: "#818181",
  backgroundColor: "#fff",
  boldBorder: true,
  localStyle: null,
};
