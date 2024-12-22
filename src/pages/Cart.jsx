import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
      setTotalPrice(total);
    };
    calculateTotal();
  }, [cart]); 
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🛒 Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
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
          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
