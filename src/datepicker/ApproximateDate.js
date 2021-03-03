import React from "react";
import Button from "../components/Button/Button";
import plus from "./plus.svg";
import cross from "./cross.svg";

import displayedApproximation from "./displayedApproximation";

export default function ApproximateDate({
  date,
  approximations,
  setApproximations,
}) {
  const addCourtCase = () => {
    setApproximations((e) => [
      ...e,
      {
        id: Date.now(),
        value: 6,
        displayed: "6 months",
      },
    ]);
  };

  const removeCourtCase = (id) => {
    const newList = approximations.filter((item) => item.id !== id);

    setApproximations(newList);
  };

  const handleChange = (e, id) => {
    setApproximations(
      approximations.map((item) =>
        item.id === id
          ? {
              ...item,
              value: e.target.value,
              displayed: displayedApproximation(e.target.value),
            }
          : item
      )
    );
  };

  const removeRange = (approximations, index) => {
    let newRange = [];
    for (let i = 0; i < index; i++) {
      newRange.push(approximations[i]);
    }

    return newRange;
  };

  const OrdinalNumeral = (i) => {
    var j = i % 10,
      k = i % 100;
    if (i === 1) {
      return "";
    }
    if (j === 1 && k !== 11) {
      return i + "st ";
    }
    if (j === 2 && k !== 12) {
      return i + "nd ";
    }
    if (j === 3 && k !== 13) {
      return i + "rd ";
    }
    return i + "th ";
  };

  return (
    <>
      {approximations.map((approximation, index) => (
        <div key={approximation.id}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3 style={{ marginRight: "0.5em" }}>{index + 1}st Court Date</h3>
            {index + 1 === approximations.length && (
              <img
                src={cross}
                alt="remove"
                onClick={() => removeCourtCase(approximation.id)}
              />
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {date} -
            {removeRange(approximations, index).map((approximationRange) => (
              <div
                style={{ display: "flex", flexDirection: "column" }}
                key={approximationRange.id}
              >
                <input
                  key={approximationRange.id}
                  type="range"
                  min="1"
                  max="10"
                  value="10"
                  className="slider"
                  readOnly
                />
                <p>{approximationRange.displayed}</p>
              </div>
            ))}
            <input
              type="range"
              min="1"
              max="48"
              value={approximation.value}
              className="slider"
              id="myRange"
              onChange={(e) => handleChange(e, approximation.id)}
            />
            <p>{displayedApproximation(approximation.value)}</p>
          </div>
        </div>
      ))}

      <Button
        label={`Add ${OrdinalNumeral(approximations.length + 1)}Court Date`}
        type="outlined"
        icon={plus}
        onClick={addCourtCase}
      />
    </>
  );
}
