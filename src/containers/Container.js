import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

import StockChart from "../components/StockChart";


const Container = () => {

  return (
    <>
      <NavigationBar></NavigationBar>

      <StockChart></StockChart>
    </>
  );
};

export default Container;
