import GetInvolvedPath from '../components/GetInvolvedPath'

const paths = [
  {
    title: 'JOIN THE COMMUNITY',
    to: '/community',
    arrow: 'Explore →',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
  },
  {
    title: 'EXPLORE OPPORTUNITIES',
    to: '/opportunities',
    arrow: 'See The Feed →',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  },
  {
    title: 'BECOME A PARTNER',
    to: '/partners',
    arrow: 'Partner Paths →',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
  },
  {
    title: 'START A CONVERSATION',
    to: '/conversation',
    arrow: 'Talk With Us →',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
  },
]

export default function GetInvolved() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">Pathways</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-plum sm:text-5xl md:text-6xl">
          HOW WILL YOU GET INVOLVED?
        </h1>
        <div className="mt-12">
          <GetInvolvedPath paths={paths} />
        </div>
      </div>
    </section>
  )
}
