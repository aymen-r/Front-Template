import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "./swipe.css";
import "swiper/css/pagination";
import image1 from "./img/image1.webp";
import image2 from "./img/image2.webp";
// import image3 from "./img/image3.webp";
import slide1 from "./img/slide-01.jpg";
import slide2 from "./img/slide-02.jpg";
import slide3 from "./img/slide-03.jpg";
import slide4 from "./img/slide-04.jpg";
import slide5 from "./img/slide-05.webp";

SwiperCore.use([Pagination, Autoplay]);

const Slides = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        grabCursor={false}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <section
            className="swiper-slide slide"
            style={{
              background: ` linear-gradient(to bottom, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)), url(${image1}) no-repeat `,
            }}
          >
            <div className="content">
              <h3>
                Thager alrafedain <br /> best services provider “Solar energy
                Today’s resource for a brighter tomorrow!”
              </h3>
              <p>
                Don’t wait be <br />
                Check out our New products
              </p>
              <a href="#" className="btna">
                get started
              </a>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide"
            style={{
              background: `linear-gradient(to bottom,rgb(0 0 0 / 10%), rgb(0 0 0 / 0%)),url(${slide2}) no-repeat`,
            }}
          >
            <div className="content">
              <h3>
                Thager alrafedain <br />
                best services provider “Solar energy Today’s resource for a
                brighter tomorrow!”
              </h3>
              <p>
                Don’t wait be <br />
                Check out our New products
              </p>
              <a href="#" className="btna">
                get started
              </a>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide"
            style={{
              background: `linear-gradient(to bottom, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${slide5}) no-repeat`,
            }}
          >
            <div className="content">
              <h3>
                Thager alrafedain <br />
                best services provider “Solar energy Today’s resource for a
                brighter tomorrow!”
              </h3>
              <p>
                Don’t wait be <br />
                Check out our New products
              </p>
              <a href="#" className="btna">
                get started
              </a>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
