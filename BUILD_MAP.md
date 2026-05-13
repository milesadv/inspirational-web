# Inspirationally Propelled — Technical Build Map

**Client:** Spencer Hall  
**Deadline:** Monday 19 May 2026  
**Payment trigger:** Working iteration of full site covering Spencer's narrative  
**Builder:** Miles (MJE Advisory) + Claude (pair-build)  
**Today:** Wednesday 13 May 2026 — 5.5 build days remaining

---

## Situation Summary

Spencer's narrative document contains **complete, production-ready copy** for every page, plus a full build specification (§1–§13) covering design tokens, URL map, component specs, data model, and phasing. The wireframe spreadsheet provides layout reference across 7 sheets. We have 61 book illustrations available; we need placeholders for hero images, Spencer's portrait, and individual character portraits.

The scope for Monday delivery: **a fully working, premium-standard marketing site covering Spencer's entire narrative**, with the shop page showing products (books + prints) but checkout behind a feature flag until Shopify/Stripe is confirmed. Every page of copy live, beautiful design, mobile responsive, newsletter capture working.

---

## Tech Stack (Confirmed)

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14+ (App Router) | SSR, image optimisation, file-based routing |
| Styling | Tailwind CSS | Maps directly to Spencer's §1.2 design tokens |
| Fonts | Cormorant Garamond (headings) + Inter (body) | Per spec — serif + humanist sans |
| Hosting | Vercel | Auto-deploy from GitHub, free tier sufficient |
| Images | next/image + local assets | Optimised WebP/AVIF serving |
| Newsletter | Mailchimp embedded form | Double opt-in, GDPR compliant |
| Commerce (Phase 2) | Shopify Lite or Stripe Checkout | Behind feature flag until confirmed |
| Analytics | Plausible (cookieless) or GA4 | Gated behind cookie consent |

---

## Design Tokens (from §1.2)

```
Primary ink:        #1A1A1A  (body text)
Parchment bg:       #F6F1E7  (primary background)
Accent gold:        #B8893B  (CTAs, underlines, quote marks)
Forest deep:        #2E4034  (footer, secondary panels)
Sky soft:           #C9D6DA  (dividers, hover states)
Highlight:          #E9C46A  (Coming Soon ribbons, sale flags)

Headings:           Cormorant Garamond, 600 weight
Body:               Inter, 400/500 weight
Pull-quotes:        Serif italic, 1.4× body, gold accent quote marks

Scale:              H1 48/56 · H2 32/40 · H3 24/32 · Body 17/28 · Small 14/22
Spacing:            8pt grid · Section rhythm: 96px desktop / 64px tablet / 48px mobile
Max content:        1200px · Reading column: 680px · Full-bleed heroes allowed
Motion:             Slow fades 600–900ms · Gentle parallax on heroes
```

---

## URL Map (12 routes)

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | Build |
| `/about` | About Us | Build |
| `/ethos` | Our Ethos (Stoical Wisdom) | Build |
| `/story` | Our Story | Build |
| `/team` | The Team (overview) | Build |
| `/team/arden` | Arden — the Eagle | Build |
| `/team/roscoe` | Roscoe — the Stag | Build |
| `/team/zephyr` | Zephyr — the Rabbit | Build |
| `/team/kael` | Kael — the Raven | Build |
| `/journey` | Your Journey | Build |
| `/shop` | The Shop | Build (checkout deferred) |
| `/legal/privacy` | Privacy Policy | Build |

**Navigation (7 items):** Home | About Us | Our Ethos | Our Story | The Team | Your Journey | The Shop

---

## Workstream Breakdown

### STREAM 1 — Foundation (Wed 14 May, ~4 hours)

**Goal:** Deployable skeleton with design system, global components, all routes navigable.

