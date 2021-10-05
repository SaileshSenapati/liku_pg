import React, { useEffect, useState } from "react";
import { quotesArray } from "./Constants";
import "./Quotes.scss";

const Quotes = () => {
  const [quoatIndex, setQuoatIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (quoatIndex === quotesArray.length - 1) {
        setQuoatIndex(0);
      } else {
        setQuoatIndex(quoatIndex + 1);
      }
    }, 20000);
    return () => clearInterval(interval);
  });
  return (
    <div className="quoat-cntr">
      <p className="quoat">
        {quotesArray[quoatIndex] && quotesArray[quoatIndex]["statemant"]}
      </p>
    </div>
  );
};

export default Quotes;
