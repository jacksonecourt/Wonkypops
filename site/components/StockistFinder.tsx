"use client";

import { useMemo, useState } from "react";
import data from "@/data/stockists.json";
import { IconPin } from "./Icons";

type Stockist = { name: string; suburb: string; state: string; type: "retail" | "canteen" | "club"; example?: boolean };

const typeLabels: Record<Stockist["type"], string> = {
  retail: "Retail store",
  canteen: "School canteen",
  club: "Club kiosk",
};
const typeColours: Record<Stockist["type"], string> = {
  retail: "bg-wp-peach",
  canteen: "bg-[#d9eedd]",
  club: "bg-[#f7d3dc]",
};

const STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

export default function StockistFinder() {
  const stockists = data.stockists as Stockist[];
  const [q, setQ] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return stockists.filter(
      (s) =>
        (!state || s.state === state) &&
        (!type || s.type === type) &&
        (!term || `${s.name} ${s.suburb}`.toLowerCase().includes(term)),
    );
  }, [q, state, type, stockists]);

  return (
    <div>
      <div className="card p-5 sm:p-6 grid gap-4 sm:grid-cols-[2fr_1fr_1fr]" role="search">
        <div>
          <label htmlFor="stockist-q" className="field-label">
            Search by name or suburb
          </label>
          <input
            id="stockist-q"
            type="search"
            className="field"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="stockist-state" className="field-label">
            State
          </label>
          <select id="stockist-state" className="field" value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">All states</option>
            {STATES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="stockist-type" className="field-label">
            Type
          </label>
          <select id="stockist-type" className="field" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All types</option>
            {Object.entries(typeLabels).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 mb-4 font-display font-medium text-wp-brown" role="status" aria-live="polite">
        {results.length} {results.length === 1 ? "place" : "places"} found
      </p>

      {results.length ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((s, i) => (
            <li key={`${s.name}-${i}`} className={`card p-5 flex gap-4 ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <span className={`shrink-0 h-12 w-12 rounded-full border-[3px] border-wp-plum grid place-items-center ${typeColours[s.type]}`}>
                <IconPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl">{s.name}</h3>
                <p className="text-wp-brown">
                  {s.suburb}, {s.state}
                </p>
                <p className="mt-2 flex flex-wrap gap-2">
                  <span className={`text-sm font-display font-medium px-3 py-0.5 rounded-full border-2 border-wp-plum ${typeColours[s.type]}`}>
                    {typeLabels[s.type]}
                  </span>
                  {s.example && <span className="placeholder text-sm">Example</span>}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="card p-8 text-center">
          <p className="font-display text-2xl font-bold">No wonky pops here yet.</p>
          <p className="mt-2">
            Try another state or type, or{" "}
            <a href="/contact/">ask us to come to your area</a>.
          </p>
        </div>
      )}
    </div>
  );
}
