import Link from "next/link";
import Mascot from "@/components/Mascot";
import Wordmark from "@/components/Wordmark";
import Wave from "@/components/Wave";
import FlavourCard, { type Flavour } from "@/components/FlavourCard";
import ImpactCounter from "@/components/ImpactCounter";
import NewsletterForm from "@/components/NewsletterForm";
import { Section, SectionHeading } from "@/components/Section";
import { IconArrow, IconBasket, IconCoin, IconHeart, IconSnow } from "@/components/Icons";
import flavours from "@/data/flavours.json";

const steps = [
  {
    icon: IconBasket,
    title: "Rescue",
    text: "We buy the fruit that's too bumpy, spotty or oddly shaped for supermarket shelves, straight from Aussie farms.",
    bg: "bg-[#d9eedd]",
  },
  {
    icon: IconSnow,
    title: "Freeze",
    text: "It's blended with care and frozen into icy poles with no artificial colours, then wrapped in recyclable packaging.",
    bg: "bg-wp-peach",
  },
  {
    icon: IconHeart,
    title: "Enjoy",
    text: "You get a real-fruit treat, and fruit that would have been binned gets eaten instead. Everyone wins.",
    bg: "bg-[#f7d3dc]",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-wp-peach overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-6 sm:pt-16 grid gap-6 md:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <h1 className="sr-only">Wonkypops: Rescued fruit. Real good.</h1>
            <div aria-hidden="true">
              <Wordmark className="text-[3.6rem] sm:text-[5.5rem] lg:text-[6.5rem]" />
            </div>
            <p className="eyebrow mt-6 text-base sm:text-lg">Rescued fruit. Real good.</p>
            <p className="mt-5 text-xl sm:text-2xl font-display font-medium max-w-xl">
              Icy poles made with real fruit that got knocked back for its looks.{" "}
              <span className="tilt text-wp-berry">Wonky</span> outside, delicious inside.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/where-to-buy/" className="btn btn-primary">
                Find a stockist
              </Link>
              <Link href="/partners/" className="btn btn-secondary">
                Fundraise with us
              </Link>
            </div>
          </div>
          <div className="relative grid place-items-center py-6">
            <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute w-[min(100%,26rem)]">
              <path
                d="M44 40 C80 6 150 14 172 56 C196 100 178 160 128 178 C76 196 22 168 16 116 C12 82 20 60 44 40 Z"
                fill="var(--wp-cream)"
                stroke="var(--wp-plum)"
                strokeWidth="3"
              />
            </svg>
            <Mascot
              className="relative h-64 sm:h-80 w-auto bob"
              title="The Wonkypops mascot: a smiling, slightly lopsided icy pole with a leaf on top"
            />
          </div>
        </div>
        <Wave color="var(--wp-cream)" />
      </section>

      {/* 2. The problem */}
      <Section labelledBy="problem-title">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="eyebrow mb-3">The problem</p>
            <h2 id="problem-title" className="text-4xl sm:text-5xl">
              Perfectly good fruit, <span className="tilt-r text-wp-berry">binned</span> for its looks.
            </h2>
            <div className="prose-wp mt-5 text-lg">
              <p>
                Supermarkets want fruit that looks picture-perfect. Anything too big, too small, scarred or
                lopsided often never leaves the farm, even though it tastes exactly the same.
              </p>
              <p>
                Food that ends up in landfill breaks down and releases methane. So we thought: why not turn that
                fruit into something everyone already loves?
              </p>
            </div>
            <Link href="/story/" className="mt-6 inline-flex items-center gap-2 font-display font-bold text-lg min-h-[44px]">
              Read our story <IconArrow className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card p-6 wonky-l bg-wp-peach">
              <p className="font-display font-bold text-5xl text-wp-berry">7.6 mt</p>
              <p className="mt-2 font-display font-medium">
                of food wasted in Australia every year, around 3% of the country&apos;s emissions.
              </p>
              <p className="mt-3 text-xs text-wp-brown">
                Source: Australian Government, National Food Waste Strategy Feasibility Study (2021).
              </p>
            </div>
            <div className="card p-6 wonky-r">
              <p className="font-display font-bold text-5xl text-wp-berry">~30%</p>
              <p className="mt-2 font-display font-medium">
                of produce never leaves the farm because it doesn&apos;t meet cosmetic standards.
              </p>
              <p className="mt-3 text-xs text-wp-brown">Source: Roy (2025).</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. How it works */}
      <Section tone="white" labelledBy="how-title">
        <SectionHeading id="how-title" eyebrow="How it works" title="Rescue. Freeze. Enjoy." center />
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className={`card p-6 sm:p-8 ${i % 2 ? "wonky-r" : "wonky-l"}`}>
              <div className="flex items-center gap-4">
                <span className={`h-16 w-16 rounded-full border-[3px] border-wp-plum grid place-items-center ${s.bg}`}>
                  <s.icon className="h-8 w-8" />
                </span>
                <span className="font-display font-bold text-wp-brown text-lg">Step {i + 1}</span>
              </div>
              <h3 className="mt-5 text-3xl">{s.title}</h3>
              <p className="mt-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. Flavour preview */}
      <Section labelledBy="flavours-title">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Flavours</p>
            <h2 id="flavours-title" className="text-4xl sm:text-5xl">
              Meet the wonky bunch
            </h2>
            <p className="mt-4 text-lg text-wp-brown">
              Our flavours follow the seasons, because we make pops from whatever fruit needs rescuing.
            </p>
          </div>
          <Link href="/flavours/" className="btn btn-secondary">
            All flavours
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(flavours.flavours as Flavour[]).map((f, i) => (
            <FlavourCard key={f.slug} f={f} i={i} />
          ))}
        </div>
      </Section>

      {/* 5. Impact counter */}
      <div className="on-dark">
        <Wave color="var(--wp-plum)" />
      </div>
      <Section tone="plum" labelledBy="impact-title" className="-mt-px">
        <SectionHeading
          id="impact-title"
          eyebrow="Our impact so far"
          title="Every pop rescues fruit."
          intro="We count every kilo. Here's what Wonkypops fans have helped save from landfill."
          center
          onDark
        />
        <ImpactCounter onDark />
        <p className="mt-10 text-center">
          <Link href="/impact/" className="btn btn-secondary">
            See our full impact
          </Link>
        </p>
      </Section>
      <Wave color="var(--wp-plum)" flip />

      {/* 6. Schools and clubs teaser */}
      <Section labelledBy="schools-title">
        <div className="card bg-wp-peach p-6 sm:p-10 grid gap-8 md:grid-cols-[auto_1fr] items-center">
          <span className="mx-auto h-28 w-28 rounded-full border-[3px] border-wp-plum bg-wp-cream grid place-items-center -rotate-6">
            <IconCoin className="h-14 w-14 text-wp-berry" />
          </span>
          <div>
            <p className="eyebrow mb-2">Partnerships</p>
            <h2 id="schools-title" className="text-4xl">
              Fundraising that&apos;s actually <span className="tilt text-wp-berry">cool</span>.
            </h2>
            <p className="mt-4 text-lg max-w-2xl">
              Sell Wonkypops at your school, Nippers or sports club and keep a share of the profit. We supply the
              pops, posters and a dedicated account manager. Kids learn where their food comes from, too.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/partners/#fundraising" className="btn btn-primary">
                Start a fundraiser
              </Link>
              <Link href="/partners/#clubs" className="btn btn-secondary">
                Partner your club
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Newsletter */}
      <Section tone="white" labelledBy="news-title">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="eyebrow mb-3">The monthly scoop</p>
            <h2 id="news-title" className="text-4xl sm:text-5xl">
              Join the wonky crew
            </h2>
            <p className="mt-4 text-lg text-wp-brown">
              One email a month: new and seasonal flavours, our impact numbers, flavour polls and practical tips
              for cutting food waste at home.
            </p>
          </div>
          <div className="card p-6 sm:p-8 wonky-r">
            <NewsletterForm idPrefix="home" />
          </div>
        </div>
      </Section>
    </>
  );
}
