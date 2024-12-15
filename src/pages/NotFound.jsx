import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Regresar al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
