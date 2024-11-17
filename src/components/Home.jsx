import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import hawa from "../assets/imagenes/hawaiana.jpg";
import napo from "../assets/imagenes/napolitana.jpg";
import pepe from "../assets/imagenes/peperoni.jpg";

const Home = () => {
  const pizzas = [
    {
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      image: napo, 
    },
    {
      name: "Pepperoni",
      price: 6500,
      ingredients: ["pepperoni", "queso", "salsa"],
      image: pepe,
    },
    {
      name: "Hawaiana",
      price: 7000,
      ingredients: ["piña", "jamón", "queso"],
      image: hawa, 
    },
  ];

  return (
    <div>
      <Header />
      <div style={styles.pizzaList}>
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            image={pizza.image} 
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  pizzaList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default Home;
