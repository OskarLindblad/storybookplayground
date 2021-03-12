import React, { useState } from "react";

import InputDate from "../components/InputDate/InputDate";
import ValidateDate from "../components/InputDate/ValidateDate";
import approximateMonth from "./Modules/approximateMonth";

export default function SpecificDate({ date, dates, setDates }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [validDate, setValidDate] = useState(false);

  // TODO Flip BUG
  const [dateHolder, setDateHolder] = useState(
    isNaN(date.date) ? "" : date.date
  );

  const addDate = () => {
    setDates((e) => [
      ...e,
      {
        id: Date.now(),
        month: dates[dates.length - 1].value + 1,
        date: "",
        type: "none",
      },
    ]);
  };

  const handleDate = (e) => {
    // TODO: Block To Early Dates
    setDateHolder(e.target.value);
    const day = ValidateDate(e.target.value);
    if (day.filled && day.error) {
      setError(true);
      setErrorMessage("Invalid Date");
    } else if (!day.filled && !day.error) {
      setError(false);
    } else {
      setError(false);
      setValidDate(true);
      setDates(
        dates.map((item) =>
          item.id === date.id
            ? {
                ...item,
                date: e.target.value,
                month: approximateMonth(e.target.value, dates[0].date),
              }
            : item
        )
      );
    }
  };

  return (
    <>
      <br />
      <InputDate
        label="Date"
        value={dateHolder}
        onChange={handleDate}
        errorMessage={errorMessage}
        smallField
        error={error}
      />
      {validDate && <button onClick={addDate}>Add Date</button>}
    </>
  );
}
