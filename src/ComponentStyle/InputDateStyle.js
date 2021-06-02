import React, { useState } from "react";

import InputDate from "../Components/InputDate/InputDate";

const InputDateStyle = () => {
  const [InputDateData, setInputDateData] = useState("");

  return (
    <div className="component-container">
      <h3>Input Date</h3>
      <InputDate
        defaultValue={InputDateData}
        onChange={(value) => {
          setInputDateData(value);
        }}
      />
    </div>
  );
};

export default InputDateStyle;
