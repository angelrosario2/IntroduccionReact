import React, { useState, useEffect } from "react";
import PizzaCard from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  const handleAddToCart = (pizza) => {
    console.log("Añadiendo al carrito:", pizza);
  };

  const handleViewDetails = (id) => {
    console.log("Ver detalles de pizza:", id);
  };

  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <div className="pizza-container">
      <h1>Menú de Pizzas</h1>
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
