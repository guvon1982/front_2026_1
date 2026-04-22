import './Sidebar.css';
import learnIcon from '../../assets/learn.svg';

function Sidebar() {
  return (
    <aside className="sidebar-estatica">
      <header className="sidebar-header">
        <img src={learnIcon} alt="Logo do sistema Aluno Online" />
        <h2>Aluno Online</h2>
      </header>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="active"><a href="#">Dashboard</a></li>
          <li><a href="#">Notas</a></li>
          <li><a href="#">Faltas</a></li>
          <li><a href="#">Boletos</a></li>
          <li><a href="#">Requerimentos</a></li> 
          <li className="logout"><button type="button">Sair</button></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;