import { useState } from 'react'

export default function CommunityJourney({ stages }) {
  const [open, setOpen] = useState(stages[0]?.id)

  return (
    <div>
      <div className="no-scrollbar mb-8 hidden overflow-x-auto md:block">
        <div className="flex min-w-[640px]">
          {stages.map((stage, i) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setOpen(stage.id)}
              className={`relative min-w-0 flex-1 border-t-2 px-3 pt-6 pb-2 text-left transition ${
                open === stage.id ? 'border-coral' : 'border-line'
              }`}
              aria-expanded={open === stage.id}
            >
              <span className="absolute -top-2 left-3 h-4 w-4 rounded-full border-2 border-coral bg-white" />
              <p className="text-[11px] font-bold tracking-[0.16em] text-plum uppercase">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="mt-1 text-sm font-extrabold text-warm-ink">{stage.title}</p>
            </button>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-warm-gray">
          {stages.find((s) => s.id === open)?.text}
        </p>
      </div>

      <div className="space-y-3 md:hidden">
        {stages.map((stage, i) => {
          const expanded = open === stage.id
          return (
            <div key={stage.id} className="border border-line">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                onClick={() => setOpen(expanded ? null : stage.id)}
                aria-expanded={expanded}
              >
                <span className="font-extrabold text-plum">
                  {String(i + 1).padStart(2, '0')} — {stage.title}
                </span>
                <span className="text-coral">{expanded ? '−' : '+'}</span>
              </button>
              {expanded && (
                <p className="px-4 pb-4 text-sm text-warm-gray">{stage.text}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
