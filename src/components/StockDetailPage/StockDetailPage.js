import React from "react";

const StockDetailPage = () => {
  const a = "AAPL";
  const URL = "http://131.181.190.87:3000/stocks";
  const token = localStorage.getItem("token");

  const header = {
    accept: "application.json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvbEB0ZXN0LmNvbSIsImV4cCI6MTU4ODA2ODI0NSwiaWF0IjoxNTg3OTgxODQ1fQ.2E9Yxrg4Dc5jptJNA41gMVnv-upZRgDCRITHwNcah3U",
  };

  fetch(`${URL}/authed/${a}`, { header })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    });
  console.log({ header });
  console.log(token);
  return <div></div>;
};

export default StockDetailPage;
