import React, { useState } from "react";
import PizzaList from "./components/PizzaList";
import Cart from "./components/CART.JSX";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { pizzas } from "./data/pizzas";

const App = () => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (pizza) => {
    const pizzaInCart = cart.find((item) => item.id === pizza.id);
    if (pizzaInCart) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]); 
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter((pizza) => pizza.id !== pizzaId));
  };

  const updateQuantity = (pizzaId, change) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === pizzaId
          ? {
              ...pizza,
              count: pizza.count + change > 0 ? pizza.count + change : 1,
            }
          : pizza
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  };

  return (
    <div className="app">
      <Navbar />
      <Header />
      <PizzaList addToCart={addToCart} pizzas={pizzas} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        calculateTotal={calculateTotal}
      />
      <Footer />
    </div>
  );
};

export default App;
