import React, { useState } from "react";

import { options } from "../modules/options";

import DataList from "../Components/DataList/DataList";

const DataListStyle = () => {
  const [dataListData, setDataListData] = useState([]);

  return (
    <div className="component-container">
      <h3>DataList</h3>
      <DataList
        options={options}
        defaultValue={dataListData}
        onChange={(value) => {
          setDataListData(dataListData);
        }}
      />
    </div>
  );
};

export default DataListStyle;
