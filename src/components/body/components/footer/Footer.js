import React from "react";
import "./Footer.scss";
import { footerArray } from "../../../common/Constants";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const handleFindMore = () => {
    history.push(`/contactus`);
  };
  return (
    <>
      <div className="footer-section" id="footer">
        <div className="footer-dtls-cntr">
          <div className="footer-title">likhit's Photography</div>
          {footerArray.map((eachDtls) => {
            return (
              <div className="footer-dtls">
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
            );
          })}
          <div className="footer-esti">CONTACT US FOR A FREE ESTIMATION</div>
          <div className="footer-para">Bangalore, Bhubaneswar, Cuttack</div>
          <div className="footer-para">We provide services All over India</div>
          <div className="footer-find-more" onClick={handleFindMore}>
            Find more about us
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
