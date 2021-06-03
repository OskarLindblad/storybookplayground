import React, { useState } from "react";

import { options } from "../modules/options";

import DropDown from "../Components/DropDown/DropDown";

const DataListStyle = ({ styled, setStyled }) => {
  const [DataListData, setDataListData] = useState("");
  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Dropdown</h3>
        <button onClick={() => setStyled("DropDown")}>&#9998;</button>
      </div>
      <DropDown
        options={options}
        value={DataListData}
        onChange={(value) => setDataListData(value)}
      />
      {styled === "DropDown" && (
        <div className="styling-container">Tittut {styled}</div>
      )}{" "}
    </div>
  );
};

export default DataListStyle;
