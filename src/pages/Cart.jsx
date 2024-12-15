import React from "react";

const Cart = ({ cart }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🛒 Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((pizza, index) => (
            <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
              {pizza.name} - ${pizza.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
