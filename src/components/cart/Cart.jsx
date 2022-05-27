import React from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

import { cartItems } from "./cartData";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let totalPrice = Price;

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return toast.error("Product Stock Limited");
    }
    // dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    // dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    // dispatch(removeItemsFromCart(id));
  };
  return (
    <div>
      <>
        {cartItems.length === 0 ? (
          <div className="emptyCart">
            <RemoveShoppingCartIcon />
            <Typography>No Items In Cart</Typography>
            <Link to="/products">View Products</Link>
            {/* <BottomTab /> */}
          </div>
        ) : (
          <>
            <div className="cartPage">
              <div className="cartHeader">
                <p>Product</p>
                <p>Quantity</p>
              </div>
              {cartItems &&
                cartItems.map((item) => (
                  <div className="cartContainer" key={item.product}>
                    <CartItemCard
                      item={item}
                      deleteCartItems={deleteCartItems}
                    />
                    <div className="cartInput">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.product, item.quantity)
                        }
                      >
                        -
                      </button>
                      <input type="number" readOnly value={item.quantity} />
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

              <div className="cartGrossProfit">
                <div></div>
                <div className="cartGrossProfitBox">
                  <p>Get your instant quote in minutes</p>
                  {/* <p>$ {totalPrice}</p> */}
                </div>
                <div></div>
                <div className="checkOutBtn">
                  <button>GET QUOTE</button>
                </div>
              </div>
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* <BottomTab /> */}
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
