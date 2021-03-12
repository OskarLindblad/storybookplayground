import React, { useState, useEffect } from "react";
import RadioButton from "../components/RadioButton/RadioButton";
import ordinalNumber from "./Modules/ordinalNumeral";
import SpecificDate from "./SpecificDate";

export default function SpecificOrApproximateDate({
  dateValidated,
  index,
  date,
  dates,
  setDates,
}) {
  const [dateType, setDateType] = useState("none");

  useEffect(() => {
    setDates(
      dates.map((item) =>
        item.id === date.id ? { ...item, type: dateType } : item
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateType]);

  return (
    <>
      {date.type !== "initial" && (
        <div className="specific-or-approximate-date">
          <h3>{ordinalNumber(index)} Court Instance</h3>
          <RadioButton
            setChecked={setDateType}
            checked={dateType}
            unClickable={dateValidated}
            id="specific-radioButton"
            label="Specific Date"
            type="specific"
          />
          <RadioButton
            setChecked={setDateType}
            checked={dateType}
            unClickable={dateValidated}
            id="approximate-radioButton"
            label="Approximate Date"
            type="approximate"
          />
          {date.type === "specific" && (
            <SpecificDate date={date} dates={dates} setDates={setDates} />
          )}
        </div>
      )}
    </>
  );
}
