export function JournalFeature({ article }) {
  return (
    <article className="relative overflow-hidden border border-line">
      <img
        src={article.image}
        alt=""
        className="aspect-[16/9] min-h-[280px] w-full object-cover md:min-h-[420px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
        <p className="text-xs font-semibold tracking-[0.12em] text-white/80 uppercase">
          {article.category} · {article.date}
        </p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          {article.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/80">{article.description}</p>
        <span className="mt-5 inline-block text-sm font-semibold text-white">Read article →</span>
      </div>
    </article>
  )
}

export function JournalArticle({ article }) {
  return (
    <article className="border-t border-line py-7">
      <p className="text-xs font-semibold tracking-[0.12em] text-coral uppercase">
        {article.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-plum">{article.title}</h3>
      <p className="mt-2 text-sm text-warm-gray">{article.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-warm-gray">{article.date}</span>
        <span className="text-sm font-semibold text-plum">Read article →</span>
      </div>
    </article>
  )
}
