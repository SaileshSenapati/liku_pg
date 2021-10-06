import React from "react";
import BodyContainer from "./body/BodyContainer";
import Header from "./header/Header";
import { HashRouter } from "react-router-dom";

const ReactPage = () => {
  return (
    <>
      <Header />
      <HashRouter basename="/liku_pg">
        <BodyContainer />
      </HashRouter>
    </>
  );
};

export default ReactPage;
