import type { Metadata } from "next";
import Link from "next/link";
import Mascot from "@/components/Mascot";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { IconBasket, IconFactory, IconRecycle, IconSnow, IconTruck, IconLeaf } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why Wonkypops makes icy poles from blemished fruit, how they're made, and the journey from farm to freezer.",
};

const journey = [
  {
    icon: IconBasket,
    title: "On the farm",
    text: "We partner with local Australian growers and buy fruit that's been rejected for its looks: scarred skins, odd shapes, the wrong size. Safe, ripe and tasty, just not 'pretty'.",
  },
  {
    icon: IconLeaf,
    title: "Checked and sorted",
    text: "Cosmetic quirks are welcome. Spoilage is not. Fruit with mould, unusual smells or real deterioration is turned away.",
  },
  {
    icon: IconFactory,
    title: "Made with care",
    text: "Our recipes are developed with a food technologist and made by a HACCP-certified co-manufacturer, using real fruit and no artificial colours.",
  },
  {
    icon: IconRecycle,
    title: "Packed to tell the story",
    text: "Every pack says how much rescued fruit went into it and where it came from, in recyclable packaging.",
  },
  {
    icon: IconSnow,
    title: "Frozen and stored",
    text: "Pops are kept in cold storage and moved by a frozen distributor so they arrive at store freezers in top shape.",
  },
  {
    icon: IconTruck,
    title: "Delivered smarter",
    text: "We plan 'just in time' delivery routes and order volumes carefully to cut the energy and emissions in our own supply chain.",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Fruit doesn&apos;t need to be <span className="tilt text-wp-berry">pretty</span> to taste great.
          </>
        }
        intro="Wonkypops started with a simple question: why is so much good fruit thrown away just because of how it looks?"
      >
        <Mascot className="hidden md:block h-64 w-auto bob" />
      </PageHero>

      <Section labelledBy="why-title">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading id="why-title" eyebrow="Why blemished fruit" title="The 'ugly' fruit problem" />
            <div className="prose-wp text-lg -mt-4">
              <p>
                Australian supermarkets set strict cosmetic standards. Fruit that&apos;s too big, too small, marked
                or misshapen often gets rejected, even though it&apos;s perfectly edible.
              </p>
              <p>
                Food waste happens at every step of the supply chain, from farms to shops to our own fridges. We
                focus on the very start: the farm gate. By creating a market for imperfect fruit, we stop waste at
                the source and put money back in growers&apos; pockets.
              </p>
              <p>
                And when we tell people where their fruit came from and why it looks a bit different, they love it
                even more. Turns out wonky is a good look.
              </p>
            </div>
          </div>
          <aside className="card p-6 sm:p-8 bg-wp-peach wonky-r self-start">
            <h3 className="text-2xl">What &apos;wonky&apos; means to us</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <strong className="font-display">Yes please:</strong> odd shapes, skin scars, freckles, bumps, the
                wrong size, a bit of sunburn on the skin.
              </li>
              <li>
                <strong className="font-display">No thanks:</strong> mould, unusual smells, bruising that&apos;s gone
                soft, or anything past its best.
              </li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="white" labelledBy="journey-title">
        <SectionHeading
          id="journey-title"
          eyebrow="Farm to freezer"
          title="How a Wonkypop is made"
          intro="From the paddock to your freezer, here's the journey every pop takes."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((j, i) => (
            <li key={j.title} className={`card p-6 ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <div className="flex items-center gap-3">
                <span className="h-14 w-14 shrink-0 rounded-full border-[3px] border-wp-plum bg-wp-peach grid place-items-center">
                  <j.icon className="h-7 w-7" />
                </span>
                <span className="font-display font-bold text-4xl text-wp-berry">{i + 1}</span>
              </div>
              <h3 className="mt-4 text-2xl">{j.title}</h3>
              <p className="mt-2">{j.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="promise-title">
        <SectionHeading id="promise-title" eyebrow="Our promise" title="What goes in (and what doesn't)" center />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Real fruit", "Made with real fruit from Australian farms. That's the whole point."],
            ["No artificial colours", "The colour comes from the fruit. Wonky fruit, honest colours."],
            ["Recyclable packaging", "Our packs are designed to be recycled, so the rescue doesn't stop at the fruit."],
          ].map(([t, d], i) => (
            <div key={t} className={`card p-6 text-center ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-2">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/flavours/" className="btn btn-primary">
            Meet the flavours
          </Link>
          <Link href="/impact/" className="btn btn-secondary">
            See our impact
          </Link>
        </p>
      </Section>
    </>
  );
}
