import React, { useState } from "react";
import "./LegalFeesDistrubution.css";
import FeeRange from "./FeeRange";

export default function LegalFeesDistrubution() {
  const [feeDistributions, setFeeDistributions] = useState([
    { id: 0, percentage: "0%-10%", value: 0 },
    { id: 1, percentage: "10%-20%", value: 0 },
    { id: 2, percentage: "20%-30%", value: 0 },
    { id: 3, percentage: "30%-40%", value: 0 },
    { id: 4, percentage: "40%-50%", value: 0 },
    { id: 5, percentage: "50%-60%", value: 0 },
    { id: 6, percentage: "60%-70%", value: 0 },
    { id: 7, percentage: "70%-80%", value: 0 },
    { id: 8, percentage: "80%-90%", value: 0 },
    { id: 9, percentage: "90%-100%", value: 0 },
  ]);
  return (
    <div className="FeeDistribution">
      <h1>Legal Fees Distrubution</h1>
      <div className="FeeDistribution-container">
        {feeDistributions.map((feeDistribution) => (
          <FeeRange
            key={feeDistribution.id}
            feeDistribution={feeDistribution}
            feeDistributions={feeDistributions}
            setFeeDistributions={setFeeDistributions}
          />
        ))}
      </div>
      <div className="FeeDistribution-white-bar"></div>
    </div>
  );
}
