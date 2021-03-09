import React from "react";

export default function FeeRange({
  feeDistribution,
  feeDistributions,
  setFeeDistributions,
  index,
}) {
  const handleChange = (e, id) => {
    setFeeDistributions(
      feeDistributions.map((item) =>
        item.id === id ? { ...item, value: e.target.value } : item
      )
    );
  };

  const textUp = () => {
    if (feeDistribution.value === 0) {
      return "Each party pays its own legal fees";
    } else if (feeDistribution.value > 0) {
      return `${feeDistribution.value * 10}% of your legal fees covered`;
    }
  };

  const textDown = () => {
    if (feeDistribution.value === 0) {
      return "Each party pays its own legal fees";
    } else if (feeDistribution.value < 0) {
      return `Pay ${
        feeDistribution.value * 10 * -1
      }% of other party's legal fees`;
    }
  };
  const add = (id) => {
    setFeeDistributions(
      feeDistributions.map((item) =>
        item.id === id ? { ...item, value: 2 } : item
      )
    );
  };

  const remove = (id) => {
    setFeeDistributions(
      feeDistributions.map((item) =>
        item.id === id ? { ...item, value: -2 } : item
      )
    );
  };

  return (
    <div className="FeeRange">
      {index}
      <div className="slider-box">
        <div className="slider-container">
          <p
            className={`slider-text slider-text-up slider-text-${
              feeDistribution.value === 0 ? "bold" : ""
            }`}
            style={{
              bottom: `calc( 200px / 10 * ${feeDistribution.value} - 35px)`,
            }}
          >
            {textUp()}
          </p>
          <div
            className="fee-button plus-button"
            onClick={() => add(feeDistribution.id)}
          >
            +
          </div>
          <div
            className="slider-bar slider-bar-win"
            style={{
              height:
                feeDistribution.value > 0
                  ? `calc( 200px / 10 * ${feeDistribution.value})`
                  : "0",
            }}
          ></div>
          <input
            type="range"
            min="0"
            max="10"
            value={feeDistribution.value}
            className="slider slider-win"
            orient="vertical"
            onChange={(e) => handleChange(e, feeDistribution.id)}
          />
          <div
            className="minus-button fee-button"
            onClick={() => remove(feeDistribution.id)}
          >
            -
          </div>
          <p
            className={`slider-text slider-text-down slider-text-${
              feeDistribution.value === 0 ? "bold" : ""
            }`}
            style={{
              bottom: `calc( 200px / 10 * ${feeDistribution.value} - 145px)`,
            }}
          >
            {textDown()}
          </p>
        </div>
        <p className="FeeDistribution-text">
          Win {feeDistribution.percentage} of distrubuted amount
        </p>
        <div className="slider-container">
          <div
            className="slider-bar slider-bar-lose"
            style={{
              height:
                feeDistribution.value < 0
                  ? `calc( 200px / 10 * (${feeDistribution.value}) * -1)`
                  : "0",
            }}
          ></div>

          <input
            type="range"
            min="-10"
            max="0"
            value={feeDistribution.value}
            className="slider slider-lose"
            orient="vertical"
            onChange={(e) => handleChange(e, feeDistribution.id)}
          />
        </div>
        <p>{feeDistribution.value}</p>
      </div>
    </div>
  );
}
