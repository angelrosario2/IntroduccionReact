import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  const handleLogout = () => {
    logout();
    window.location.reload(); 
  };

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
      
      {token ? (
        <>
          <Link to="/profile">👤 Perfil</Link>
          <button 
            onClick={handleLogout} 
            style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
          >
            🚪 Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/register">📝 Registrarse</Link>
          <Link to="/login">🔑 Iniciar sesión</Link>
        </>
      )}
      
      <Link to="/cart" style={{ fontWeight: "bold" }}>
        🛒 Total: ${total}
      </Link>
    </nav>
  );
};

export default Navbar;
