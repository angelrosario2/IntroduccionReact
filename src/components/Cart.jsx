import React from "react";

const Cart = ({ cart, removeFromCart, updateQuantity, calculateTotal }) => {
  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>Precio: ${pizza.price}</p>
            <p>
              Cantidad:{" "}
              <button onClick={() => updateQuantity(pizza.id, -1)}>-</button>
              {pizza.count}
              <button onClick={() => updateQuantity(pizza.id, 1)}>+</button>
            </p>
            <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
          </div>
        ))
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
