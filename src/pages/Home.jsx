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
        <p className="text-5xl font-extrabold tracking-tight text-plum sm:text-6xl md:text-8xl">
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="flex min-h-[88vh] flex-col justify-center bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">
          <p className="text-[11px] font-bold tracking-[0.22em] text-coral uppercase">
            A Different Approach To Real Estate
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-plum sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            WHAT IF REAL ESTATE STARTED WITH PEOPLE?
          </h1>
          <a
            href="#idea"
            className="mt-12 inline-flex flex-col items-start gap-3 text-sm font-extrabold tracking-[0.14em] text-plum uppercase"
          >
            Explore the story →
            <span className="bounce-arrow text-3xl text-coral" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </section>

      <StorySection id="idea" label="01 — The Idea" className="bg-lavender">
        <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-plum sm:text-5xl md:text-6xl">
          Real Estate Is More Than Buildings.
        </h2>
        <p className="mt-6 max-w-xl text-warm-gray">
          The next chapter begins when people, relationships, and opportunity move together.
        </p>
      </StorySection>

      <BigStatement text="IT'S PEOPLE." bg="bg-white" />
      <BigStatement text="IT'S RELATIONSHIPS." bg="bg-lavender" />
      <BigStatement text="IT'S OPPORTUNITY." bg="bg-rose-soft" />

      <StorySection label="The Way We See It" className="bg-white">
        <h2 className="max-w-3xl text-4xl font-extrabold text-plum sm:text-5xl">
          Real estate can feel fragmented.
        </h2>
        <ul className="mt-8 max-w-xl space-y-3 text-lg text-warm-gray">
          <li>People are disconnected.</li>
          <li>Opportunities are difficult to discover.</li>
          <li>Relationships are scattered.</li>
          <li>Potential partnerships never happen.</li>
        </ul>
        <div className="mt-10">
          <DisconnectedNetwork />
        </div>
        <p className="mt-8 text-2xl font-extrabold tracking-tight text-coral sm:text-3xl">
          WE THINK THERE&apos;S A BETTER WAY.
        </p>
      </StorySection>

      <StorySection id="mission" label="02 — The Mission" className="bg-plum text-white">
        <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          BUILD A NETWORK WHERE PEOPLE, PROPERTY, AND OPPORTUNITY CAN MEET.
        </h2>
        <p className="mt-8 max-w-2xl text-white/75">
          KINDRED exists to gather people who care about real estate—and give relationships room to
          become opportunities.
        </p>
        <div className="mt-14 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
          {['CONNECT', 'COLLABORATE', 'GROW'].map((p) => (
            <p key={p} className="text-3xl font-extrabold tracking-tight text-coral sm:text-4xl">
              {p}
            </p>
          ))}
        </div>
      </StorySection>

      <StorySection className="bg-lavender">
        <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">
          Continue The Story
        </p>
        <h2 className="mt-4 text-4xl font-extrabold text-plum sm:text-5xl">Meet the people.</h2>
        <Link
          to="/people"
          className="mt-8 inline-block text-sm font-extrabold tracking-[0.14em] text-plum uppercase"
        >
          The People →
        </Link>
      </StorySection>

      <StoryTransition
        dark
        title="THIS IS ONLY THE BEGINNING."
        description="We're building a network one relationship at a time."
        primaryTo="/get-involved"
        primaryLabel="Get Involved →"
        secondaryTo="/#idea"
        secondaryLabel="Explore The Journey →"
      />
    </>
  )
}
