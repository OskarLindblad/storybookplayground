import React, { useState } from "react";

import { options } from "../modules/options";

import DropDown from "../Components/DropDown/DropDown";
import StyleComponent from "../Components/PlayGroundComponent/StyleComponent";
import StyleComponentBool from "../Components/PlayGroundComponent/StyleComponentBool";

const DataListStyle = ({ styled, setStyled }) => {
  const [DataListData, setDataListData] = useState("");
  const [label, setLabel] = useState("test");
  const [helperText, setHelperText] = useState("Test Helper Text");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error Helper Text");
  const [width, setWidth] = useState(250);
  const [placeHolderMaxWidth, setPlaceHolderMaxWidth] = useState("200");
  const [tagcolor, setTagcolor] = useState("#818181");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [borderColor, setBorderColor] = useState("#818181");
  const [boldBorder, setBoldBorder] = useState(false);

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Dropdown</h3>
        <button onClick={() => setStyled("DropDown")}>&#9998;</button>
      </div>
      <DropDown
        options={options}
        value={DataListData}
        onChange={(value) => setDataListData(value)}
        label={label}
        //
        placeHolderMaxWidth={`${placeHolderMaxWidth}px`}
        helperText={helperText}
        error={error}
        errorMessage={errorMessage}
        width={`${width}px`}
        boldBorder={boldBorder}
        tagcolor={tagcolor}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
      />
      {styled === "DropDown" && (
        <div className="styling-container">
          <div className="styling-container-content">
            <h3>Dropdown</h3>
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

export default DataListStyle;
