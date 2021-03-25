import React, { useState } from "react";
//import React from "react";

import logo from "./logo.svg";

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
        placeHolderMaxWidth="50px"
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      {state}
    </div>
  );
}

export default App;
