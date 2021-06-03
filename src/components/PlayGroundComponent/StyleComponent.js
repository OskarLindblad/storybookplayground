import React, { useState } from "react";

export default function StyleComponent({
  title,
  info,
  type,
  handleStyle,
  suffix,
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
      <div className="input-wrap">
        <input type={type} onChange={handleStyle} />
        <p>{suffix}</p>
      </div>
    </div>
  );
}
