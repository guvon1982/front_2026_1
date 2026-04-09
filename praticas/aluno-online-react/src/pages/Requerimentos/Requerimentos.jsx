import './Requerimentos.css';

function Requerimentos() {
  return (
    <div className="requerimentos-container">
      <h1 className="main-title">Meus Requerimentos</h1>
      <p className="subtitle">Faça solicitações online para a secretaria</p>
      
      <div className="table-responsive">
        <table className="requerimentos-table">
          <thead>
            <tr>
              <th>Tipo de Requerimento</th>
              <th>Data de Solicitação</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revisão de Menção</td>
              <td>15/12/2025</td>
              <td className="status-indeferido">Indeferido</td>
            </tr>
            <tr>
              <td>Dispensa de Disciplina</td>
              <td>12/06/2025</td>
              <td className="status-indeferido">Indeferido</td>
            </tr>
            <tr>
              <td>Trancamento de Matrícula</td>
              <td>05/01/2024</td>
              <td className="status-deferido">Deferido</td>
            </tr>
            <tr>
              <td>Mudança de Turno</td>
              <td>10/10/2023</td>
              <td className="status-deferido">Deferido</td>
            </tr>
            <tr>
              <td>Renovação de Matrícula</td>
              <td>20/02/2023</td>
              <td className="status-deferido">Deferido</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Requerimentos;