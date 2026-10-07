import type { Metadata } from "next";
import Link from "next/link";
import ImpactCounter from "@/components/ImpactCounter";
import Placeholder from "@/components/Placeholder";
import Wave from "@/components/Wave";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import impact from "@/data/impact.json";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Track how much fruit Wonkypops has rescued, how we link to the UN Sustainable Development Goals, and tips to cut food waste at home.",
};

const sdgs = [
  {
    n: 12,
    colour: "#BF8B2E",
    name: "Responsible Consumption and Production",
    target: "Target 12.3: halve food waste and reduce food losses along supply chains.",
    how: "We buy fruit that would otherwise be wasted because of its appearance and turn it into something people want to eat, tackling food loss right at the farm.",
    primary: true,
  },
  {
    n: 13,
    colour: "#3F7E44",
    name: "Climate Action",
    target: "Target 13.2: integrate climate action into policies and planning.",
    how: "Food in landfill releases methane. Rescuing fruit, using recyclable packaging and planning efficient frozen delivery routes all help cut emissions.",
  },
  {
    n: 17,
    colour: "#19486A",
    name: "Partnerships for the Goals",
    target: "Target 17.17: encourage effective public, public-private and civil society partnerships.",
    how: "Farmers, schools, clubs, retailers and food rescue groups working together. We can't fix food waste alone, so we team up.",
  },
];

const rescueTargets = ["OzHarvest", "SecondBite", "Foodbank"];

const tips = [
  {
    title: "Store it smart",
    text: "Keep apples and bananas away from other fruit (they speed up ripening). Leafy greens last longer wrapped in a damp tea towel in the crisper.",
  },
  {
    title: "Love the leftovers",
    text: "Overripe bananas make great banana bread. Soft berries are perfect for smoothies. Bendy carrots? Soup.",
  },
  {
    title: "Plan before you shop",
    text: "Check the fridge, write a list and plan a few meals. You'll buy what you need and waste less.",
  },
  {
    title: "Wonky vs. off",
    text: "Funny shapes, scars and freckles are fine. Mould, unusual smells or a slimy, collapsing texture mean it's time for the compost.",
  },
  {
    title: "Freeze it",
    text: "Chop fruit that's about to turn and freeze it for smoothies. Or blend and pour into moulds for homemade icy poles.",
  },
  {
    title: "Read the date right",
    text: "'Use by' is about safety. 'Best before' is about quality, and food is often still fine to eat after it.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title={
          <>
            Every pop <span className="tilt text-wp-berry">rescues</span> fruit.
          </>
        }
        intro="We keep count, so you can see the difference your icy pole makes."
      />

      <div className="on-dark">
        <Wave color="var(--wp-plum)" />
      </div>
      <Section tone="plum" labelledBy="tracker-title" className="-mt-px">
        <SectionHeading
          id="tracker-title"
          eyebrow="Impact tracker"
          title="Our numbers so far"
          intro={
            <>
              Last updated:{" "}
              {impact.lastUpdated ?? <Placeholder>date</Placeholder>}
            </>
          }
          center
          onDark
        />
        <ImpactCounter onDark />
      </Section>
      <Wave color="var(--wp-plum)" flip />

      <Section labelledBy="sdg-title">
        <SectionHeading
          id="sdg-title"
          eyebrow="Sustainable Development Goals"
          title="Small pops, big goals"
          intro="Wonkypops supports three of the United Nations Sustainable Development Goals."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {sdgs.map((s, i) => (
            <article key={s.n} className={`card p-6 sm:p-8 flex flex-col ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <div className="flex items-center gap-4">
                <span
                  className="h-16 w-16 shrink-0 rounded-2xl border-[3px] border-wp-plum grid place-items-center font-display font-bold text-3xl text-white"
                  style={{ background: s.colour }}
                >
                  {s.n}
                </span>
                <div>
                  <p className="eyebrow text-xs">{s.primary ? "Primary goal" : "Supporting goal"}</p>
                  <h3 className="text-xl">SDG {s.n}: {s.name}</h3>
                </div>
              </div>
              <p className="mt-4 font-semibold">{s.target}</p>
              <p className="mt-2">{s.how}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" labelledBy="rescue-title">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <SectionHeading
            id="rescue-title"
            eyebrow="Food rescue partners"
            title="Nothing wasted, even at our end"
            intro="We're working towards partnerships with food rescue organisations so any surplus stock goes to people who need it, not to landfill."
          />
          <ul className="grid gap-4 sm:grid-cols-3">
            {rescueTargets.map((name, i) => (
              <li key={name} className={`card p-5 text-center ${i % 2 ? "wonky-r" : "wonky-l"}`}>
                <p className="font-display font-bold text-xl">{name}</p>
                <p className="mt-2 text-sm">
                  <Placeholder>Working towards</Placeholder>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="peach" id="tips" labelledBy="tips-title">
        <SectionHeading
          id="tips-title"
          eyebrow="Food waste tips"
          title="Be a fruit rescuer at home"
          intro="Small habits add up. Here are some of our favourite ways to waste less."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t, i) => (
            <li key={t.title} className={`card p-6 ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <h3 className="text-2xl">{t.title}</h3>
              <p className="mt-2">{t.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg">
          Want a new tip every month? <Link href="/#news-title">Join the newsletter</Link>.
        </p>
      </Section>
    </>
  );
}
