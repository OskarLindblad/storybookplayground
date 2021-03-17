import React, { useState } from "react";
//import React from "react";

import "./App.css";
import Input from "./components/Input/Input";

import DatePicker from "./datepicker2/DatePicker";

//import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";

function App() {
  const [state, setstate] = useState("");

  return (
    <div className="App">
      {/*<LegalFeesDistrubution />*/}
      <br />
      <DatePicker />
      <br />
      <Input
        label="banana"
        onChange={setstate}
        suffixInput="65465734567"
        smallField
      />
      <br />
      {state}
    </div>
  );
}

export default App;
