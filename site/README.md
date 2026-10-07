# Wonkypops website

Next.js + TypeScript + Tailwind CSS. Exports as a static site (the `out/` folder).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build the static site for hosting, stop the dev server first, then run `npm run build`. The finished site is in `out/`.

## Edit content without touching code

| What | File |
|---|---|
| Flavours, ingredients, allergens, nutrition, poll ideas | `data/flavours.json` |
| Impact counter numbers | `data/impact.json` |
| Stockists (Where to Buy) | `data/stockists.json` |
| FAQ | `data/faq.json` |
| Partnership form tabs and fields | `data/partner-forms.ts` |
| Nav links, contact email, socials, form backend | `data/site.ts` |

## Still to update

Search the project for `PLACEHOLDER` and `TODO`. Main items: impact figures, stockists, prices and fundraising margin, contact email, social handles, domain, refund and melted-stock policy, shelf life, packaging recycling details, and the form backend (`formEndpoint` in `data/site.ts`; until it is set, form submissions are only logged to the browser console).

Nutrition values in `data/flavours.json` are indicative recipe estimates and should be replaced with lab-tested values before launch.
