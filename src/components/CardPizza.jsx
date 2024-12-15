import React from "react";

const PizzaCard = ({ pizza, onAddToCart, onViewDetails }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", width: "250px" }}>
      <img
        src={pizza.img} 
        alt={pizza.name}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
      />
      <h2>{pizza.name}</h2>
      <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
      <p><strong>Precio: ${pizza.price}</strong></p>
      <button onClick={onViewDetails} style={{ marginRight: "10px" }}>
        Ver Más 👁️
      </button>
      <button onClick={onAddToCart}>
        Añadir 🛒
      </button>
    </div>
  );
};

export default PizzaCard;
