import React from "react";

const PizzaCard = ({ pizza, onAddToCart, onViewDetails }) => {
  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <h3 className="pizza-name">{pizza.name}</h3>
      <p className="pizza-ingredients">
        <span role="img" aria-label="ingredients">
          🍕
        </span>{" "}
        {pizza.ingredients.join(", ")}
      </p>
      <p className="pizza-price">Precio: ${pizza.price.toLocaleString()}</p>
      <div className="pizza-buttons">
        <button onClick={() => onViewDetails(pizza.id)} className="btn view-btn">
          Ver Más <span role="img" aria-label="eye">👀</span>
        </button>
        <button onClick={() => onAddToCart(pizza)} className="btn add-btn">
          Añadir <span role="img" aria-label="cart">🛒</span>
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
