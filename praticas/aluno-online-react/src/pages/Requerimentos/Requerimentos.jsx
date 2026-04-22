import './Requerimentos.css';

function Requerimentos() {
  const requerimentosData = [
    { tipo: 'Revisão de Menção', data: '15/12/2025', status: 'Indeferido', classe: 'status-indeferido' },
    { tipo: 'Dispensa de Disciplina', data: '12/06/2025', status: 'Indeferido', classe: 'status-indeferido' },
    { tipo: 'Trancamento de Matrícula', data: '05/01/2024', status: 'Deferido', classe: 'status-deferido' },
    { tipo: 'Mudança de Turno', data: '10/10/2023', status: 'Deferido', classe: 'status-deferido' },
    { tipo: 'Renovação de Matrícula', data: '20/02/2023', status: 'Deferido', classe: 'status-deferido' },
  ];

  return (
    <main className="requerimentos-container">
      <header>
        <h1 className="main-title">Meus Requerimentos</h1>
        <p className="subtitle">Faça solicitações online para a secretaria</p>
      </header>
      
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
            {requerimentosData.map((req, index) => (
              <tr key={index}>
                <th scope="row" className="requerimento-tipo">{req.tipo}</th>
                <td><time dateTime={req.data.split('/').reverse().join('-')}>{req.data}</time></td>
                <td className={req.classe}>{req.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Requerimentos;