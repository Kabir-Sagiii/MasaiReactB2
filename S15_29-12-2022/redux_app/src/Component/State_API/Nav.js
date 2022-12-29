import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/products">Products</Link>
      <Link to="/counter?gender=male&sort=asc">Counter</Link>
    </div>
  );
}

export default Nav;
