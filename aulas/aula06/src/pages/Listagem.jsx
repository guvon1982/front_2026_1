import { useEffect, useState } from "react";
import { Link } from "react-router";
import { listar } from "../services/produtoService";

function Listagem() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    //dispatch
    const disparar = async () => {
      const resposta = await listar();
      setDados(resposta);
    };
    disparar();
  }, []);

  return (
    <>
      <h1>Listagem de Produtos</h1>
      <Link to="/produtos/novo">+ Adicionar</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.unidade}</td>
              <td>
                <Link to={`/produtos/editar/${item.id}`}>Editar</Link>|
                |
                <Link to="/produtos">Remover</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listagem;
