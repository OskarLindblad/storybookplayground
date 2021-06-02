import React, { useState } from "react";

import InputNumReadOnly from "../Components/InputNumReadOnly/InputNumReadOnly";

const InputNumReadOnlyStyle = () => {
  const [inputNumRO, setinputNumRO] = useState(123);
  return (
    <div className="component-container">
      <h3>InputNum ReadOnly</h3>
      <InputNumReadOnly
        value={inputNumRO}
        onChange={(value) => setinputNumRO(value)}
      />
    </div>
  );
};

export default InputNumReadOnlyStyle;
