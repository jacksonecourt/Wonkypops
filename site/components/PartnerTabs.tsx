"use client";

import { useEffect, useRef, useState } from "react";
import EnquiryForm from "./EnquiryForm";
import { partnerTabs } from "@/data/partner-forms";

type TabId = (typeof partnerTabs)[number]["id"];

// Accessible tabs (WAI-ARIA tabs pattern). Links like /partners/#fundraising open the matching tab.
export default function PartnerTabs() {
  const [active, setActive] = useState<TabId>("clubs");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      const match = partnerTabs.find((t) => t.id === h);
      if (match) {
        setActive(match.id);
        document.getElementById("enquire")?.scrollIntoView();
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % partnerTabs.length;
    if (e.key === "ArrowLeft") next = (i - 1 + partnerTabs.length) % partnerTabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = partnerTabs.length - 1;
    if (next < 0) return;
    e.preventDefault();
    const id = partnerTabs[next].id;
    setActive(id);
    tabRefs.current[id]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Partnership type" className="flex flex-wrap gap-3 mb-6">
        {partnerTabs.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[t.id] = el;
              }}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`btn ${selected ? "btn-primary" : "btn-secondary"} ${i % 2 ? "rotate-1" : "-rotate-1"} ${
                selected ? "!rotate-0" : ""
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {partnerTabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={t.id !== active}
          tabIndex={0}
          className="focus-visible:outline-offset-8"
        >
          <h3 className="text-3xl">{t.title}</h3>
          <p className="mt-2 mb-6 text-lg">{t.intro}</p>
          <EnquiryForm
            formName={`partner-${t.id}`}
            fields={t.fields}
            submitLabel={t.submitLabel}
            successTitle={t.successTitle}
            successText={t.successText}
          />
        </div>
      ))}
    </div>
  );
}
