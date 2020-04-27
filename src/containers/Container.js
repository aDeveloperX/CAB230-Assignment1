import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import StockPage from "../components/StockPage/StockPage";
import HomePage from "../components/HomePage/HomePage";

const Container = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://131.181.190.87:3000/stocks/symbols")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/" component={() => <HomePage />}></Route>
        <Route
          path="/stocks"
          component={() => <StockPage data={data} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Container;
