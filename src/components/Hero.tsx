"use client";

import { motion } from "motion/react";
import { useMounted } from "@/lib/useMounted";

export function Hero() {
  const mounted = useMounted();

  // `false` on the server → content renders visible with no animation.
  // After mount, motion switches to the animated variant.
  const fadeUp = (delay: number) =>
    mounted
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }
      : {
          initial: false as const,
        };

  return (
    <section
      id="top"
      className="relative min-h-dvh flex items-center overflow-hidden bg-navy border-b-[3px] border-spark"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-coral/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-spark/5 blur-[120px]" />

      {/* Decorative route line — only rendered after mount, purely visual */}
      {mounted && (
        <motion.svg
          initial="hidden"
          animate="show"
          className="pointer-events-none absolute bottom-0 left-0 w-full h-40 text-sand/15"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M0 90 C 240 90 240 30 480 30 S 720 90 960 90 S 1200 30 1440 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.svg>
      )}

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-12 py-32">
        <motion.p
          {...fadeUp(0.1)}
          className="text-spark text-[11px] uppercase tracking-[0.24em] font-bold"
        >
          Fleet operations, built for the road
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-6 max-w-4xl font-bold text-sand leading-[0.95] tracking-tight text-5xl md:text-7xl lg:text-8xl"
        >
          Every trip starts with the right driver, in the right car, on&nbsp;time.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-8 max-w-xl text-sand/70 text-lg leading-relaxed"
        >
          First Trip Mobility runs and grows driver fleets across South Africa — built on
          operational discipline from the ground up.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-white hover:bg-coral/90 transition-colors"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
          <a
            href="#operations"
            className="text-[11px] uppercase tracking-[0.2em] text-sand/60 hover:text-sand transition-colors"
          >
            See how we operate
          </a>
        </motion.div>
      </div>
    </section>
  );
}