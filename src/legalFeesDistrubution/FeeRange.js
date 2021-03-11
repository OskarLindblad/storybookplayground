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
    const value = parseInt(e.target.value);
    let t11 = 0;
    let t12 = 0;

    if (value > 0) {
      t11 = value / 10;
    } else if (value < 0) {
      t12 = (value / 10) * -1;
    }

    setFeeDistributions(
      feeDistributions.map((item) =>
        item.id === id ? { ...item, value: value, t11: t11, t12: t12 } : item
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

  const handleClick = (id, dir) => {
    if (dir === "add") {
      setFeeDistributions(
        feeDistributions.map((item) =>
          item.id === id
            ? {
                ...item,
                value: item.value >= 10 ? 10 : item.value + 1,
                t11:
                  item.value >= 10
                    ? 1
                    : item.value >= 0
                    ? (item.value + 1) / 10
                    : 0,
                t12: item.value >= 0 ? 0 : ((item.value + 1) / 10) * -1,
              }
            : item
        )
      );
    } else if (dir === "remove") {
      setFeeDistributions(
        feeDistributions.map((item) =>
          item.id === id
            ? {
                ...item,
                value: item.value <= -10 ? -10 : item.value - 1,
                t11: item.value <= 0 ? 0 : (item.value - 1) / 10,
                t12:
                  item.value <= -10
                    ? 1
                    : item.value <= 0
                    ? ((item.value - 1) / 10) * -1
                    : 0,
              }
            : item
        )
      );
    } else if (dir === "reset") {
      setFeeDistributions(
        feeDistributions.map((item) =>
          item.id === id ? { ...item, value: 0, t11: 0, t12: 0 } : item
        )
      );
    }
  };

  return (
    <div
      className="FeeRange"
      style={{ width: `calc( 100% / ${feeDistributions.length} ` }}
    >
      <div className="slider-box">
        <div className="slider-container">
          <div className="slider-overlay">
            <p
              className={`slider-text slider-text-up ${
                feeDistribution.value === 0 ? "slider-text-bold" : ""
              }`}
              style={{
                bottom:
                  feeDistribution.value === 0
                    ? `calc( 200px / 10 * ${feeDistribution.value} )`
                    : `calc( 200px / 10 * ${feeDistribution.value} + 8px - 200px / 10)`,
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
          </div>

          {/*<div
            className="plus-fee-button"
            onClick={() => handleClick(feeDistribution.id, "add")}
          >
            <div className="fee-button">
              <img src={Plus} alt="plus" />
            </div>
          </div>*/}

          <input
            type="range"
            min="0"
            max="10"
            value={feeDistribution.value}
            className="slider slider-win"
            orient="vertical"
            onChange={(e) => handleChange(e, feeDistribution.id)}
          />
        </div>
        <p
          onClick={() => handleClick(feeDistribution.id, "reset")}
          className={`FeeDistribution-text ${
            index === 0 ? "FeeDistribution-text-first" : ""
          }
          ${
            index === feeDistributions.length - 1
              ? "FeeDistribution-text-last"
              : ""
          }`}
          style={{ width: `calc( 100%  ` }}
        >
          Win {feeDistribution.range[0]}%-{feeDistribution.range[1]}% of
          distrubuted amount
        </p>
        <div className="slider-container">
          <div className="slider-overlay">
            <div
              className="slider-bar slider-bar-lose"
              style={{
                height:
                  feeDistribution.value < 0
                    ? `calc( 200px / 10 * (${feeDistribution.value}) * -1)`
                    : "0",
              }}
            ></div>

            <p
              className={`slider-text slider-text-down slider-text-${
                feeDistribution.value === 0 ? "bold" : ""
              }`}
              style={{
                bottom:
                  feeDistribution.value === 0
                    ? `calc( 200px / 10 * ${feeDistribution.value} + 125px)`
                    : `calc( 200px / 10 * ${feeDistribution.value} + 135px)`,
              }}
            >
              {textDown()}
            </p>
          </div>

          <input
            type="range"
            min="-10"
            max="0"
            value={feeDistribution.value}
            className="slider slider-lose"
            orient="vertical"
            onChange={(e) => handleChange(e, feeDistribution.id)}
          />
          {/*          <div
            className="minus-fee-button"
            onClick={() => handleClick(feeDistribution.id, "remove")}
          >
            <div className="fee-button">
              <img src={Minus} alt="minus" />
            </div>
  </div>*/}
        </div>
      </div>
    </div>
  );
}
