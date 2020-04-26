import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import StockPage from "../components/StockPage/StockPage";
import HomePage from "../components/HomePage/HomePage";

const Container = () => {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/" component={() => <HomePage />}></Route>
        <Route path="/stocks" component={() => <StockPage />}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Container;
