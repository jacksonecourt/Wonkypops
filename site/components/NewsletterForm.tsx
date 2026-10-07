"use client";

import { useRef, useState } from "react";
import { submitForm } from "./submit";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm({ onDark = false, idPrefix }: { onDark?: boolean; idPrefix: string }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; consent?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const doneRef = useRef<HTMLParagraphElement>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!EMAIL.test(email.trim())) next.email = "Please enter a valid email address.";
    if (!consent) next.consent = "Please tick the box so we know you'd like our emails.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`${idPrefix}-${next.email ? "email" : "consent"}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitForm("newsletter", { email: email.trim(), consent });
      setStatus("done");
      setTimeout(() => doneRef.current?.focus(), 0);
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p ref={doneRef} tabIndex={-1} role="status" className="font-display text-xl">
        You&apos;re in! Watch your inbox for the next scoop.
      </p>
    );
  }

  const errClass = onDark ? "text-wp-mango-lt" : "text-wp-berry-dk";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div>
        <label htmlFor={`${idPrefix}-email`} className="field-label">
          Email address
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id={`${idPrefix}-email`}
            type="email"
            autoComplete="email"
            className="field sm:flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${idPrefix}-email-err` : undefined}
          />
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Signing up..." : "Sign me up"}
          </button>
        </div>
        {errors.email && (
          <p id={`${idPrefix}-email-err`} className={`mt-1 text-sm font-semibold ${errClass}`}>
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
          <input
            id={`${idPrefix}-consent`}
            type="checkbox"
            className="mt-1 h-6 w-6 shrink-0 accent-wp-berry"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? `${idPrefix}-consent-err` : undefined}
          />
          <span className="text-sm">
            Yes, send me the Wonkypops monthly newsletter. I can unsubscribe any time.
          </span>
        </label>
        {errors.consent && (
          <p id={`${idPrefix}-consent-err`} className={`mt-1 text-sm font-semibold ${errClass}`}>
            {errors.consent}
          </p>
        )}
      </div>
      {status === "error" && (
        <p role="alert" className={`text-sm font-semibold ${errClass}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
