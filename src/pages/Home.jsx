import React, { useState, useEffect } from "react";
import PizzaCard from "../components/CardPizza";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { addToCart } = React.useContext(CartContext);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => {
         
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  const handleViewDetails = (id) => {
    
    navigate(`/pizza/${id}`);
  };

  
  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <div className="pizza-container">
      <h1>Menú de Pizzas</h1>
      <div className="pizza-grid" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {pizzas.map((pizza) => {
        
          return(
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddToCart={() => addToCart(pizza)} 
            onViewDetails={() => handleViewDetails(pizza.id)} 
          />
        )})}
      </div>
    </div>
  );
};

export default Home;
