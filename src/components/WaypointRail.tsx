"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { SECTIONS, SECTION_IDS } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

export function WaypointRail() {
  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const active = useActiveSection(SECTION_IDS, "top");

  const current = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0];
  const onDark = current.theme === "dark";

  const track = onDark ? "bg-sand/20" : "bg-navy/15";
  const fillBar = onDark ? "bg-sand/60" : "bg-navy/45";
  const idleDot = onDark
    ? "bg-sand/40 group-hover:bg-sand/80"
    : "bg-navy/25 group-hover:bg-navy/60";
  const label = onDark ? "text-sand/75" : "text-navy/70";

  return (
    <nav
      aria-label="Page sections"
      className="hidden lg:flex fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
    >
      <div className={`relative h-[320px] w-px transition-colors duration-500 ${track}`}>
        <motion.div
          style={{ scaleY: fill }}
          className={`absolute inset-0 origin-top transition-colors duration-500 ${fillBar}`}
        />

        {SECTIONS.map((s, i) => {
          const top = (i / (SECTIONS.length - 1)) * 100;
          const isActive = active === s.id;

          return (
            <button
              key={s.id}
              type="button"
              onClick={() =>
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              style={{ top: `${top}%` }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 group flex items-center focus:outline-none"
              aria-label={s.label}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={[
                  "block rounded-full transition-all duration-300",
                  isActive
                    ? "w-3.5 h-3.5 bg-coral ring-4 ring-coral/20"
                    : `w-2 h-2 ${idleDot}`,
                ].join(" ")}
              />
              <span
                className={`absolute left-7 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none ${label}`}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}