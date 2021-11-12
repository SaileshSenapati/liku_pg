import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import "./GalleryPage.scss";
import WOW from "wowjs";
import Parallax from "react-rellax";
import { useHistory } from "react-router";
import {
  weddingImageConst,
  preWeddingImageConst,
  natureImageConst,
  potraitImageConst,
  productImageConst,
  videoConst,
} from "../../../common/ImageConstants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Quotes from "../../../common/Quotes";

const GalleryPage = () => {
  const history = useHistory();
  const galleryArray = [
    { id: "wedding", title: "Wedding" },
    { id: "pre-wedding", title: "Pre Wedding" },
    { id: "potrait", title: "Potrait" },
    { id: "product", title: "Product" },
    { id: "others", title: "Others" },
    { id: "video", title: "Video" },
  ];
  useEffect(() => {
    new WOW.WOW().init();
    const url = window.location.href;
    const index = url.indexOf("#");
    const section = url.slice(index + 1, url.length);
    const possibleIds = [
      "wedding",
      "pre-wedding",
      "others",
      "potrait",
      "product",
      "video",
    ];
    if (possibleIds.includes(section)) {
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  const gotoGallerySection = (section) => {
    history.push(`/gallery#${section}`);
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  };
  const getGalSecDOM = (id, header, list) => {
    return (
      <div className="gal-section">
        <div className="gal-sec-hdr">{header}</div>
        <div className="gal-sec-img-cntr" id={id}>
          {list.map((image) => {
            return (
              <div className="gal-img-wrpr">
                <LazyLoadImage
                  className="gal-img"
                  alt={image.alt}
                  src={image.src}
                  effect="blur"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const getVideoDOM = () => {
    return (
      <div className="gal-section" id={"video"}>
        <div className="gal-sec-hdr">Videos</div>
        <div className="gal-sec-img-cntr">
          {videoConst.map((vid) => {
            return (
              <div className="gal-img-wrpr">
                <video className="gal-img" controls>
                  <source src={vid.src} type="video/mp4" />
                  Your browser does not support the video.
                </video>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="gal-body" id="home">
        <div className="gal-img-cntr">
          <div className="gal-box-cntr">
            {galleryArray.map((eachData, index) => {
              return (
                <Parallax speed={galleryArray.length - index}>
                  <div
                    className="gal-pv-box"
                    onClick={() => gotoGallerySection(eachData["id"])}
                  >
                    <span className="wow slideInLeft gal-pv-txt">
                      {eachData["title"]}
                    </span>
                  </div>
                </Parallax>
              );
            })}
          </div>
        </div>
        <div className="gal-full-preview">
          {getGalSecDOM("wedding", "Wedding", weddingImageConst)}
          {getGalSecDOM("pre-wedding", "Pre Wedding", preWeddingImageConst)}
          {getGalSecDOM("potrait", "Potrait", potraitImageConst)}
          {getGalSecDOM("product", "Product", productImageConst)}
          {getGalSecDOM("others", "Others", natureImageConst)}
          {getVideoDOM()}
        </div>
        <Quotes />
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
