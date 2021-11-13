import React, { useEffect } from "react";
import "./ContactUsPage.scss";
import Parallax from "react-rellax";
import wowjs from "wowjs";
import { footerArray } from "../../../common/Constants";
import ScrollIcon from "../../../common/ScrollIcon";

const ContactUsPage = () => {
  useEffect(() => {
    new wowjs.WOW().init();
  }, []);
  return (
    <div className="contact-body">
      <div className="contact-img-cntr">
        <div className="contact-mini-dtls-cntr wow slideInLeft">
          {footerArray.map((eachDtls, index) => {
            return (
              <Parallax speed={footerArray.length - index}>
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
                    <span className={"cont-link"}>{eachDtls["title"]}</span>
                  )}
                </div>
              </Parallax>
            );
          })}
        </div>
        <div className="scroll-icon-cntr">
          <Parallax speed={0}>
            <ScrollIcon />
          </Parallax>
        </div>
      </div>
      <div className="contact-dtls-cntr">
        <div className="contact-txt-wrpr">
          <div className="contact-hdr">About Likhit's Photography</div>
          <p className="contact-para1 para">
            Likhit's Photography has been capturing in Bangalore and Bhubaneswar
            for more than two years, specializing in clicking classic and
            timeless moments from beautiful weddings to engagements and other
            special occasions. We provide services all over India. Likhit's
            Photography uses 6 years of photography experience to capture all
            your precious and comic moments in the best candid way possible.
          </p>
          <p className="contact-para2 para">
            We will make you feel comfortable and bring out your true self
            during your session and freez all of the in between moments and
            emotions of your big day.
          </p>
          <p className="contact-para3 para">
            Not sure how to pose? we will help you at every step to make your
            session fun and memorable.
          </p>
          <p className="contact-para4 para">
            Contact us and book your session now!
          </p>
          <p className="contact-para5 para">See you soon 😊!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
