import logoUrl from '../assets/bc-logo.png'

export default function BrandingMarks() {
  return (
    <>
      {/* Soft tiled watermark above content so screenshots show ownership */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-[-20%] opacity-[0.07]"
          style={{
            backgroundImage: `url(${logoUrl})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '180px auto',
            backgroundPosition: 'center',
            transform: 'rotate(-14deg)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Corner badge */}
      <div
        className="fixed right-3 bottom-3 z-[70] rounded-md border border-slate-200 bg-white px-2.5 py-2 shadow-md sm:right-5 sm:bottom-5"
        aria-label="Design and development by B and C Software and Web"
      >
        <img
          src={logoUrl}
          alt="B&C Software & Web"
          className="h-9 w-auto sm:h-10"
          width={120}
          height={40}
        />
      </div>
    </>
  )
}
