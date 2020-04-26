import React, { useState } from "react";
import { Button } from "reactstrap";

const StockSearcher = (props) => {
  const getStock = async (name) => {
    await fetch(`http://131.181.190.87:3000/stocks/${name}`)
      .then((response) => response.json())
      .then((res) => {
        //props.setStocks(res);
        console.log(res);
      });
  };
  const inputHandler = (e) => {
    e.target.value = e.target.value.toUpperCase();

    getStock(e.target.value);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h4>Symbol: </h4>
        <div className="col-4">
          <input
            onChange={inputHandler}
            maxLength="5"
            type="text"
            className="form-control"
            placeholder="Enter symbol"
          />
        </div>
      </div>
    </div>
  );
};

export default StockSearcher;
