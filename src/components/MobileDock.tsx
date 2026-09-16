"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { SECTIONS, SECTION_IDS } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

export function MobileDock() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const active = useActiveSection(SECTION_IDS, "top");

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 220));

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          aria-label="Page sections"
          className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 rounded-full border border-sand/15 bg-navy/90 backdrop-blur-xl px-1.5 py-1.5 shadow-2xl shadow-navy/40"
        >
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() =>
                  document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3 py-2 rounded-full text-[10px] uppercase tracking-[0.12em] font-semibold transition-colors ${
                  isActive ? "text-navy" : "text-sand/65"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="dock-pill"
                    className="absolute inset-0 rounded-full bg-spark"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{s.dock}</span>
              </button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}