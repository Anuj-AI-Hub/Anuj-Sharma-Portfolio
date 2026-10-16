export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
