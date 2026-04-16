import './Dashboard.css';

function Dashboard() {
  return (
    <main className="dashboard-container">
      <header className="dashboard-intro">
        <p className="welcome-text">Bem-vindo ao portal do aluno</p>
      </header>

      <section className="dashboard-grid">
        <article className="info-card">
          <header className="card-header">
            <h3>Mural de Avisos</h3>
          </header>
          {/* Substituímos a div por um agrupamento semântico ou lista */}
          <section className="card-content">
            <p>Inscrição para o projeto de extensão</p>
            <p>Eleição para representante de turma</p>
          </section>
        </article>

        <article className="info-card">
          <header className="card-header">
            <h3>Calendário Acadêmico</h3>
          </header>
          <section className="card-content">
            <p><time dateTime="2026-02-23">23/02</time> - Início do período letivo 2026-1</p>
            <p><time dateTime="2026-04-25">25/04</time> - Prazo final para aplicação da P1</p>
            <p><time dateTime="2026-06-23">23/06</time> - Prazo final para aplicação da P2</p>
            <p><time dateTime="2026-07-04">04/07</time> - Fim do período letivo 2026-1</p>
          </section>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;