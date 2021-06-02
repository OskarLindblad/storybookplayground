import React, { useState } from "react";

import InputNum from "../Components/InputNum/InputNum";

const InputNumStyle = () => {
  const [InputNumData, setInputNumData] = useState("");

  return (
    <div className="component-container">
      <h3>Input Numbers</h3>
      <InputNum
        defaultValue={InputNumData}
        onChange={(value) => setInputNumData(value)}
      />
    </div>
  );
};

export default InputNumStyle;
