"use client";

import { Reveal } from "./Reveal";

const CITIES = [
  { name: "Cape Town",    note: "Where it started." },
  { name: "Johannesburg", note: "Where it's scaling." },
];

export function Cities() {
  return (
    <section id="cities" className="scroll-mt-24 bg-sand py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-coral text-[11px] uppercase tracking-[0.24em] font-bold">
            03 — Where we operate
          </p>
          <h2 className="mt-5 max-w-3xl font-bold tracking-tight text-navy leading-[1.05] text-4xl lg:text-6xl">
            Two cities today. More on the route.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {CITIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl bg-navy p-10 lg:p-14">
                <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-spark/10 blur-3xl transition-all duration-700 group-hover:bg-spark/25" />
                <div className="relative">
                  <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-sand">
                    {c.name}
                  </h3>
                  <p className="mt-4 text-sand/60">{c.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}