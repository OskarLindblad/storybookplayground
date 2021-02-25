import React, { useState } from "react";
import "./DataList.css";
import down from "./down.svg";

export const DataList = () => {
  const [selected, setSelected] = useState("");
  const [dropDown, showDropDown] = useState(false);

  const handleChange = (e) => {
    showDropDown(true);
    setSelected(e.target.value);
  };

  const handleClick = (likelyHood) => {
    setSelected(likelyHood);
  };

  return (
    <>
      <div className="datalist">
        <div className="datalist-input-container">
          <input
            className="datalist-input"
            type="number"
            name="number"
            value={selected}
            onInput={handleChange}
            onFocus={() => showDropDown(true)}
            onBlur={() => {
              setTimeout(() => {
                showDropDown(false);
              }, 100);
            }}
            autoComplete="off"
          />
          <div onClick={() => showDropDown(true)} className="input-down-button">
            <img src={down} alt="Remove" />
          </div>
        </div>

        {dropDown && (
          <div
            className="datalist-dropdown-container"
            onMouseEnter={() => {
              showDropDown(true);
            }}
            onMouseLeave={() => {
              showDropDown(false);
            }}
          >
            <ul className="datalist-dropdown">
              <li value="100" onClick={() => handleClick("100")}>
                Not Applicable (100.0%)
              </li>
              <li value="92.5" onClick={() => handleClick("92.5")}>
                Very High (92.5%)
              </li>
              <li value="77.5" onClick={() => handleClick("77.5")}>
                High (77.5%)
              </li>
              <li value="65" onClick={() => handleClick("65")}>
                Average High (65.0%)
              </li>
              <li value="50" onClick={() => handleClick("50")}>
                Average (50.0%)
              </li>
              <li value="35" onClick={() => handleClick("35")}>
                Average Low (35.0%)
              </li>
              <li value="22.5" onClick={() => handleClick("22.5")}>
                Low (22.5%)
              </li>
              <li value="7.5" onClick={() => handleClick("7.5")}>
                Very Low (7.5%)
              </li>
            </ul>
          </div>
        )}
      </div>

      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
    </>
  );
};

export default DataList;
