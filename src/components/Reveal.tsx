"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useMounted } from "@/lib/useMounted";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const mounted = useMounted();

  return (
    <motion.div
      // Server renders with initial={false} → element is visible in HTML.
      // After hydration, motion takes over and animates in from hidden.
      // If JS never arrives, content stays visible.
      initial={mounted ? { opacity: 0, y: 24 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}