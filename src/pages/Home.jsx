import { Link } from 'react-router-dom'
import StorySection from '../components/StorySection'
import StoryTransition from '../components/StoryTransition'
import { DisconnectedNetwork } from '../components/NetworkDiagram'
import { useScrollReveal } from '../hooks/useScrollReveal'

function BigStatement({ text, bg }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.4 })
  return (
    <div ref={ref} className={`story-panel ${bg}`}>
      <div className={`mx-auto max-w-5xl px-5 md:px-8 reveal ${visible ? 'visible' : ''}`}>
        <p className="text-4xl font-semibold tracking-tight text-plum sm:text-5xl md:text-6xl">
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-lavender">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-14 md:px-8 md:py-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
              A different approach to real estate
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-plum sm:text-5xl md:text-[3.25rem] md:leading-[1.15]">
              What if real estate started with people?
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-warm-gray">
              KINDRED is a professional community built around relationships, opportunity, and
              long-term collaboration—not listings alone.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#idea" className="btn-primary">
                Explore the story
              </a>
              <Link to="/get-involved" className="btn-secondary">
                Get involved
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
              alt="Professionals collaborating in a modern workspace"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] md:aspect-[4/5]"
            />
            <p className="mt-3 text-xs text-warm-gray">
              The next chapter in real estate starts with people.
            </p>
          </div>
        </div>
      </section>

      <StorySection id="idea" label="01 — The Idea" className="bg-white">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
          Real estate is more than buildings.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-warm-gray">
          The strongest outcomes happen when people, relationships, and opportunity move together.
          KINDRED was created to make that connection intentional.
        </p>
      </StorySection>

      <BigStatement text="It's people." bg="bg-lavender" />
      <BigStatement text="It's relationships." bg="bg-white" />
      <BigStatement text="It's opportunity." bg="bg-rose-soft" />

      <StorySection label="The way we see it" className="bg-white">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-plum sm:text-4xl">
              Real estate can feel fragmented.
            </h2>
            <ul className="mt-8 space-y-3 text-base text-warm-gray">
              <li className="border-l-2 border-line pl-4">People are disconnected.</li>
              <li className="border-l-2 border-line pl-4">Opportunities are difficult to discover.</li>
              <li className="border-l-2 border-line pl-4">Relationships are scattered.</li>
              <li className="border-l-2 border-line pl-4">Potential partnerships never happen.</li>
            </ul>
            <p className="mt-8 text-xl font-semibold text-plum">
              We think there&apos;s a better way.
            </p>
          </div>
          <DisconnectedNetwork />
        </div>
      </StorySection>

      <StorySection id="mission" label="02 — The Mission" className="bg-plum text-white">
        <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Build a network where people, property, and opportunity can meet.
        </h2>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70">
          KINDRED gathers professionals, owners, investors, and partners who value clarity, trust,
          and long-term collaboration.
        </p>
        <div className="mt-12 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-3">
          {[
            ['Connect', 'Meet people aligned with your goals.'],
            ['Collaborate', 'Turn introductions into shared work.'],
            ['Grow', 'Build relationships that compound over time.'],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="text-lg font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </StorySection>

      <StorySection className="bg-lavender">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">
              Continue the story
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-plum sm:text-4xl">
              Meet the people behind KINDRED.
            </h2>
          </div>
          <Link to="/people" className="btn-primary self-start md:self-auto">
            The People
          </Link>
        </div>
      </StorySection>

      <StoryTransition
        dark
        title="This is only the beginning."
        description="We're building a network one relationship at a time."
        primaryTo="/get-involved"
        primaryLabel="Get Involved"
        secondaryTo="/#idea"
        secondaryLabel="Explore the journey"
      />
    </>
  )
}
