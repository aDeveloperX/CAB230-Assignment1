import React, { useState } from "react";
import StockChart from "./StockChart";
import StockSearcher from "./StockSearcher";
import StockDetailChart from "./StockDetailChart";

const StockPage = () => {
  const [stockDetail, setStockDetail] = useState();
  const chartToDisplay =
    stockDetail === undefined ? (
      <StockChart></StockChart>
    ) : (
      <StockDetailChart stockdetail={stockDetail}></StockDetailChart>
    );

  return (
    <div>
      <StockSearcher setstock={setStockDetail}></StockSearcher>
      {chartToDisplay}
    </div>
  );
};

export default StockPage;
