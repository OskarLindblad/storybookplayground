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
  onClick,
  NoUpperCase,
  ...rest
}) => {
  return (
    <div
      className={`
        button 
        button-type-${type}
        ${icon ? "button-with-icon" : ""}
        ${NoUpperCase ? "button-NoUpperCase" : ""}
        ${className && className}
        `}
      onClick={() => {
        onClick();
      }}
    >
      {side === "left" ? (
        <div className="button-container">
          {icon && (
            <div className="button-icon-container button-icon-left">
              <img src={icon} alt="icon" className="button-icon" />
            </div>
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
            <div className="button-icon-container button-icon-right">
              <img src={icon} alt="icon" className="button-icon" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["contained", "outlined", "text", "nonactive"]),
  side: PropTypes.oneOf(["left", "right"]),
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  NoUpperCase: PropTypes.bool,
};

Button.defaultProps = {
  label: "",
  type: "contained",
  side: "left",
  icon: "",
  className: "",
  onClick: undefined,
  NoUpperCase: true,
};
