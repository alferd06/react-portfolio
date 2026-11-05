// src/components/ProjectFilter.jsx
const filters = [
  { key: 'all', label: 'All' },
  { key: 'data', label: 'Data' },
  { key: 'mobile', label: 'Mobile' },
];

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="flex gap-2 mb-stack-lg">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className={`px-4 py-2 text-label-mono font-label-mono border transition-colors duration-300 ${
            active === f.key
              ? 'border-primary text-primary bg-primary/10'
              : 'border-border-subtle text-text-muted hover:border-primary/50 hover:text-text-primary'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}