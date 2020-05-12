import React from "react";

import Container from "./containers/Container";
import "./App.css";

function App() {
  //clear all stored information whenever the app is restarted
  localStorage.removeItem("isLogin");
  return (
    <>
      <Container></Container>
    </>
  );
}

export default App;
