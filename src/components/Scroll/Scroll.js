import React from "react";
import "./Scroll.css";
import PropTypes from "prop-types";

export const Scroll = (props) => {
  return (
    <div className="scroll" style={{ height: props.height }}>
      {props.children}
    </div>
  );
};

export default Scroll;

Scroll.propTypes = {
  content: PropTypes.string,
  height: PropTypes.string,
};

Scroll.defaultProps = {
  content: "",
  height: "auto",
};
