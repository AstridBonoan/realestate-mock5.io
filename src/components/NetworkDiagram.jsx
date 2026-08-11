import { useInView } from '../hooks/useScrollReveal'
import { communityTypes } from '../data/content'

export default function NetworkDiagram() {
  const { ref, inView } = useInView(0.3)
  const positions = [
    { x: 50, y: 18 },
    { x: 78, y: 32 },
    { x: 84, y: 62 },
    { x: 62, y: 82 },
    { x: 38, y: 82 },
    { x: 16, y: 62 },
    { x: 22, y: 32 },
  ]

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[40%] bg-lavender"
      role="img"
      aria-label="Network map connecting members, investors, owners, developers, professionals, businesses, and partners"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {positions.map((p, i) => (
          <line
            key={`l-${i}`}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke="#C99B9B"
            strokeWidth="0.4"
            className="network-node"
            style={{
              opacity: inView ? 1 : 0.15,
              transitionDelay: `${i * 80}ms`,
            }}
          />
        ))}
        <circle cx="50" cy="50" r="10" fill="#5B3A6B" />
        <text
          x="50"
          y="51.5"
          textAnchor="middle"
          fill="#fff"
          fontSize="3.2"
          fontWeight="800"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          KINDRED
        </text>
        {positions.map((p, i) => (
          <g
            key={communityTypes[i]}
            className="network-node"
            style={{
              transform: inView ? 'scale(1)' : 'scale(0.7)',
              transformOrigin: `${p.x}px ${p.y}px`,
              opacity: inView ? 1 : 0.3,
              transitionDelay: `${120 + i * 90}ms`,
            }}
          >
            <circle cx={p.x} cy={p.y} r="7.5" fill="#fff" stroke="#FF6B5B" strokeWidth="0.5" />
            <text
              x={p.x}
              y={p.y + 1}
              textAnchor="middle"
              fill="#5B3A6B"
              fontSize="2.3"
              fontWeight="700"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              {communityTypes[i].split(' ')[0].slice(0, 8)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export function DisconnectedNetwork() {
  const { ref, inView } = useInView(0.35)
  const loose = [
    { x: 18, y: 28 },
    { x: 78, y: 22 },
    { x: 30, y: 72 },
    { x: 70, y: 68 },
    { x: 48, y: 40 },
  ]
  const tight = [
    { x: 35, y: 40 },
    { x: 55, y: 35 },
    { x: 65, y: 55 },
    { x: 45, y: 62 },
    { x: 50, y: 48 },
  ]

  return (
    <div ref={ref} className="mx-auto h-56 w-full max-w-md sm:h-64" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {(inView ? tight : loose).map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="5"
            fill={i === 4 ? '#FF6B5B' : '#5B3A6B'}
            className="network-node"
            style={{ transitionDelay: `${i * 100}ms` }}
          />
        ))}
        {inView &&
          tight.map((p, i) =>
            i < tight.length - 1 ? (
              <line
                key={`c-${i}`}
                x1={p.x}
                y1={p.y}
                x2={tight[i + 1].x}
                y2={tight[i + 1].y}
                stroke="#C99B9B"
                strokeWidth="0.5"
              />
            ) : null,
          )}
      </svg>
    </div>
  )
}
