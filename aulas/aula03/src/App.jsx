import Dashboard from "./pages/Dashboard";
import Requerimentos from "./pages/Requirimentos";

function App(){
    const pagina = 1;
    return (
        <>
        {pagina == 1 && <Dashboard />}
        {pagina == 2 && <Notas />}
        {pagina == 3 && <Faltas />}
        {pagina == 4 && <Boletos />}
        {pagina == 5 && <Requerimentos />}
        </>
    );
}

export default App;