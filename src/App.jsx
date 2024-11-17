import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <main style={{ paddingBottom: "50px" }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
};



export default App;
