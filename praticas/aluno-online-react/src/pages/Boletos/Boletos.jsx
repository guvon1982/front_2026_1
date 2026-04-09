import './Boletos.css';

function Boletos() {
  const faturas = [
    { id: 1, mes: 'Abril/2026', vencimento: '10/04/2026', valor: 550.00, status: 'PAGO' },
    { id: 2, mes: 'Maio/2026', vencimento: '10/05/2026', valor: 550.00, status: 'ABERTO' },
  ];

  return (
    <div className="boletos-container">
      <h1 className="main-title">Financeiro / Boletos</h1>
      
      <div className="boletos-list">
        {faturas.map(fatura => (
          <div key={fatura.id} className="boleto-card">
            <div className="boleto-info">
              <span className="boleto-titulo">Mensalidade - {fatura.mes}</span>
              <div className="boleto-detalhes">
                <span><strong>Vencimento:</strong> {fatura.vencimento}</span>
                <span><strong>Valor:</strong> R$ {fatura.valor.toFixed(2)}</span>
              </div>
            </div>

            <div className="boleto-status">
              {fatura.status === 'PAGO' ? (
                <span className="status-pago">PAGO</span>
              ) : (
                <button className="btn-gerar">Gerar Boleto</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boletos;