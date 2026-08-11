import NetworkDiagram from '../components/NetworkDiagram'
import CommunityJourney from '../components/CommunityJourney'
import StoryTransition from '../components/StoryTransition'
import { communityTypes, journeyStages } from '../data/content'

export default function Community() {
  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">Community</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-plum sm:text-6xl md:text-7xl">
            WHO WILL YOU MEET?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-warm-gray">
            KINDRED is building a community of people connected through real estate—not just a list
            of members.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-plum">
            {communityTypes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-lavender py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-plum">The Network</h2>
          <NetworkDiagram />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-3xl font-extrabold text-plum sm:text-4xl">YOUR JOURNEY</h2>
          <p className="mt-3 text-warm-gray">Click each stage to expand the path.</p>
          <div className="mt-10">
            <CommunityJourney stages={journeyStages} />
          </div>
        </div>
      </section>

      <StoryTransition
        dark
        title="THERE'S A PLACE FOR YOU HERE."
        description="If you're interested in real estate, relationships, and opportunities, we'd like to hear from you."
        primaryTo="/apply"
        primaryLabel="Start Your Application"
      />
    </>
  )
}
