import React, { useEffect } from "react";
import "./Header.scss";

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
        <a className="links" href="/">
          <img src="./image/logo.png" alt="" width="50px" height="50px" />
          <div className="title">Likhit's Photography</div>
        </a>
      </div>
      <nav className="nav-bar">
        <ui className="nav-item-cntr">
          <li>
            <a className="links" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="links" href="/gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="links" href="/contactus">
              Contact
            </a>
          </li>
        </ui>
      </nav>
    </div>
  );
};

export default Header;
