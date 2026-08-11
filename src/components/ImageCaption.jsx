export default function ImageCaption({ number, title, caption }) {
  return (
    <figcaption className="mt-4 flex flex-col gap-1 border-t border-rule pt-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="flex items-baseline gap-3">
        {number && (
          <span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-burgundy uppercase">
            {number}
          </span>
        )}
        {title && (
          <span className="font-display text-lg text-espresso sm:text-xl">{title}</span>
        )}
      </div>
      {caption && <p className="max-w-xl text-sm text-muted">{caption}</p>}
    </figcaption>
  )
}
