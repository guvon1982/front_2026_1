import { useAuth } from '../../contexts/AuthContext';
import './Topbar.css';
import userIcon from '../../assets/avatar.svg';

function Topbar() {
  const { usuario } = useAuth();

  return (
    <header className="topbar">
      <section className="user-profile">
        <span className="user-info">
          {usuario?.nome} | {usuario?.email}
        </span>
        <figure>
          <img src={userIcon} alt="Perfil do Usuario" />
        </figure>
      </section>
    </header>
  );
}

export default Topbar;
