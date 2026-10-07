import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/site";
import NewsletterForm from "./NewsletterForm";
import Wave from "./Wave";

export default function Footer() {
  return (
    <footer className="on-dark">
      <Wave color="var(--wp-plum)" />
      <div className="bg-wp-plum text-wp-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-stacked-light.png"
              alt="Wonkypops: Rescued fruit. Real good."
              width={1408}
              height={1180}
              className="w-48 h-auto"
            />
            <p className="mt-5 text-wp-cream/85 max-w-xs">
              Icy poles made with real fruit that was knocked back for its looks. Wonky outside, delicious inside.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-lg mb-3 text-wp-mango-lt">Explore</h2>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="text-wp-cream hover:text-wp-mango-lt inline-block py-1">
                    Home
                  </Link>
                </li>
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-wp-cream hover:text-wp-mango-lt inline-block py-1">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg mb-3 text-wp-mango-lt">Say g&apos;day</h2>
              <p className="text-wp-cream/90 break-words">{site.contactEmail}</p>
              <ul className="mt-4 space-y-2">
                {site.socials.map((s) => (
                  // TODO: [PLACEHOLDER] link each social once handles are confirmed
                  <li key={s.label} className="text-wp-cream/90">
                    {s.label}: <span className="placeholder">{s.handle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl mb-2">Get the monthly scoop</h2>
            <p className="text-wp-cream/85 mb-4">
              New flavours, impact updates, flavour polls and food-waste tips. Once a month, no spam.
            </p>
            <NewsletterForm onDark idPrefix="footer" />
          </div>
        </div>

        <div className="border-t-2 border-wp-cream/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid gap-4 md:grid-cols-[2fr_1fr] items-start">
            <p className="text-sm text-wp-cream/85 max-w-2xl">
              <strong className="font-display text-wp-cream">Acknowledgement of Country.</strong> Wonkypops
              acknowledges the Traditional Custodians of the lands on which our fruit is grown and our icy poles are
              made and enjoyed. We pay our respects to Elders past and present, and extend that respect to all
              Aboriginal and Torres Strait Islander peoples.
            </p>
            <p className="text-sm text-wp-cream/70 md:text-right">
              &copy; {new Date().getFullYear()} Wonkypops. A student business concept.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
