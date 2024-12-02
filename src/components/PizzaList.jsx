import React from "react";
import CardPizza from "./CardPizza";

const PizzaList = ({ addToCart, pizzas }) => {
  return (
    <section className="pizza-list">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default PizzaList;
