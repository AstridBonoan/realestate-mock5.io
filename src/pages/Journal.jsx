import { JournalArticle, JournalFeature } from '../components/JournalArticle'
import { journalArticles } from '../data/content'

export default function Journal() {
  const featured = journalArticles.find((a) => a.featured)
  const rest = journalArticles.filter((a) => !a.featured)

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">Credibility</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-plum sm:text-6xl">
          THE JOURNAL
        </h1>
        <p className="mt-4 max-w-xl text-warm-gray">
          Placeholder articles on real estate, markets, community, partnerships, property, and
          business — easy to customize.
        </p>
        <div className="mt-10">
          {featured && <JournalFeature article={featured} />}
        </div>
        <div className="mt-8 border-y border-line">
          {rest.map((a) => (
            <JournalArticle key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
