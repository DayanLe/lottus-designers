---
name: Lottus Designers
description: Luxury wedding and event design studio in Medellín, Colombia — bilingual EN/ES marketing site.
colors:
  gold-accent: "#C8A76B"
  champagne: "#F4E8D4"
  warm-white: "#FAF9F7"
  white: "#FFFFFF"
  logo-grey: "#A3A092"
  rich-black: "#222222"
  charcoal: "#1E1E1E"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.25em"
rounded:
  xs: "2px"
  full: "9999px"
spacing:
  section-y: "6rem"
  section-y-lg: "8rem"
  card-padding: "2rem"
  grid-gap: "1.5rem"
  grid-gap-lg: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.gold-accent}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.xs}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.charcoal}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.xs}"
    padding: "16px 32px"
  button-secondary-hover:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.rich-black}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.rich-black}"
    rounded: "{rounded.xs}"
    padding: "{spacing.card-padding}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.rich-black}"
    rounded: "{rounded.xs}"
    padding: "12px 16px"
---

# Design System: Lottus Designers

## 1. Overview

**Creative North Star: "The Botanical Gallery"**

Lottus Designers presents itself the way a fine botanical gallery presents a sculptural installation: cinematic imagery given room to breathe, a single gold thread running through every section, and text that describes outcomes rather than shouting adjectives. The system is warm-luxury, not cold-minimalist — champagne and gold carry the celebratory heart of the brand, while a near-black charcoal grounds the cinematic sections (hero, video reel, CTA banner, footer) so the gold reads as precious rather than default.

This system explicitly rejects the generic wedding-planner-template look: no cursive script fonts, no pastel confetti palettes, no stock-photo rose petals, no cluttered same-size card grids that feel like a DIY invitation builder. Every surface should read as a professional design studio's own portfolio, not a template for hire. Motion carries a cinematic, orchestrated feel (slow 500ms transitions, staggered scroll reveals) — never bouncy, never abrupt.

**Key Characteristics:**
- Warm-neutral base (`warm-white`, `champagne`) with a single gold accent doing nearly all the color work
- Charcoal/rich-black sections punctuate the warm base for cinematic, gallery-lit moments
- Playfair Display serif for anything that needs to feel designed; Inter sans for anything that needs to feel functional
- Near-square corners (2px radius) everywhere — no soft rounded-2xl cards
- Flat-by-default surfaces; shadow appears only as a response to scroll or hover

## 2. Colors

The palette is a warm-neutral base with one precious accent; charcoal sections exist to make that accent glow rather than compete with it.

