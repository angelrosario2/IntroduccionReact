import React from "react";


const CardPizza = ({ name, price, ingredients, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Ingredientes: {ingredients.join(", ")}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.buttonLeft}>Ver más</button>
        <button style={styles.buttonRight}>Añadir</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem",
    textAlign: "center",
    width: "300px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  buttonLeft: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonRight: {
    backgroundColor: "#28A745",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CardPizza;
