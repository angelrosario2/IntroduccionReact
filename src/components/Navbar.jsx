import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#f8f8f8" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>🏠 Home</Link>
      <Link to="/register" style={{ textDecoration: "none" }}>📝 Register</Link>
      <Link to="/login" style={{ textDecoration: "none" }}>🔑 Login</Link>
      <Link to="/cart" style={{ textDecoration: "none" }}>🛒 Total: $25.000</Link>
    </nav>
  );
};

export default Navbar;
