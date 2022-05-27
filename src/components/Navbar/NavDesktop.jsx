import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import { IconButton, Menu, MenuItem } from "@mui/material";

const NavDesktop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 33) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className={
        colorChange
          ? "wrap-menu-desktop-scroll how-shadow1 nav"
          : "wrap-menu-desktop how-shadow1 nav"
      }
    >
      <nav className="limiter-menu-desktop container">
        {/*  Logo desktop */}
        <Link className="logo" to={"/"}>
          <img src="/images/logo/logo1.png" alt="IMG-LOGO" />
        </Link>

        {/* Menu desktop  */}
        <div className="menu-desktop">
          <ul className="main-menu">
            <li className="active-menu">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About Us</Link>
            </li>

            <li>
              <Link to={"/products"}>Products</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Solar Panels</Link>
                </li>
                <li>
                  <Link to={"/"}>Solar Inverters</Link>
                </li>
                <li>
                  <Link to={"/"}>Solar Batteries</Link>
                </li>
                <li>
                  <Link to={"/"}>Solar Street light</Link>
                </li>
                <li>
                  <Link to={"/"}>PV Combiner Box & Cables</Link>
                </li>
                <li>
                  <Link to={"/"}>Structure & Fixing</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to={"/"}>On The Way</Link>
            </li>

            <li>
              <Link to={"/"}>Services</Link>

              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Get an Estimate</Link>
                </li>
                <li>
                  <Link to={"/"}>Track your Order</Link>
                </li>
                <li>
                  <Link to={"/"}>Download Data Sheet</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to={"/"}>News & Videos</Link>
            </li>

            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/*  Icon header  */}
        <div className="wrap-icon-header flex-w flex-r-m">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <Link to={"/cart"}>
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
              data-notify="1"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </Link>

          {/* <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11">
              <IconButton
                sx={{ padding: 0 }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {user.name}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>My account</MenuItem>
                {user.isAdmin && (
                  <Link to={"/admin/dashboard"}>
                    <MenuItem>Admin Dashboard</MenuItem>
                  </Link>
                )}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div> */}

          <Link to={"/login"}>
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11">
              <i className="fa-solid fa-user"></i>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavDesktop;
