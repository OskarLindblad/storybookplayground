import React, { useState } from "react";
//import React from "react";

//mport logo from "./logo.svg";
//import InputNum from "./components/InputNum/InputNum";

import "./App.css";

// import DatePicker from "./datepicker2/DatePicker";

// import LegalFeesDistrubution from "./legalFeesDistrubution/LegalFeesDistrubution";
import DataList from "./components/DataList/DataList";
/* import DropDown from "./components/DropDown/DropDown";
import InputDate from "./components/InputDate/InputDate";
import InputNum from "./components/InputNum/InputNum";
import InputNumReadOnly from "./components/InputNumReadOnly/InputNumReadOnly";
import InputText from "./components/InputText/InputText"; */
import RadioButton from "./components/RadioButton/RadioButton";

function App() {
  const [state, setstate] = useState("");
  const [test, setTest] = useState(false);

  const handleChange = (e) => {
    setstate(e.target.value);
  };
  console.log(test);

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
        options={[-12, 23, 11, 21, 333]}
        placeHolderMaxWidth="30px"
        maxValue={100000}
        maxLength={10}
        smallField
        suffix="%"
        error
        errorMessage="fsgfgruefwefw fewfewweffew fewfwefew sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdr sdfbishdfguhdsfigbdrfyegu"
        helperText="sdjkgkjsd fghjbgjhdbfgjkdfg sdfbishdfguhdsfigbdr sefbhisfghiuugbr"
      />
      <RadioButton
        id="1"
        label="text..."
        onChange={setstate}
        onClick={handleChange}
        isSelected={test}
        fontSize="33px"
        buttonSize="112px"
      />
      <button onClick={() => setTest(!test)}>klick</button>
      {state}
    </div>
  );
}

export default App;
