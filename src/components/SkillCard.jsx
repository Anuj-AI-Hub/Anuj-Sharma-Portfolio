export default function SkillCard({ title, items }) {
  const normalizedItems = items.map((item) =>
    typeof item === 'string' ? { label: item, icon: null } : item,
  );

  return (
    <div className="skill-card panel-surface">
      <h3>{title}</h3>
      <div className="skill-list">
        {normalizedItems.map(({ label, icon: Icon }) => (
          <span key={label} className="skill-tag">
            {Icon ? (
              <span className="skill-tag-icon" aria-hidden="true">
                <Icon size={12} />
              </span>
            ) : null}
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
