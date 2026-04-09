import './Notas.css';

function Notas() {
  // Exemplo de dados com a lógica de menção aplicada
  const notasFicticias = [
    { disciplina: 'Front-end Frameworks', p1: 8.5, p2: 9.0, p3: '-', media: 8.75, mencao: 'MS' },
    { disciplina: 'Arquitetura de Software', p1: 7.0, p2: 8.0, p3: '-', media: 7.5, mencao: 'MS' },
    { disciplina: 'Banco de Dados', p1: 9.5, p2: 10.0, p3: '-', media: 9.75, mencao: 'SS' },
    { disciplina: 'Estrutura de Dados', p1: 4.0, p2: 5.0, p3: 7.0, media: 6.0, mencao: 'MM' },
    { disciplina: 'Sistemas Operacionais', p1: 0.0, p2: 0.0, p3: '-', media: 0.0, mencao: 'SR' },
  ];

  return (
    <div className="notas-container">
      <h1 className="main-title">Minhas Notas</h1>
      
      <div className="table-responsive">
        <table className="notas-table">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>P1</th>
              <th>P2</th>
              <th>P3</th> {/* Recuperação da referência do prof */}
              <th>Média</th>
              <th>Menção</th> {/* Sigla da referência do prof */}
            </tr>
          </thead>
          <tbody>
            {notasFicticias.map((item, index) => (
              <tr key={index}>
                <td className="disciplina-nome">{item.disciplina}</td>
                <td>{item.p1}</td>
                <td>{item.p2}</td>
                <td>{item.p3}</td>
                <td>{item.media}</td>
                <td className={`mencao mencao-${item.mencao}`}>{item.mencao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legenda para ajudar o aluno a entender a regra do professor */}
      <div className="legenda-container">
        <h4>Legenda de Menções</h4>
        <div className="legenda-grid">
          <span><strong>SS:</strong> 9.0 - 10.0</span>
          <span><strong>MS:</strong> 7.0 - 8.9</span>
          <span><strong>MM:</strong> 5.0 - 6.9</span>
          <span><strong>MI:</strong> 3.0 - 4.9</span>
          <span><strong>II:</strong> 0.1 - 2.9</span>
          <span><strong>SR:</strong> Faltas &gt; 25%</span>
        </div>
      </div>
    </div>
  );
}

export default Notas;