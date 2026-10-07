import Wave from "./Wave";

type Tone = "cream" | "peach" | "white" | "plum";

const tones: Record<Tone, string> = {
  cream: "bg-wp-cream",
  peach: "bg-wp-peach",
  white: "bg-white",
  plum: "bg-wp-plum text-wp-cream on-dark",
};

export function Section({
  tone = "cream",
  id,
  className = "",
  children,
  labelledBy,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  center = false,
  onDark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="eyebrow mb-3" style={onDark ? { color: "var(--wp-mango-lt)" } : undefined}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-4xl sm:text-5xl">
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg ${onDark ? "text-wp-cream/90" : "text-wp-brown"}`}>{intro}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-wp-peach">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 grid gap-8 md:grid-cols-[1fr_auto] items-center">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="text-5xl sm:text-6xl">{title}</h1>
          <div className="mt-5 text-lg sm:text-xl text-wp-plum/90">{intro}</div>
        </div>
        {children}
      </div>
      <Wave color="var(--wp-cream)" />
    </section>
  );
}
