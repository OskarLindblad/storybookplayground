import React, { useState } from "react";

import RadioButton from "../Components/RadioButton/RadioButton";
import StyleComponent from "../Components/PlayGroundComponent/StyleComponent";

const RadioButtonStyle = ({ styled, setStyled }) => {
  const [select, setSelect] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [buttonSize, setButtonSize] = useState(15);

  const nr1 = "option1";
  const nr2 = "option2";
  const nr3 = "option3";

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Radio Buttons</h3>
        <button onClick={() => setStyled("RadioButton")}>&#9998;</button>
      </div>
      <RadioButton
        onChange={(e) => {
          setSelect(e.target.value);
        }}
        id={nr1}
        label={nr1}
        value={nr1}
        name={nr1}
        isSelected={select === nr1 ? true : false}
        fontSize={`${fontSize}px`}
        buttonSize={`${buttonSize}px`}
      />
      <RadioButton
        onChange={(e) => {
          setSelect(e.target.value);
        }}
        id={nr2}
        label={nr2}
        value={nr2}
        name={nr2}
        isSelected={select === nr2 ? true : false}
        fontSize={`${fontSize}px`}
        buttonSize={`${buttonSize}px`}
      />
      <RadioButton
        onChange={(e) => {
          setSelect(e.target.value);
        }}
        id={nr3}
        label={nr3}
        value={nr3}
        name={nr3}
        isSelected={select === nr3 ? true : false}
        fontSize={`${fontSize}px`}
        buttonSize={`${buttonSize}px`}
      />
      {styled === "RadioButton" && (
        <div className="styling-container">
          <div className="styling-container-content">
            <h3>Radio Buttons</h3>

            <StyleComponent
              title="Font Size"
              info="Limited here to px, but can be used with any viable font-size value"
              handleStyle={(e) => {
                setFontSize(e.target.value);
              }}
              type="number"
              value={fontSize}
              suffix="px"
            />
            <StyleComponent
              title="Button Size"
              info="Limited here to px, but can be used with any viable width value"
              handleStyle={(e) => {
                setButtonSize(e.target.value);
              }}
              type="number"
              suffix="px"
              value={buttonSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RadioButtonStyle;
