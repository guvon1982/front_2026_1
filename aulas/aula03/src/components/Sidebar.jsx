// O "../" sobe um nível (vai para a pasta src)
// O "assets/learn.svg" entra na pasta de imagens e seleciona o arquivo
import logo from "../assets/avatar.svg"; 
import Menu from "./Menu"; // Mantém-se igual pois o Menu é "vizinho" na mesma pasta

function Sidebar() {
  return (
    <aside>
      <header>
        {/* A variável 'logo' agora contém o caminho processado pelo Vite */}
        <img src={logo} alt="logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;