Tasks:
- `npx create-next-app@latest` with TypeScript, Tailwind, App Router, ESLint
- Push to GitHub, connect to Vercel — live preview URL within 10 minutes
- Configure `tailwind.config.ts` with all design tokens from §1.2
- Install fonts via `next/font` (Cormorant Garamond + Inter)
- Build `<Header>` — logo (left), 7 nav links, cart icon (right), sticky on scroll, parchment bg
- Build `<Footer>` — 4-column: brand mark + founding quote | Sitemap | Newsletter | Social + contact. Forest-deep bg, parchment text
- Build reusable components: `<QuoteBlock>`, `<CharacterCard>`, `<ProductCard>`, `<SectionHero>`
- Create empty stub pages for all 12 routes — nav works end-to-end
- Set up image pipeline: create `/public/images/` structure, copy in available illustrations

**Milestone:** Navigate every page on live Vercel preview, header/footer/colours/fonts match spec.

---

### STREAM 2 — Content Pages (Thu 15 – Fri 16, ~10 hours)

**Goal:** 6 text-heavy pages fully styled with all copy from the narrative.

**Build order** (each page teaches a reusable component):

#### 2a. /ethos (Our Ethos) — ~2 hours
- Hero with Marcus Aurelius pull-quote, parchment bg, faint compass-rose illustration placeholder
- Opening passage — single-column reading block
- 2×2 virtue grid cards (Wisdom, Courage, Justice, Temperance) — each links to `/team/[name]`
- Vertical numbered list: 5 Stoic principles
- Closing "Why it matters today" reading block
- CTA band: Meet the team | Your journey | Shop the books
- **Proves:** Card component, numbered list, CTA band

#### 2b. /about (About Us) — ~1.5 hours
- Page heading + one-sentence promise
- Founding story snippet with "Read the full story →" link
- Two-column: book covers left, paragraphs right
- Three persona blocks (Young readers | Adults & gift-givers | Educators & teams)
- Promise bullet list
- CTA band
- **Proves:** Two-column layout, persona blocks

#### 2c. /story (Our Story) — ~1.5 hours
- Hero portrait placeholder (Spencer Hall, full-bleed)
- Opening signed paragraph
- Long-form single reading column with pull-quotes every ~300 words
- Styled parchment card: "The turning point"
- "What comes next" forward-look
- CTA band
- **Proves:** Long-form reading layout, styled card blocks

#### 2d. /journey (Your Journey) — ~2 hours
- Hero: single traveller illustration placeholder, full-bleed, H1 over lower third
- "The lone walker" opening block
- Four stacked encounter sections (Eagle, Stag, Rabbit, Raven) — alternating illustration sides
- "The shift" section — solitary to shared journey
- "The destination is the walk" closing block
- Large centred closing line: "You are not alone."
- CTA band
- **Proves:** Alternating section layout, large-type closing

#### 2e. /team overview — ~1.5 hours
- Hero: group illustration placeholder
- Intro paragraph
- 2×2 character card grid (Arden, Roscoe, Zephyr, Kael) — each links to `/team/[name]`
- The Lion callout (framed, not clickable)
- CTA band

#### 2f. /team/[slug] dynamic pages — ~2 hours
- Build as single `[slug]/page.tsx` with character data array
- Layout per character: hero portrait + animal spirit, identity card (name/epithet/virtue/animal/origin), profile paragraphs, animal spirit section, Stoic thread, pull-quote
- "Meet the others" — 3 small cards linking to remaining characters
- CTA band
- **Proves:** Dynamic routing, data-driven page template

**Milestone:** 6 pages look right on desktop + mobile at 375px. All copy from narrative pasted in.

---

### STREAM 3 — Home Page + Hero (Sat 17, ~4 hours)

**Goal:** The showcase page — first impression, premium feel, all sections from §2.

