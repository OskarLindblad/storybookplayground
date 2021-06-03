import React, { useState } from "react";

import "./App.css";

import ButtonStyle from "./ComponentStyle/ButtonStyle";
import DataListStyle from "./ComponentStyle/DataListStyle";
import DropDownStyle from "./ComponentStyle/DropDownStyle";
import InputDateStyle from "./ComponentStyle/InputDateStyle";
import InputNumStyle from "./ComponentStyle/InputNumStyle";
import InputNumReadOnlyStyle from "./ComponentStyle/InputNumReadOnlyStyle";
import InputTextStyle from "./ComponentStyle/InputTextStyle";
import RadioButtonStyle from "./ComponentStyle/RadioButtonStyle";

function App() {
  const [styled, setStyled] = useState("");

  return (
    <div className="App">
      <RadioButtonStyle styled={styled} setStyled={setStyled} />
      <ButtonStyle styled={styled} setStyled={setStyled} />
      <DataListStyle styled={styled} setStyled={setStyled} />
      <InputDateStyle styled={styled} setStyled={setStyled} />
      <InputNumStyle styled={styled} setStyled={setStyled} />
      <InputNumReadOnlyStyle styled={styled} setStyled={setStyled} />
      <InputTextStyle styled={styled} setStyled={setStyled} />
      <DropDownStyle styled={styled} setStyled={setStyled} />
      {styled && (
        <div onClick={() => setStyled("")} className="closeBtn">
          &#10005;
        </div>
      )}
    </div>
  );
}

export default App;
