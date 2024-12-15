import React, { useState, useEffect } from "react";
import PizzaCard from "../components/CardPizza";

const Home = ({ onAddToCart }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => {
        console.log("Pizzas recibidas:", data); 
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  const handleViewDetails = (id) => {
    console.log("Ver detalles de pizza:", id);
    
  };

  
  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <div className="pizza-container">
      <h1>Menú de Pizzas</h1>
      <div className="pizza-grid" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddToCart={() => onAddToCart(pizza)} 
            onViewDetails={() => handleViewDetails(pizza.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
