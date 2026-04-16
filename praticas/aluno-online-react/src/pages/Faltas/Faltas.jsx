import './Faltas.css';

function Faltas() {
  const disciplinas = [
    { id: 1, nome: 'Front-end Frameworks', faltas: 4, limite: 20, presenca: '85%' },
    { id: 2, nome: 'Arquitetura de Software', faltas: 2, limite: 20, presenca: '92%' },
    { id: 3, nome: 'Banco de Dados', faltas: 0, limite: 20, presenca: '100%' },
  ];

  return (
    <main className="faltas-container">
      <header>
        <h1 className="main-title">Controle de Faltas</h1>
        <p className="subtitle">Visão geral do semestre atual (2026.1)</p>
      </header>
      
      <section className="faltas-grid">
        {disciplinas.map(disc => (
          <article key={disc.id} className="falta-card">
            <h2 className="disciplina-title">{disc.nome}</h2>
            
            <section className="card-detalhes">
              <figure className="falta-info">
                <p className="numero-faltas">{disc.faltas}</p>
                <figcaption>Faltas</figcaption>
              </figure>
              
              <figure className="presenca-info">
                <p className="porcentagem">{disc.presenca}</p>
                <figcaption>Presença</figcaption>
              </figure>
            </section>
            
            <footer className={`barra-limite-container ${disc.faltas === 0 ? 'pago-status' : ''}`}>
              <label htmlFor={`progresso-${disc.id}`} className="limite-texto">
                {disc.faltas === 0 ? 'Nenhuma falta' : `${disc.faltas} / ${disc.limite} Faltas Permitidas`}
              </label>
              <progress 
                id={`progresso-${disc.id}`} 
                max={disc.limite} 
                value={disc.faltas} 
                className="progresso-limite"
              >
                {disc.faltas}%
              </progress>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Faltas;