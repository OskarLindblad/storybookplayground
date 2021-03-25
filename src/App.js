import React, { useState } from "react";
//import React from "react";

//mport logo from "./logo.svg";
import InputNum from "./components/InputNum/InputNum";

import "./App.css";

// import DatePicker from "./datepicker2/DatePicker";

// import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";
import DataList from "./components/DataList/DataList";

function App() {
  const [state, setstate] = useState("");
  const handleChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <div className="App">
      <br />
      {/*<DatePicker />*/}
      <br />
      <br />
      <DataList
        onChange={handleChange}
        label="hdsjdgs"
        defaultValue={state}
        maxDecimals={5}
        smallField
        options={[-12, 23, 333]}
        placeHolderMaxWidth="30px"
      />
      <br />
      <InputNum
        onChange={handleChange}
        label="hdsjdgs"
        defaultValue={state}
        maxDecimals={5}
        smallField
        placeHolderMaxWidth="30px"
      />
      {state}
    </div>
  );
}

export default App;
