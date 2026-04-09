import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';
import Faltas from './pages/Faltas/Faltas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import './App.css';

function App() {
  return (
    <div className="app-grid">
      <Sidebar />
      <div className="app-content">
        <Topbar />
        <main>
          <Dashboard />
          {/* <Dashboard> */}
          {/* <Notas /> */}
          {/* <Faltas /> */}
          {/* <Boletos /> */}
          {/* <Requerimentos /> */}
        </main>
      </div>
    </div>
  );
}

export default App;