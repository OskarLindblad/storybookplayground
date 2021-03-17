import React, { useState } from "react";
//import React from "react";

import "./App.css";
import Input from "./components/InputNum/InputNum";
import error from "./logo.svg";

//import DatePicker from "./datepicker2/DatePicker";

//import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";

function App() {
  const [state, setstate] = useState("");

  return (
    <div className="App">
      {/*<LegalFeesDistrubution />*/}
      <br />
      {/*<DatePicker />*/}
      <br />
      <Input
        label="banana"
        onChange={setstate}
        suffixInput="65465734567"
        suffixImg={error}
        value={10000}
        readOnly
      />
      <br />
      {state}
    </div>
  );
}

export default App;
