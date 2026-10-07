import type { Field } from "@/components/EnquiryForm";

// Fields for each tab of the partnership enquiry on /partners. Edit labels and options here.

const contact: Field[] = [
  { name: "contactName", label: "Contact name", type: "text", required: true, autoComplete: "name", half: true },
  { name: "role", label: "Your role", type: "text", half: true },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", half: true },
];

export const partnerTabs: {
  id: "clubs" | "schools" | "fundraising";
  label: string;
  title: string;
  intro: string;
  submitLabel: string;
  successTitle: string;
  successText: string;
  fields: Field[];
}[] = [
  {
    id: "clubs",
    label: "Clubs & sport",
    title: "Partner your club with Wonkypops",
    intro:
      "Nippers, surf life saving, Little Athletics, junior footy, netball, cricket and more. Stock your kiosk, have us at carnival day, or team up on a sponsorship.",
    submitLabel: "Send club enquiry",
    successTitle: "Thanks, team!",
    successText:
      "We've got your club's enquiry. Your account manager will be in touch within a couple of business days.",
    fields: [
      { name: "club", label: "Club name", type: "text", required: true },
      {
        name: "clubType",
        label: "Type of club",
        type: "select",
        required: true,
        half: true,
        options: [
          "Nippers / surf life saving",
          "Little Athletics",
          "Junior football / soccer",
          "Netball",
          "Cricket",
          "Swimming",
          "Other sport or community club",
        ],
      },
      { name: "suburb", label: "Suburb", type: "text", required: true, half: true },
      ...contact.map((f) => (f.name === "role" ? { ...f, hint: "e.g. president, kiosk coordinator, sponsorship officer" } : f)),
      {
        name: "members",
        label: "Approx. number of junior members",
        type: "number",
        half: true,
      },
      {
        name: "season",
        label: "When does your season run?",
        type: "text",
        half: true,
        hint: "e.g. October to March",
      },
      {
        name: "interests",
        label: "How would you like to partner?",
        type: "checkboxes",
        required: true,
        options: [
          "Kiosk / canteen supply",
          "Event or carnival day",
          "Sponsorship",
          "Tasting stall",
          "Fundraising packs",
          "Sustainability session for kids",
          "Promo material (banners, posters)",
        ],
      },
      { name: "message", label: "Tell us more about your club", type: "textarea" },
    ],
  },
  {
    id: "schools",
    label: "Schools & canteens",
    title: "Bring Wonkypops to your school",
    intro:
      "Regular canteen supply by refrigerated delivery, sustainability sessions for students, and info packs for parents.",
    submitLabel: "Send school enquiry",
    successTitle: "Thanks for reaching out!",
    successText: "We'll be in touch within a couple of business days to chat about what works for your school.",
    fields: [
      { name: "school", label: "School name", type: "text", required: true },
      {
        name: "schoolType",
        label: "School type",
        type: "select",
        required: true,
        half: true,
        options: ["Primary school", "Secondary school", "K-12 school", "Early learning / OSHC", "Other"],
      },
      { name: "suburb", label: "Suburb", type: "text", required: true, half: true },
      ...contact.map((f) => (f.name === "role" ? { ...f, hint: "e.g. canteen manager, teacher, P&C member" } : f)),
      { name: "students", label: "Approx. number of students", type: "number", half: true },
      {
        name: "interests",
        label: "What are you interested in?",
        type: "checkboxes",
        required: true,
        options: [
          "Canteen supply",
          "Sustainability session",
          "Parent info packs",
          "School fete or event",
          "Fundraising packs",
        ],
      },
      { name: "message", label: "Tell us more", type: "textarea" },
    ],
  },
  {
    id: "fundraising",
    label: "Fundraising",
    title: "Start a Wonkypops fundraiser",
    intro: "For schools, clubs, P&Cs and community groups. Sell the pops, keep a share of the profit.",
    submitLabel: "Send fundraising enquiry",
    successTitle: "Woohoo! Enquiry sent.",
    successText:
      "Thanks for thinking of Wonkypops. We'll be in touch within a couple of business days to plan your fundraiser.",
    fields: [
      { name: "organisation", label: "School, club or group name", type: "text", required: true },
      ...contact.map((f) => (f.name === "role" ? { ...f, hint: "e.g. P&C member, club secretary" } : f)),
      { name: "packs", label: "Expected number of packs", type: "number", required: true, half: true },
      { name: "eventDate", label: "Fundraiser or event date", type: "date", required: true, half: true },
      { name: "notes", label: "Anything else we should know?", type: "textarea" },
    ],
  },
];
