import React from "react";
import "./MultiRange.css";
import PropTypes from "prop-types";

/**  range NEED atleast id and value 
/* template: useState([{ id: 1, value: 1 }])
*/

export const MultiRange = ({
  label,
  ranges,
  setRanges,
  rangeMax,
  width,
  ...rest
}) => {
  const handleChange = (e, id) => {
    setRanges(
      ranges.map((item) =>
        item.id === id
          ? {
              ...item,
              value: parseInt(e.target.value),
            }
          : item
      )
    );
  };

  return (
    <div className="multiRange">
      <p>{label}</p>
      {ranges.map((range, index) => (
        <div key={index}>
          <input
            key={index}
            type="range"
            min="1"
            max={rangeMax * (index + 1)}
            value={range.value}
            className="slider"
            onChange={(e) => handleChange(e, range.id)}
            style={{ width: `calc(${width} * ${index + 1})` }}
          />
          <p>{range.value}</p>
        </div>
      ))}
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
};

MultiRange.defaultProps = {
  label: "",
  ranges: [{ id: 1, value: 1 }],
  setRanges: undefined,
  rangeMax: 10,
  width: "100px",
};
