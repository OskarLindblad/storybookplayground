import React, { useState } from "react";

import { options } from "../modules/options";

import DropDown from "../Components/DropDown/DropDown";

const DataListStyle = () => {
  const [DataListData, setDataListData] = useState("");
  return (
    <div className="component-container">
      <h3>DropDown</h3>
      <DropDown
        options={options}
        value={DataListData}
        onChange={(value) => setDataListData(value)}
      />
    </div>
  );
};

export default DataListStyle;
