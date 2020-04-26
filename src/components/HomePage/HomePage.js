import React from "react";
import imgGrowth from "../../images/imgGrowth.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="display-1 text-center">Stocks Today</h1>
      <img className="center" src={imgGrowth} alt=""></img>
    </div>
  );
};

export default HomePage;
