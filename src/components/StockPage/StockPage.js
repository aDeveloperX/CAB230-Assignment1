import React, { useState } from "react";
import StockChart from "./StockChart";
import StockSearcher from "./StockSearcher";
import SymbolResultChart from "./SymbolResultChart";
import StockDetailPage from "../StockDetailPage/StockDetailPage";

const StockPage = (props) => {
  const [stockDetail, setStockDetail] = useState();
  const [stocks, setStocks] = useState();

  const chartToDisplay =
    stockDetail === undefined ? (
      stocks === undefined ? (
        <StockChart data={props.data}></StockChart>
      ) : (
        <StockChart data={stocks}></StockChart>
      )
    ) : (
      <SymbolResultChart stockdetail={stockDetail}></SymbolResultChart>
    );

  return (
    <div>
      <StockSearcher
        setstock={setStockDetail}
        setstocks={setStocks}
      ></StockSearcher>
      {chartToDisplay}
    </div>
  );
};

export default StockPage;
