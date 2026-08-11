export default function PullQuote({ children }) {
  return (
    <blockquote className="my-8 flex gap-5 border-l border-burgundy pl-5 sm:my-10 sm:pl-7">
      <p className="font-display text-2xl leading-snug text-espresso italic sm:text-3xl lg:text-[2.15rem]">
        {children}
      </p>
    </blockquote>
  )
}
