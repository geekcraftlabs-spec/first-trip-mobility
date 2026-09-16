"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Logo } from "./Logo";

export function TopBar() {
  const { scrollY } = useScroll();
  const [floating, setFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setFloating(y > 120));

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <motion.header
        initial={false}
        animate={{
          width: floating ? "min(760px, 100%)" : "min(1200px, 100%)",
          backgroundColor: floating ? "rgba(16,40,59,0.92)" : "rgba(16,40,59,0)",
          backdropFilter: floating ? "blur(14px)" : "blur(0px)",
          borderColor: floating ? "rgba(244,240,230,0.14)" : "rgba(244,240,230,0)",
          paddingLeft: floating ? 20 : 8,
          paddingRight: floating ? 20 : 8,
          paddingTop: floating ? 10 : 16,
          paddingBottom: floating ? 10 : 16,
          borderRadius: 999,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="pointer-events-auto flex items-center justify-between border"
        style={{ WebkitBackdropFilter: floating ? "blur(14px)" : "blur(0px)" }}
      >
        <a href="#top" aria-label="First Trip Mobility — home">
          <Logo variant="light" />
        </a>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white hover:bg-coral/90 transition-colors"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>
      </motion.header>
    </div>
  );
}