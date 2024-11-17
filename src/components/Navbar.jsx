import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>Home</li>
        {token ? (
          <>
            <li>Profile</li>
            <li>Logout</li>
          </>
        ) : (
          <>
            <li>Login</li>
            <li>Register</li>
          </>
        )}
        <li>Total: ${total.toLocaleString()}</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
};

export default Navbar;
