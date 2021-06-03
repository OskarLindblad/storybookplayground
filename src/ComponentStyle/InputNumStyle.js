import React, { useState } from "react";

import InputNum from "../Components/InputNum/InputNum";

const InputNumStyle = ({ styled, setStyled }) => {
  const [InputNumData, setInputNumData] = useState("");

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Input Numbers</h3>
        <button onClick={() => setStyled("InputNum")}>&#9998;</button>
      </div>
      <InputNum
        defaultValue={InputNumData}
        onChange={(value) => setInputNumData(value)}
      />
      {styled === "InputNum" && (
        <div className="styling-container">
          {" "}
          <div className="styling-container-content"></div>
        </div>
      )}
    </div>
  );
};

export default InputNumStyle;
