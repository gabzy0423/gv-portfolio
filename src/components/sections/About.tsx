"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const interests = ["Outgoing", "Cat lover", "Family oriented", "Guitarist", "Jogger", "Nature lover"];

const outsideCards = [
  { label: "Outgoing", hint: "Always up for good conversations", image: "/images/gallery/outgoing.jpg" },
  { label: "Cat lover", hint: "Cats make every day better", image: "/images/gallery/cat.jpg" },
  { label: "Family oriented", hint: "Grounded by the people I love", image: "/images/gallery/family.jpg" },
  { label: "Guitarist", hint: "Making time for music", image: "/images/gallery/guitar.jpg" },
  { label: "Jogger", hint: "Clearing my head one run at a time", image: "/images/gallery/run.jpg" },
  { label: "Nature lover", hint: "Finding perspective outdoors", image: "/images/gallery/nature.jpg" },
];

const cardTransforms = [
  "translate(-50%, -50%) translate(0px, 0px) scale(1) rotateZ(-4deg)",
  "translate(-50%, -50%) translate(14px, -8px) scale(0.96) rotateZ(2deg)",
  "translate(-50%, -50%) translate(28px, 4px) scale(0.92) rotateZ(6deg)",
  "translate(-50%, -50%) translate(40px, 10px) scale(0.88) rotateZ(9deg)",
  "translate(-50%, -50%) translate(50px, 15px) scale(0.84) rotateZ(12deg)",
  "translate(-50%, -50%) translate(58px, 20px) scale(0.80) rotateZ(15deg)",
];

type Contribution = {
  date: string;
  count: number;
  level: number;
};

const contributionClasses = [
  "bg-zinc-200 dark:bg-zinc-800",
  "bg-emerald-300 dark:bg-emerald-800",
  "bg-emerald-400 dark:bg-emerald-700",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-emerald-600 dark:bg-emerald-300",
];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const contributionYear = 2026;

function GitHubHeatmap() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/gabzy0423?y=${contributionYear}`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load contributions");
        return response.json();
      })
      .then((data: { contributions?: Contribution[] }) => setContributions(data.contributions ?? []))
      .catch(() => setError(true));
  }, []);

  if (error) return <p className="font-mono text-xs text-muted">GitHub activity is unavailable right now.</p>;
  if (!contributions.length) return <p className="font-mono text-xs text-muted">Loading contributions…</p>;

  const total = contributions.reduce((sum, contribution) => sum + contribution.count, 0);
  const firstDay = new Date(`${contributions[0].date}T00:00:00`).getDay();
  const paddedContributions: Array<Contribution | null> = [
    ...Array.from({ length: firstDay }, () => null),
    ...contributions,
  ];
  const weekCount = Math.ceil(paddedContributions.length / 7);
  const labeledMonths = new Set<string>();
  const monthLabels = contributions.reduce<Record<number, string>>((labels, contribution, index) => {
    const date = new Date(`${contribution.date}T00:00:00`);
    const week = Math.floor((index + firstDay) / 7);
    const monthKey = contribution.date.slice(0, 7);

    if (!labeledMonths.has(monthKey)) {
      labels[week] = monthNames[date.getMonth()];
      labeledMonths.add(monthKey);
    }

    return labels;
  }, {});

  return (
    <div className="min-w-[720px]">
      <div className="mb-2 grid auto-cols-[12px] grid-flow-col gap-1 font-mono text-[10px] text-muted">
        {Array.from({ length: weekCount }, (_, week) => (
          <span key={week}>{monthLabels[week] ?? ""}</span>
        ))}
      </div>
      <div
        aria-label={`${total} GitHub contributions in ${contributionYear}`}
        className="grid auto-cols-[12px] grid-flow-col grid-rows-7 gap-1"
      >
        {paddedContributions.map((contribution, index) => (
          <span
            key={contribution?.date ?? `padding-${index}`}
            aria-hidden={!contribution}
            title={contribution ? `${contribution.count} contribution${contribution.count === 1 ? "" : "s"} on ${contribution.date}` : undefined}
            className={`block h-3 w-3 rounded-[4px] ${contribution ? `transition-transform hover:scale-125 ${contributionClasses[Math.min(contribution.level, 4)]}` : "invisible"}`}
          />
        ))}
      </div>
      <p className="mt-3 font-mono text-[11px] text-muted">{total} contributions in {contributionYear}</p>
    </div>
  );
}

export function OutsideIde() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" aria-labelledby="outside-ide-heading" className="mx-auto max-w-4xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <div>
          <p className="font-pixel text-sm font-bold tracking-tight text-foreground">04 — Outside the IDE</p>
          <h2 id="outside-ide-heading" className="mt-3 font-mono text-3xl font-semibold tracking-tight">Outside the IDE</h2>
          <p className="mt-8 max-w-md text-base leading-7 text-muted sm:text-lg">
            When I step away from the tech world, I recharge through physical activity and travel, returning to my projects with fresh energy and perspective.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-foreground">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div aria-label="Outside the IDE photo cards" className="relative mx-auto h-80 w-full max-w-md overflow-hidden">
          {outsideCards.map((card, cardIndex) => {
            const slot = (cardIndex - activeIndex + outsideCards.length) % outsideCards.length;

            return (
            <button
              key={card.label}
              type="button"
              aria-label={`Show next Outside the IDE image after ${card.label}`}
              aria-current={slot === 0 ? "true" : undefined}
              onClick={() => setActiveIndex((cardIndex + 1) % outsideCards.length)}
              style={{
                zIndex: outsideCards.length - slot,
                transform: cardTransforms[slot],
                transformOrigin: "90% 90%",
                transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out, filter 500ms ease-in-out",
              }}
              className={`group absolute left-1/2 top-1/2 h-64 w-52 cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface p-4 text-left shadow-xl transition-[transform,opacity,filter] duration-500 ease-in-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${slot === 0 ? "opacity-100" : "opacity-80"}`}
            >
              {card.image ? (
                <Image src={card.image} alt={card.label} fill sizes="208px" className="object-cover" />
              ) : (
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="font-mono text-xs font-semibold text-accent">{card.label}</span>
                  <span className="font-mono text-[11px] text-muted">{card.hint}</span>
                </div>
              )}
            </button>
            );
          })}
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-pixel text-sm font-bold tracking-tight text-foreground">GitHub activity</p>
            <h3 className="mt-2 font-mono text-xl font-semibold tracking-tight">Contribution history</h3>
          </div>
          <a
            href="https://github.com/gabzy0423"
            target="_blank"
            rel="noreferrer"
            className="font-pixel text-xs text-muted transition-colors hover:text-accent"
          >
            View GitHub ↗
          </a>
        </div>

        <div data-lenis-prevent className="heatmap-scroll mt-6 overflow-x-auto rounded-2xl border border-dashed border-line bg-surface/60 p-5">
          <GitHubHeatmap />
        </div>
      </div>
    </section>
  );
}
