"use client";

import { useState } from "react";
import type { Flavour, Nutrition } from "./FlavourCard";

const rows: { key: keyof Nutrition; label: string; unit: string; indent?: boolean; dp: number }[] = [
  { key: "energy", label: "Energy", unit: "kJ", dp: 0 },
  { key: "protein", label: "Protein", unit: "g", dp: 1 },
  { key: "fat", label: "Fat, total", unit: "g", dp: 1 },
  { key: "satFat", label: "Saturated", unit: "g", indent: true, dp: 1 },
  { key: "carbs", label: "Carbohydrate", unit: "g", dp: 1 },
  { key: "sugars", label: "Sugars", unit: "g", indent: true, dp: 1 },
  { key: "sodium", label: "Sodium", unit: "mg", dp: 0 },
];

// Australian-style nutrition information panel, switchable by flavour.
export default function NutritionPanel({ flavours, serving }: { flavours: Flavour[]; serving: number }) {
  const [slug, setSlug] = useState(flavours[0].slug);
  const f = flavours.find((x) => x.slug === slug)!;

  return (
    <div className="card p-5 sm:p-8">
      <label htmlFor="nip-flavour" className="field-label">
        Choose a flavour
      </label>
      <select id="nip-flavour" className="field" value={slug} onChange={(e) => setSlug(e.target.value)}>
        {flavours.map((x) => (
          <option key={x.slug} value={x.slug}>
            {x.name}
          </option>
        ))}
      </select>

      <div className="mt-6 border-[3px] border-wp-plum rounded-2xl p-4" aria-live="polite">
        <h3 className="text-2xl">Nutrition information</h3>
        <p className="text-sm mt-1">
          {f.name}. Servings per pack: 1. Serving size: {serving} g.
        </p>
        <table className="mt-3 w-full text-left text-sm sm:text-base">
          <caption className="sr-only">Nutrition information for {f.name}</caption>
          <thead>
            <tr className="border-b-[3px] border-wp-plum font-display">
              <th scope="col" className="py-2">
                <span className="sr-only">Nutrient</span>
              </th>
              <th scope="col" className="py-2 text-right">Per serve</th>
              <th scope="col" className="py-2 text-right">Per 100 g</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const v = f.nutrition[r.key];
              return (
                <tr key={r.key} className="border-b-2 border-wp-plum/15">
                  <th scope="row" className={`py-2 font-semibold ${r.indent ? "pl-4 font-normal" : ""}`}>
                    {r.label}
                  </th>
                  <td className="py-2 text-right tabular-nums">
                    {v.toFixed(r.dp)} {r.unit}
                  </td>
                  <td className="py-2 text-right tabular-nums">
                    {((v * 100) / serving).toFixed(r.dp)} {r.unit}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="mt-4 text-sm">
          <strong className="font-display">Ingredients:</strong> {f.ingredients}
        </p>
        <p className="mt-1 text-sm">
          <strong className="font-display">Allergens:</strong> {f.allergens}
        </p>
      </div>
      <p className="mt-4 text-xs text-wp-brown">
        Indicative values calculated from our recipes, to be confirmed by lab testing. Always check the pack for
        the latest ingredient and allergen information.
      </p>
    </div>
  );
}
