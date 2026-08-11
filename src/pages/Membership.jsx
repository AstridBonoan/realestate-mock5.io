import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import MembershipList from '../components/MembershipList'
import TeamFeature from '../components/TeamFeature'
import ImageCaption from '../components/ImageCaption'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { membershipReasons, team } from '../data/content'

export default function Membership() {
  return (
    <>
      <section className="border-b border-rule py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionLabel>Membership</SectionLabel>
          <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl md:text-6xl">
            Become Part Of Something Growing.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            Membership is designed for people who want to connect, participate, and develop
            meaningful relationships within the real estate community.
          </p>
          <Link to="/join" className="editorial-link mt-8 inline-block">
            Apply For Membership →
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <SectionLabel>Why Join?</SectionLabel>
            <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
              Why Membership
            </h2>
          </ScrollReveal>
          <MembershipList items={membershipReasons} />
        </div>
      </section>

      <section className="bg-parchment py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <div className="img-zoom">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
                alt="Professionals in discussion around a table"
                className="aspect-[21/9] min-h-[240px] w-full object-cover"
              />
            </div>
            <ImageCaption caption="Relationships remain at the center of every opportunity." />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <SectionLabel>05 / The Team</SectionLabel>
            <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">The Team</h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              Placeholder portraits and biographies—easy to replace with your people.
            </p>
          </ScrollReveal>
          <div className="mt-10">
            <TeamFeature members={team} />
          </div>
        </div>
      </section>

      <CTASection
        title="Would You Like To Become A Member?"
        description="Join a growing community built around real estate knowledge, relationships, and opportunity."
        linkLabel="Join Now →"
        linkTo="/join"
      />
    </>
  )
}
