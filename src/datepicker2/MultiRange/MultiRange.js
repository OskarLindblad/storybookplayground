import React from "react";
import "./MultiRange.css";
import PropTypes from "prop-types";
import moment from "moment";

export const MultiRange = ({
  label,
  dates,
  setDates,
  rangeMax,
  width,
  ...rest
}) => {
  const handleChange = (e, id, index) => {
    let numberOfRanges = dates.length - 1; // -1 to easier compare to index
    let current = parseInt(e.target.value);

    let direction;
    if (dates[index].month < current) {
      direction = "higher";
    } else if (dates[index].month > current) {
      direction = "lower";
    }

    // CONTINUE
    if (monthDifference(index) > rangeMax) {
      console.log("Too Big");
    }

    setDates(
      dates.map((item) => (item.id === id ? { ...item, month: current } : item))
    );
    //  higher
    if (direction === "higher" && numberOfRanges > index) {
      const after = dates[index + 1].month;
      if (current >= after) {
        setDates(
          dates.map((item) =>
            item.id === id ? { ...item, month: after - 1 } : item
          )
        );
      }
    }
    // lower
    else if (direction === "lower" && index !== 0) {
      const before = dates[index - 1].month;
      if (current <= before) {
        setDates(
          dates.map((item) =>
            item.id === id ? { ...item, month: before + 1 } : item
          )
        );
      }
    }
  };

  const whatDate = (months) => {
    const date = moment(dates[0].month, "DD/MM/YYYY")
      .add(months, "months")
      .calendar();
    const formatedDate = moment(date, "MM/DD/YYYY").format("DD/MM/YYYY");
    return formatedDate;
  };

  const monthDifference = (index) => {
    const current = dates[index].month;
    let before;
    if (index === 0) {
      before = 0;
    } else {
      before = dates[index - 1].month;
    }
    return current - before;
  };

  const calcRangeMax = (index) => {
    return rangeMax * (index + 1);
  };

  return (
    <div className="multiRange" style={{ width: width }}>
      <p className="multiRange-label">{label}</p>

      {dates.map((date, index) => (
        <React.Fragment key={index}>
          {date.type !== "none" && date.date !== "" && (
            <div
              className="multiRange-container"
              style={{ width: `calc( 100% )` }}
            >
              <div
                className="multiRange-value-display-up"
                style={{ width: width }}
              >
                <p
                  style={{
                    marginLeft: `calc(  ${width} / ${
                      rangeMax * dates.length
                    } *  ${date.month} - ${width} / ${
                      rangeMax * dates.length
                    } * 0.75 )`,
                  }}
                  className={`multiRange-value-${
                    index % 2 === 0 ? "up" : "hide"
                  }`}
                >
                  {date.type === "initial" && `${date.date}`}
                  {date.type === "specific" && `${date.date}`}
                  {date.type === "approximate" &&
                    `${monthDifference(index)} months`}
                </p>
              </div>
              <input
                key={index}
                type="range"
                min="1"
                max={calcRangeMax(index)}
                value={date.month}
                className="slider"
                disabled={
                  date.type === "initial" || (date.type === "specific" && true)
                }
                onChange={(e) => handleChange(e, date.id, index)}
                style={{
                  width: `calc( 100% / ${dates.length} * ${index + 1} )`,
                }}
              />
              <div
                className="multiRange-value-display-down"
                style={{ width: width }}
              >
                <p
                  style={{
                    marginLeft: `calc(  ${width} / ${
                      rangeMax * dates.length
                    } *  ${date.month} - ${width} / ${
                      rangeMax * dates.length
                    } * 0.75 )`,
                  }}
                  className={`multiRange-value-${
                    index % 2 !== 0 ? "down" : "hide"
                  }`}
                >
                  {date.type === "initial" && `${date.date}`}
                  {date.type === "specific" && `${date.date}`}
                  {date.type === "approximate" &&
                    `${monthDifference(index)} months`}
                </p>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      <div className="multiRange-bar"></div>
    </div>
  );
};

export default MultiRange;

MultiRange.propTypes = {
  label: PropTypes.string,
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      month: PropTypes.number,
    })
  ),
  setDates: PropTypes.func,
  rangeMax: PropTypes.number,
  width: PropTypes.string,
  startDate: PropTypes.string,
};

MultiRange.defaultProps = {
  label: "",
  dates: [{ id: 1, month: 1 }],
  setDates: undefined,
  rangeMax: 10,
  width: "500px",
  startDate: moment().format("L"),
};
