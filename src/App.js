import React, { useState } from "react";

import "./App.css";

import DropDown from "./components/DropDown/DropDown";
import Button from "./components/Button/Button";

import DatePicker from "./datepicker2/DatePicker";
//import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";

function App() {
  const array = ["3", 56, "banana"];
  const [test, setTest] = useState("");

  const onChange = (e) => {
    setTest(e.target.value);
  };

  return (
    <div className="App">
      {/*<LegalFeesDistrubution />*/}
      <br />
      <DatePicker />
      <br />
      <DropDown options={array} label="label" onChange={onChange} smallField />
      {test}
      <br />
      <Button />
    </div>
  );
}

export default App;
