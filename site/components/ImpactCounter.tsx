"use client";

import { useEffect, useRef, useState } from "react";
import impact from "@/data/impact.json";

type Metric = { id: string; label: string; value: number | null; suffix: string };

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Static number when the visitor prefers reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} aria-hidden="true">
      {n.toLocaleString("en-AU")}
    </span>
  );
}

export default function ImpactCounter({ onDark = false, only }: { onDark?: boolean; only?: string[] }) {
  const metrics = (impact.metrics as Metric[]).filter((m) => !only || only.includes(m.id));
  return (
    <dl className={`grid gap-5 ${metrics.length > 1 ? "sm:grid-cols-3" : ""}`}>
      {metrics.map((m, i) => (
        <div
          key={m.id}
          className={`flex flex-col rounded-[22px] border-[3px] p-6 text-center ${i % 2 ? "wonky-r" : "wonky-l"} ${
            onDark ? "border-wp-cream/70 bg-wp-plum" : "card"
          }`}
        >
          <dt className={`order-2 font-display font-medium text-lg ${onDark ? "text-wp-cream" : "text-wp-brown"}`}>
            {m.label}
          </dt>
          <dd
            className={`font-display font-bold text-5xl sm:text-6xl mb-2 ${
              onDark ? "text-wp-mango-lt" : "text-wp-berry"
            }`}
          >
            {m.value === null ? (
              // TODO: [PLACEHOLDER] set real values in data/impact.json
              <span className="placeholder !text-2xl">PLACEHOLDER</span>
            ) : (
              <>
                <span className="sr-only">
                  {m.value.toLocaleString("en-AU")} {m.suffix}
                </span>
                <Count to={m.value} />
                {m.suffix && <span aria-hidden="true" className="text-3xl ml-1">{m.suffix}</span>}
              </>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
