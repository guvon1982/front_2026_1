import './Dashboard.css';
import SecaoCard from '../../components/SecaoCard/SecaoCard';

function Dashboard() {
  return (
    <main className="dashboard-container">
      {/* Apenas UM cabeçalho aqui */}
      <header className="dashboard-header">
        <h1 className="welcome-title">Olá, Aluno!</h1>
        <p className="welcome-subtitle">Bem-vindo ao portal do aluno</p>
      </header>

      <section className="dashboard-grid">
        <SecaoCard titulo="Mural de Avisos">
          <ul className="lista-dashboard">
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </SecaoCard>

        <SecaoCard titulo="Calendário Acadêmico">
          <ul className="lista-dashboard">
            <li><time dateTime="2026-02-23">23/02</time> - Início do período letivo 2026-1</li>
            <li><time dateTime="2026-04-25">25/04</time> - Prazo final para aplicação da P1</li>
            <li><time dateTime="2026-06-23">23/06</time> - Prazo final para aplicação da P2</li>
            <li><time dateTime="2026-07-04">04/07</time> - Fim do período letivo 2026-1</li>
          </ul>
        </SecaoCard>

        <SecaoCard titulo="Minhas Disciplinas">
          <ul className="lista-dashboard">
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
            <li>Manutenção de Software e Devops</li>
          </ul>
        </SecaoCard>
      </section>
    </main>
  );
}

export default Dashboard;