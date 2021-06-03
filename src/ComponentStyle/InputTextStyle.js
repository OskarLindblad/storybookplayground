import React, { useState } from "react";

import InputText from "../Components/InputText/InputText";

const InputTextStyle = ({ styled, setStyled }) => {
  const [InputTextData, setInputTextData] = useState("");

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Input Text</h3>
        <button onClick={() => setStyled("InputText")}>&#9998;</button>
      </div>
      <InputText
        defaultValue={InputTextData}
        onChange={(value) => setInputTextData(value)}
      />
      {styled === "InputText" && (
        <div className="styling-container">Tittut {styled}</div>
      )}
    </div>
  );
};

export default InputTextStyle;
