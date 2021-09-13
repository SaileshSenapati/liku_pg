import React from "react";
import "./ContactUsPage.scss";
import profilePic from "./contact_img.jpg";
import Parallax from "react-rellax";

const ContactUsPage = () => {
  return (
    <div className="contact-body">
      <div className="contact-img-cntr">
        <Parallax speed={-10}>
          <img className="profile-img" src={profilePic} alt="profile" />
        </Parallax>
      </div>
      <div className="contact-dtls-cntr">
        <Parallax speed={10}>
          <div className="contact-hdr">About Likhit's Photography</div>
        </Parallax>
        <Parallax speed={5}>
          <div className="contact-para1">
            Likhit's Photography has been operating in bangalore and Bhubaneswar
            for more than two years, specializing in capturing classic and
            timeless moments from beautiful weddings to engagements and other
            special events. We are providing services all over the india.
            Likhit's Photography uses his 6 years of photography experience to
            capture all the important and funny moments in a candid way.
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default ContactUsPage;
