import React, { useState } from "react";
//import React from "react";

//mport logo from "./logo.svg";
//import InputNum from "./components/InputNum/InputNum";

import "./App.css";

// import DatePicker from "./datepicker2/DatePicker";

// import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";
import DataList from "./components/DataList/DataList";
import DropDown from "./components/DropDown/DropDown";
import InputDate from "./components/InputDate2/InputDate";
import InputNum from "./components/InputNum/InputNum";
import InputNumReadOnly from "./components/InputNumReadOnly/InputNumReadOnly";
import InputText from "./components/InputText/InputText";

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
        options={[-12, 23, 333]}
        placeHolderMaxWidth="30px"
        maxValue={100000}
        maxLength={99999}
        error
        smallField
        errorMessage="fsgfgruefwefw fewfewweffew fewfwefew sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdrfyegu"
        helperText="sdjkgkjsd fghjbgjhdbfgjkdfg sdfbishdfguhdsfigbdr sefbhisfghiuugbr"
      />
      <br />
      <br />
      <br />

      <DropDown
        label="hdsjdgs"
        smallField
        helperText="djhidnewid sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr  ewfjiwfhiuehfu fehweghfiew"
      />
      <InputDate
        label="hdsjdgs"
        smallField
        helperText="sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr djhidnewid ewfjiwfhiuehfu fehweghfiew"
      />
      {
        <InputNum
          label="hdsjdgs"
          smallField
          helperText="sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr djhidnewid ewfjiwfhiuehfu fehweghfiew"
        />
      }
      <InputNumReadOnly
        label="---"
        smallField
        helperText="sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr djhidnewid ewfjiwfhiuehfu fehweghfiew"
      />
      <InputText
        label="hdsjdgs"
        smallField
        helperText="sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr djhidnewid ewfjiwfhiuehfu fehweghfiew"
      />
      {state}
    </div>
  );
}

export default App;
