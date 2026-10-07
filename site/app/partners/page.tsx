import type { Metadata } from "next";
import Mascot from "@/components/Mascot";
import PartnerTabs from "@/components/PartnerTabs";
import Placeholder from "@/components/Placeholder";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import {
  IconBook,
  IconCoin,
  IconHeart,
  IconMegaphone,
  IconPerson,
  IconTruck,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Wonkypops: kiosk and canteen supply, sponsorship, fundraising packs and sustainability sessions for clubs, Nippers, Little Athletics and schools.",
};

const offers = [
  {
    icon: IconTruck,
    title: "Kiosk & canteen supply",
    text: "Bulk supply for club kiosks and school canteens, delivered by refrigerated transport on a regular schedule.",
    tab: "clubs",
  },
  {
    icon: IconHeart,
    title: "Sponsorship & events",
    text: "Sponsorship and tasting stalls at carnivals, Nippers, Little Athletics and junior sport days, where active kids and families already gather.",
    tab: "clubs",
  },
  {
    icon: IconCoin,
    title: "Fundraising packs",
    text: "Sell Wonkypops at your club or school and keep a share of the profit. An easy, popular fundraiser that also teaches kids about food waste.",
    tab: "fundraising",
  },
  {
    icon: IconBook,
    title: "Sustainability sessions",
    text: "Short, fun sessions for kids about food waste, where food comes from and why wonky fruit still deserves to be eaten.",
    tab: "schools",
  },
  {
    icon: IconMegaphone,
    title: "Promo material",
    text: "Banners, posters and social posts for your newsletter and club pages, so promoting your partnership is easy.",
    tab: "clubs",
  },
  {
    icon: IconPerson,
    title: "A dedicated account manager",
    text: "One real person who handles your reorders, keeps an eye on stock levels, checks in regularly and sorts out any issues.",
    tab: "clubs",
  },
];

const fundraiseSteps = [
  ["Tell us about your fundraiser", "Fill in the Fundraising tab below with your school or club, dates and how many packs you'll need."],
  ["We deliver the pops", "Your packs arrive frozen, along with posters and a promo kit to spread the word."],
  ["Sell and keep the profit", "Sell Wonkypops at your event, kiosk or canteen and keep your share of every sale."],
  ["See your impact", "We'll tell you how much fruit your community rescued, perfect for the club or school newsletter."],
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title={
          <>
            Let&apos;s rescue fruit <span className="tilt text-wp-berry">together</span>.
          </>
        }
        intro={
          <>
            <p>
              We partner with Nippers, Little Athletics, sports clubs, schools and community groups to bring
              real-fruit icy poles to the places kids are active.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="#clubs" className="btn btn-primary">
                Partner your club
              </a>
              <a href="#fundraising" className="btn btn-secondary">
                Start a fundraiser
              </a>
            </div>
          </>
        }
      >
        <Mascot className="hidden md:block h-64 w-auto bob" />
      </PageHero>

      <Section labelledBy="offers-title">
        <SectionHeading
          id="offers-title"
          eyebrow="What we offer"
          title="Everything your club or school needs"
          intro="Pick one or mix and match. Every partnership comes with real support, not just a delivery."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <li key={o.title} className={`card p-6 flex flex-col ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <span className="h-14 w-14 rounded-full border-[3px] border-wp-plum bg-wp-peach grid place-items-center">
                <o.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-2xl">{o.title}</h3>
              <p className="mt-2 flex-1">{o.text}</p>
              <a href={`#${o.tab}`} className="mt-4 font-display font-bold inline-flex min-h-[44px] items-center">
                Enquire about this
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="why-partner-title">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <SectionHeading
              id="why-partner-title"
              eyebrow="Why partner with us"
              title="Good for your club, good for the planet"
              intro="Every partner gets parent info packs explaining what's in our icy poles, where the fruit comes from and how your community is helping cut food waste."
            />
          </div>
          <div className="card p-6 sm:p-8 bg-wp-peach wonky-r">
            <h3 className="text-2xl">Why partners love it</h3>
            <ul className="mt-4 space-y-3 list-disc pl-5">
              <li>Kids get a real-fruit treat they actually want.</li>
              <li>Your club or school earns money for the things that matter.</li>
              <li>Kids learn about food waste and where food comes from.</li>
              <li>We do the heavy lifting: delivery, stock checks and promo.</li>
              <li>We shout you out in our newsletter and on social media.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="how-fundraising-title">
        <SectionHeading
          id="how-fundraising-title"
          eyebrow="Fundraising packs"
          title="How fundraising works"
          intro={
            <>
              Your share of each sale: <Placeholder>margin TBC</Placeholder>. Pack sizes and pricing:{" "}
              <Placeholder>TBC</Placeholder>.
            </>
          }
        />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fundraiseSteps.map(([t, d], i) => (
            <li key={t} className={`card p-6 ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <span className="font-display font-bold text-5xl text-wp-berry">{i + 1}</span>
              <h3 className="mt-2 text-xl">{t}</h3>
              <p className="mt-2">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="peach" id="enquire" labelledBy="enquire-title">
        <div className="max-w-3xl">
          <SectionHeading
            id="enquire-title"
            eyebrow="Partner enquiry"
            title="Reach out to partner with us"
            intro="Choose the option that fits you best and tell us a bit about your club, school or group. We'll get back to you within a couple of business days."
          />
          <PartnerTabs />
        </div>
      </Section>
    </>
  );
}
