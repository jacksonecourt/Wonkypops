# Wonkypops Website: Project Context

This file is the brief for building the Wonkypops marketing website. Read it fully before writing code. Where something is marked **[PLACEHOLDER]**, do not invent a value; leave a clearly visible placeholder in the UI and a `TODO` comment in code.

---

## 1. What Wonkypops is

Wonkypops is an Australian icy pole brand made from **blemished, imperfect and surplus fruit** that would otherwise be thrown out for cosmetic reasons (similar idea to Woolworths' "The Odd Bunch", but frozen treats). It is a student business concept, so the site is a realistic launch website, not a live store.

- **Tagline:** Rescued fruit. Real good.
- **Core story:** Fruit doesn't need to be pretty to taste great. Every Wonkypop rescues fruit from landfill.
- **Positioning:** Premium, value-driven. Real fruit, less waste, community-first. Not competing on price with mass-market icy poles.

### Target audiences

1. **Families:** parents and carers of active kids (school age, Nippers, junior sport).
2. **Food-waste-conscious shoppers:** adults who actively choose sustainable, low-waste products.
3. **Partners:** schools and canteens, Nippers / surf life saving clubs, parent groups, local sports associations, independent retailers.

### Sustainability link (SDGs)

- **Primary:** SDG 12, Responsible Consumption and Production (target 12.3, halve food waste).
- **Secondary:** SDG 13, Climate Action (food in landfill produces methane).
- **Supporting:** SDG 17, Partnerships for the Goals.

Do **not** make health claims ("healthy", "guilt-free"). Use "made with real fruit" and "no artificial colours" only. It is still a sweet treat.

---

## 2. Business model the site must support

| Revenue stream | What the site does for it |
|---|---|
| Retail (Harris Farm, IGA, independents, in store and online) | Store locator / "Where to buy" |
| Wholesale (school canteens, club kiosks) | Partner enquiry form |
| Fundraising packs (schools and clubs resell, keep the margin) | Dedicated fundraising page + enquiry form |
| Direct bulk and event orders (parties, fetes, club days) | Bulk order request form |

**Important constraint:** no standard home delivery and no consumer checkout. Frozen product is not shipped to individuals. Bulk and event orders are **enquiry forms**, not a cart.

Customer relationship features: monthly newsletter, impact tracker, flavour polls, food waste tips.

---

## 3. Sitemap

1. **Home** (`/`)
2. **Our Story** (`/story`): why blemished fruit, how it's made, farm to freezer
3. **Flavours** (`/flavours`): flavour cards, seasonal flavours based on surplus fruit
4. **Impact** (`/impact`): impact tracker, SDG links, food rescue partners
5. **Schools & Clubs** (`/partners`): fundraising packs, canteen supply, events, enquiry form
6. **Where to Buy** (`/where-to-buy`): stockist list / simple locator
7. **Bulk & Events** (`/orders`): bulk/event order enquiry form
8. **Contact** (`/contact`): contact form, FAQ (melted stock, refunds, allergens)

Global: header with logo + nav, footer with newsletter signup, socials, contact, Acknowledgement of Country.

### Home page sections (in order)

1. Hero: mascot, headline, tagline, two CTAs ("Find a stockist", "Fundraise with us")
2. The problem: perfectly good fruit rejected for looks (no invented statistics; use [PLACEHOLDER] for any figure)
3. How it works: 3 steps, Rescue → Freeze → Enjoy
4. Flavour preview: 3 to 4 cards
5. Impact counter: "kg of fruit rescued" [PLACEHOLDER value]
6. For schools and clubs: fundraising teaser
7. Newsletter signup

---

## 4. Content rules

- Voice: warm, cheeky, plain-spoken, Australian English ("icy pole", "flavour", "colour", "organise").
- Short sentences. Playful about the fruit being wonky, never about quality being low.
- **No fabricated data:** prices, impact numbers, stockists, partner logos, testimonials and statistics are all **[PLACEHOLDER]**. Never write fake reviews or invent partnerships.
- Partner names that may be referenced as **targets only** (phrase as "we're working towards" / placeholder): Harris Farm Markets, IGA, OzHarvest, SecondBite, Foodbank, Surf Life Saving clubs.
- Flavour names: [PLACEHOLDER]. Suggested starting set to show as examples: Mango, Berry, Watermelon, Orange & Passionfruit.

---

## 5. Brand and design system

### Colours (use as CSS custom properties)

```css
:root {
  --wp-plum:      #3B1F2B; /* primary text, outlines, dark backgrounds */
  --wp-berry:     #C23B5A; /* primary accent, "pops" in wordmark, links */
  --wp-berry-dk:  #8E2A42; /* link hover */
  --wp-mango:     #F2762E; /* brand orange, mascot body, highlights */
  --wp-mango-lt:  #FF9A6B; /* accent on dark backgrounds only */
  --wp-freckle:   #D5561A; /* blemish dots, decorative only */
  --wp-leaf:      #3C8D4F; /* leaf, sustainability accents */
  --wp-stick:     #E3B27A; /* stick, warm neutral */
  --wp-peach:     #FFD9A8; /* icon badge fill, soft section backgrounds */
  --wp-cream:     #FFF6EA; /* page background */
  --wp-brown:     #6B4A3A; /* tagline, secondary text */
}
```

Contrast rules:
- Body text: `--wp-plum` on `--wp-cream` (passes AA comfortably).
- `--wp-berry` is fine for headings and links on cream; check AA for small text.
- **Never** put white or cream text on `--wp-mango` at body size; it fails contrast. Use plum text on mango, or mango only as large display/decoration.
- On dark (`--wp-plum`) sections use cream text and `--wp-mango-lt` accents.

### Typography

- **Font:** Fredoka (Google Fonts, or `@fontsource/fredoka`). Weights 500 and 700.
- Headings: Fredoka 700, tight letter-spacing (about -0.02em).
- Body: Fredoka 500 is acceptable, but for long text pair with a clean readable sans (e.g. "Nunito" or system UI) at 400. Keep Fredoka for headings, buttons and labels.
- Eyebrow/tagline style: uppercase, letter-spacing 0.12em, `--wp-brown`.

### The "wonky" motif

The brand idea is *slightly off but charming*. Apply it with restraint:
- Wordmark letters are individually rotated (-7° to +7°) and nudged up/down a few px.
- Headline accents may tilt a word by 2 to 4°. Cards can sit at ±1° rotation and straighten on hover.
- Blob/organic shapes for section dividers (wavy edges like the berry drizzle on the mascot).
- Keep body text, forms and navigation straight and fully readable. Respect `prefers-reduced-motion`.

### Shape and UI

- Border radius: generous (16 to 24px cards, pill buttons).
- Outlines: 3 to 4px `--wp-plum` strokes on illustrated elements and primary buttons echo the logo's outlined style.
- Buttons: primary = berry fill, cream text, plum outline; secondary = cream fill, plum text, plum outline.
- Avoid: gradients, glassmorphism, emoji as icons, stock photos of perfect fruit.

---

## 6. Logo assets (in `/assets`)

| File | Use |
|---|---|
| `logo-primary.png` | Horizontal logo, transparent background. Use on light backgrounds (header, footer). |
| `logo-stacked-light.png` | Stacked logo with cream text, transparent. **Dark backgrounds only** (it vanishes on white). |
| `icon-badge.png` | Circular peach badge with mascot. Favicon, social avatar, app icon. |
| `pop-mascot.svg` | Vector mascot with plum outline. Use for hero and illustrations on light backgrounds. |
| `pop-mascot-on-dark.svg` | Vector mascot with cream outline for dark sections. |

### Rebuilding the wordmark in code

Prefer rendering the wordmark as live text so it stays crisp:

- Text: "Wonky" in `--wp-plum`, "pops" in `--wp-berry` (on dark: cream + `--wp-mango-lt`).
- Font: Fredoka 700, letter-spacing about -2px at 112px.
- Each letter is an inline-block span with these transforms, in order W o n k y p o p s:

```
W  rotate(-6deg) translateY(4px)
o  rotate(5deg)  translateY(-6px)
n  rotate(-3deg) translateY(3px)
k  rotate(7deg)  translateY(-4px)
y  rotate(-5deg) translateY(5px)
p  rotate(6deg)  translateY(-3px)
o  rotate(-6deg) translateY(4px)
p  rotate(4deg)  translateY(-5px)
s  rotate(-7deg) translateY(2px)
```

- Give the wordmark container `aria-label="Wonkypops"` and hide the individual spans from screen readers (`aria-hidden="true"`).
- Leave enough space below the wordmark: the "y" descender drops low, so keep 20px+ before a tagline.

---

## 7. Feature specs

**Impact tracker** (`/impact` and home counter)
- Big animated counter: kg of fruit rescued, icy poles sold, partner schools/clubs.
- Data from a single JSON file (`data/impact.json`) so it is easy to update. Values are [PLACEHOLDER].
- Count-up animation only when in view; static number if reduced motion.

**Where to buy**
- Stockist list from `data/stockists.json` (name, suburb, state, type: retail / canteen / club). [PLACEHOLDER entries, clearly labelled as examples.]
- Filter by state and type. A map is optional; a searchable list is enough.

**Forms** (partner enquiry, fundraising, bulk/event order, contact, newsletter)
- Client-side validation, accessible labels, clear success state.
- No backend assumed. Use a form service placeholder (e.g. Formspree endpoint as `[PLACEHOLDER]`) or log to console with a TODO.
- Bulk/event form fields: name, email, phone, organisation (optional), event date, suburb, estimated quantity, flavours, notes.
- Fundraising form: school/club name, contact, expected pack quantity, event date.

**Flavour cards**
- Image area uses the mascot recoloured per flavour, or a coloured blob; no stock photos.
- Show: name, fruit rescued, tags (e.g. "Seasonal", "Real fruit"), allergen note [PLACEHOLDER].

**Newsletter**
- Email field + consent checkbox, in footer and home page.

---

## 8. Technical preferences

- Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**, static export friendly. If something simpler is preferred, plain HTML/CSS/JS with Vite is acceptable; ask before choosing.
- Map the colour tokens above into the Tailwind theme (`wp-plum`, `wp-berry`, etc.).
- Fully responsive, mobile first (most families will visit on phones). Test at 375px, 768px, 1280px.
- Accessibility: WCAG 2.1 AA. Semantic HTML, visible focus states, alt text on all images, 44px minimum touch targets.
- Performance: optimise images, self-host or preload Fredoka, no heavy animation libraries unless needed.
- SEO: page titles and meta descriptions per page; Open Graph image using the primary logo on cream.
- Content in data/markdown files where practical, so non-developers in the group can edit copy.

---

## 9. Open decisions ([PLACEHOLDER], confirm with the team)

- Real prices for packs, fundraising packs and bulk orders
- Final flavour list and allergen information
- Actual stockists and partners
- Impact figures
- Domain name and social handles
- Form backend
- Whether the kid-friendly mascot face stays for the adult/waste-conscious audience (an alternate faceless mascot may be needed)
