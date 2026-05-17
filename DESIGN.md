---
name: GLC Homepage Design System
version: 0.1.0
source:
  css: colors_and_type.css
  reference: https://stitch.withgoogle.com/docs/design-md/overview
colors:
  primary: "#006241"
  primary-accent: "#00754A"
  primary-dark: "#1E3932"
  primary-uplift: "#2B5148"
  primary-light: "#D4E9E2"
  gold: "#CBA258"
  gold-light: "#DFC49D"
  gold-surface: "#FAF6EE"
  background: "#F2F0EB"
  surface: "#FFFFFF"
  surface-muted: "#EDEBE9"
  neutral-cool: "#F9F9F9"
  text: "rgba(0, 0, 0, 0.87)"
  text-muted: "rgba(0, 0, 0, 0.58)"
  text-on-dark: "#FFFFFF"
  text-on-dark-muted: "rgba(255, 255, 255, 0.70)"
  error: "#C82014"
  warning: "#FBBC05"
  border: "#E7E7E7"
  input-border: "#D6DBDE"
typography:
  body:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body-large:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "-0.16px"
  h1:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.16px"
  h2:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.16px"
  display:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "50px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.16px"
  serif:
    fontFamily: "Lora, Iowan Old Style, Georgia, serif"
  script:
    fontFamily: "Kalam, Comic Sans MS, cursive"
spacing:
  scale: ["4px", "8px", "16px", "24px", "32px", "40px", "48px", "56px", "64px"]
  gutter:
    sm: "16px"
    md: "24px"
    lg: "40px"
rounded:
  input: "4px"
  card: "12px"
  button: "50px"
  circle: "50%"
shadows:
  card: "0 0 0.5px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.24)"
  nav: "0 1px 3px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)"
motion:
  fast: "0.2s"
  medium: "0.3s"
  easeOut: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
components:
  button:
    height: "auto"
    padding: "7px 16px"
    radius: "{rounded.button}"
    font: "{typography.body}"
  card:
    background: "{colors.surface}"
    radius: "{rounded.card}"
    shadow: "{shadows.card}"
    padding: "24px"
  input:
    background: "{colors.surface}"
    border: "{colors.input-border}"
    radius: "{rounded.input}"
    padding: "12px"
---

# Design System

## Overview
GLC is an education and consulting homepage for public-sector, corporate, and small-business training programs. The visual language should feel established, warm, credible, and service-oriented rather than experimental or decorative.

Use the green system as the institutional brand signal, the warm neutral canvas as the default page environment, and gold only for premium emphasis, long-history cues, or alumni-style highlights. The interface should support scanning across program pages, trust sections, and consultation calls to action.

## Colors
- **Primary green** (`#006241`): Brand wordmark, main headlines, high-authority moments.
- **Accent green** (`#00754A`): Primary CTAs, active navigation states, links, success indicators.
- **House green** (`#1E3932`): Hero bands, footer, dark CTA sections, large institutional surfaces.
- **Warm neutral** (`#F2F0EB`): Default page background.
- **White** (`#FFFFFF`): Cards, navigation, content panels.
- **Ceramic** (`#EDEBE9`): Secondary bands and quiet dividers.
- **Gold** (`#CBA258`): Limited emphasis for heritage, badges, and high-value proof points.
- **Error red** (`#C82014`): Validation and destructive/error states only.

Do not turn the site into a one-note green page. Alternate warm backgrounds, white content surfaces, and dark green bands so the site feels calm and readable.

## Typography
- Use **Inter** as the primary UI and body font.
- Use **Lora** sparingly for editorial emphasis, brand warmth, or hero accent words.
- Use **Kalam** only for rare handwritten annotation moments. It should not appear in navigation, body copy, or CTAs.
- Body copy should remain generous and readable, usually `16px` with `1.5` line height or `19px` with `1.75` line height for lead text.
- Hero headings may exceed the tokenized base scale when needed, but must preserve the established weight, tight tracking, and calm institutional tone.

## Layout
- Use a max content width around `1180px` for primary page sections.
- Use `40px` horizontal desktop padding and reduce to `24px` or `16px` on narrower screens.
- Prefer full-width section bands over nested page cards.
- Use cards for repeated items such as programs, process steps, client groups, and proof points.
- Keep dense information organized into grids, tables, or compact cards rather than marketing-heavy empty space.

## Elevation & Depth
- Use `--shadow-card` for cards and repeated content blocks.
- Use `--shadow-nav` for the sticky header.
- Avoid heavy shadows, glass effects, blurred backgrounds, decorative orbs, or floating page sections.
- Depth should clarify hierarchy, not create a luxury-product aesthetic.

## Shapes
- Cards use a `12px` radius in the current CSS system.
- Buttons use pill-shaped `50px` radius.
- Inputs use a restrained `4px` radius.
- Do not introduce unrelated rounded systems unless the CSS tokens are updated first.

## Components
- **Navigation**: Sticky white header, brand mark at left, page links in the center, understated account/action area at right. Active link uses accent green and a bottom border.
- **Buttons**: Primary actions use accent green on light surfaces. Dark-band actions use white fill or white outline variants. Button labels should be short, concrete, and action-oriented.
- **Cards**: White background, card shadow, green accent line or strong heading. Use for repeated content, not for entire page sections.
- **CTA bands**: Use house green or accent green with white text. Keep CTAs focused on consultation, curriculum viewing, or contact.
- **Forms and inputs**: White fields, restrained border, accent green focus, red tint for invalid states, green tint for valid states.

## Do's and Don'ts
- Do use existing CSS variables from `colors_and_type.css` before adding new values.
- Do preserve the institutional green and warm-neutral brand character.
- Do make Korean text legible, correctly encoded, and professional.
- Do keep public-sector trust signals visible and specific.
- Do not use generic blue SaaS defaults, purple gradients, beige-only palettes, or dark slate dashboards.
- Do not add decorative blobs, bokeh, or unrelated illustration styles.
- Do not use gold as a general CTA color.
- Do not create new component styles without adding the matching token/rationale here.

## Responsive Behavior
- Desktop layouts may use 2-4 column grids when content is scannable.
- Tablet layouts should collapse to 2 columns where needed.
- Mobile layouts should collapse to one column, preserve at least `16px` side padding, and keep CTAs large enough for touch.
- Navigation must remain usable on mobile before launch; if the current desktop nav overflows, replace it with a compact menu pattern.
- Text must not overlap or require horizontal scrolling.

## Agent Prompt Guide
When generating or editing UI for this project, follow this instruction:

> Build in the GLC homepage design system. Use `colors_and_type.css` and `DESIGN.md` as the source of truth. Preserve the warm institutional green palette, Inter/Lora typography, full-width section bands, concise CTA language, and card patterns for repeated content. Avoid generic SaaS styling, gradients, decorative blobs, and untracked colors.
