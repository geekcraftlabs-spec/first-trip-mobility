"use client";

import { Reveal } from "./Reveal";

const PILLARS = [
  {
    n: "01",
    title: "Sourcing",
    body: "We find, vet and onboard drivers who treat the road like a profession — not a side hustle.",
  },
  {
    n: "02",
    title: "Systems",
    body: "Every vehicle, shift and route is tracked. Nothing moves on guesswork.",
  },
  {
    n: "03",
    title: "Scale",
    body: "From two cars to two hundred, the operational discipline stays identical.",
  },
];

export function Operations() {
  return (
    <section id="operations" className="scroll-mt-24 bg-sand py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-coral text-[11px] uppercase tracking-[0.24em] font-bold">
            01 — How we operate
          </p>
          <h2 className="mt-5 max-w-3xl font-bold tracking-tight text-navy leading-[1.05] text-4xl lg:text-6xl">
            Operational discipline, from the ground up.
          </h2>
        </Reveal>

        <div className="relative mt-20 lg:mt-28">
          <div className="absolute left-0 top-2 bottom-2 hidden lg:block w-px bg-line" aria-hidden />

          <div className="space-y-16 lg:space-y-24">
            {PILLARS.map((p, i) => {
              const isLast = i === PILLARS.length - 1;
              return (
                <Reveal key={p.n} delay={i * 0.1}>
                  <div className="relative lg:pl-16">
                    <span
                      className={`hidden lg:block absolute left-0 top-3 w-3 h-3 rounded-full -translate-x-1/2 ${
                        isLast ? "bg-coral ring-4 ring-coral/15" : "bg-spark"
                      }`}
                      aria-hidden
                    />
                    <div className="flex flex-col lg:flex-row lg:items-baseline gap-3 lg:gap-8">
                      <span className="text-coral text-xs font-bold tracking-[0.2em]">{p.n}</span>
                      <div>
                        <h3 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">
                          {p.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-base lg:text-lg text-muted leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}