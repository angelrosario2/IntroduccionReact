import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener los detalles de la pizza.");
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando detalles de la pizza...</p>;

  if (error) return <p>Error: {error}</p>;

  if (!pizza) return <p>No se encontró la pizza solicitada.</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "300px", borderRadius: "10px", margin: "20px 0" }}
      />
      <p>{pizza.desc}</p>
      <p>
        <strong>Precio:</strong> ${pizza.price}
      </p>
      <h3>Ingredientes:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {pizza.ingredients?.map((ingredient, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {ingredient}
          </li>
        ))}
      </ul>
      <button
        onClick={() => addToCart(pizza)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
