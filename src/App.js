import "./styles.css";
import SignIn from "./components/signIn/signIn";
import React from "react";
import NavBar from "./components/navBar/navBar.js";
import Home from "./components/Home/index";
import Product from "./components/product/index";
import Cart from "./components/cart/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/signUp/index";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signUp" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
