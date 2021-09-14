import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../redux/actions/index";
import Navbar from "../navBar/navBar";
import "./cart.css";

function cart() {
  const cartItems = useSelector((state) => state.cart);
  const total = useSelector((state) => state.TotalP);

  return (
    <div className="cart">
      <Navbar />
      <div className={`${cartItems ? "with-items" : "without-items"}`}>
        {cartItems.map((item) => (
          <div className="cart-item">
            <img
              className="item-img"
              alt={item.name}
              src={item.preview}
              width={120}
            />

            <div className="cart-name">
              <p>
                <b>{item.name}</b>
              </p>
            </div>
            <div className="cart-price">
              <p>
                <b>₹ {item.price}</b>
              </p>
            </div>
            <div className="cart-qty">
              <p>
                <b>quantity:{item.qty}</b>
              </p>
            </div>
          </div>
        ))}
        <div className={`${cartItems.length === 0 ? "without-items" : "Total-price"}`}>
          <b>Total Price :{total}</b>
          <div className="Proceed">
            <button>Proceed To Check Out</button>
          </div>
        </div>
      </div>
      <div
        className={`${cartItems.length === 0 ? "with-items" : "without-items"}`}
      >
        <h1>Cart Is empty </h1>
      </div>
    </div>
  );
}
export default cart;
