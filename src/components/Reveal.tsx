import type { ReactNode, CSSProperties } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style =
    delay > 0
      ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
      : undefined;

  return (
    <div
      className={className ? `reveal ${className}` : "reveal"}
      style={style}
    >
      {children}
    </div>
  );
}