import React, { useState } from "react";
import StockChart from "./StockChart";
import StockSearcher from "./StockSearcher";
import SymbolResultChart from "./SymbolResultChart";
import "./StockPage.css";

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
    <div className="stockpage pb-2">
      <div className="pt-4">
        <StockSearcher
          setstock={setStockDetail}
          setstocks={setStocks}
        ></StockSearcher>
      </div>

      {chartToDisplay}
    </div>
  );
};

export default StockPage;
