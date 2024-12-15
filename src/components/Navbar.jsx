import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartTotal }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#f8f8f8" }}>
      <Link to="/">🏠 Home</Link>
      <Link to="/register">📝 Register</Link>
      <Link to="/login">🔑 Login</Link>
      <Link to="/cart" style={{ fontWeight: "bold" }}>
        🛒 Total: {cartTotal} pizzas
      </Link>
    </nav>
  );
};

export default Navbar;
