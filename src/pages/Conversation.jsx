import ConversationForm from '../components/ConversationForm'

export default function Conversation() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">Conversation</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-plum sm:text-4xl md:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-5 text-base text-warm-gray">
          Not sure where to begin? Choose a reason and start a conversation.
        </p>
        <div className="mt-12">
          <ConversationForm />
        </div>
      </div>
    </section>
  )
}
