import React, { useState } from "react";
import "./LegalFeesDistrubution.css";
import FeeRange from "./FeeRange";

/*
id: 0, 
percentage: "0%-10%" <- printed out text (not completly truthful...
value: 0  <- the value that controls the bar/slider
t11: 0
t12: 0.3
range: [0, 10] 
*/

export default function LegalFeesDistrubution() {
  const [feeDistributions, setFeeDistributions] = useState([
    { id: 0, value: 0, t11: 0, t12: 0, range: [0, 10] },
    { id: 1, value: 0, t11: 0, t12: 0, range: [10, 20] },
    { id: 2, value: 0, t11: 0, t12: 0, range: [20, 30] },
    { id: 3, value: 0, t11: 0, t12: 0, range: [30, 40] },
    { id: 4, value: 0, t11: 0, t12: 0, range: [40, 50] },
    { id: 5, value: 0, t11: 0, t12: 0, range: [50, 60] },
    { id: 6, value: 0, t11: 0, t12: 0, range: [60, 70] },
    { id: 7, value: 0, t11: 0, t12: 0, range: [70, 80] },
    { id: 8, value: 0, t11: 0, t12: 0, range: [80, 90] },
    { id: 9, value: 0, t11: 0, t12: 0, range: [90, 100] },
  ]);
  return (
    <div className="FeeDistribution">
      <h1>Legal Fees Distrubution</h1>
      <div className="FeeDistribution-container">
        {feeDistributions.map((feeDistribution, index) => (
          <FeeRange
            key={feeDistribution.id}
            index={index}
            feeDistribution={feeDistribution}
            feeDistributions={feeDistributions}
            setFeeDistributions={setFeeDistributions}
          />
        ))}
      </div>
    </div>
  );
}
