import React, { useState } from "react";
import StockChart from "./StockChart";
import StockSearcher from "./StockSearcher";
import StockDetailChart from "./StockDetailChart";

const StockPage = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div>
      <StockSearcher setQuery={setQuery} query={query}></StockSearcher>
      <StockChart></StockChart>
      <StockDetailChart></StockDetailChart>
    </div>
  );
};

export default StockPage;
