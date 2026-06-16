import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';
import Faltas from './pages/Faltas/Faltas';
import Boletos from './pages/Boletos/Boletos';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import Login from './pages/Login/Login';
import { useAuth } from './contexts/AuthContext';
import './App.css';

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={autenticado ? <Navigate to="/" replace /> : <Login />}
      />

      {autenticado ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="notas" element={<Notas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos" element={<Requerimentos />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}

      <Route
        path="*"
        element={<Navigate to={autenticado ? '/' : '/login'} replace />}
      />
    </Routes>
  );
}

export default App;
