import { Reveal } from "./Reveal";

const LIVE_CITY = {
  name: "Johannesburg",
  note: "Where First Trip is starting.",
};

const PLANNED_CITIES = [
  { name: "Gqeberha",  note: "Planned expansion." },
  { name: "KuGompo",   note: "Planned expansion." },
  { name: "Cape Town", note: "Planned expansion." },
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
            One city today. More to come.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-4">
          {/* Live city */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-10 lg:p-14">
              <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-coral/25 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-coral px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden />
                  Live
                </span>
                <h3 className="mt-6 text-4xl lg:text-6xl font-bold tracking-tight text-sand">
                  {LIVE_CITY.name}
                </h3>
                <p className="mt-4 text-sand/60 max-w-md">{LIVE_CITY.note}</p>
              </div>
            </div>
          </Reveal>

          {/* Planned cities */}
          <div className="grid md:grid-cols-3 gap-4">
            {PLANNED_CITIES.map((c) => (
              <Reveal key={c.name}>
                <div className="rounded-3xl border border-line bg-sand p-8 lg:p-10 h-full">
                  <span className="inline-flex items-center rounded-full border border-navy/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-navy/60">
                    Planned
                  </span>
                  <h3 className="mt-6 text-2xl lg:text-3xl font-bold tracking-tight text-navy">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}