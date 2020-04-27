import React from "react";

const StockDetailPage = () => {
  const a = "AAPL";
  const URL = "http://131.181.190.87:3000/stocks";
  const token = localStorage.getItem("token");

  const headers = {
    accept: "application.json",
    Authorization: `Bearer ${token}`,
  };

  fetch(`${URL}/authed/${a}`, { headers })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    });
  return <div></div>;
};

export default StockDetailPage;
