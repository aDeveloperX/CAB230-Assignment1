import React, { useState } from "react";

const StockSearcher = (props) => {
  const getStock = async (name) => {
    await fetch(`http://131.181.190.87:3000/stocks/${name}`)
      .then((response) => response.json())
      .then((res) => {
        res.error ? props.setstock(undefined) : props.setstock(res);
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
