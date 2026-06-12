import { Routes, Route } from "react-router";
import Listagem from "./pages/Listagem";
import Formulario from "./pages/Formulario";
import Login from "./pages/Login";
import Privado from "./pages/Privado";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Privado />}>
        <Route path="/produtos" element={<Listagem />} />
        <Route path="/produtos/novo" element={<Formulario />} />
        <Route path="/produtos/editar/:id" element={<Formulario />} />
      </Route>
    </Routes>
  );
}

export default App;
