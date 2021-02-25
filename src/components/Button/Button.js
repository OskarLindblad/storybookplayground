import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({
  label,
  icon,
  className,
  type, // actually color, but that messes with storybook
  size,
  side,
  ...rest
}) => {
  return (
    <div
      className={`
        button 
        button-color-${type}
        button-size-${size}
        ${className}
        `}
    >
      {side === "left" ? (
        <div className="button-container">
          {icon && (
            <img
              src={icon}
              alt="icon"
              className="button-icon button-icon-left"
            />
          )}
          <div className="button-label">
            <p>{label}</p>
          </div>
        </div>
      ) : (
        <div className="button-container">
          <div className="button-label">
            <p>{label}</p>
          </div>

          {icon && (
            <img
              src={icon}
              alt="icon"
              className="button-icon button-icon-right"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["yellow", "red", "purple", "blue"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  side: PropTypes.oneOf(["left", "right"]),
  icon: PropTypes.string,
};

Button.defaultProps = {
  label: "",
  type: "blue",
  size: "medium",
  side: "left",
  icon: "",
};
