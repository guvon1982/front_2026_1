import './Topbar.css';
import avatarIcon from '../../assets/avatar.svg';

function Topbar() {
  return (
    <header className="topbar">
      <section className="topbar-content">
        <h1>Olá, Aluno!</h1>
        <figure className="user-info">
          <img src={avatarIcon} alt="Foto de perfil do aluno" className="user-avatar" />
        </figure>
      </section>
    </header>
  );
}

export default Topbar;