"use client";

import { useEffect, useState } from "react";
import { submitForm } from "./submit";

const KEY = "wonkypops-poll-vote";

// Votes are sent via the form backend once one is configured. We deliberately
// don't show tallies here so the page never displays made-up results.
export default function FlavourPoll({ ideas }: { ideas: string[] }) {
  const [choice, setChoice] = useState("");
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    try {
      setVoted(localStorage.getItem(KEY));
    } catch {}
  }, []);

  async function vote(e: React.FormEvent) {
    e.preventDefault();
    if (!choice) return;
    await submitForm("flavour-poll", { vote: choice });
    try {
      localStorage.setItem(KEY, choice);
    } catch {}
    setVoted(choice);
  }

  if (voted) {
    return (
      <div role="status" className="card p-8 text-center">
        <p className="font-display text-2xl font-bold">Thanks for voting for {voted}!</p>
        <p className="mt-2">We&apos;ll share the results in the monthly newsletter.</p>
      </div>
    );
  }

  return (
    <form onSubmit={vote} className="card p-6 sm:p-8">
      <fieldset>
        <legend className="font-display text-2xl font-bold mb-4">Which wonky flavour should we make next?</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {ideas.map((idea) => (
            <label
              key={idea}
              className={`flex items-center gap-3 min-h-[52px] px-4 rounded-2xl border-[3px] border-wp-plum cursor-pointer font-display font-medium text-lg ${
                choice === idea ? "bg-wp-mango" : "bg-white hover:bg-wp-peach"
              }`}
            >
              <input
                type="radio"
                name="poll"
                value={idea}
                checked={choice === idea}
                onChange={() => setChoice(idea)}
                className="h-5 w-5 accent-wp-plum"
              />
              {idea}
            </label>
          ))}
        </div>
      </fieldset>
      <p className="mt-3 text-sm text-wp-brown">
        <span className="placeholder">Poll options are ideas only</span>
      </p>
      <button type="submit" className="btn btn-primary mt-6" disabled={!choice}>
        Cast my vote
      </button>
    </form>
  );
}
