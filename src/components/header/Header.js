import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <div className="header-cntr" id="navbar">
      <div className="logo-cntr">
        <Link className="links" to="/">
          <img
            src={process.env.PUBLIC_URL + "/image/logo.png"}
            alt=""
            width="50px"
            height="50px"
          />
          <div className="title">Likhit's Photography</div>
        </Link>
      </div>
      <nav className="nav-bar">
        <ui className="nav-item-cntr">
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
        </ui>
      </nav>
    </div>
  );
};

export default Header;
