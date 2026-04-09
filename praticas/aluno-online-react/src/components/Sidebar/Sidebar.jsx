import './Sidebar.css';
import learnIcon from '../../assets/learn.svg';

function Sidebar() {
  return (
    <aside className="sidebar-estatica">
      <header className="sidebar-header">
        <img src={learnIcon} alt="Logo" />
        <h2>Aluno Online</h2>
      </header>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="active">Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li> 
          <li className="logout">Sair</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;