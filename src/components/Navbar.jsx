import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            marginRight: "15px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🏠 Home
        </Link>
        {token ? (
          <>
            <Link
              to="/profile"
              style={{
                marginRight: "15px",
                color: "white",
                textDecoration: "none",
              }}
            >
              👤 Profile
            </Link>
            <button
              onClick={logout}
              style={{
                background: "none",
                border: "none",
                color: "#e74c3c",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              style={{
                marginRight: "15px",
                color: "white",
                textDecoration: "none",
              }}
            >
              📝 Register
            </Link>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              🔑 Login
            </Link>
          </>
        )}
      </div>
      <Link
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        🛒 Total: ${total.toFixed(2)}
      </Link>
    </nav>
  );
};

export default Navbar;
