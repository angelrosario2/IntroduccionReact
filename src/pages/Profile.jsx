import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useContext(UserContext);

  return (
    <div>
      <h1>Bienvenido, {email}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
