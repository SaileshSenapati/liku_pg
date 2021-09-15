import React from "react";
import "./ContactUsPage.scss";
import Parallax from "react-rellax";
import { useEffect } from "react/cjs/react.development";
import wowjs from "wowjs";

const ContactUsPage = () => {
  useEffect(() => {
    new wowjs.WOW().init();
  }, []);
  return (
    <div className="contact-body">
      <div className="contact-img-cntr">
        <div className="contact-dtls-cntr wow slideInLeft">
          <Parallax speed={7}>
            <div className="contact-dtls">
              <img
                className="cont-icon"
                src={"./icons/wa-whatsapp.svg"}
                alt={"Whatsapp"}
              />
              <span className={"cont-link"}>7205923079</span>
            </div>
          </Parallax>
          <Parallax speed={6}>
            <div className="contact-dtls">
              <img
                className="cont-icon"
                src={"./icons/gmail.svg"}
                alt={"Gmail"}
              />
              <span
                className={"cont-link"}
                // href={"likhitweddingphotography@gmail.com"}
              >
                likhitweddingphotography@gmail.com
              </span>
            </div>
          </Parallax>
          <Parallax speed={5}>
            <div className="contact-dtls">
              <img
                className="cont-icon"
                src={"./icons/ig-instagram.svg"}
                alt={"Instagram"}
              />
              <a
                className={"cont-link"}
                href={"https://instagram.com/likhit_photography"}
              >
                @likhit_photography
              </a>
            </div>
          </Parallax>
          <Parallax speed={4}>
            <div className="contact-dtls">
              <img
                className="cont-icon"
                src={"./icons/ig-instagram.svg"}
                alt={"Instagram"}
              />
              <a
                className={"cont-link"}
                href={"https://instagram.com/likhitweddingphotography"}
              >
                @likhitweddingphotography
              </a>
            </div>
          </Parallax>
          <Parallax speed={3}>
            <div className="contact-dtls">
              <img
                className="cont-icon"
                src={"./icons/ig-instagram.svg"}
                alt={"Instagram"}
              />
              <a
                className={"cont-link"}
                href={"https://instagram.com/likhit_captures"}
              >
                @likhit_captures
              </a>
            </div>
          </Parallax>
          <Parallax speed={2}>
            <div className="contact-dtls">
              <img
                className="cont-icon"
                src={"./icons/facebook-app.svg"}
                alt={"Facebook"}
              />
              <a
                className={"cont-link"}
                href={"https://www.facebook.com/likhitsphotography/"}
              >
                @likhit_photography{" "}
              </a>
            </div>
          </Parallax>
          <Parallax speed={1}>
            <div className="contact-dtls">
              <img
                className="cont-icon"
                src={"./icons/facebook-app.svg"}
                alt={"Facebook"}
              />
              <a
                className={"cont-link"}
                href={" https://www.facebook.com/LikhitWeddingPhotography/"}
              >
                @likhitweddingphotography{" "}
              </a>
            </div>
          </Parallax>
        </div>
      </div>
      <div className="contact-dtls-cntr">
        <div className="contact-txt-wrpr">
          <div className="contact-hdr">About Likhit's Photography</div>
          <p className="contact-para1 para">
            Likhit's Photography has been operating in bangalore and Bhubaneswar
            for more than two years, specializing in capturing classic and
            timeless moments from beautiful weddings to engagements and other
            special events. We are providing services all over the india.
            Likhit's Photography uses his 6 years of photography experience to
            capture all the important and funny moments in a candid way.
          </p>
          <p className="contact-para2 para">
            We will make you feel comfortable and bring out your true self
            during your session. We will freez all of the in between moments and
            emotions of your big day.
          </p>
          <p className="contact-para3 para">
            Not sure how to pose? we will help you every step of the way to make
            your session fun and memorable.
          </p>
          <p className="contact-para4 para">
            Contact us now to book your session!
          </p>
          <p className="contact-para5 para">See you soon on your big day 😊!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
