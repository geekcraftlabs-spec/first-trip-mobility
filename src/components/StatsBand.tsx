import { Reveal } from "./Reveal";

const STATS = [
  { num: "5",     lbl: "Cities" },
  { num: "1,000", lbl: "Vehicles" },
  { num: "24/7",  lbl: "Operations" },
];

export function StatsBand() {
  return (
    <section className="bg-sand border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <Reveal>
          <p className="text-coral text-[11px] uppercase tracking-[0.24em] font-bold mb-8">
            Targeting
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-6">
          {STATS.map((s) => (
            <Reveal key={s.lbl}>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-navy tracking-tight">
                  {s.num}
                </div>
                <div className="mt-3 text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted">
                  {s.lbl}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}