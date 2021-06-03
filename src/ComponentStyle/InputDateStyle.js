import React, { useState } from "react";

import InputDate from "../Components/InputDate/InputDate";

const InputDateStyle = ({ styled, setStyled }) => {
  const [InputDateData, setInputDateData] = useState("");

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Input Date</h3>
        <button onClick={() => setStyled("InputDate")}>&#9998;</button>
      </div>
      <InputDate
        defaultValue={InputDateData}
        onChange={(value) => {
          setInputDateData(value);
        }}
      />
      {styled === "InputDate" && (
        <div className="styling-container">Tittut {styled}</div>
      )}
    </div>
  );
};

export default InputDateStyle;
