import React, { useState } from "react";
import Button from "../components/Button/Button";
import plus from "./plus.svg";

//import InputDate from "../components/InputDate/InputDate";

export default function ApproximateDate({
  date,
  approximations,
  setApproximations,
}) {
  const [approximateDate, setApproximateDate] = useState(6);

  const addCourtCase = () => {
    setApproximations((e) => [
      ...e,
      {
        approximation: 6,
        displayed: "6 months",
      },
    ]);
  };

  const displayedApproximation = (approximation) => {
    let estimation;

    if (approximation === 1) {
      estimation = `1 month`;
    } else if (approximation < 12) {
      estimation = `${approximation} months`;
    } else {
      const years = approximation / 12;
      const months = approximation % 12;
      if (months === 0) {
        if (years === 1) {
          estimation = `${years.toFixed(0)} year`;
        } else {
          estimation = `${years.toFixed(0)} years`;
        }
      } else {
        estimation = `${years.toFixed(0)} y ${months} m`;
      }
    }
    return `${estimation}`;
  };

  return (
    <>
      <h3>st Court Date</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {date} -
        <input
          type="range"
          min="1"
          max="47"
          value={approximateDate}
          className="slider"
          id="myRange"
          onChange={(e) => setApproximateDate(e.target.value)}
        />
        <p>{displayedApproximation(approximateDate)}</p>
      </div>

      <Button
        label="Add Court Date"
        type="outlined"
        icon={plus}
        onClick={addCourtCase}
      />
    </>
  );
}
