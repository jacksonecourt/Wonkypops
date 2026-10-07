// Live-text Wonkypops wordmark. Letter transforms come from the brand brief (section 6),
// converted from px at 112px into em so the wordmark scales with font-size.
const letters: [string, number, number][] = [
  ["W", -6, 4],
  ["o", 5, -6],
  ["n", -3, 3],
  ["k", 7, -4],
  ["y", -5, 5],
  ["p", 6, -3],
  ["o", -6, 4],
  ["p", 4, -5],
  ["s", -7, 2],
];

export default function Wordmark({
  className = "",
  onDark = false,
  as: Tag = "span",
}: {
  className?: string;
  onDark?: boolean;
  as?: "span" | "h1" | "p";
}) {
  return (
    <Tag
      aria-label="Wonkypops"
      role={Tag === "span" ? "img" : undefined}
      className={`inline-block font-display font-bold leading-none whitespace-nowrap ${className}`}
      style={{ letterSpacing: "-0.018em" }}
    >
      {letters.map(([ch, rot, y], i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block"
          style={{
            transform: `rotate(${rot}deg) translateY(${(y / 112).toFixed(3)}em)`,
            color:
              i < 5
                ? onDark
                  ? "var(--wp-cream)"
                  : "var(--wp-plum)"
                : onDark
                  ? "var(--wp-mango-lt)"
                  : "var(--wp-berry)",
          }}
        >
          {ch}
        </span>
      ))}
    </Tag>
  );
}
