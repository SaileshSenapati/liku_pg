import React from "react";
import BodyContainer from "./body/BodyContainer";
import Header from "./header/Header";
import { BrowserRouter as Router } from "react-router-dom";

const ReactPage = () => {
  return (
    <>
      <Header />
      <Router>
        <BodyContainer />
      </Router>
    </>
  );
};

export default ReactPage;
