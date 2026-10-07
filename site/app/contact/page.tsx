import type { Metadata } from "next";
import EnquiryForm, { type Field } from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import Mascot from "@/components/Mascot";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Wonkypops, and find answers about storage, allergens, melted stock and refunds.",
};

const fields: Field[] = [
  { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", half: true },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  {
    name: "topic",
    label: "What's it about?",
    type: "select",
    required: true,
    options: [
      "General question",
      "Feedback on a flavour",
      "Order issue (e.g. melted stock)",
      "Partnership or fundraising",
      "Request a stockist near me",
      "Media",
      "Something else",
    ],
  },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say <span className="tilt text-wp-berry">g&apos;day</span>.
          </>
        }
        intro="Questions, feedback, an order problem or a great idea for a flavour? We'd love to hear from you."
      >
        <Mascot className="hidden md:block h-60 w-auto bob" />
      </PageHero>

      <Section labelledBy="form-title">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 id="form-title" className="text-4xl mb-5">
              Send us a message
            </h2>
            <EnquiryForm
              formName="contact"
              fields={fields}
              submitLabel="Send message"
              successTitle="Message sent!"
              successText="Thanks for getting in touch. We'll reply within a couple of business days."
            />
          </div>
          <aside className="space-y-6">
            <div className="card p-6 wonky-r">
              <h2 className="text-2xl">Email us</h2>
              <p className="mt-2 break-words">{site.contactEmail}</p>
            </div>
            <div className="card p-6 wonky-l bg-wp-peach">
              <h2 className="text-2xl">Got a problem with an order?</h2>
              <p className="mt-2">
                Bought from a store? Your receipt and the store are the quickest fix. For bulk or event orders, pick
                &quot;Order issue&quot; in the form and include your order details and a photo.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="white" id="faq" labelledBy="faq-title">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Frequently asked questions" />
        <div className="max-w-3xl">
          <Faq />
        </div>
      </Section>
    </>
  );
}
