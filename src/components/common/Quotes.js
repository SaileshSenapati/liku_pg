import React, { useEffect, useState } from "react";
import { quotesArray } from "./Constants";
import "./Quotes.scss";

const Quotes = () => {
  const [quoatIndex, setQuoatIndex] = useState(0);
  var quotes = document.getElementsByClassName("quote");
  useEffect(() => {
    quotes[0].style.opacity = 1;
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      let tempIndex = quoatIndex;
      quotes[tempIndex].style.opacity = 0;
      quotes[tempIndex].animate(
        {
          opacity: [1, 0],
          easing: ["ease-out"],
        },
        1000
      );
      if (quoatIndex === quotesArray.length - 1) {
        tempIndex = 0;
      } else {
        tempIndex = quoatIndex + 1;
      }
      setQuoatIndex(tempIndex);
      quotes[tempIndex].style.opacity = 1;
      quotes[tempIndex].animate(
        {
          opacity: [0, 1],
          easing: ["ease-in"],
        },
        1000
      );
    }, 7000);
    return () => clearInterval(interval);
  });
  return (
    <div className="quote-cntr">
      {quotesArray.map((eachQuote) => {
        return <p className="quote">{eachQuote["statemant"]}</p>;
      })}
    </div>
  );
};

export default Quotes;
