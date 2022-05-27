import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg3 p-t-45 p-b-32">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-6 p-b-50">
              <div className="logo1">
                <img src="/images/logo/logo1.png" alt="IMG-LOGO" />
              </div>

              <p className="stext-107 cl7  trans-04 footer-text">
                “Thaghr Al-Rafidain” was established in Dubai – United Arab
                Emirates in 2006, to work in areas that provide opportunities to
                contribute to the development of the business sector, trade and
                industry, including the transition to clean solar energy and
                renewable energy projects are implementing fully solar-powered
                urban complexes.
              </p>
            </div>

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>

              <p className="stext-107 cl7 size-201">
                GET INSTANT DEALS AND EXCLUSIVE OFFERS!
              </p>

              <div className="p-t-27">
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

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>

              <form>
                <div className="wrap-input1 w-full p-b-4">
                  <input
                    className="input1 bg-none plh1 stext-107 cl7"
                    type="text"
                    name="email"
                    placeholder="email@example.com"
                  />
                  <div className="focus-input1 trans-04"></div>
                </div>

                <div className="p-t-18">
                  <button className="flex-c-m stext-101 cl0 size-103 bg1  hov-btn2 p-lr-15 trans-04">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="p-t-40">
            <p className="stext-107 cl6 txt-center">
              Copyright &copy; 2022 All rights reserved | This template is made
              by Aymen
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
