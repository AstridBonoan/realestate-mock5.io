import { JournalArticle, JournalFeature } from '../components/JournalArticle'
import { journalArticles } from '../data/content'

export default function Journal() {
  const featured = journalArticles.find((a) => a.featured)
  const rest = journalArticles.filter((a) => !a.featured)

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">Journal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
          Insights & perspective
        </h1>
        <p className="mt-4 max-w-xl text-base text-warm-gray">
          Placeholder articles on markets, community, partnerships, and property—easy to customize.
        </p>
        <div className="mt-10">{featured && <JournalFeature article={featured} />}</div>
        <div className="mt-4 border-y border-line">
          {rest.map((a) => (
            <JournalArticle key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
