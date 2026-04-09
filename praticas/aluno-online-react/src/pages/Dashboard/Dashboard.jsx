import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <p className="welcome-text">Bem-vindo ao portal do aluno</p>

      <section className="dashboard-grid">
        <article className="info-card">
          <header className="card-header">Mural de Avisos</header>
          <div className="card-content">
            <p>Inscrição para o projeto de extensão</p>
            <p>Eleição para representante de turma</p>
          </div>
        </article>

        <article className="info-card">
          <header className="card-header">Calendário Acadêmico</header>
          <div className="card-content">
            <p>23/02 - Início do período letivo 2026-1</p>
            <p>25/04 - Prazo final para aplicação da P1</p>
            <p>23/06 - Prazo final para aplicação da P2</p>
            <p>04/07 - Fim do período letivo 2026-1</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;