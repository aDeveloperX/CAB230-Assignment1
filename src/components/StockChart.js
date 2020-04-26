import React, { useState } from "react";

import { Table } from "reactstrap";

const StockChart = () => {
  const [stocks, setStocks] = useState([]);

  const getStock = async () => {
    await fetch("http://131.181.190.87:3000/stocks/symbols")
      .then((response) => response.json())
      .then((res) => {
        setStocks(res);
      });
  };

  const getInfo = () => {
    return stocks.map((stock) => {
      return (
        <tr key={stock.name}>
          <td>{stock.name}</td>
          <td>{stock.symbol}</td>
          <td>{stock.industry}</td>
        </tr>
      );
    });
  };

  if (stocks.length === 0) {
    getStock();
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Stock Name</th>
          <th>Stock Symbol</th>
          <th>Stock Industry</th>
        </tr>
      </thead>
      <tbody>{getInfo()}</tbody>
    </Table>
  );
};

export default StockChart;
