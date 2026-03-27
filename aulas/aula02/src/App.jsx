import "./App.css";
import logo from "./assets/learn.svg";

/* PARA QUEBRAR A FUNÇÃO
function App(){
  return (
   <div></div>
   );
}
*/

//PRETTIER => ALT + SHIFT + F
//{} => código javascript

function Cabecalho() {
  return;
  <header>
    <h1>Titulo</h1>
  </header>;
}

function App() {
  {
    // <div>
    //   <Cabecalho />
    //   <div> {2 + 2} </div>
    //   <img src={logo} alt="" />
    //   <p></p>
    // </div>
  }

  return (
    <main>
      <img src={logo} alt="Icone chapéu formatura" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;
