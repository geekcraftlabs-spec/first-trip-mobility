"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  // useInView is more reliable than the `viewport` prop on mobile.
  // `amount: 0.1` = trigger when 10% of the element is visible.
  // The negative bottom margin fires the animation slightly before the
  // element fully enters the viewport, preventing pop-in.
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px",
  });

  // SSR + first client render: plain visible div, no animation.
  // This is the bulletproof path — if JS never arrives, content is visible.
  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "opacity, transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}