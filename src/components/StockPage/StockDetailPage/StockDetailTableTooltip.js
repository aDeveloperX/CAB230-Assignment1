import React from "react";

const StockDetailTableTooltip = (e) => {
  return e.payload[0] === undefined ? (
    <div></div>
  ) : (
    <div className="p-3 mb-2 bg-info text-white">
      <h4 className="tooltipLabel">
        {"Date: " + e.payload[0].payload.timestamp}
      </h4>
      <p>{"Volumes: " + e.payload[0].payload.volumes}</p>
      <p>{"Open: " + e.payload[0].payload.open}</p>
      <p>{"High: " + e.payload[0].payload.high}</p>
      <p>{"Low: " + e.payload[0].payload.low}</p>
      <p>{"Close: " + e.payload[0].payload.close}</p>
    </div>
  );
};

export default StockDetailTableTooltip;
