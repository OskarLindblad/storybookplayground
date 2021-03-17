import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({
  label,
  icon,
  className,
  buttonType, // actually color, but that messes with storybook
  side, // icon placement
  NoUpperCase, // Default sets all letters to upperCase
  small,
  ...rest
}) => {
  return (
    <button
      className={`
        button
        button-type-${buttonType}
        ${small ? "button-type-small" : ""}
        ${icon ? "button-with-icon" : ""}
        ${NoUpperCase ? "button-NoUpperCase" : ""}
        ${icon ? `button-icon-on-side-${icon && side}` : ""}
        `}
      {...rest}
    >
      <div className="button-text">{label}</div>
      <div className="button-container"></div>
      {icon && <img src={icon} alt="icon" className="button-icon" {...rest} />}
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
  onClick: PropTypes.func,
  NoUpperCase: PropTypes.bool,
  small: PropTypes.bool,
};

Button.defaultProps = {
  label: "default",
  buttonType: "contained",
  side: "left",
  icon: "",
  className: "",
  onClick: undefined,
  NoUpperCase: true,
  small: false,
};
