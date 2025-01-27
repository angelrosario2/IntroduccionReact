import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
      setTotalPrice(total);
    };
    calculateTotal();
  }, [cart]);

  const handleCheckout = async () => {
    if (!token) {
      setMessage("Debes iniciar sesión para realizar la compra.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        setMessage("Compra realizada con éxito 🎉");
        clearCart(); // Vaciar el carrito tras la compra
      } else {
        setMessage("Hubo un error al procesar la compra.");
      }
    } catch (error) {
      setMessage("Error de conexión con el servidor.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🛒 Carrito de Compras</h1>

      {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}

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
          <button
            style={{
              backgroundColor: "#2ecc71",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={handleCheckout}
          >
            🛍️ Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
