import './Notas.css';

function Notas() {
  const notasFicticias = [
    { disciplina: 'Front-end Frameworks', p1: 8.5, p2: 9.0, p3: '-', media: 8.75, mencao: 'MS' },
    { disciplina: 'Arquitetura de Software', p1: 7.0, p2: 8.0, p3: '-', media: 7.5, mencao: 'MS' },
    { disciplina: 'Banco de Dados', p1: 9.5, p2: 10.0, p3: '-', media: 9.75, mencao: 'SS' },
    { disciplina: 'Estrutura de Dados', p1: 4.0, p2: 5.0, p3: 7.0, media: 6.0, mencao: 'MM' },
    { disciplina: 'Sistemas Operacionais', p1: 0.0, p2: 0.0, p3: '-', media: 0.0, mencao: 'SR' },
  ];

  return (
    <main className="notas-container">
      <h1 className="main-title">Minhas Notas</h1>
      
      <section className="table-section">
        <table className="notas-table">
          <thead>
            <tr>
              <th scope="col">Disciplina</th>
              <th scope="col">P1</th>
              <th scope="col">P2</th>
              <th scope="col">P3</th>
              <th scope="col">Média</th>
              <th scope="col">Menção</th>
            </tr>
          </thead>
          <tbody>
            {notasFicticias.map((item, index) => (
              <tr key={index}>
                <th scope="row" className="disciplina-nome">{item.disciplina}</th>
                <td>{item.p1}</td>
                <td>{item.p2}</td>
                <td>{item.p3}</td>
                <td>{item.media}</td>
                <td className={`mencao mencao-${item.mencao}`}>{item.mencao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <aside className="legenda-section">
        <h2 className="legenda-titulo">Legenda de Menções</h2>
        <dl className="legenda-list">
          <dt>SS:</dt> <dd>9.0 - 10.0</dd>
          <dt>MS:</dt> <dd>7.0 - 8.9</dd>
          <dt>MM:</dt> <dd>5.0 - 6.9</dd>
          <dt>MI:</dt> <dd>3.0 - 4.9</dd>
          <dt>II:</dt> <dd>0.1 - 2.9</dd>
          <dt>SR:</dt> <dd>Faltas &gt; 25%</dd>
        </dl>
      </aside>
    </main>
  );
}

export default Notas;