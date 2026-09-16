/* eslint-disable react/no-unescaped-entities */
"use client";

import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-sand pb-24 lg:pb-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 lg:p-20">
            <div className="pointer-events-none absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full bg-coral/15 blur-[120px]" />

            <div className="relative max-w-2xl">
              <p className="text-spark text-[11px] uppercase tracking-[0.24em] font-bold">
                04 — Get in touch
              </p>
              <h2 className="mt-5 font-bold tracking-tight text-sand leading-[1.05] text-4xl lg:text-6xl">
                Need drivers, vehicles, or both?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-sand/70">
                Tell us what you're moving and where. We'll come back with a plan, a timeline and a number.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:hello@firsttripmobility.co.za"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-white hover:bg-coral/90 transition-colors"
                >
                  hello@firsttripmobility.co.za
                </a>
                <a
                  href="tel:+27000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-sand/25 px-7 py-4 font-semibold text-sand hover:bg-sand/10 transition-colors"
                >
                  Call us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}