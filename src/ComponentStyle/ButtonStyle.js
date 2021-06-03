import React, { useState } from "react";

import Button from "../Components/Button/Button";
import StyleComponent from "../Components/PlayGroundComponent/StyleComponent";
import StyleComponentBool from "../Components/PlayGroundComponent/StyleComponentBool";
import StyleComponentOptions from "../Components/PlayGroundComponent/StyleComponentOptions";

import test from "./test.png";

const ButtonStyle = ({ styled, setStyled }) => {
  const buttonClick = () => {
    console.log("Hi, in the log!");
  };
  const [label, setLabel] = useState("test");
  const [buttonType, setButtonType] = useState("outlined");
  const [icon, setIcon] = useState(false);
  const [side, setSide] = useState(true);

  const [noUpperCase, setNoUpperCase] = useState(false);
  const [small, setSmall] = useState(false);

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Button</h3>
        <button onClick={() => setStyled("Button")}>&#9998;</button>
      </div>
      <Button
        label={label}
        buttonType={buttonType}
        type="button"
        onMouseUp={buttonClick}
        //
        icon={icon ? test : ""}
        side={side ? "right" : "left"}
        NoUpperCase={noUpperCase}
        small={small}
      />
      {styled === "Button" && (
        <div className="styling-container">
          <h3>Buttons</h3>
          <StyleComponent
            title="Label"
            handleStyle={(e) => {
              setLabel(e.target.value);
            }}
            type="text"
            suffix=""
          />
          <StyleComponentOptions
            title="Button Style"
            options={["outlined", "contained", "text", "nonactive", "yellow"]}
            handleChange={(e) => setButtonType(e.target.value)}
          />
          {buttonType}
          <StyleComponentBool
            title="Icon"
            info="Only one test icon here, but it's not a boolean otherwise"
            boolean={icon}
            handleBoolean={setIcon}
          />
          <StyleComponentBool
            title="Icon to the Right"
            boolean={side}
            handleBoolean={setSide}
          />
          <StyleComponentBool
            title="UpperCase"
            boolean={noUpperCase}
            handleBoolean={setNoUpperCase}
          />
          <StyleComponentBool
            title="Small"
            boolean={small}
            handleBoolean={setSmall}
          />
        </div>
      )}
    </div>
  );
};

export default ButtonStyle;
