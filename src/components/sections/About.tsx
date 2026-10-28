export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">01 · About</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-semibold tracking-tight">A little about me</h2>
        </div>
        <div className="max-w-2xl space-y-5 text-xl leading-9 text-muted">
          <p>[Add your short professional introduction here.]</p>
          <p>[Add the kind of problems you enjoy solving and the way you like to work.]</p>
        </div>
      </div>
    </section>
  );
}
