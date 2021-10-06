import React from "react";
import BodyContainer from "./body/BodyContainer";
import Header from "./header/Header";
import { HashRouter } from "react-router-dom";

const ReactPage = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <BodyContainer />
      </HashRouter>
    </>
  );
};

export default ReactPage;
