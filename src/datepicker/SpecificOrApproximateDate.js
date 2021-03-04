import React from "react";
import RadioButton from "../components/RadioButton/RadioButton";

export default function SpecificOrApproximateDate({
  dateType,
  setDateType,
  unClickable,
}) {
  return (
    <div className="specific-or-approximate-date">
      <h3>1st Court Instance</h3>

      <RadioButton
        setChecked={setDateType}
        checked={dateType}
        unClickable={unClickable}
        id="specific-radioButton"
        label="Specific Date"
        type="specific"
      />
      <RadioButton
        setChecked={setDateType}
        checked={dateType}
        unClickable={unClickable}
        id="approximate-radioButton"
        label="Approximate Date"
        type="approximate"
      />
    </div>
  );
}
