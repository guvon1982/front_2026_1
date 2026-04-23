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
    <section className="app-grid">
      <Sidebar />
      <section className="app-content">
        <Topbar />
        <main className="main-render-area">
          <Dashboard />
          {/* <Dashboard /> */}
          {/* <Notas /> */}
          {/* <Faltas /> */}
          {/* <Boletos /> */}
          {/* <Requerimentos /> */}
        </main>
      </section>
    </section>
  );
}

export default App;