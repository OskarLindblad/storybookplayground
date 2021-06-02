import React from "react";

import Button from "../Components/Button/Button";

const ButtonStyle = () => {
  const buttonClick = () => {
    console.log("object");
  };

  return (
    <div className="component-container">
      <h3>Button</h3>
      <Button
        label="CANCEL"
        buttonType="text"
        type="button"
        className="cancelButton"
        onMouseUp={buttonClick}
      />
    </div>
  );
};

export default ButtonStyle;
