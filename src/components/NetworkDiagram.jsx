import ScrollReveal from './ScrollReveal'

const nodes = [
  { label: 'MEMBERS', x: 50, y: 8 },
  { label: 'PARTNERS', x: 88, y: 35 },
  { label: 'PROPERTIES', x: 78, y: 82 },
  { label: 'INVESTORS', x: 22, y: 82 },
  { label: 'RENTALS', x: 12, y: 35 },
]

export default function NetworkDiagram() {
  return (
    <ScrollReveal>
      <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-cream via-white to-sage-soft p-4 shadow-card sm:p-8">
        <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Network connecting members, partners, properties, investors, and rentals">
          {nodes.map((node) => (
            <line
              key={`line-${node.label}`}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              className="network-line"
              stroke="#059669"
              strokeWidth="0.4"
            />
          ))}
          <circle cx="50" cy="50" r="14" fill="#0F1412" />
          <text
            x="50"
            y="48"
            textAnchor="middle"
            fill="#10B981"
            fontSize="3.2"
            fontWeight="700"
            fontFamily="Syne, sans-serif"
          >
            REAL ESTATE
          </text>
          <text
            x="50"
            y="54"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="3.2"
            fontWeight="700"
            fontFamily="Syne, sans-serif"
          >
            NETWORK
          </text>
          {nodes.map((node) => (
            <g key={node.label}>
              <circle cx={node.x} cy={node.y} r="8" fill="#FFFFFF" stroke="#A7C4B5" strokeWidth="0.5" />
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                fill="#0F1412"
                fontSize="2.6"
                fontWeight="700"
                fontFamily="DM Sans, sans-serif"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </ScrollReveal>
  )
}
