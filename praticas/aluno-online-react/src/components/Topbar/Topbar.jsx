import './Topbar.css';
import userIcon from '../../assets/avatar.svg'; // Usando o arquivo existente na pasta assets

function Topbar() {
  return (
    <header className="topbar">
      {/* O título foi removido daqui para evitar a duplicidade visual */}
      <figure className="user-profile">
        <img src={userIcon} alt="Perfil do Usuário" />
      </figure>
    </header>
  );
}

export default Topbar;