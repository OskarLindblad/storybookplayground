import React from "react";
import PropTypes from "prop-types";
import "./RadioButton.css";

const RadioButton = ({
  id,
  value,
  onChange,
  isSelected,
  label,
  name,
  onClick,
  fontSize,
  className,
  claimindex,
  claimtype,
  statename,
  buttonSize,
}) => {
  return (
    <div className="RadioButton">
      <input
        id={id}
        onClick={onClick}
        onChange={onChange}
        value={value}
        type="radio"
        checked={isSelected}
        claimindex={claimindex}
        statename={statename}
        claimtype={claimtype}
        className={className}
        name={name}
      />
      <div
        className="RadioButton-btn"
        style={{ height: buttonSize, width: buttonSize }}
      ></div>
      <label htmlFor={id} style={{ fontSize: fontSize }}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  buttonSize: PropTypes.string,
};

RadioButton.defaultProps = {
  id: "1",
  onChange: undefined,
  value: "",
  checked: false,
  label: "",
  name: "",
  className: "",
  fontSize: "14px",
  buttonSize: "14px",
};
