import { Link } from 'react-router-dom'
import NetworkDiagram from '../components/NetworkDiagram'
import CommunityJourney from '../components/CommunityJourney'
import StoryTransition from '../components/StoryTransition'
import { communityTypes, journeyStages } from '../data/content'

export default function Community() {
  return (
    <>
      <section className="border-b border-line bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">Community</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
            Who will you meet?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-warm-gray">
            KINDRED is building a professional community across real estate—members, investors,
            owners, developers, and partners.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-plum">
            {communityTypes.map((t) => (
              <li key={t} className="border-r border-line pr-5 last:border-0">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-lavender py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="mb-10 text-center text-2xl font-semibold text-plum">The network</h2>
          <NetworkDiagram />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-2xl font-semibold text-plum sm:text-3xl">Your journey</h2>
          <p className="mt-2 text-sm text-warm-gray">
            Select each stage to understand the path into the community.
          </p>
          <div className="mt-10">
            <CommunityJourney stages={journeyStages} />
          </div>
          <Link to="/apply" className="btn-primary mt-10 inline-flex">
            Start your application
          </Link>
        </div>
      </section>

      <StoryTransition
        dark
        title="There's a place for you here."
        description="If you're interested in real estate, relationships, and opportunities, we'd like to hear from you."
        primaryTo="/apply"
        primaryLabel="Start your application"
      />
    </>
  )
}
