import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import StockDetailTableTooltip from "./StockDetailTableTooltip";

const StockDetailTable = (props) => {
  return (
    <LineChart width={1000} height={400} data={props.data}>
      <Line type="monotone" dataKey="volumes" stroke="#8884d8"></Line>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="timestamp" />
      <YAxis width={100} />
      <Tooltip
        content={
          <StockDetailTableTooltip data={props.data}></StockDetailTableTooltip>
        }
      />
    </LineChart>
  );
};

export default StockDetailTable;
