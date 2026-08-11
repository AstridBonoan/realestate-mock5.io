import ConversationForm from '../components/ConversationForm'

export default function Conversation() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-[11px] font-bold tracking-[0.2em] text-coral uppercase">Conversation</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-plum sm:text-6xl">
          LET&apos;S TALK.
        </h1>
        <p className="mt-5 text-lg text-warm-gray">
          Not sure where to begin? Start a conversation.
        </p>
        <div className="mt-12">
          <ConversationForm />
        </div>
      </div>
    </section>
  )
}
