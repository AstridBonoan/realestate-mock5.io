import { Link } from 'react-router-dom'
import ImageCaption from './ImageCaption'
import SectionLabel from './SectionLabel'

export default function Hero() {
  return (
    <section className="bg-ivory">
      <div className="relative">
        <figure className="img-zoom">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=80"
            alt="Architectural interior with warm light and refined materials"
            className="h-[70vh] min-h-[420px] w-full object-cover sm:h-[78vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/15 to-espresso/10" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-5 pb-10 md:px-8 md:pb-14">
              <SectionLabel className="!text-beige">
                Real Estate • People • Opportunity
              </SectionLabel>
              <h1 className="mt-4 max-w-3xl font-display text-4xl text-ivory sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Where Real Estate Meets Opportunity.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/85 sm:text-base">
                A growing organization connecting members, partners, properties, and opportunities
                through relationships built for the long term.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <Link to="/about" className="editorial-link !text-ivory">
                  Explore The Network →
                </Link>
                <Link to="/join" className="editorial-link !text-ivory">
                  Join Us →
                </Link>
              </div>
            </div>
          </div>
        </figure>
      </div>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ImageCaption
          number="01 / THE ORGANIZATION"
          caption="An Ashlar interior study — light, proportion, and the quiet confidence of lasting craft. Photograph illustrative for this mockup."
        />
      </div>
    </section>
  )
}
