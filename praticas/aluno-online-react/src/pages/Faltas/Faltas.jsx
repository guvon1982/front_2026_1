import './Faltas.css';

function Faltas() {
  return (
    <div className="faltas-container">
      <h1 className="main-title">Controle de Faltas</h1>
      <p className="subtitle">Visão geral do semestre atual (2026.1)</p>
      
      <div className="faltas-grid">
        {/* Card 1 - Front-end Frameworks */}
        <div className="falta-card">
          <h3 className="disciplina-title">Front-end Frameworks</h3>
          
          <div className="card-detalhes">
            <div className="falta-info">
              <p className="numero-faltas">4</p>
              <span>Faltas</span>
            </div>
            
            <div className="presenca-info">
              <p className="porcentagem">85%</p>
              <span>Presença</span>
            </div>
          </div>
          
          {/* A barra agora mostra o quanto você já usou do limite (ex: 4 de 20 faltas) */}
          <div className="barra-limite-container">
            <div className="progresso-limite" style={{width: '20%'}}></div>
            <span className="limite-texto">4 / 20 Faltas Permitidas</span>
          </div>
        </div>

        {/* Card 2 - Arquitetura de Software */}
        <div className="falta-card">
          <h3 className="disciplina-title">Arquitetura de Software</h3>
          
          <div className="card-detalhes">
            <div className="falta-info">
              <p className="numero-faltas">2</p>
              <span>Faltas</span>
            </div>
            
            <div className="presenca-info">
              <p className="porcentagem">92%</p>
              <span>Presença</span>
            </div>
          </div>
          
          <div className="barra-limite-container">
            <div className="progresso-limite" style={{width: '10%'}}></div>
            <span className="limite-texto">2 / 20 Faltas Permitidas</span>
          </div>
        </div>
        
        {/* Card 3 - Banco de Dados (Adicionando mais um pra preencher) */}
        <div className="falta-card">
          <h3 className="disciplina-title">Banco de Dados</h3>
          
          <div className="card-detalhes">
            <div className="falta-info">
              <p className="numero-faltas">0</p>
              <span>Faltas</span>
            </div>
            
            <div className="presenca-info">
              <p className="porcentagem">100%</p>
              <span>Presença</span>
            </div>
          </div>
          
          <div className="barra-limite-container pago-status">
            <div className="progresso-limite" style={{width: '0%'}}></div>
            <span className="limite-texto">Nenhuma falta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faltas;