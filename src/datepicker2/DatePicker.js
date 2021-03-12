import React, { useState } from "react";
import ValidateDate from "../components/InputDate/ValidateDate";
import InputDate from "../components/InputDate/InputDate";
import MultiRange from "./MultiRange/MultiRange";

import SpecificOrApproximateDate from "./SpecificOrApproximateDate";

export default function DatePicker() {
  const [dates, setDates] = useState([
    { id: 1, date: "", month: 0, type: "initial" },
    { id: 2, date: "", month: 0, type: "none" },
  ]);
  const [error, setError] = useState(false);
  const [dateValidated, setDateValidated] = useState(false);

  const handleInitiantionDates = (e) => {
    setDates(
      dates.map((item) =>
        item.id === 1
          ? { ...item, id: 1, date: e.target.value, month: 0, type: "initial" }
          : item
      )
    );
    const date = ValidateDate(e.target.value);
    if (date.filled && date.error) {
      setError(true);
      setDateValidated(false);
    } else if (!date.filled && !date.error) {
      setError(false);
      setDateValidated(false);
    } else {
      setError(false);
      setDateValidated(true);
    }
  };

  return (
    <div>
      <InputDate
        label="Initiation Date"
        value={dates[0].date}
        onChange={handleInitiantionDates}
        error={error}
        errorMessage="Invalid Date"
        smallField
      />
      {dates.map((date, index) => (
        <SpecificOrApproximateDate
          dateValidated={!dateValidated}
          index={index}
          key={index}
          date={date}
          dates={dates}
          setDates={setDates}
        />
      ))}

      <br />
      {dateValidated && (
        <MultiRange
          dates={dates}
          setDates={setDates}
          label={"Test"}
          rangeMax={48}
        />
      )}
    </div>
  );
}
