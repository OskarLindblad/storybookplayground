import React, { useState } from "react";
import off from "./off.png";
import on from "./on.png";

export default function StyleComponentBool({
  title,
  info,
  boolean,
  handleBoolean,
}) {
  const [displayInfo, setDisplayInfo] = useState(false);
  return (
    <div className="style-wrap">
      <label>
        {info && (
          <p
            onMouseEnter={() => setDisplayInfo(true)}
            onMouseLeave={() => setDisplayInfo(false)}
          >
            &#63;
          </p>
        )}
        <h5>{title}</h5>
        {info && (
          <div
            className="style-info"
            style={{ display: displayInfo ? "block" : "none" }}
          >
            {info}
          </div>
        )}
      </label>
      <div className="style-bool" onClick={() => handleBoolean(!boolean)}>
        {boolean ? <img src={on} alt="on" /> : <img src={off} alt="off" />}
      </div>
    </div>
  );
}
