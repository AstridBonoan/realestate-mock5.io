export default function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={`text-[11px] font-semibold tracking-[0.22em] text-burgundy uppercase ${className}`}
    >
      {children}
    </p>
  )
}
