import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';
import learnIcon from '../../assets/learn.svg';

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const getNavClass = ({ isActive }) => (
    isActive ? 'sidebar-link active' : 'sidebar-link'
  );

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <aside className="sidebar-estatica">
      <header className="sidebar-header">
        <img src={learnIcon} alt="Logo do sistema Aluno Online" />
        <h2>Aluno Online</h2>
      </header>
      
      <nav className="sidebar-nav">
        <ul>
          <li><NavLink to="/" className={getNavClass}>Dashboard</NavLink></li>
          <li><NavLink to="/notas" className={getNavClass}>Notas</NavLink></li>
          <li><NavLink to="/faltas" className={getNavClass}>Faltas</NavLink></li>
          <li><NavLink to="/boletos" className={getNavClass}>Boletos</NavLink></li>
          <li><NavLink to="/requerimentos" className={getNavClass}>Requerimentos</NavLink></li> 
          <li className="logout"><button type="button" onClick={handleLogout}>Sair</button></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
