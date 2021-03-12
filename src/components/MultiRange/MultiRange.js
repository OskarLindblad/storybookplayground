import React from "react";
import "./MultiRange.css";
import PropTypes from "prop-types";
//import approximateDate from "./displayedApproximation";
import moment from "moment";

/**  range NEED atleast id and value 
/* template: useState([{ id: 1, value: 1 }])
*/

export const MultiRange = ({
  label,
  ranges,
  setRanges,
  rangeMax,
  width,
  initiationDate,
  ...rest
}) => {
  const handleChange = (e, id, index) => {
    let numberOfRanges = ranges.length - 1; // -1 to easier compare to index
    let current = parseInt(e.target.value);

    let direction;
    if (ranges[index].value < current) {
      direction = "higher";
    } else if (ranges[index].value > current) {
      direction = "lower";
    }

    // CONTINUE
    if (monthDifference(index) < rangeMax) {
      console.log("Too Big");
    }

    setRanges(
      ranges.map((item) =>
        item.id === id ? { ...item, value: current } : item
      )
    );
    //  higher
    if (direction === "higher" && numberOfRanges > index) {
      const after = ranges[index + 1].value;
      if (current >= after) {
        setRanges(
          ranges.map((item) =>
            item.id === id ? { ...item, value: after - 1 } : item
          )
        );
      }
    }
    // lower
    else if (direction === "lower" && index !== 0) {
      const before = ranges[index - 1].value;
      if (current <= before) {
        setRanges(
          ranges.map((item) =>
            item.id === id ? { ...item, value: before + 1 } : item
          )
        );
      }
    }
  };

  const whatDate = (months) => {
    const date = moment(initiationDate, "DD/MM/YYYY")
      .add(months, "months")
      .calendar();
    const formatedDate = moment(date, "MM/DD/YYYY").format("DD/MM/YYYY");
    return formatedDate;
  };

  const monthDifference = (index) => {
    const current = ranges[index].value;
    let before;
    if (index === 0) {
      before = 0;
    } else {
      before = ranges[index - 1].value;
    }
    return current - before;
  };

  const calcRangeMax = (index) => {
    return rangeMax * (index + 1);
  };

  return (
    <div className="multiRange" style={{ width: width }}>
      <p className="multiRange-label">{label}</p>
      {initiationDate}

      {ranges.map((range, index) => (
        <div
          key={index}
          className="multiRange-container"
          style={{ width: `calc( 100% )` }}
        >
          <div className="multiRange-value-display-up" style={{ width: width }}>
            <p
              style={{
                marginLeft: `calc(  ${width} / ${rangeMax * ranges.length} *  ${
                  range.value
                } - ${width} / ${rangeMax * ranges.length} * 0.75 )`,
              }}
              className={`multiRange-value-${index % 2 === 0 ? "up" : "hide"}`}
            >
              {
                //approximateDate(range.value)
                whatDate(range.value)
              }
              - {monthDifference(index)} months
            </p>
          </div>
          <input
            key={index}
            type="range"
            min="1"
            max={calcRangeMax(index)}
            value={range.value}
            className="slider"
            onChange={(e) => handleChange(e, range.id, index)}
            style={{ width: `calc( 100% / ${ranges.length} * ${index + 1} )` }}
          />
          <div
            className="multiRange-value-display-down"
            style={{ width: width }}
          >
            <p
              style={{
                marginLeft: `calc(  ${width} / ${rangeMax * ranges.length} *  ${
                  range.value
                } - ${width} / ${rangeMax * ranges.length} * 0.75 )`,
              }}
              className={`multiRange-value-${
                index % 2 !== 0 ? "down" : "hide"
              }`}
            >
              {
                //approximateDate(range.value)
                whatDate(range.value)
              }
              - {monthDifference(index)} months
            </p>
          </div>
        </div>
      ))}
      <div className="multiRange-bar"></div>
    </div>
  );
};

export default MultiRange;

MultiRange.propTypes = {
  label: PropTypes.string,
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.number,
    })
  ),
  setRanges: PropTypes.func,
  rangeMax: PropTypes.number,
  width: PropTypes.string,
  startDate: PropTypes.string,
};

MultiRange.defaultProps = {
  label: "",
  ranges: [{ id: 1, value: 1 }],
  setRanges: undefined,
  rangeMax: 10,
  width: "500px",
  startDate: moment().format("L"),
};
