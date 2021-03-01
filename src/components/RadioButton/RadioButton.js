import React from "react";
import PropTypes from "prop-types";
import "./RadioButton.css";
import checkedImg from "./radiobutton-checked.svg";
import uncheckedImg from "./radiobutton-unchecked.svg";
import unclickableImg from "./radiobutton-unclickable.svg";

const RadioButton = ({
  id,
  label,
  checked,
  setChecked,
  type,
  unClickable,
  rest,
}) => {
  return (
    <div
      className={`radiobutton ${unClickable ? "radiobutton-unClickable" : ""}`}
      onClick={() => !unClickable && setChecked(type)}
      {...rest}
    >
      {unClickable ? (
        <div className="radiobutton-checkbox-container">
          <img
            src={unclickableImg}
            alt="checked"
            className="radiobutton-checkbox"
          />
        </div>
      ) : checked === type ? (
        <div className="radiobutton-checkbox-container">
          <img
            src={checkedImg}
            alt="checked"
            className="radiobutton-checkbox"
          />
        </div>
      ) : (
        <div className="radiobutton-checkbox-container">
          <img
            src={uncheckedImg}
            alt="unchecked"
            className="radiobutton-checkbox"
          />
        </div>
      )}

      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.string,
  setChecked: PropTypes.func,
  type: PropTypes.string,
  unClickable: PropTypes.bool,
};

RadioButton.defaultProps = {
  id: "1",
  label: "",
  checked: "",
  setChecked: undefined,
  type: "",
  unClickable: false,
};
