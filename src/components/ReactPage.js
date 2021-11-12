import React from "react";
import BodyContainer from "./body/BodyContainer";
import { HashRouter } from "react-router-dom";

const ReactPage = () => {
  return (
    <>
      <HashRouter>
        <BodyContainer />
      </HashRouter>
    </>
  );
};

export default ReactPage;
