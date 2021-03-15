import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({
  label,
  icon,
  className,
  buttonType, // actually color, but that messes with storybook
  side, // icon placement
  onClick,
  type,
  NoUpperCase, // Default sets all letters to upperCase
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`
        button 
        button-type-${buttonType}
        ${icon ? "button-with-icon" : ""}
        ${NoUpperCase ? "button-NoUpperCase" : ""}
        ${icon ? `button-icon-on-side-${icon && side}` : ""}
        ${className && className}
        `}
      onClick={() => {
        onClick();
      }}
    >
      {label}

      {icon && <img src={icon} alt="icon" className="button-icon" />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  buttonType: PropTypes.oneOf([
    "contained",
    "outlined",
    "text",
    "nonactive",
    "yellow",
  ]),
  side: PropTypes.oneOf(["left", "right"]),
  icon: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  NoUpperCase: PropTypes.bool,
};

Button.defaultProps = {
  label: "",
  buttonType: "contained",
  side: "left",
  icon: "",
  className: "",
  type: "button",
  onClick: undefined,
  NoUpperCase: true,
};
