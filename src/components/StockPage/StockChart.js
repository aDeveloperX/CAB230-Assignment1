import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const StockChart = (props) => {
  const getInfo = () => {
    return props.data === undefined ? (
      <></>
    ) : (
      props.data.map((stock) => {
        return (
          <tr key={stock.name}>
            <td>{stock.name}</td>
            <td>{stock.symbol}</td>
            <td>{stock.industry}</td>
          </tr>
        );
      })
    );
  };

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
