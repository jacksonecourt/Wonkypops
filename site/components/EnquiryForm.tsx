"use client";

import { useRef, useState } from "react";
import { submitForm } from "./submit";

export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "number" | "textarea" | "select" | "checkboxes";
  required?: boolean;
  options?: string[];
  hint?: string;
  autoComplete?: string;
  half?: boolean;
};

type Values = Record<string, string | string[]>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+()\d\s-]{8,}$/;

function validate(field: Field, value: string | string[] | undefined): string | undefined {
  const empty = Array.isArray(value) ? value.length === 0 : !value?.trim();
  if (field.required && empty) {
    return field.type === "checkboxes" ? "Please choose at least one." : `Please enter ${field.label.toLowerCase()}.`;
  }
  if (empty || Array.isArray(value)) return;
  const v = value!.trim();
  if (field.type === "email" && !EMAIL.test(v)) return "Please enter a valid email address.";
  if (field.type === "tel" && !PHONE.test(v)) return "Please enter a valid phone number.";
  if (field.type === "number" && !(Number(v) >= 1)) return "Please enter a number of 1 or more.";
}

export default function EnquiryForm({
  formName,
  fields,
  submitLabel,
  successTitle,
  successText,
}: {
  formName: string;
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successText: string;
}) {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const doneRef = useRef<HTMLDivElement>(null);
  const id = (n: string) => `${formName}-${n}`;

  const set = (name: string, v: string | string[]) => {
    setValues((s) => ({ ...s, [name]: v }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    for (const f of fields) {
      const err = validate(f, values[f.name]);
      if (err) next[f.name] = err;
    }
    setErrors(next);
    const first = fields.find((f) => next[f.name]);
    if (first) {
      document.getElementById(id(first.name))?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitForm(formName, values);
      setStatus("done");
      setTimeout(() => doneRef.current?.focus(), 0);
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className="card p-8 text-center bg-wp-peach">
        <p className="font-display text-3xl font-bold">{successTitle}</p>
        <p className="mt-3 text-lg">{successText}</p>
        <button
          type="button"
          className="btn btn-secondary mt-6"
          onClick={() => {
            setValues({});
            setStatus("idle");
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-5 sm:p-8">
      <p className="text-sm text-wp-brown mb-6">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const err = errors[f.name];
          const described = [f.hint && `${id(f.name)}-hint`, err && `${id(f.name)}-err`].filter(Boolean).join(" ") || undefined;
          const label = (
            <>
              {f.label}
              {f.required && <span aria-hidden="true" className="text-wp-berry"> *</span>}
            </>
          );
          const meta = (
            <>
              {f.hint && (
                <p id={`${id(f.name)}-hint`} className="mt-1 text-sm text-wp-brown">
                  {f.hint}
                </p>
              )}
              {err && (
                <p id={`${id(f.name)}-err`} className="mt-1 text-sm font-semibold text-wp-berry-dk">
                  {err}
                </p>
              )}
            </>
          );
          const span = f.half ? "" : "sm:col-span-2";

          if (f.type === "checkboxes") {
            const selected = (values[f.name] as string[]) ?? [];
            return (
              <fieldset key={f.name} className={span} aria-describedby={described}>
                <legend className="field-label">{label}</legend>
                <div className="flex flex-wrap gap-2" id={id(f.name)} tabIndex={-1}>
                  {f.options!.map((opt) => {
                    const checked = selected.includes(opt);
                    return (
                      <label
                        key={opt}
                        className={`inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full border-[3px] border-wp-plum cursor-pointer font-display font-medium transition-colors ${
                          checked ? "bg-wp-mango text-wp-plum" : "bg-white"
                        } has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-wp-berry has-[:focus-visible]:outline-offset-2`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() =>
                            set(f.name, checked ? selected.filter((s) => s !== opt) : [...selected, opt])
                          }
                        />
                        <span aria-hidden="true">{checked ? "✓" : "+"}</span>
                        {opt}
                      </label>
                    );
                  })}
                </div>
                {meta}
              </fieldset>
            );
          }

          const common = {
            id: id(f.name),
            name: f.name,
            className: "field",
            value: (values[f.name] as string) ?? "",
            "aria-invalid": !!err,
            "aria-describedby": described,
            "aria-required": f.required,
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
              set(f.name, e.target.value),
          };

          return (
            <div key={f.name} className={span}>
              <label htmlFor={id(f.name)} className="field-label">
                {label}
              </label>
              {f.type === "textarea" ? (
                <textarea {...common} rows={4} />
              ) : f.type === "select" ? (
                <select {...common}>
                  <option value="">Please choose...</option>
                  {f.options!.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  {...common}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  min={f.type === "number" ? 1 : undefined}
                  inputMode={f.type === "number" ? "numeric" : undefined}
                />
              )}
              {meta}
            </div>
          );
        })}
      </div>
      {status === "error" && (
        <p role="alert" className="mt-5 font-semibold text-wp-berry-dk">
          Something went wrong sending your enquiry. Please try again.
        </p>
      )}
      <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
