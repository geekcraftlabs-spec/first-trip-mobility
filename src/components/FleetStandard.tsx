"use client";

import { Reveal } from "./Reveal";

const STANDARDS = [
  { title: "Uptime",       body: "Vehicles are serviced, tracked and road-ready before they're needed." },
  { title: "Safety",       body: "Driver checks, vehicle checks and route reviews — every single shift." },
  { title: "Transparency", body: "Clients see the same numbers we do. No surprises on the invoice." },
  { title: "Response",     body: "When something changes on the road, we answer. Day or night." },
];

export function FleetStandard() {
  return (
    <section
      id="fleet"
      className="scroll-mt-24 relative overflow-hidden bg-navy text-sand py-24 lg:py-36"
    >
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-coral/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-spark text-[11px] uppercase tracking-[0.24em] font-bold">
            02 — The standard
          </p>
          <h2 className="mt-5 max-w-3xl font-bold tracking-tight text-sand leading-[1.05] text-4xl lg:text-6xl">
            What a fleet looks like when nothing is left to chance.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {STANDARDS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="border-t border-sand/15 pt-6">
                <h3 className="text-xl lg:text-2xl font-bold text-sand tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sand/65 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}