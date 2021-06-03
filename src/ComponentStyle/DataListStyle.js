import React, { useState } from "react";

import { options } from "../modules/options";

import DataList from "../Components/DataList/DataList";

const DataListStyle = ({ styled, setStyled }) => {
  const [dataListData, setDataListData] = useState([]);

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>DataList</h3>
        <button onClick={() => setStyled("DataList")}>&#9998;</button>
      </div>
      <DataList
        options={options}
        defaultValue={dataListData}
        onChange={(value) => {
          setDataListData(dataListData);
        }}
      />
      {styled === "DataList" && (
        <div className="styling-container">Tittut {styled}</div>
      )}{" "}
    </div>
  );
};

export default DataListStyle;
