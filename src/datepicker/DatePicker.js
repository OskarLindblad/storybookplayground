import React, { useState } from "react";
import ValidateDate from "../components/InputDate/ValidateDate";
import InputDate from "../components/InputDate/InputDate";
import SpecificOrApproximateDate from "./SpecificOrApproximateDate";

export default function DatePicker() {
  const [dateType, setDateType] = useState("");

  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [dateValidated, setDateValidated] = useState(false);

  let datetypeSelected;
  if (dateType === "" || !dateValidated) {
    datetypeSelected = <></>;
  } else if (dateType === "approximate") {
    datetypeSelected = <p>approximate</p>;
  } else if (dateType === "specific") {
    datetypeSelected = <p>specific</p>;
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
      <br /> <br />
      {datetypeSelected}
    </div>
  );
}
