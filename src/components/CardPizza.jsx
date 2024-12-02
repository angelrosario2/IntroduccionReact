import React from "react";

const CardPizza = ({ pizza, addToCart }) => {
  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Agregar al carrito</button>
    </div>
  );
};

export default CardPizza;
