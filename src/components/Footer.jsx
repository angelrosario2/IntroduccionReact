import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
      <p>¡Gracias por visitarnos!</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem 0",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
