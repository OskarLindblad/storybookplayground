import React, { useState } from "react";

import InputText from "../Components/InputText/InputText";
import StyleComponent from "../Components/PlayGroundComponent/StyleComponent";
import StyleComponentBool from "../Components/PlayGroundComponent/StyleComponentBool";
import test from "./test.png";

const InputTextStyle = ({ styled, setStyled }) => {
  const [InputTextData, setInputTextData] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  const [suffix, setSuffix] = useState("test");
  const [suffixImg, setSuffixImg] = useState(false);
  const [label, setLabel] = useState("test");
  const [placeHolderMaxWidth, setPlaceHolderMaxWidth] = useState("200");
  const [maxLength, setMaxLength] = useState(13);
  const [helperText, setHelperText] = useState("Test Helper Text");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error Helper Text");
  const [width, setWidth] = useState(250);
  const [tagcolor, setTagcolor] = useState("#818181");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [borderColor, setBorderColor] = useState("#818181");
  const [boldBorder, setBoldBorder] = useState(false);

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Input Text</h3>
        <button onClick={() => setStyled("InputText")}>&#9998;</button>
      </div>
      <InputText
        defaultValue={InputTextData}
        onChange={(value) => setInputTextData(value)}
        label={label}
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
        maxLength={maxLength}
      />
      {styled === "InputText" && (
        <div className="styling-container">
          <div className="styling-container-content">
            <h3>Input Text</h3>
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
            <StyleComponentBool
              title="Read Only"
              boolean={readOnly}
              handleBoolean={setReadOnly}
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
              title="Max Length"
              info="Maximum number of characters"
              handleStyle={(e) => {
                setMaxLength(e.target.value);
              }}
              value={maxLength}
              type="number"
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
          </div>
        </div>
      )}
    </div>
  );
};

export default InputTextStyle;
