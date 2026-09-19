"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

// useLayoutEffect runs before paint, so we can decide visibility without a
// flash. On the server, fall back to useEffect (useLayoutEffect warns there).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;

    // Failsafe: no IntersectionObserver → show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    // Element top is above the viewport bottom → it's either already visible
    // or the user has scrolled past it (or the browser restored scroll
    // position). Either way, don't hide it. This is the fix for the mobile
    // scroll-up-blank bug.
    const rect = el.getBoundingClientRect();
    if (rect.top < vh) {
      setRevealed(true);
      return;
    }

    // Element is below the fold — safe to hide and wait for scroll.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);

    // Safety net: if the page is restored and this element is somehow visible
    // without the observer firing, a scroll listener catches it.
    const fallback = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        setRevealed(true);
        window.removeEventListener("scroll", fallback, true);
      }
    };
    window.addEventListener("scroll", fallback, { passive: true, capture: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", fallback, true);
    };
  }, []);

  const style: CSSProperties | undefined =
    delay > 0 ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      data-revealed={revealed ? "true" : "false"}
      style={style}
    >
      {children}
    </div>
  );
}