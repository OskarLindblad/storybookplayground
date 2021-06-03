import React, { useState } from "react";

import RadioButton from "../Components/RadioButton/RadioButton";

const RadioButtonStyle = ({ styled, setStyled }) => {
  const [select, setSelect] = useState("");

  const nr1 = "option1";
  const nr2 = "option2";
  const nr3 = "option3";

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>RadioButtons</h3>
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
      />
      {styled === "RadioButton" && (
        <div className="styling-container">Tittut {styled}</div>
      )}
    </div>
  );
};

export default RadioButtonStyle;
