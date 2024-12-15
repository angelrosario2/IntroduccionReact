import React from "react";

const Profile = () => {
  const userEmail = "usuario@ejemplo.com"; 

  const handleLogout = () => {
    alert("Sesión cerrada.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Perfil de Usuario</h1>
      <p>Email: {userEmail}</p>
      <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
