import { Search } from 'lucide-react'

export default function SearchBar({
  query,
  setQuery,
  location,
  setLocation,
  propertyType,
  setPropertyType,
  opportunityType,
  setOpportunityType,
  price,
  setPrice,
  onSearch,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSearch?.()
      }}
      className="rounded-[1.75rem] border border-border bg-white p-3 shadow-card sm:p-4"
      role="search"
      aria-label="Property search"
    >
      <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))_auto]">
        <label className="block">
          <span className="sr-only">Search</span>
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search properties, locations, or opportunities..."
              className="w-full rounded-2xl border border-border bg-surface py-3 pr-3 pl-10 text-sm outline-none transition focus:border-emerald focus:bg-white"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold tracking-wide text-muted uppercase lg:sr-only">
            Location
          </span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          >
            <option value="">Any location</option>
            <option>Brooklyn, NY</option>
            <option>Austin, TX</option>
            <option>Chicago, IL</option>
            <option>Charlotte, NC</option>
            <option>Denver, CO</option>
            <option>Nashville, TN</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold tracking-wide text-muted uppercase lg:sr-only">
            Property type
          </span>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          >
            <option value="">Any type</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold tracking-wide text-muted uppercase lg:sr-only">
            Opportunity
          </span>
          <select
            value={opportunityType}
            onChange={(e) => setOpportunityType(e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          >
            <option value="">Any opportunity</option>
            <option>Investment</option>
            <option>Rental</option>
            <option>Development</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[11px] font-semibold tracking-wide text-muted uppercase lg:sr-only">
            Price / rent
          </span>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface px-3 py-3 text-sm outline-none focus:border-emerald focus:bg-white"
          >
            <option value="">Any price</option>
            <option value="under3k">Under $3,000 / mo</option>
            <option value="under1m">Under $1M</option>
            <option value="1to5m">$1M – $5M</option>
            <option value="over5m">$5M+</option>
          </select>
        </label>

        <button
          type="submit"
          className="rounded-2xl bg-emerald px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-dark"
        >
          Search
        </button>
      </div>
    </form>
  )
}
