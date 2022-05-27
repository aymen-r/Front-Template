import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import TopBar from "./TopBar";
import "./navbar.css";
import "./css-hamburgers/hamburgers.css";
import "./css-hamburgers/hamburgers.min.css";

const Navbar = () => {
  return (
    <div>
      <div className="container-menu-desktop">
        <TopBar />
        <NavDesktop />
      </div>
      <NavMobile />
    </div>
  );
};

export default Navbar;
