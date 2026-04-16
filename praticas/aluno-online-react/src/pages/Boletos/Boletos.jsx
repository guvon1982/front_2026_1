import './Boletos.css';

function Boletos() {
  const faturas = [
    { id: 1, mes: 'Abril/2026', vencimento: '10/04/2026', valor: 550.00, status: 'PAGO' },
    { id: 2, mes: 'Maio/2026', vencimento: '10/05/2026', valor: 550.00, status: 'ABERTO' },
  ];

  return (
    <main className="boletos-container">
      <header className="page-header">
        <h1 className="main-title">Financeiro / Boletos</h1>
      </header>
      
      <section className="boletos-list" aria-label="Lista de faturas">
        {faturas.map(fatura => (
          <article key={fatura.id} className="boleto-card">
            <header className="boleto-info">
              <h2 className="boleto-titulo">Mensalidade - {fatura.mes}</h2>
              
              <dl className="boleto-detalhes">
                <dt>Vencimento:</dt>
                <dd>
                  <time dateTime={fatura.vencimento.split('/').reverse().join('-')}>
                    {fatura.vencimento}
                  </time>
                </dd>

                <dt>Valor:</dt>
                <dd>R$ {fatura.valor.toFixed(2)}</dd>
              </dl>
            </header>

            <footer className="boleto-status">
              {fatura.status === 'PAGO' ? (
                <strong className="status-pago">PAGO</strong>
              ) : (
                <button type="button" className="btn-gerar">Gerar Boleto</button>
              )}
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Boletos;