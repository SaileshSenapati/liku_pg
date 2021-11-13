import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  StickyOut,
  ZoomOut,
  FadeOut,
  Zoom,
} from "react-scroll-motion";
import "./AboutPage.scss";
import { footerArray } from "../../../common/Constants";
import ScrollIcon from "../../../common/ScrollIcon";

const AboutPage = () => {
  const headerStyle = batch(StickyIn(50, 10), ZoomOut(1, 2), FadeOut(1, 0));
  const paraOneStyle = batch(Sticky(), FadeOut(1, 0));
  const paraThreeStyle = batch(
    StickyOut(50, 30),
    // FadeIn(0, 1),
    MoveIn(-1000, -1000),
    MoveOut(0, -100),
    ZoomIn(3, 1)
  );
  const paraFourStyle = batch(
    StickyOut(50, 50),
    FadeIn(0, 1),
    MoveIn(-1000, 1000),
    MoveOut(0, -100),
    ZoomOut(1, 2)
  );
  const paraLastStyle = batch(StickyOut(50, 50), FadeIn(0, 1), Zoom(2, 1));
  const scrollBarStyle = batch(
    Sticky(50, 100),
    FadeOut(1, 0),
    MoveOut(0, 1000)
  );
  return (
    <div className="contact-body">
      <div className="contact-dtls-cntr">
        <div className="contact-txt-wrpr">
          <ScrollContainer>
            <ScrollPage page={0}>
              <Animator animation={headerStyle}>
                <div className="contact-hdr">About Likhit's Photography</div>
              </Animator>
              <Animator animation={paraOneStyle}>
                <p className="contact-para1 para">
                  Likhit's Photography has been capturing in Bangalore and
                  Bhubaneswar for more than two years, specializing in clicking
                  classic and timeless moments from beautiful weddings to
                  engagements and other special occasions. We provide services
                  all over India. Likhit's Photography uses 6 years of
                  photography experience to capture all your precious and comic
                  moments in the best candid way possible.
                </p>
                <p className="contact-para2 para">
                  We will make you feel comfortable and bring out your true self
                  during your session and freez all of the in between moments
                  and emotions of your big day.
                </p>
              </Animator>
              <Animator animation={scrollBarStyle}>
                <div className="scroll-icon-cntr">
                  <ScrollIcon />
                </div>
              </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
              <Animator animation={paraThreeStyle}>
                <p className="contact-para3 para">Not sure how to pose?</p>
              </Animator>
              <Animator animation={paraFourStyle}>
                <p className="contact-para4 para">
                  We will help you at every step to make your session fun and
                  memorable.
                </p>
              </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
              <div className="about-bg">
                {footerArray.map((eachDtls, index) => {
                  let value = 1000;
                  if (index % 2 === 0) {
                    value = -1000;
                  }
                  return (
                    <Animator
                      animation={batch(
                        MoveIn(value, 0),
                        StickyOut(50, index * 10 + 10),
                        MoveOut(0, 100),
                        FadeOut(1, 0.8)
                      )}
                    >
                      <div className="contact-dtls">
                        <img
                          className="cont-icon"
                          src={eachDtls["path"]}
                          alt={eachDtls["alt"]}
                        />
                        {eachDtls["url"] ? (
                          <a className={"cont-link"} href={eachDtls["url"]}>
                            {eachDtls["title"]}
                          </a>
                        ) : (
                          <span className={"cont-link"}>
                            {eachDtls["title"]}
                          </span>
                        )}
                      </div>
                    </Animator>
                  );
                })}
              </div>
            </ScrollPage>
            <ScrollPage page={3}>
              <div className="final-para">
                <Animator animation={paraLastStyle}>
                  <p className="contact-para4 para">
                    Contact us and book your session now!
                  </p>
                  <p className="contact-para5 para">See you soon 😊!</p>
                </Animator>
              </div>
            </ScrollPage>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
