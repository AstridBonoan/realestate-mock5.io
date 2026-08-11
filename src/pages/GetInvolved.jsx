import GetInvolvedPath from '../components/GetInvolvedPath'

const paths = [
  {
    title: 'Join the community',
    to: '/community',
    arrow: 'Explore →',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
  },
  {
    title: 'Explore opportunities',
    to: '/opportunities',
    arrow: 'View feed →',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  },
  {
    title: 'Become a partner',
    to: '/partners',
    arrow: 'Partner paths →',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
  },
  {
    title: 'Start a conversation',
    to: '/conversation',
    arrow: 'Talk with us →',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
  },
]

export default function GetInvolved() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">Pathways</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
          How will you get involved?
        </h1>
        <p className="mt-5 max-w-2xl text-base text-warm-gray">
          Choose the path that fits where you are—community, opportunity, partnership, or a simple
          conversation.
        </p>
        <div className="mt-12">
          <GetInvolvedPath paths={paths} />
        </div>
      </div>
    </section>
  )
}
