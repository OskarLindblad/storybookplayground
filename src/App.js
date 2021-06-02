import React from "react";

import "./App.css";

import ButtonStyle from "./ComponentStyle/ButtonStyle";
import DataListStyle from "./ComponentStyle/DataListStyle";
import DropDownStyle from "./ComponentStyle/DropDownStyle";
import InputDateStyle from "./ComponentStyle/InputDateStyle";
import InputNumStyle from "./ComponentStyle/InputNumStyle";
import InputNumReadOnlyStyle from "./ComponentStyle/InputNumReadOnlyStyle";

function App() {
  return (
    <div className="App">
      <ButtonStyle />
      <DataListStyle />
      <DropDownStyle />
      <InputDateStyle />
      <InputNumStyle />
      <InputNumReadOnlyStyle />
    </div>
  );
}

export default App;
