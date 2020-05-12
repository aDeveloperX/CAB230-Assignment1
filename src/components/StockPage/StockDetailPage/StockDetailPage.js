import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import DateSelector from "./DateSelector";
import StockDetailChart from "./StockDetailChart";
import StockDetailTable from "./StockDetailTable";
import { Button } from "reactstrap";
import "./StockDetailPage.css";

const StockDetailPage = () => {
  const isCancelled = useRef(false);
  const location = useLocation();
  const symbol = location.state.data;
  const URL = "http://131.181.190.87:3000/stocks";
  const token = localStorage.getItem("token");
  const [timestamps, setTimestamps] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //get initial data without requiring user to login
  const getInitData = () => {
    fetch(`${URL}/${symbol}`)
      .then((response) => response.json())
      .then((res) => {
        if (!isCancelled.current && !res.error) {
          setTimestamps(convertDate(res));
        }
      });
  };

  //get additional data here, users must login first
  const getAdditionalData = () => {
    if (localStorage.getItem("isLogin") === "true") {
      const headers = {
        accept: "application.json",
        Authorization: `Bearer ${token}`,
      };
      fetch(
        `${URL}/authed/${symbol}?from=${formatDate(startDate)}&to=${formatDate(
          endDate
        )}`,
        { headers }
      )
        .then((response) => response.json())
        .then((res) => {
          //error handling
          if (res === undefined || res.error) {
            console.log(res);
            alert("ERROR: " + res.message);
            //reload the page if the token is expired
            if (res.message == "jwt expired") {
              localStorage.clear();
              window.location.reload(true);
            }
          } else {
            setTimestamps(convertDate(res));
          }
        });
    } else {
      alert("Please login first in order to see more details");
    }
  };

  //convert the date in order to make API request
  const convertDate = (data) => {
    data = Array.isArray(data) ? data : [data];
    data.forEach((d) => {
      if (d) {
        d.timestamp = d.timestamp.slice(0, d.timestamp.indexOf("T"));
      }
    });

    return data;
  };

  useEffect(() => {
    getInitData();
    return () => {
      isCancelled.current = true;
    };
  }, []);

  //reformat the date in order to make API calls
  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let timestamp = [year, month, day].join("-") + "T00:00:00.000Z";
    timestamp = timestamp.replace(":", "%3A");

    return timestamp;
  };

  return (
    <div className="stockdetailpage">
      <div className="pt-3">
        <div className="d-flex justify-content-center">
          <h2 className="text-primary">{symbol}</h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="row ">
            <h5>Start Date: </h5>
            <DateSelector
              date={startDate}
              enddate={endDate}
              setdate={setStartDate}
            ></DateSelector>
          </div>
          <div className="row ml-5">
            <h5>End Date: </h5>
            <DateSelector
              date={endDate}
              startdate={startDate}
              setdate={setEndDate}
            ></DateSelector>
          </div>
          <div className="row ml-4">
            <Button
              color="primary"
              disabled={!startDate || !endDate}
              onClick={getAdditionalData}
            >
              Search
            </Button>
          </div>
        </div>

        <StockDetailChart
          data={Array.isArray(timestamps) ? timestamps : [timestamps]}
        ></StockDetailChart>
        <div className="d-flex justify-content-center mt-4">
          <StockDetailTable
            data={Array.isArray(timestamps) ? timestamps : [timestamps]}
          ></StockDetailTable>
        </div>
      </div>
    </div>
  );
};

export default StockDetailPage;
