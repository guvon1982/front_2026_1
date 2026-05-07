import './Faltas.css';
import SecaoCard from '../../components/SecaoCard/SecaoCard';

function Faltas() {
  const dados2026_1 = [
    { id: 1, nome: 'BI e Data Warehousing', faltas: 0, presenca: '100%' },
    { id: 2, nome: 'Construção de Frontend', faltas: 0, presenca: '100%' },
    { id: 3, nome: 'Manutenção de Software e Devops', faltas: 0, presenca: '100%' },
  ];

  // Dados extraídos da referência image_7cf10d.png
  const dados2025_2 = [
    { id: 4, nome: 'Construção de Backend', faltas: 27, presenca: '87.5%' },
    { id: 5, nome: 'Estrutura de Dados', faltas: 9, presenca: '85%' },
    { id: 6, nome: 'Gerenciamento de Projetos', faltas: 10.5, presenca: '82.5%' },
  ];

  return (
    <main className="faltas-container">
      <header className="faltas-header">
        <h1 className="welcome-title">Minhas Faltas</h1>
        <p className="welcome-subtitle">Histórico de Faltas por Semestre</p>
      </header>

      <section className="faltas-secoes">
        {/* Semestre Atual */}
        <SecaoCard titulo="2026.1">
          <table className="tabela-faltas">
            <thead>
              <tr>
                <th scope="col">Disciplina</th>
                <th scope="col">Total de Faltas</th>
                <th scope="col">% de Presença</th>
              </tr>
            </thead>
            <tbody>
              {dados2026_1.map(disc => (
                <tr key={disc.id}>
                  <td>{disc.nome}</td>
                  <td>{disc.faltas}</td>
                  <td>{disc.presenca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SecaoCard>

        {/* Semestre Anterior - Preenchido conforme referência */}
        <SecaoCard titulo="2025.2">
          <table className="tabela-faltas">
            <thead>
              <tr>
                <th scope="col">Disciplina</th>
                <th scope="col">Total de Faltas</th>
                <th scope="col">% de Presença</th>
              </tr>
            </thead>
            <tbody>
              {dados2025_2.map(disc => (
                <tr key={disc.id}>
                  <td>{disc.nome}</td>
                  <td>{disc.faltas}</td>
                  <td>{disc.presenca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SecaoCard>
      </section>
    </main>
  );
}

export default Faltas;