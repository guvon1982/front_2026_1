import { Routes, Route } from 'react-router';
import Listagem from './pages/Listagem';
import Formulario from './pages/Formulario';

function App (){
  return <Routes>
    <Route path="/produtos" element={<Listagem />} />
    <Route path="/produtos/novo" element={<Formulario />} />
    <Route path="/produtos/editar/:id" element={<Formulario />} />
  </Routes>
}

export default App;