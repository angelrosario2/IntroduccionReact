import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#pizzas">Pizzas</a></li>
        <li><a href="#cart">Carrito</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