Sections (top to bottom):
1. **Hero** — full-bleed illustration placeholder, centred serif H1 (founding quote), gold-accent quote glyph, two CTAs: [Visit the shop] (gold) + [Read our story] (ghost)
2. **Promise band** — three pillars: Beautifully Illustrated · Timelessly Wise · For Every Age
3. **Two books** — side-by-side product cards (we have the book illustrations for these)
4. **Meet the team** — four character cards in a row, hover reveals epithet
5. **Ethos teaser** — two-column: short Stoic paragraph + "Explore our ethos" button
6. **Founder note** — Spencer portrait placeholder, signed quote, link to /story
7. **Newsletter** — full-width parchment band, "Walk with us" email capture
8. **Footer** (global)

Hero fade sequence: if time permits, build a gentle crossfade between 3–4 quotes. Otherwise, single beautiful hero image — perfectly acceptable for launch.

**Milestone:** Home page is the "wow" page. Premium, warm, considered.

---

### STREAM 4 — Shop Scaffold (Sat 17 – Sun 18, ~4 hours)

**Goal:** Shop pages built and looking premium, with product display working. Checkout deferred behind feature flag.

#### 4a. /shop listings page
- Hero band: H1 "Our stories are waiting for you" + sub
- **Books section:** 5-up grid — 2 live titles + 3 Coming Soon (diagonal black ribbon, white text "Coming Soon")
- **Prints section:** rows of 3 cards, 12 total (6 from Book 1, 6 from Book 2). Price £19.99 +p&p
- Filter pills: All | Books | Prints | Coming Soon
- Shipping note above footer
- "Add to bag" buttons present but with `NEXT_PUBLIC_SHOP_ENABLED` feature flag controlling checkout flow

#### 4b. Product detail template
- Two-column: cover image left (carousel if multiple), buy panel right
- Buy panel: title, price, p&p note, quantity, "Add to bag"
- Description block, sample spreads, quote block, specifications
- "Pairs well with" cross-sell section

#### 4c. Coming Soon state
- Three placeholder book cards — no price, no add-to-bag
- "Join the newsletter to be first to know" CTA

**Milestone:** Shop looks fully built and premium. Products browsable. Checkout path ready for Shopify/Stripe wiring.

---

### STREAM 5 — Polish, Legal & Launch (Sun 18 – Mon 19, ~6 hours)

#### 5a. Newsletter wiring (~1 hour)
- Mailchimp embedded form endpoint
- Single email field + "Walk with us" button
- Double opt-in (Mailchimp default)
- Success + error states styled
- GDPR consent line (en-GB)

#### 5b. Legal pages (~1 hour)
- `/legal/privacy` — UK e-commerce privacy policy template
- `/legal/terms` — Terms & conditions template
- `/legal/cookies` — Cookie policy
- `/legal/shipping` — Shipping & returns (placeholder until live)
- All branded, company name + contact details filled in
- Note: solicitor review needed before taking payments (Phase 2)

#### 5c. Cookie banner (~30 mins)
- Minimal component: Accept/Decline
- Essential cookies only by default
- Analytics gated behind consent
- en-GB language

#### 5d. Mobile responsive pass (~2 hours)
- Every page at 375px, 768px, 1024px, 1440px
- Fix any overflow, touch targets, readability
- Hero images: mobile crop variants
- Navigation: hamburger menu on mobile

#### 5e. Performance & accessibility (~1 hour)
- Lighthouse audit: target ≥85 mobile
- next/image for all images (WebP/AVIF)
- Font loading: self-hosted woff2, font-display: swap
- Alt text on all illustrations
- Keyboard navigation: visible focus ring (2px solid gold)
- Colour contrast check: gold on parchment for ≥18px text only

#### 5f. Deploy to production (~1 hour)
- Add custom domain in Vercel
- Set DNS records at registrar
- Verify HTTPS padlock
- Generate sitemap (next-sitemap)
- Submit to Google Search Console
- Test newsletter signup end-to-end
- Final proof-read of all pages

**Milestone:** Site live on custom domain. HTTPS. Newsletter working. All 12 pages rendering beautifully.

---

## Asset Requirements

