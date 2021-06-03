import React, { useState } from "react";

import InputNumReadOnly from "../Components/InputNumReadOnly/InputNumReadOnly";

const InputNumReadOnlyStyle = ({ styled, setStyled }) => {
  const [inputNumRO, setinputNumRO] = useState(123);
  return (
    <div className="component-container">
      <div className="component-title">
        <h3>InputNumber ReadOnly</h3>
        <button onClick={() => setStyled("InputNumReadOnly")}>&#9998;</button>
      </div>
      <InputNumReadOnly
        value={inputNumRO}
        onChange={(value) => setinputNumRO(value)}
      />
      {styled === "InputNumReadOnly" && (
        <div className="styling-container">
          <div className="styling-container-content"></div>
        </div>
      )}
    </div>
  );
};

export default InputNumReadOnlyStyle;
