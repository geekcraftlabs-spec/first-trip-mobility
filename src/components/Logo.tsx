type Props = {
  variant?: "light" | "dark";
  withWordmark?: boolean;
  size?: number;
};

export function Logo({ variant = "light", withWordmark = true, size = 34 }: Props) {
  const line = variant === "light" ? "#F4F0E6" : "#10283B";

  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 60 60" aria-hidden="true">
        <path
          d="M12 46 C12 34 22 34 22 24 C22 16 32 16 32 24 L32 40"
          fill="none" stroke={line} strokeWidth="6" strokeLinecap="round"
        />
        <circle cx="22" cy="24" r="4" fill="#C7D94B" />
        <path
          d="M32 40 C32 48 42 48 42 40 C42 32 52 32 52 24"
          fill="none" stroke={line} strokeWidth="6" strokeLinecap="round"
        />
        <circle cx="52" cy="22" r="5" fill="#E2622F" />
      </svg>

      {withWordmark && (
        <div className="leading-none">
          <div className={`text-[17px] font-bold tracking-tight ${variant === "light" ? "text-sand" : "text-navy"}`}>
            First
            <span className={variant === "light" ? "text-spark" : "text-coral"}> Trip</span>
          </div>
          <div
            className={`mt-1 text-[9px] uppercase tracking-[0.22em] ${
              variant === "light" ? "text-sand/55" : "text-muted"
            }`}
          >
            Mobility
          </div>
        </div>
      )}
    </div>
  );
}