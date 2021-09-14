import React from "react";
import "./signup.css";
import Navbar from "../navBar/navBar";

const signUp = () => {
  return (
    <div>
      <Navbar />
      <div className="signUp">
        <form>
          <div className="formItem">
            <label>First Name:</label>
            <input type="text" name="Fname" />
          </div>
          <br />
          <div className="formItem">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <br />
          <div className="formItem">
            <label>PassWord:</label>
            <input type="password" name="password" />
          </div>
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};
export default signUp;
