import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";


const Header = ({ onNavigate, cartTotal }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>Pizzería Mamma Mia!</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li onClick={() => onNavigate("home")}>
              <a href="#">🏠 Home</a>
            </li>
            <li onClick={() => onNavigate("login")}>
              <a href="#">🔑 Login</a>
            </li>
            <li onClick={() => onNavigate("register")}>
              <a href="#">📝 Register</a>
            </li>
          </ul>
        </nav>
        <div className="header-cart">
          🛒 Total: <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [selectedPizzaId, setSelectedPizzaId] = useState(null);
  const [cartTotal, setCartTotal] = useState(0); 

  const handleViewChange = (view, pizzaId = null) => {
    setCurrentView(view);
    if (pizzaId) {
      setSelectedPizzaId(pizzaId);
    }
  };

  return (
    <div className="app">
      {}
      <Header onNavigate={handleViewChange} cartTotal={cartTotal} />
      <main>
        {currentView === "home" && (
          <Home
            onSelectPizza={(pizzaId) => handleViewChange("pizza", pizzaId)}
          />
        )}
        {currentView === "pizza" && <Pizza pizzaId={selectedPizzaId} />}
        {currentView === "cart" && <Cart />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
