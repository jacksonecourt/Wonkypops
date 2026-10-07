import { site } from "@/data/site";

// Sends a form to the configured backend. No backend is set up yet, so while
// site.formEndpoint is empty this just logs the submission.
// TODO: [PLACEHOLDER] set site.formEndpoint (e.g. a Formspree URL) in data/site.ts.
export async function submitForm(formName: string, data: Record<string, unknown>) {
  if (!site.formEndpoint) {
    console.info(`[Wonkypops] "${formName}" submission (no backend configured yet):`, data);
    await new Promise((r) => setTimeout(r, 500));
    return;
  }
  const res = await fetch(site.formEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _form: formName, ...data }),
  });
  if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
}
