import { useState } from 'react'

export default function PropertyGallery({ images = [], title }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
        <img
          src={images[active]}
          alt={`${title} — image ${active + 1}`}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={active === i}
            className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border-2 transition ${
              active === i ? 'border-emerald' : 'border-transparent opacity-80 hover:opacity-100'
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
