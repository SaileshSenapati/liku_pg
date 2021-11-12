import React from "react";
import "./HomeGallerySection.scss";

const HomeGallerySection = ({ openGallery }) => {
  return (
    <>
      <div className="home-gal-hdr-cntr">
        <div className="home-gal-hdr">Let's narrate your story together</div>
      </div>
      <div className="home-gal-all-box-cntr">
        <div className="home-gal-box-cntr">
          <div className="home-gal-box" onClick={() => openGallery("wedding")}>
            <div className="img-cntr">
              <div className="img-title">Wedding</div>
              <div className="img-txt">
                Once upon a time, there was a boy who loved a girl, and her
                laughter was a question he wanted to spend his whole life
                answering.
              </div>
              <img
                className="home-gal-img wed-img"
                alt="Wedding"
                src={process.env.PUBLIC_URL + "/image/wedding_preview.jpg"}
                width="6000px"
                height="4000px"
              />
            </div>
          </div>
        </div>
        <div className="home-gal-box-cntr cntr-2">
          <div className="home-gal-box" onClick={() => openGallery("potrait")}>
            <div className="img-cntr">
              <div className="img-title">Potrait</div>
              <div className="img-txt">
                “It is more important to click with people than to click the
                shutter.” — Alfred Eisenstaedt
              </div>
              <img
                className="home-gal-img mod-img"
                alt="Model"
                src={process.env.PUBLIC_URL + "/image/potrait_pic.jpg"}
                width="2900px"
                height="3800px"
              />
            </div>
          </div>
          <div
            className="home-gal-box"
            onClick={() => openGallery("pre-wedding")}
          >
            <div className="img-cntr">
              <div className="img-title">Pre wedding</div>
              <div className="img-txt">
                Once in a while, in the middle of an ordinary life, love gives
                us a fairytale.
              </div>
              <img
                className="home-gal-img pre-wed-img"
                alt="Model"
                src={process.env.PUBLIC_URL + "/image/pre_wed_preview.jpg"}
                width="3202px"
                height="4003px"
              />
            </div>
          </div>
        </div>
        <div className="home-gal-box-cntr cntr-2">
          <div className="home-gal-box" onClick={() => openGallery("product")}>
            <div className="img-cntr">
              <div className="img-title clr-blk">Product</div>
              <div className="img-txt clr-blk">
                Every brand has a story to tell!
              </div>
              <img
                className="home-gal-img pro-img"
                alt="Model"
                src={process.env.PUBLIC_URL + "/image/product_img.jpg"}
                width="3202px"
                height="4003px"
              />
            </div>
          </div>
          <div className="home-gal-box" onClick={() => openGallery("others")}>
            <div className="img-cntr">
              <div className="img-title">Others</div>
              <div className="img-txt">
                I really believe there are things nobody would see if I didn’t
                photograph them.
              </div>
              <img
                className="home-gal-img nat-img"
                alt="Others"
                src={process.env.PUBLIC_URL + "/image/potrait_preview.jpg"}
                width="3390px"
                height="3800px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeGallerySection;
