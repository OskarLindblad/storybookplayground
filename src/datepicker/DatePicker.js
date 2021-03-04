import React, { useState } from "react";
import ValidateDate from "../components/InputDate/ValidateDate";
import InputDate from "../components/InputDate/InputDate";

import SpecificOrApproximateDate from "./SpecificOrApproximateDate";
import ApproximateDate from "./ApproximateDate";
import SpecificDate from "./SpecificDate";

export default function DatePicker() {
  const [dateType, setDateType] = useState("");

  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [dateValidated, setDateValidated] = useState(false);
  const [approximations, setApproximations] = useState([
    { id: Date.now(), value: 6, displayed: "6 months" },
  ]);

  const [specificDates, setSpecificDates] = useState([
    { id: Date.now(), value: "", filled: false, error: false },
  ]);

  let datetypeSelected;
  if (dateType === "" || !dateValidated) {
    datetypeSelected = <></>;
  } else if (dateType === "approximate") {
    datetypeSelected = (
      <ApproximateDate
        date={date}
        approximations={approximations}
        setApproximations={setApproximations}
      />
    );
  } else if (dateType === "specific") {
    datetypeSelected = (
      <SpecificDate
        date={date}
        specificDates={specificDates}
        setSpecificDates={setSpecificDates}
      />
    );
  }

  const handleDate = (e) => {
    setDate(e.target.value);
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
        value={date}
        onChange={handleDate}
        error={error}
        errorMessage="Invalid Date"
        smallField
      />
      {dateValidated ? (
        <SpecificOrApproximateDate
          dateType={dateType}
          setDateType={setDateType}
        />
      ) : (
        <SpecificOrApproximateDate
          dateType={dateType}
          setDateType={setDateType}
          unClickable={true}
        />
      )}
      <br />
      {datetypeSelected}
    </div>
  );
}
