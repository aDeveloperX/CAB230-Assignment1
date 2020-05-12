import React from "react";

const StockSearcher = (props) => {
  const getStock = async (name) => {
    await fetch(`http://131.181.190.87:3000/stocks/${name}`)
      .then((response) => response.json())
      .then((res) => {
        res.error ? props.setstock(undefined) : props.setstock(res);
      });
  };

  const getStocksWithIndustry = async (industry) => {
    await fetch(
      `http://131.181.190.87:3000/stocks/symbols?industry=${industry}`
    )
      .then((res) => res.json())
      .then((res) => {
        res.error ? props.setstocks(undefined) : props.setstocks(res);
      });
  };

  const symbolInputHandler = (e) => {
    //capatlise the input
    e.target.value = e.target.value.toUpperCase();
    getStock(e.target.value);
  };

  const industryInputHandler = (e) => {
    getStocksWithIndustry(e.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h4>Symbol: </h4>
        <div className="col-4">
          <input
            onChange={symbolInputHandler}
            maxLength="5"
            type="text"
            className="form-control"
            placeholder="Enter symbol"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <h4>Industry: </h4>
        <div className="col-4">
          <input
            onChange={industryInputHandler}
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
