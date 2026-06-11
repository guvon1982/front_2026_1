import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { listarRequerimentos } from '../../services/requerimentoService';
import './Requerimentos.css';

const formatarData = (data) => {
  if (!data) {
    return '-';
  }

  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
};

const classeStatus = (status) => {
  const classes = {
    Deferido: 'status-deferido',
    Indeferido: 'status-indeferido',
    'Em análise': 'status-em-analise',
  };

  return classes[status] ?? '';
};

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const carregarRequerimentos = async () => {
      try {
        const dados = await listarRequerimentos();
        setRequerimentos(dados);
      } catch {
        setErro('Não foi possível carregar os requerimentos. Verifique se a API está em execução.');
      } finally {
        setCarregando(false);
      }
    };

    carregarRequerimentos();
  }, []);

  return (
    <main className="requerimentos-container">
      <header>
        <h1 className="main-title">Meus Requerimentos</h1>
        <p className="subtitle">Faça solicitações online para a secretaria</p>
        <Link className="novo-requerimento-link" to="/requerimentos/novo">
          ➕ Novo Requerimento
        </Link>
      </header>

      {carregando && <p className="requerimentos-feedback">Carregando requerimentos...</p>}
      {erro && <p className="requerimentos-feedback requerimentos-erro" role="alert">{erro}</p>}

      {!carregando && !erro && (
        <section className="table-responsive">
          <table className="requerimentos-table">
            <thead>
              <tr>
                <th scope="col">Tipo de Requerimento</th>
                <th scope="col">Data de Solicitação</th>
                <th scope="col">Situação</th>
              </tr>
            </thead>
            <tbody>
              {requerimentos.map((req) => (
                <tr key={req.id}>
                  <th scope="row" className="requerimento-tipo">{req.tipo}</th>
                  <td><time dateTime={req.data}>{formatarData(req.data)}</time></td>
                  <td className={classeStatus(req.status)}>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {requerimentos.length === 0 && (
            <p className="requerimentos-feedback">Nenhum requerimento cadastrado.</p>
          )}
        </section>
      )}
    </main>
  );
}

export default Requerimentos;
