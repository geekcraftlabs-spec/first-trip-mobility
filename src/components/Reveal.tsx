import type { ReactNode } from "react";

/**
 * Previously animated content in on scroll. Now a plain wrapper — content is
 * always rendered visible in the server HTML and never hidden or revealed by
 * scroll. Kept as a component so existing usages don't need to change.
 *
 * If you later want to reintroduce motion, do it here in one place — but
 * never make visibility depend on scroll position.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number; // kept for API compatibility; unused
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}