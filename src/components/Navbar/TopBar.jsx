import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="content-topbar flex-sb-m h-full container">
        <div className="left-top-bar">
          {/* Free shipping for standard order over $100 */}
        </div>

        <div className="right-top-bar flex-w h-full">
          <a href="#" className="top-link flex-c-m trans-04 p-lr-25">
            Help & FAQs
          </a>

          <a href="#" className="top-link flex-c-m trans-04 p-lr-25">
            My Account
          </a>

          <a href="#" className="top-link flex-c-m trans-04 p-lr-25">
            EN
          </a>

          <div className="top-link flex-c-m trans-04 p-lr-25">
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
