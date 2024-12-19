import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";


export const CartContext = React.createContext();

const App = () => {
  const [cart, setCart] = useState([]); 
  
  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  
  return (
    <Router>
      <CartContext.Provider value={{ cart, addToCart }}>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </CartContext.Provider>
    </Router>
  );
};

export default App;
