import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Las mejores pizzas que puedes encontrar!</p>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center",
    background: "url('https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?semt=ais_hybrid') center/cover no-repeat",
    color: "#fff",
    padding: "2rem",
  },
};

export default Header;
