import React from "react";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import StockChart from "./components/StockChart";
import "./App.css";

function App() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <StockChart></StockChart>
    </>
  );
}

export default App;
