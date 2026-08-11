import { Link } from 'react-router-dom'

export default function CTASection({
  title = 'Would You Like To Become A Member?',
  description = 'Membership is for people who value relationships, judgment, and long-term opportunity in real estate.',
  linkLabel = 'Join Now →',
  linkTo = '/join',
  variant = 'terracotta',
}) {
  const isTerracotta = variant === 'terracotta'

  return (
    <section
      className={`py-16 md:py-20 ${
        isTerracotta ? 'bg-terracotta text-ivory' : 'border-y border-rule bg-parchment text-espresso'
      }`}
    >
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">{title}</h2>
        <p
          className={`mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base ${
            isTerracotta ? 'text-ivory/85' : 'text-muted'
          }`}
        >
          {description}
        </p>
        <Link
          to={linkTo}
          className={`editorial-link mt-8 inline-block ${
            isTerracotta ? '!text-ivory' : '!text-burgundy'
          }`}
        >
          {linkLabel}
        </Link>
      </div>
    </section>
  )
}
