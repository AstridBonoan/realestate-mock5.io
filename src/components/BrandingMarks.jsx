const logoSrc = `${import.meta.env.BASE_URL}branding/bc-logo.png`

export default function BrandingMarks() {
  return (
    <>
      {/* Soft tiled watermark — screenshots retain ownership, non-interactive */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-[-12%] opacity-[0.04]"
          style={{
            backgroundImage: `url(${logoSrc})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px auto',
            backgroundPosition: 'center',
            transform: 'rotate(-12deg)',
          }}
        />
      </div>

      {/* Corner badge — visible ownership without competing with the design */}
      <div
        className="pointer-events-none fixed right-3 bottom-3 z-[45] rounded-md border border-line/80 bg-white/92 px-2.5 py-2 shadow-sm backdrop-blur-sm sm:right-4 sm:bottom-4"
        aria-hidden="true"
      >
        <img
          src={logoSrc}
          alt=""
          className="h-8 w-auto opacity-90 sm:h-9"
        />
        <span className="sr-only">Design & development by B&C Software & Web</span>
      </div>
    </>
  )
}
