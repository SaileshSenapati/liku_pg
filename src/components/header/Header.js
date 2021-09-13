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
          Logo
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
            <a className="links" href="/galary">
              Galary
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
