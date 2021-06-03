import React, { useState } from "react";

export default function StyleComponentBool({
  title,
  info,
  handleChange,
  options,
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
      <div className="style-options">
        <select onChange={handleChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