### HAVE NOW
- 61 book illustrations (Images batch 1/) — can extract suitable ones for print cards and page accents
- Complete narrative copy for every page (production-ready from the docx)
- Design tokens, font choices, colour palette (all defined in §1.2)
- Book covers (referenced in narrative as image7.png, image8.png)
- Character illustrations (image3–6 in the docx — the four characters)

### NEED (can use placeholders, swap in later)
- **Hero illustrations** (3–4): cinematic wide shots for Home, Journey, Team, Story heroes
- **Spencer Hall portrait**: for /story hero and Home founder note section
- **High-res character portraits** (4): Arden, Roscoe, Zephyr, Kael — 3:4 ratio with animal spirits
- **Print-quality images** (12): 6 from each book for the prints section
- **Brand mark/logo**: SVG + PNG (light + dark variants)
- **Favicon set**: 16/32/180/512
- **OpenGraph cards**: 1200×630 per page

### Placeholder Strategy
For any missing assets, we build with:
- Warm parchment gradient cards with the character/section name in serif type
- Correct aspect ratios so real images drop in without layout changes
- Alt text already written and in place

---

## Open Decisions for Spencer

These need answers but **do not block the build** — we design for the full spec and flag these:

1. **Domain name** — has Spencer purchased it? What is it?
2. **Logo/brand mark** — does a final version exist as SVG?
3. **Commerce platform** — Shopify Lite (recommended, £19/mo) vs Stripe Checkout?
4. **Newsletter provider** — Mailchimp vs ConvertKit? Need list ID.
5. **Print selection** — which 12 illustrations for the prints? Signed or unsigned?
6. **Free shipping threshold** — £40 UK free shipping, yes or no?
7. **Coming Soon books** — working titles for the 3 placeholder volumes?
8. **Character label replacements** — Strength/Power/Agility/Guile → Arden/Roscoe/Zephyr/Kael on illustrations. Does Spencer need the illustrator for this?
9. **Legal entity details** — trading name, registered address, VAT status for footer + checkout

---

## Daily Schedule

| Day | Focus | Hours | Deliverable |
|-----|-------|-------|-------------|
| **Wed 14** | Foundation: scaffold, tokens, global components, route stubs | 4–5h | Skeleton deployed to Vercel preview |
| **Thu 15** | Content pages: /ethos, /about, /story | 5–6h | 3 pages fully styled |
| **Fri 16** | Content pages: /journey, /team, /team/[slug] × 4 | 5–6h | All 6 content pages complete |
| **Sat 17** | Home page hero + Shop scaffold | 6–8h | Home page wow-factor + shop browsable |
| **Sun 18** | Newsletter, legal, cookie banner, mobile pass, polish | 6–8h | Feature-complete, responsive |
| **Mon 19** | Domain, deploy, final audit, go live | 2–3h | **LIVE on custom domain** |

**Total estimated:** 28–36 hours across 5.5 days.

---

## Session Workflow (How We Work Together)

Each session, we:
1. Check the build map — what's next
2. I generate the code for the next component/page
3. You review, we iterate
4. Push to GitHub → auto-deploys to Vercel preview
5. Check on mobile, fix issues
6. Move to next item

I can generate complete page files with all the copy already embedded from Spencer's narrative, so the bulk of the work is styling and layout rather than content creation. The narrative document is our single source of truth.

---

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| Missing hero images | Pages look incomplete | Warm placeholder cards, correct dimensions, swap-ready |
| Domain not purchased | Can't go live on Monday | Deploy to *.vercel.app, add domain when ready |
| Spencer changes copy | Rework | Copy is hard-coded in JSX for now; CMS migration is Phase 3 |
| Commerce platform not decided | Shop checkout blocked | Feature flag — shop displays products, checkout deferred |
| Mobile issues surface late | Rushed fixes | Test at 375px after every page, not just at the end |

---

*This document is the source of truth for the build. Updated as we progress.*
