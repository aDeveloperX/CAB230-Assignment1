import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import LoginWindow from "../components/NavigationBar/Login/LoginWindow";
import StockChart from "../components/StockChart";
import Modal from "../UI/Modal";

const Container = () => {
  const temp = <LoginWindow></LoginWindow>;
  return (
    <>
      <NavigationBar></NavigationBar>
      <Modal show={true}>{temp}</Modal>
      <StockChart></StockChart>
    </>
  );
};

export default Container;
