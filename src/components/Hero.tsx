/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "motion/react";
import { useMounted } from "@/lib/useMounted";

export function Hero() {
  const mounted = useMounted();

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
      className="relative min-h-svh flex items-center overflow-hidden bg-navy border-b-[3px] border-spark"
    >
      {/* Radial gradients replace heavy blurs for mobile GPU performance */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(226,98,47,0.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(199,217,75,0.06)_0%,transparent_70%)]" />

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

      <div className="relative w-full max-w-5xl mx-auto px-6 lg:px-12 py-32">
        <motion.p
          {...fadeUp(0.1)}
          className="text-spark text-[11px] md:text-xs uppercase tracking-[0.24em] font-bold"
        >
          Now Recruiting · Johannesburg
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-6 font-bold text-sand leading-[1.05] tracking-tight text-5xl md:text-7xl lg:text-8xl uppercase"
        >
          We need <br className="hidden md:block" />
          drivers, &amp; you <br className="hidden md:block" />
          <span className="text-spark">can be our <br className="hidden md:block" />driver.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-8 max-w-2xl text-sand/70 text-lg md:text-xl leading-relaxed"
        >
          Ready to earn on the road but don't have a car? First Trip gives you a well-kept vehicle, steady trips and a team that has your back from day one. Bring your licence and PrDP, and we'll help you with the rest.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-8 flex flex-wrap gap-3"
        >
          {["Reliable vehicles", "Weekly earnings", "Real support"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-sand/30 px-5 py-2 text-sm font-medium text-sand/90"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 flex flex-col items-start gap-4"
        >
          <a
            href="mailto:info@firsttrip.co.za"
            className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-4 font-semibold text-white hover:bg-coral/90 transition-colors text-lg"
          >
            info@firsttrip.co.za
          </a>
          <p className="text-sand/50 text-sm">
            Send us your name, number and area. We'll call you back.
          </p>
        </motion.div>
      </div>
    </section>
  );
}