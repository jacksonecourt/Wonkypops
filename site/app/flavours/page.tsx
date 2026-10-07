import type { Metadata } from "next";
import FlavourCard, { type Flavour } from "@/components/FlavourCard";
import FlavourPoll from "@/components/FlavourPoll";
import Mascot from "@/components/Mascot";
import NutritionPanel from "@/components/NutritionPanel";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import flavours from "@/data/flavours.json";

export const metadata: Metadata = {
  title: "Flavours",
  description: "Wonkypops flavours made from rescued fruit. Seasonal flavours change with whatever fruit needs saving.",
};

export default function FlavoursPage() {
  return (
    <>
      <PageHero
        eyebrow="Flavours"
        title={
          <>
            Seasonal, because the <span className="tilt text-wp-berry">fruit</span> decides.
          </>
        }
        intro="We make pops from whatever fruit needs rescuing, so our line-up changes with the seasons. Here's what's in the freezer."
      >
        <div className="hidden md:flex -space-x-10">
          <Mascot body="#C23B5A" top="#7A2147" className="h-48 w-auto -rotate-6" />
          <Mascot className="h-56 w-auto bob" />
          <Mascot body="#F0566B" top="#3C8D4F" className="h-48 w-auto rotate-6" />
        </div>
      </PageHero>

      <Section labelledBy="lineup-title">
        <SectionHeading
          id="lineup-title"
          eyebrow="The line-up"
          title="Meet the wonky bunch"
          intro="Every pack shows how much rescued fruit went into it and which farm it came from."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(flavours.flavours as Flavour[]).map((f, i) => (
            <FlavourCard key={f.slug} f={f} i={i} detailed />
          ))}
        </div>
      </Section>

      <Section tone="white" labelledBy="nutrition-title">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeading
              id="nutrition-title"
              eyebrow="Ingredients & nutrition"
              title="What's in a Wonkypop?"
              intro="Real fruit, no artificial colours. It's still a sweet treat, just one made from fruit that deserved better."
            />
          </div>
          <NutritionPanel flavours={flavours.flavours as Flavour[]} serving={flavours.servingSize} />
        </div>
      </Section>

      <Section tone="peach" labelledBy="poll-title">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] items-center">
          <SectionHeading
            id="poll-title"
            eyebrow="Flavour poll"
            title="You pick the next pop"
            intro="Got opinions? Good. Vote for the flavour you want next, and we'll share the results in the monthly newsletter."
          />
          <FlavourPoll ideas={flavours.pollIdeas} />
        </div>
      </Section>
    </>
  );
}
