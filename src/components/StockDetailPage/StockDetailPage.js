import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import DateSelector from "./DateSelector";
import StockDetailChart from "./StockDetailChart";
import { Button } from "reactstrap";

const StockDetailPage = () => {
  const isCancelled = useRef(false);
  const location = useLocation();
  const symbol = location.state.data;
  const URL = "http://131.181.190.87:3000/stocks";
  const token = localStorage.getItem("token");
  const [timestamps, setTimestamps] = useState();

  const getData = () => {
    const headers = {
      accept: "application.json",
      Authorization: `Bearer ${token}`,
    };
    fetch(`${URL}/authed/${symbol}`, { headers })
      .then((response) => response.json())
      .then((res) => {
        if (!isCancelled.current) {
          setTimestamps(convertDate(res));
        }
      });
  };

  const convertDate = (data) => {
    data = Array.isArray(data) ? data : [data];
    data.forEach((d) => {
      d.timestamp = d.timestamp.slice(0, d.timestamp.indexOf("T"));
    });
    return data;
  };

  useEffect(() => {
    getData();
    return () => {
      isCancelled.current = true;
    };
  }, []);

  console.log(timestamps);

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row ">
          <h5>Start Date: </h5>
          <DateSelector></DateSelector>
        </div>
        <div className="row ml-5">
          <h5>End Date: </h5>
          <DateSelector></DateSelector>
        </div>
        <div className="row ml-4">
          <Button color="primary">Search</Button>
        </div>
      </div>

      <StockDetailChart
        data={Array.isArray(timestamps) ? timestamps : [timestamps]}
      ></StockDetailChart>
    </div>
  );
};

export default StockDetailPage;
