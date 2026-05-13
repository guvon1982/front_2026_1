import { useContext } from "react";
import "./Menu.css";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

function Menu() {
  const usuarioId = 0; //pegou da API

  const { logout, usuario } = useContext(AuthContext);

  const handleSair = () => {
    logout();
  };

  return (
    <nav>
      <h4>{usuario.nome}</h4>
      <h5>{usuario.email}</h5>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configurações</NavLink>
        </li>
        <li>
          <Link to="/" onClick={handleSair}>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
