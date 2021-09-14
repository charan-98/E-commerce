import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const navBar = (props) => {
  const [search, setSearch] = useState("");
  const handelChange = () => {};
  return (
    <nav>
      <div className="navBar">
        <div className="navitem brand">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="nav-link">SellKart</div>
          </Link>
        </div>
        <div className="navSearch">
          <input
            
            className="navInput"
            type="text"
            placeholder="scratch here"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className="navSubmit"
            type="submit"
            value="poke me"
            onClick={() => props.changeWord(search)}
          />
        </div>
        <div className="navitem1">
          <div className="navitem navitem2">
            <Link style={{ textDecoration: "none" }} to="/signin">
              <span className="nav-link">SignIN</span>
            </Link>
          </div>
          <div className="navitem navitem2">
            <Link style={{ textDecoration: "none" }} to="/signUp">
              <span className="nav-link">SignUp</span>
            </Link>
          </div>
          <div className="navitem navitem2">
            <Link style={{ textDecoration: "none" }} to="/cart">
              <span className="nav-link">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default navBar;
