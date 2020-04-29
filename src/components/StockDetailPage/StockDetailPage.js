import React from "react";
import { useLocation } from "react-router-dom";

const StockDetailPage = () => {
  const location = useLocation();
  const symbol = location.state.data;
  const URL = "http://131.181.190.87:3000/stocks";
  const token = localStorage.getItem("token");

  const headers = {
    accept: "application.json",
    Authorization: `Bearer ${token}`,
  };
  const getData = () => {
    fetch(`${URL}/authed/${symbol}`, { headers })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        console.log(location.state.data);
      });
  };
  console.log(localStorage.getItem("isLogin"));
  if (localStorage.getItem("isLogin") === "true") {
    getData();
  }

  return <div></div>;
};

export default StockDetailPage;
