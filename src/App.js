import React from "react";

import "./App.css";
import DatePicker from "./datepicker2/DatePicker";
//import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";
import Button from "./components/Button/Button";
import error from "./components/Button/error.svg";

import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      {/*<LegalFeesDistrubution />*/}
      <br />
      <DatePicker />
      <br />
    </div>
  );
}

export default App;
