import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import WOW from "wowjs";
import Parallax from "react-rellax";
import { useHistory } from "react-router-dom";
import Footer from "../footer/Footer";

const HomePage = () => {
  const history = useHistory();
  const [quoat, setQuoat] = useState(1);
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoat(quoat + 1);
    }, 10000);
    return () => clearInterval(interval);
  });
  const openGalary = () => {
    history.push("/galary");
  };
  return (
    <>
      <div className="preview-section" id="home">
        <div className="preview-cntr">
          <Parallax speed={2}>
            <div
              className="wow slideInLeft name-txt"
              data-wow-duration="2s"
              data-wow-delay="1s"
            >
              Likhit's Photography
            </div>
          </Parallax>
          <Parallax speed={-1}>
            <div className="galary-link" onClick={openGalary}>
              Visit My Galary
            </div>
          </Parallax>
        </div>
      </div>
      <div className="galary-section" id="galary">
        <div className="galary-hdr-cntr">
          <div className="galary-hdr">Find Our Captures</div>
        </div>
        <div className="galary-all-box-cntr">
          <div className="galary-box-cntr cntr-1">
            <div className="galary-box" onClick={openGalary}>
              {/* <img
                src={"./image/preview/preview_image2.jpg"}
                alt={"Galary Folders"}
                width={"30%"}
                height={"30%"}
              /> */}
            </div>
          </div>
          <div className="galary-box-cntr cntr-2">
            <div className="galary-box" onClick={openGalary}>
              {/* <img
                src={"./image/preview/preview_image3.jpg"}
                alt={"Galary Folders"}
                width={"30%"}
                height={"30%"}
              /> */}
            </div>
          </div>
          <div className="galary-box-cntr cntr-3">
            <div className="galary-box" onClick={openGalary}>
              {/* <img
                src={"./image/preview/preview_image4.jpg"}
                alt={"Galary Folders"}
                width={"30%"}
                height={"30%"}
              /> */}
            </div>
          </div>
          <div className="galary-box-cntr cntr-4">
            <div className="galary-box" onClick={openGalary}>
              {/* <img
                src={"./image/preview/preview_image5.jpg"}
                alt={"Galary Folders"}
                width={"30%"}
                height={"30%"}
              /> */}
            </div>
          </div>
          <div className="galary-box-cntr cntr-5">
            <div className="galary-box" onClick={openGalary}>
              {/* <img
                src={"./image/preview/preview_image6.jpg"}
                alt={"Galary Folders"}
                width={"30%"}
                height={"30%"}
              /> */}
            </div>
          </div>
          <div className="galary-box-cntr cntr-6">
            <div className="galary-box" onClick={openGalary}>
              {/* <img
                src={"./image/preview/preview_image7.jpg"}
                alt={"Galary Folders"}
                width={"30%"}
                height={"30%"}
              /> */}
            </div>
          </div>
        </div>
        <div className="quoat-cntr">
          <p className="quoat">
            {quoat} asdf asdf asdfasdfasdf asdfasdfa asdfasdf asdfa afsdasdf
            asdfasdf asdf asdsd afasdf
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
