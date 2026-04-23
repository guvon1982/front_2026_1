import './SecaoCard.css';

function SecaoCard({ titulo, children }) {
  return (
    <section className="secao-card">
      <header className="secao-card-header">
        <h2 className="secao-card-titulo">{titulo}</h2>
      </header>
      <article className="secao-card-corpo">
        {children}
      </article>
    </section>
  );
}

export default SecaoCard;