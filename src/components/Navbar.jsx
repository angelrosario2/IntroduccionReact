import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        background: "#f8f8f8",
      }}
    >
      <Link to="/">🏠 Home</Link>
      <Link to="/register">📝 Register</Link>
      <Link to="/login">🔑 Login</Link>
      <Link to="/cart" style={{ fontWeight: "bold" }}>
        🛒 Total: ${total}
      </Link>
    </nav>
  );
};

export default Navbar;
