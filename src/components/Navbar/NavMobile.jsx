import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <>
      {/* Header Mobile  */}
      <div className="wrap-header-mobile">
        {/* Logo moblie		 */}
        <div className="logo-mobile">
          <Link to={"/"}>
            <img src="/images/logo/logo1.png" alt="IMG-LOGO" />
          </Link>
        </div>

        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            data-notify="2"
          >
            <Link to={"/cart"}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>

        {/* Button show menu  */}
        <div
          className={
            isActive
              ? "btn-show-menu-mobile hamburger hamburger--squeeze is-active"
              : "btn-show-menu-mobile hamburger hamburger--squeeze"
          }
          onClick={handleClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>

      {/*  Menu Mobile  */}
      <div className={isActive ? "menu-mobile menu-open" : "menu-mobile"}>
        <ul className="topbar-mobile">
          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                Help & FAQs
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                My Account
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                EN
              </a>
            </div>
          </li>
        </ul>

        <ul className="main-menu-m">
          <li>
            <Link to={"/"}>Home</Link>

            <span className="arrow-main-menu-m">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>

          <li>
            <Link to={"/"}>About Us</Link>
          </li>

          <li>
            <Link to={"/products"}>Products</Link>
          </li>

          <li>
            <Link to={"/"}>On The Way</Link>
          </li>

          <li>
            <Link to={"/"}>Services</Link>
          </li>

          <li>
            <Link to={"/"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMobile;
