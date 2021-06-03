import React from "react";

import Button from "../Components/Button/Button";

const ButtonStyle = ({ styled, setStyled }) => {
  const buttonClick = () => {
    console.log("Hi, in the log!");
  };

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Button</h3>
        <button onClick={() => setStyled("Button")}>&#9998;</button>
      </div>
      <Button
        label="CANCEL"
        buttonType="text"
        type="button"
        className="cancelButton"
        onMouseUp={buttonClick}
      />
      {styled === "Button" && (
        <div className="styling-container">Tittut {styled}</div>
      )}
    </div>
  );
};

export default ButtonStyle;
