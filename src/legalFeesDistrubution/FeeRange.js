import React from "react";
import Plus from "./plus.svg";
import Minus from "./minus.svg";

export default function FeeRange({
  feeDistribution,
  feeDistributions,
  setFeeDistributions,
  index,
}) {
  const handleChange = (e, id) => {
    setFeeDistributions(
      feeDistributions.map((item) =>
        item.id === id ? { ...item, value: parseInt(e.target.value) } : item
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
        item.id === id
          ? { ...item, value: item.value >= 10 ? 10 : item.value + 1 }
          : item
      )
    );
  };

  const remove = (id) => {
    setFeeDistributions(
      feeDistributions.map((item) =>
        item.id === id
          ? { ...item, value: item.value <= -10 ? -10 : item.value - 1 }
          : item
      )
    );
  };

  return (
    <div className="FeeRange">
      <div className="slider-box">
        <div className="slider-container">
          <div
            className="plus-fee-button"
            onClick={() => add(feeDistribution.id)}
          >
            <div className="fee-button">
              <img src={Plus} alt="plus" />
            </div>
          </div>

          <p
            className={`slider-text slider-text-up ${
              feeDistribution.value === 0 ? "slider-text-bold" : ""
            }`}
            style={{
              bottom:
                feeDistribution.value === 0
                  ? `calc( 200px / 10 * ${feeDistribution.value} - 28px)`
                  : `calc( 200px / 10 * ${feeDistribution.value} - 28px - 200px / 10)`,
            }}
          >
            {textUp()}
          </p>

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

          <p
            className={`slider-text slider-text-down slider-text-${
              feeDistribution.value === 0 ? "bold" : ""
            }`}
            style={{
              bottom:
                feeDistribution.value === 0
                  ? `calc( 200px / 10 * ${feeDistribution.value} - 145px)`
                  : `calc( 200px / 10 * ${feeDistribution.value} - 105px - 200px / 10)`,
            }}
          >
            {textDown()}
          </p>
        </div>
        <p
          className={`FeeDistribution-text ${
            index === 0 ? "FeeDistribution-text-first" : ""
          }
          ${
            index === feeDistributions.length - 1
              ? "FeeDistribution-text-last"
              : ""
          }
          
          `}
        >
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
          <div
            className="minus-fee-button"
            onClick={() => remove(feeDistribution.id)}
          >
            <div className="fee-button">
              <img src={Minus} alt="minus" />
            </div>
          </div>
        </div>
        <p>{feeDistribution.value}</p>
      </div>
    </div>
  );
}
