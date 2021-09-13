import React from "react";
import "./style_var.scss";
import { BeatLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="app-loader">
      <BeatLoader />
    </div>
  );
};

export default LoadingPage;
