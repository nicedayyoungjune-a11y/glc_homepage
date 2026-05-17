export function Section({ eyebrow, title, children, tone = 'light', className = '' }) {
  return (
    <section className={`section section-${tone} ${className}`}>
      <div className="section-inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

export function Card({ title, children, meta }) {
  return (
    <article className="content-card">
      {meta ? <p className="card-meta">{meta}</p> : null}
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}
