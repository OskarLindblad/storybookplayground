import React from "react";
import MultiRange from "./MultiRange/MultiRange";

export default function ApproximateDate({
  date,
  index,
  dates,
  setDates,
  rangeMax,
}) {
  /*  const removeCourtCase = (id) => {
    const newList = approximations.filter((item) => item.id !== id);

    setApproximations(newList);
  };

*/
  const addDate = () => {
    setDates((e) => [
      ...e,
      {
        id: Date.now(),
        month: dates[dates.length - 1].month + 1,
        date: "",
        type: "none",
      },
    ]);
  };

  const nrOfDates = dates.length - 1;

  let trimmedDates = [];
  for (let i = 0; i < dates.length; i++) {
    if (i < index + 1) {
      trimmedDates.push(dates[i]);
    }
  }
  console.log(index);

  console.log(trimmedDates);
  return (
    <>
      <MultiRange dates={dates} setDates={setDates} rangeMax={rangeMax} />
      {nrOfDates === index && <button onClick={addDate}>Add Date</button>}
    </>
  );
}
