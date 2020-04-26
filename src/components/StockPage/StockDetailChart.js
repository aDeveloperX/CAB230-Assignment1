import React, { useState } from "react";

const StockDetailChart = (props) => {
  const getStock = async () => {
    await fetch(`http://131.181.190.87:3000/stocks/${props.query}`)
      .then((response) => response.json())
      .then((res) => {
        props.setStocks(res);
      });
  };

  return <div></div>;
};

export default StockDetailChart;
