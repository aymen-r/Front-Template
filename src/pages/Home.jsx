import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductRange from "../components/productsRange/ProductRange";
import Slides from "../components/swipes/Slides";
import Welcome from "../components/welcome/Welcome";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Slides />
      <Welcome />
      <ProductRange />
      <Footer />
    </>
  );
};

export default Home;