### Primary
- **Gold Accent** (#C8A76B): The studio's signature. Used for eyebrow labels, primary CTAs, hover states, icon accents, dividers, and any moment that should register as "the brand." Never exceeds roughly 10% of any given section's surface area — its rarity is what keeps it precious.

### Secondary
- **Champagne** (#F4E8D4): The romantic counterpart to gold. Used for headline text on dark charcoal backgrounds (hero, cinematic reel, CTA banner, footer headings) and as a soft tint behind icon containers (`champagne/30`–`/40`).

### Neutral
- **Warm White** (#FAF9F7): The primary light-mode background; also doubles as text-on-charcoal for body copy on dark sections.
- **White** (#FFFFFF): Card and form surfaces sitting on top of the warm-white page background, giving cards a fractional lift without a shadow.
- **Logo Grey** (#A3A092): Borders, dividers, and secondary label text on light sections (`logo-grey/10`–`/25` for hairline borders, `/60` for muted body text — never lighter, to protect contrast).
- **Rich Black** (#222222): Primary body and heading text color on light sections.
- **Charcoal** (#1E1E1E): The dark-section background — hero, cinematic reel, stats band, CTA banner, footer, mobile nav drawer.

### Named Rules
**The One Accent Rule.** Gold Accent is the only saturated color in the system. Every other color is a neutral (warm-white → charcoal ramp) or a desaturated warm tint (champagne). If a new element needs emphasis, reach for gold before reaching for a new hue.

**The Charcoal Punctuation Rule.** Charcoal sections are reserved for cinematic, declarative moments (hero, video reel, stats, final CTA, footer) — never for routine content sections like services or testimonials, which stay on warm-white/white so charcoal keeps its impact.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A classic editorial pairing — Playfair's high-contrast serif strokes carry every heading and give the site its "designed by hand" feeling, while Inter stays out of the way for anything functional (body copy, labels, forms, nav).

### Hierarchy
- **Display** (medium 500, `clamp(2.5rem, 5vw, 3.75rem)`, line-height 1.1): Hero H1 and major section headlines (H2s at `text-3xl md:text-4xl lg:text-5xl`). Tight tracking (`tracking-tight`), often paired with an italic gold-accent span for emphasis within the line.
- **Headline** (semibold 600, `1.25–1.5rem`, line-height 1.2): Card titles, form section titles, testimonial names.
- **Body** (light 300, `0.75–0.875rem`, line-height 1.6): Paragraph copy at `text-rich-black/60` on light sections, `text-logo-grey` on dark sections. Capped conceptually around 65–75ch via `max-w-2xl`/`max-w-3xl` containers.
- **Label** (semibold–bold 600–700, `0.625–0.75rem`, letter-spacing `0.18em–0.3em`, uppercase): Eyebrow tags, nav links, button text, form field labels, stat captions. Always uppercase, always wide-tracked — this is the system's one uppercase register.

### Named Rules
**The Serif-Speaks Rule.** Playfair Display is reserved for anything meant to feel considered — headings, quotes, client names, prices/step numbers. Inter never appears in a heading role, and Playfair never appears in a paragraph longer than a sentence or two.

## 4. Elevation

The system is flat by default; shadow is used exclusively as feedback for state, not as ambient decoration. A resting card, input, or nav bar carries no shadow at all — depth appears only when the user scrolls past it or hovers over it.

### Shadow Vocabulary
- **Scroll Response** (`shadow-sm`): Appears on the navbar only after scrolling past 50px, alongside a blurred warm-white background — signals "you've left the hero."
- **Hover Lift** (`shadow-md` / `shadow-lg`): Appears on service and reason cards on hover, paired with a gold-accent border brightening from `/15` to `/40` — signals interactivity, not permanent elevation.
- **Anchored Surface** (`shadow-xl`): Reserved for the single most important surface on a page at a time — the contact/booking form card — to visually anchor it as the primary action.

### Named Rules
**The Flat-By-Default Rule.** No card, button, or input ships with a resting shadow. If a shadow is visible and nothing is hovered or scrolled, it's a bug.

## 5. Components

Every interactive surface should feel soft and inviting to approach despite its precise, near-square geometry — generous padding, gentle 300–500ms transitions, and a gold glow on approach rather than a hard color swap.

### Buttons
- **Shape:** Near-square corners (`rounded-xs`, 2px radius) on every button variant — never fully rounded except icon-only circular buttons (carousel arrows, social icons).
- **Primary:** Gold Accent background (#C8A76B), charcoal or rich-black text, `py-4 px-8`, uppercase label at `0.25em` tracking. Hover shifts background to Champagne (#F4E8D4), never darkens.
- **Secondary / Ghost:** Transparent background, 1px border in the section's foreground color (warm-white on dark sections, rich-black on light sections), same padding and label treatment. Hover fills the border color as the new background and inverts the text color.
- **Transition:** All button state changes use `duration-500` — deliberately unhurried, never a snap.

### Cards
- **Corner Style:** `rounded-xs` (2px), matching buttons.
- **Background:** White on warm-white page sections, so the card reads as a fractional lift without needing a shadow.
- **Border:** 1px `logo-grey/10–15` at rest, brightening to `gold-accent/30–40` on hover.
- **Shadow Strategy:** None at rest; `shadow-md`/`shadow-lg` on hover only (see Elevation).
- **Internal Padding:** `p-8` (32px) — generous enough that content never feels cramped against the border.
- **Signature detail:** A 2px gold accent bar slides in from the left edge on hover (`ServicesSection`), or an icon circle inverts from a soft champagne tint to solid gold (`WhyChooseUs`) — one small animated reveal per card, never more.

### Inputs / Fields
- **Style:** White background, 1px `logo-grey/25` border, `rounded-xs`, `py-3 px-4`, light-weight (300) body text.
- **Focus:** Border shifts to solid Gold Accent; no glow ring, no background change — the border color change is the entire focus signal.
- **Label:** Uppercase, `logo-grey`, bold, `0.625rem`, `tracking-widest`, sits above the field rather than floating inside it.
- **Error:** Soft red background (`bg-red-50`) with `red-200` border and `red-700` text — the one deliberate departure from the gold/neutral palette, reserved strictly for error messaging.

### Navigation
- **Style:** Fixed header, transparent + `py-8/10` over the hero, transitioning at 50px scroll to a translucent warm-white bar (`backdrop-blur-md`, `py-4`, `shadow-sm`, hairline bottom border).
- **Links:** Uppercase label typography with a gold underline that grows from 0 to full width on hover (`w-0 → w-full`, 300ms).
- **Active language toggle:** Bold gold text for the active language, muted (`/55`) for the inactive one, separated by a thin vertical divider.
- **Mobile:** Full-screen charcoal drawer sliding in from the right (500ms, custom cubic-bezier), nav links promoted to large serif type, staggered fade-in per link.

## 6. Do's and Don'ts

### Do:
- **Do** keep Gold Accent (#C8A76B) to a single-digit percentage of any section's surface area — its rarity is the point.
- **Do** use `rounded-xs` (2px) on every rectangular surface — buttons, cards, inputs, form containers.
- **Do** let shadows appear only in response to hover or scroll state; nothing carries a resting shadow.
- **Do** pair every headline with a matching, fully-native Spanish translation — bilingual parity is non-negotiable per PRODUCT.md.
- **Do** use Playfair Display for anything meant to feel designed (headings, quotes, names) and Inter for anything functional (body, labels, forms).
- **Do** reserve charcoal/rich-black backgrounds for cinematic, declarative moments — hero, video reel, stats band, final CTA, footer.

### Don't:
- **Don't** introduce cursive/script fonts, pastel confetti palettes, or stock rose-petal imagery — the generic wedding-template look this site explicitly rejects.
- **Don't** use `border-left`/`border-right` colored stripes as a card accent; the one exception already in the system is the italic pull-quote block in ContactSection, which is a deliberate, singular callout, not a repeatable pattern.
- **Don't** add a second saturated accent color alongside gold — new emphasis needs go to gold, not a new hue.
- **Don't** round corners beyond `rounded-xs` on rectangular surfaces, or the near-square precision of the system dissolves into generic SaaS softness.
- **Don't** ship bouncy or elastic easing; motion stays exponential-out and unhurried (300–500ms).
- **Don't** gate section content behind scroll-triggered reveal animations without an already-visible default — every section must render fully even if motion never fires (reduced motion, headless renders).
