import React, { useState } from "react";
import StockChart from "./StockChart";
import StockSearcher from "./StockSearcher";
import SymbolResultChart from "./SymbolResultChart";
import "./StockPage.css";

const StockPage = (props) => {
  const [stockDetail, setStockDetail] = useState();
  const [stocks, setStocks] = useState();

  // nested tenary expression
  const chartToDisplay = !stockDetail ? (
    !stocks ? (
      <StockChart data={props.data}></StockChart>
    ) : (
      <StockChart data={stocks}></StockChart>
    )
  ) : (
    <SymbolResultChart stockdetail={stockDetail}></SymbolResultChart>
  );

  return (
    <div className="stockpage">
      <div className=" pt-4">
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
