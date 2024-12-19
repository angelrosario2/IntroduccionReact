import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Navbar = () => {
  let sum = 0;

  const { cart } = React.useContext(CartContext);
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price;
  }

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
        🛒 Total: {sum}
      </Link>
    </nav>
  );
};

export default Navbar;
