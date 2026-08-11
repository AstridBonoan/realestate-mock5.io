export function JournalFeature({ article }) {
  return (
    <article className="relative overflow-hidden">
      <img
        src={article.image}
        alt=""
        className="aspect-[16/9] min-h-[320px] w-full object-cover md:min-h-[480px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-14">
        <p className="text-[11px] font-bold tracking-[0.18em] text-coral uppercase">
          {article.category} · {article.date}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          {article.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">{article.description}</p>
        <span className="mt-5 inline-block text-[11px] font-extrabold tracking-[0.16em] text-white uppercase">
          Read Article →
        </span>
      </div>
    </article>
  )
}

export function JournalArticle({ article }) {
  return (
    <article className="border-t border-line py-8">
      <p className="text-[11px] font-bold tracking-[0.16em] text-coral uppercase">
        {article.category}
      </p>
      <h3 className="mt-2 text-2xl font-extrabold text-plum">{article.title}</h3>
      <p className="mt-2 text-sm text-warm-gray">{article.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-warm-gray">{article.date}</span>
        <span className="text-[11px] font-bold tracking-[0.14em] text-plum uppercase">
          Read Article →
        </span>
      </div>
    </article>
  )
}
