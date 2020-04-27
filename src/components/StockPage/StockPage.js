import React, { useState } from "react";
import StockChart from "./StockChart";
import StockSearcher from "./StockSearcher";
import StockResultChart from "./StockResultChart";
import StockDetailPage from "../StockDetailPage/StockDetailPage";

const StockPage = (props) => {
  const [stockDetail, setStockDetail] = useState();

  const chartToDisplay =
    stockDetail === undefined ? (
      <StockChart data={props.data}></StockChart>
    ) : (
      <StockResultChart stockdetail={stockDetail}></StockResultChart>
    );

  return (
    <div>
      <StockSearcher setstock={setStockDetail}></StockSearcher>
      {chartToDisplay}
      <StockDetailPage></StockDetailPage>
    </div>
  );
};

export default StockPage;
