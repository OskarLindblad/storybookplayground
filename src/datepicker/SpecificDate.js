import React from "react";
import Button from "../components/Button/Button";
import plus from "./plus.svg";
import cross from "./cross.svg";
import plusWhite from "./plusWhite.svg";
import OrdinalNumeral from "./OrdinalNumeral";
import InputDate from "../components/InputDate/InputDate";
import ValidateDate from "../components/InputDate/ValidateDate";
import CheckIfLaterDate from "./CheckIfLaterDate";

export default function SpecificDate({
  date,
  specificDates,
  setSpecificDates,
}) {
  const addCourtCase = () => {
    setSpecificDates((e) => [
      ...e,
      {
        id: [...Array(10)]
          .map((i) => (~~(Math.random() * 36)).toString(36))
          .join(""),
        value: "",
        filled: false,
        error: false,
      },
    ]);
  };

  const removeCourtCase = (id) => {
    const newList = specificDates.filter((item) => item.id !== id);
    setSpecificDates(newList);
  };

  const handleDate = (e, id, index) => {
    const checkedDate = ValidateDate(e.target.value);
    if (index === 0) {
      CheckIfLaterDate(date, specificDates[index].value);
    } else {
      CheckIfLaterDate(specificDates[index - 1], specificDates[index].value);
    }

    setSpecificDates(
      specificDates.map((item) =>
        item.id === id
          ? {
              ...item,
              value: e.target.value,
              filled: checkedDate.filled,
              error: checkedDate.error,
            }
          : item
      )
    );
  };

  const removeRange = (specificDates, index) => {
    let newRange = [];
    for (let i = 0; i < index; i++) {
      newRange.push(specificDates[i]);
    }
    return newRange;
  };

  const disableButton = (dates) => {
    for (let i = 0; i < dates.length; i++) {
      if (!dates[i].filled) {
        return true;
      } else if (dates[i].error) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <>
      {specificDates.map((specificDate, index) => (
        <div key={specificDate.id}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3 style={{ marginRight: "0.5em" }}>
              {OrdinalNumeral(index + 2)} Court Date
            </h3>
            {index + 1 === specificDates.length && (
              <img
                src={cross}
                alt="remove"
                onClick={() => removeCourtCase(specificDate.id)}
              />
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ marginRight: "3px" }}>{date} - </p>
            {removeRange(specificDates, index).map((specificDate) => (
              <div
                style={{ display: "flex", flexDirection: "column" }}
                key={specificDate.id}
              >
                <p style={{ marginRight: "3px" }}>{specificDate.value} - </p>
              </div>
            ))}
            <InputDate
              label="Date"
              value={specificDate.value}
              onChange={(e) => handleDate(e, specificDate.id, index)}
              errorMessage="Invalid Date" //"Needs to be later"
              smallField
              error={specificDate.error}
            />
          </div>
        </div>
      ))}
      {disableButton(specificDates) ? (
        <Button
          label={`Add ${OrdinalNumeral(specificDates.length + 2)}Court Date`}
          type="nonactive"
          icon={plusWhite}
          onClick={function () {}}
        />
      ) : (
        <Button
          label={`Add ${OrdinalNumeral(specificDates.length + 2)}Court Date`}
          type="outlined"
          icon={plus}
          onClick={addCourtCase}
        />
      )}
    </>
  );
}
