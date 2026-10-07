import type { Metadata } from "next";
import Link from "next/link";
import StockistFinder from "@/components/StockistFinder";
import Placeholder from "@/components/Placeholder";
import { IconPin } from "@/components/Icons";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Where to Buy",
  description: "Find Wonkypops at independent grocers, school canteens and club kiosks near you.",
};

export default function WhereToBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to buy"
        title={
          <>
            Find a <span className="tilt text-wp-berry">freezer</span> near you.
          </>
        }
        intro="Look for Wonkypops in the freezer aisle at grocers, at school canteens and at club kiosks."
      >
        <span className="hidden md:grid h-40 w-40 rounded-full border-[3px] border-wp-plum bg-wp-cream place-items-center -rotate-6">
          <IconPin className="h-20 w-20 text-wp-berry" />
        </span>
      </PageHero>

      <Section labelledBy="stockists-title">
        <SectionHeading
          id="stockists-title"
          title="Stockists"
          intro={
            <>
              We&apos;re starting with independent grocers and sustainability-minded stores, and working towards
              stores like Harris Farm Markets and IGA. <Placeholder>Stockist list below is example data</Placeholder>
            </>
          }
        />
        <StockistFinder />
      </Section>

      <Section tone="white" labelledBy="ask-title">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6 sm:p-8 wonky-l">
            <h2 id="ask-title" className="text-3xl">
              Can&apos;t find us?
            </h2>
            <p className="mt-3">
              Ask your local grocer to stock Wonkypops, or let us know where you&apos;d like to see us and
              we&apos;ll do the asking.
            </p>
            <Link href="/contact/" className="btn btn-primary mt-6">
              Request a stockist
            </Link>
          </div>
          <div className="card p-6 sm:p-8 wonky-r bg-wp-peach">
            <h2 className="text-3xl">Need a lot of pops?</h2>
            <p className="mt-3">
              We don&apos;t deliver to homes, but we do supply parties, fetes and club days. Send us a bulk or event
              enquiry.
            </p>
            <Link href="/orders/" className="btn btn-secondary mt-6">
              Bulk &amp; event orders
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
