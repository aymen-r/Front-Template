import React, { useEffect } from "react";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
