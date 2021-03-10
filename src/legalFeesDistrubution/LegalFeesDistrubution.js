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
const array = [
  { id: 0, t11: 0, t12: 0.3, range: [0, 10] },
  { id: 1, t11: 0, t12: 0.2, range: [11, 20] },
  { id: 2, t11: 0.2, t12: 0, range: [21, 30] },
  { id: 3, t11: 0.3, t12: 0, range: [31, 40] },
  { id: 4, t11: 0.4, t12: 0, range: [41, 50] },
  { id: 5, t11: 0.5, t12: 0, range: [51, 60] },
  { id: 6, t11: 0.6, t12: 0, range: [61, 70] },
  { id: 7, t11: 0.7, t12: 0, range: [71, 80] },
  { id: 8, t11: 0.8, t12: 0, range: [81, 90] },
  { id: 9, t11: 0.5, t12: 0, range: [91, 100] },
];

export default function LegalFeesDistrubution() {
  const [feeDistributions, setFeeDistributions] = useState([
    { id: 0, percentage: "0%-10%", value: 0, t11: 0, t12: 0, range: [0, 10] },
    { id: 1, percentage: "10%-20%", value: 0, t11: 0, t12: 0, range: [11, 20] },
    { id: 2, percentage: "20%-30%", value: 0, t11: 0, t12: 0, range: [21, 30] },
    { id: 3, percentage: "30%-40%", value: 0, t11: 0, t12: 0, range: [31, 40] },
    { id: 4, percentage: "40%-50%", value: 0, t11: 0, t12: 0, range: [41, 50] },
    { id: 5, percentage: "50%-60%", value: 0, t11: 0, t12: 0, range: [51, 60] },
    { id: 6, percentage: "60%-70%", value: 0, t11: 0, t12: 0, range: [61, 70] },
    { id: 7, percentage: "70%-80%", value: 0, t11: 0, t12: 0, range: [71, 80] },
    { id: 8, percentage: "80%-90%", value: 0, t11: 0, t12: 0, range: [81, 90] },
    {
      id: 9,
      percentage: "90%-100%",
      value: 0,
      t11: 0,
      t12: 0,
      range: [91, 100],
    },
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
