import React, { useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🛒 Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, maxWidth: "600px", margin: "0 auto" }}>
            {cart.map((pizza, index) => (
              <li
                key={index}
                style={{
                  margin: "10px 0",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <span>
                  {pizza.name} - ${pizza.price} x {pizza.count}
                </span>
                <button
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => removeFromCart(pizza.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
