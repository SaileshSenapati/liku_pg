import React, { useEffect } from "react";
import "./HomePage.scss";
import WOW from "wowjs";
import Parallax from "react-rellax";
import { useHistory } from "react-router-dom";
import Footer from "../footer/Footer";
import HomeGallerySection from "./HomeGallerySection";
import Quotes from "../../../common/Quotes";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  const openGallery = (section) => {
    if (section) {
      history.push(`/gallery#${section}`);
    } else {
      history.push(`/gallery`);
    }
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
            <div className="home-gal-link" onClick={() => openGallery("")}>
              View Our Work
            </div>
          </Parallax>
        </div>
      </div>
      <div className="home-gal-section" id="gallery">
        <HomeGallerySection openGallery={openGallery} />
        <Quotes />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
