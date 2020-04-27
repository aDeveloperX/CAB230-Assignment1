import React, { useState } from "react";
import { Table } from "reactstrap";

const StockDetailChart = (props) => {
  const getInfo = (stock) => {
    return stock === undefined ? (
      <></>
    ) : (
      <tr key={stock.name}>
        <td>{stock.symbol}</td>
        <td>{stock.name}</td>
        <td>{stock.industry}</td>
        <td>{stock.timestamp}</td>
        <td>{stock.volumes}</td>
        <td>{stock.high}</td>
        <td>{stock.low}</td>
        <td>{stock.open}</td>
        <td>{stock.close}</td>
      </tr>
    );
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Stock Symbol</th>
          <th>Stock Name</th>
          <th>Stock Industry</th>
          <th>Stock Time Stamp</th>
          <th>Stock Volumes</th>
          <th>Stock High</th>
          <th>Stock Low</th>
          <th>Stock Open</th>
          <th>Stock Close</th>
        </tr>
      </thead>
      <tbody>{getInfo(props.stockdetail)}</tbody>
    </Table>
  );
};

export default StockDetailChart;
