// Organic wavy section edge, echoing the berry drizzle on the mascot.
export default function Wave({
  color,
  flip = false,
  className = "",
}: {
  color: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`block w-full h-8 sm:h-12 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0 60 L0 30 C80 10 140 48 230 34 C320 20 360 2 470 18 C580 34 620 54 730 38 C840 22 880 0 990 14 C1100 28 1150 52 1260 40 C1340 31 1400 14 1440 22 L1440 60 Z"
        fill={color}
      />
    </svg>
  );
}
