import './Topbar.css';
import avatarIcon from '../../assets/avatar.svg';

function Topbar() {
  return (
    <header className="topbar">
      <h1>Olá, Aluno!</h1>
      <img src={avatarIcon} alt="Ícone usuário" className="user-avatar" />
    </header>
  );
}

export default Topbar;