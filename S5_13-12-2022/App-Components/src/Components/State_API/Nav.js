import React from "react";
import "./Nav.css";
function Nav(props) {
  return (
    <div className="nav">
      <a href="#">Home</a>
      <a href="#">Profile</a>
      <a href="#">Users</a>
      <a href="#">Products</a>
      <a href="#">ContactUs</a>
    </div>
  );
}

export default Nav;
