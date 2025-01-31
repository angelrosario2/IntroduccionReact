import React, { useEffect, useState } from "react";

const Pizza = ({ pizzaId }) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <ul>
        <strong>Ingredientes:</strong>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
