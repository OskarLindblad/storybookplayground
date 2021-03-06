import React, { useState } from "react";

import InputNum from "../Components/InputNum/InputNum";
import StyleComponent from "../Components/PlayGroundComponent/StyleComponent";
import StyleComponentBool from "../Components/PlayGroundComponent/StyleComponentBool";
import test from "./test.png";

const InputNumStyle = ({ styled, setStyled }) => {
  const [InputNumData, setInputNumData] = useState("");

  const [suffix, setSuffix] = useState("test");
  const [suffixImg, setSuffixImg] = useState(false);
  const [label, setLabel] = useState("test");
  const [placeHolderMaxWidth, setPlaceHolderMaxWidth] = useState("200");
  const [helperText, setHelperText] = useState("Test Helper Text");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error Helper Text");
  const [width, setWidth] = useState(250);
  const [tagcolor, setTagcolor] = useState("#818181");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [borderColor, setBorderColor] = useState("#818181");
  const [boldBorder, setBoldBorder] = useState(false);
  const [maxValue, setMaxValue] = useState(100);
  const [minValue, setMinValue] = useState(0);
  const [maxLength, setMaxLength] = useState(13);
  const [maxDecimals, setMaxDecimals] = useState(3);

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Input Numbers</h3>
        <button onClick={() => setStyled("InputNum")}>&#9998;</button>
      </div>
      <InputNum
        defaultValue={InputNumData}
        onChange={(value) => setInputNumData(value)}
        label={label}
        value={InputNumData} //NOTE: remove when using useFormContext
        //
        placeHolderMaxWidth={`${placeHolderMaxWidth}px`}
        suffix={suffix}
        suffixImg={suffixImg ? test : ""}
        helperText={helperText}
        error={error}
        errorMessage={errorMessage}
        width={`${width}px`}
        boldBorder={boldBorder}
        tagcolor={tagcolor}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        maxValue={maxValue}
        minValue={minValue}
        maxLength={maxLength}
        maxDecimals={maxDecimals}
      />
      {styled === "InputNum" && (
        <div className="styling-container">
          <div className="styling-container-content">
            <h3>Input Number</h3>
            <StyleComponent
              title="Label"
              handleStyle={(e) => {
                setLabel(e.target.value);
              }}
              type="text"
              value={label}
              info="Note the possibility to clash with the down-arrow and suffix. You can control width with"
            />
            <StyleComponent
              title="PlaceHolder MaxWidth"
              info="Limited here to px, but can be used with any viable width value. See Label-info, for more info"
              handleStyle={(e) => {
                setPlaceHolderMaxWidth(e.target.value);
              }}
              value={placeHolderMaxWidth}
              type="number"
              suffix="px"
            />
            <StyleComponent
              title="Suffix"
              handleStyle={(e) => {
                setSuffix(e.target.value);
              }}
              type="text"
              suffix=""
              value={suffix}
              info="Note the possibility to clash with the down-arrow and text"
            />
            <StyleComponentBool
              title="Suffix Image"
              info="Only one test Suffix image here, but it's not a boolean otherwise"
              boolean={suffixImg}
              handleBoolean={setSuffixImg}
            />

            <StyleComponent
              title="Helper Text"
              handleStyle={(e) => {
                setHelperText(e.target.value);
              }}
              type="text"
              value={helperText}
            />
            <StyleComponentBool
              title="Error"
              boolean={error}
              handleBoolean={setError}
              info="Overrides other styling"
            />
            <StyleComponent
              title="Error Message"
              handleStyle={(e) => {
                setErrorMessage(e.target.value);
              }}
              type="text"
              value={errorMessage}
            />
            <StyleComponent
              title="Width"
              handleStyle={(e) => {
                setWidth(e.target.value);
              }}
              value={width}
              type="number"
              suffix="px"
            />

            <StyleComponent
              title="Tag Color"
              handleStyle={(e) => {
                setTagcolor(e.target.value);
              }}
              value={tagcolor}
              type="color"
            />
            <StyleComponent
              title="Border Color"
              handleStyle={(e) => {
                setBorderColor(e.target.value);
              }}
              value={borderColor}
              type="color"
            />
            <StyleComponent
              title="Background Color"
              handleStyle={(e) => {
                setBackgroundColor(e.target.value);
              }}
              value={backgroundColor}
              type="color"
            />
            <StyleComponentBool
              title="Bold Border"
              boolean={boldBorder}
              handleBoolean={setBoldBorder}
            />

            <StyleComponent
              title="Max Length"
              info="Maximum number of characters"
              handleStyle={(e) => {
                setMaxLength(e.target.value);
              }}
              value={maxLength}
              type="number"
            />

            <StyleComponent
              title="Max Decimals"
              info="Maximum number of Decimals"
              handleStyle={(e) => {
                setMaxDecimals(e.target.value);
              }}
              value={maxDecimals}
              type="number"
            />
            <StyleComponent
              title="Max Value"
              info="Max Value should be larger than Min Value"
              handleStyle={(e) => {
                setMaxValue(e.target.value);
              }}
              value={maxValue}
              type="number"
            />
            <StyleComponent
              title="Min Value"
              info="Min Value should be larger than Min Value"
              handleStyle={(e) => {
                setMinValue(e.target.value);
              }}
              value={minValue}
              type="number"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputNumStyle;
