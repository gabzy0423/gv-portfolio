export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line bg-blue-600 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">06 · Contact</p>
          <h2 id="contact-heading" className="mt-4 max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">Have a project in mind?</h2>
          <p className="mt-6 max-w-md leading-7 text-blue-100">Replace the placeholder email below with your preferred contact details.</p>
          <a href="mailto:your.email@example.com" className="mt-8 inline-block font-semibold underline decoration-blue-300 underline-offset-4 hover:text-blue-100">your.email@example.com</a>
        </div>
        <form action="mailto:your.email@example.com" method="post" encType="text/plain" className="grid gap-5 rounded-2xl bg-white p-6 text-foreground sm:p-8">
          <div><label htmlFor="name" className="text-sm font-semibold">Name</label><input id="name" name="name" required className="mt-2 w-full rounded-lg border border-line px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-blue-100" /></div>
          <div><label htmlFor="email" className="text-sm font-semibold">Email</label><input id="email" name="email" type="email" required className="mt-2 w-full rounded-lg border border-line px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-blue-100" /></div>
          <div><label htmlFor="message" className="text-sm font-semibold">Message</label><textarea id="message" name="message" required rows={4} className="mt-2 w-full resize-y rounded-lg border border-line px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-blue-100" /></div>
          <button type="submit" className="rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent">Send message</button>
        </form>
      </div>
    </section>
  );
}
