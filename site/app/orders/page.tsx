import type { Metadata } from "next";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import Mascot from "@/components/Mascot";
import Placeholder from "@/components/Placeholder";
import { PageHero, Section } from "@/components/Section";
import flavours from "@/data/flavours.json";

export const metadata: Metadata = {
  title: "Bulk & Events",
  description: "Order Wonkypops in bulk for parties, school fetes, club days and community events. Enquiry form, no checkout.",
};

const fields: Field[] = [
  { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", half: true },
  { name: "organisation", label: "Organisation (optional)", type: "text", half: true },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", half: true },
  { name: "eventDate", label: "Event date", type: "date", required: true, half: true },
  { name: "suburb", label: "Event suburb", type: "text", required: true, autoComplete: "address-level2", half: true },
  { name: "quantity", label: "Estimated quantity (icy poles)", type: "number", required: true, half: true },
  {
    name: "flavours",
    label: "Flavours you'd like",
    type: "checkboxes",
    options: [...flavours.flavours.map((f) => f.name), "Surprise me"],
  },
  { name: "notes", label: "Notes", type: "textarea", hint: "Tell us about the event, freezer access on the day, and anything else we should know." },
];

export default function OrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Bulk & events"
        title={
          <>
            Pops for the whole <span className="tilt text-wp-berry">crew</span>.
          </>
        }
        intro="Birthday parties, school fetes, club days, carnivals. Tell us what you're planning and we'll put together a quote."
      >
        <div className="hidden md:flex -space-x-12">
          <Mascot body="#F49A2E" top="#6B2E5A" className="h-52 w-auto -rotate-6" />
          <Mascot className="h-60 w-auto bob" />
        </div>
      </PageHero>

      <Section labelledBy="how-orders-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-6">
            <div>
              <h2 id="how-orders-title" className="text-4xl">
                How it works
              </h2>
              <ol className="mt-5 space-y-4">
                {[
                  "Send us the enquiry form.",
                  "We'll confirm availability, flavours and a quote.",
                  "We deliver frozen to your event or a nearby pickup point.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-4 items-start">
                    <span className="h-10 w-10 shrink-0 rounded-full border-[3px] border-wp-plum bg-wp-peach grid place-items-center font-display font-bold">
                      {i + 1}
                    </span>
                    <span className="pt-1.5">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-6 bg-wp-peach wonky-l">
              <h3 className="text-2xl">Good to know</h3>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>
                  This is an enquiry, not a checkout. You won&apos;t be charged until you confirm a quote.
                </li>
                <li>We don&apos;t do standard home delivery. Frozen pops need the right cold chain.</li>
                <li>
                  Minimum order: <Placeholder>TBC</Placeholder>
                </li>
                <li>
                  Pricing: <Placeholder>TBC</Placeholder>
                </li>
                <li>
                  Lead time: <Placeholder>TBC</Placeholder>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-3xl mb-5">Bulk &amp; event enquiry</h2>
            <EnquiryForm
              formName="bulk-order"
              fields={fields}
              submitLabel="Request a quote"
              successTitle="Enquiry received!"
              successText="Thanks! We'll check availability and send you a quote within a couple of business days."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
