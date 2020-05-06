import React from "react";

import Container from "./containers/Container";
import "./App.css";

function App() {
  localStorage.clear();
  return (
    <>
      <Container></Container>
    </>
  );
}

export default App;
