# Greyline Homepage Rebuild Brief

This brief converts the supplied `greyline_codex_website_rebuild_prompt.md` into a project-local implementation plan. Use it with `docs/reference-website-analysis.md` when rebuilding the current Greyline Landscaping website.

## Primary Goal

Redesign the existing Greyline Landscaping Melbourne homepage so it follows the rhythm of the Supreme Green reference site while staying fully Greyline-branded.

The target is a conversion-focused local service website that gets homeowners to call for a free quote.

## Business Details

- Business name: Greyline Landscaping Melbourne
- Descriptor: Greyline Landscapes - Landscaping Melbourne
- Website: `greylinelandscaping.com`
- Phone: `0468 107 217`
- Phone link: `tel:0468107217`
- Primary CTA: `Call 0468 107 217`
- Secondary CTA: `Request a Free Quote`

## Service Areas

- Mornington Peninsula
- Bayside
- Mornington
- Mt Martha
- Mt Eliza
- Frankston
- Seaford
- Brighton
- Hampton
- Beaumaris
- Surrounding suburbs

## Services

- Garden Makeovers
- Garden Design
- Garden Design & Construction
- Turf Installation
- Retaining Walls
- Paving
- Decking
- Drainage Solutions

Supporting services include site clean-up, soil preparation, garden bed preparation, turf area preparation, planting, mulching, edging, levelling, clean project finishing, and final site clean-up.

## Positioning

Greyline helps Mornington Peninsula and Bayside homeowners turn tired, patchy, muddy, unfinished, or underused outdoor areas into cleaner, greener, more functional yards.

Customer promise:

- Clear quotes before we start.
- Updates while we work.
- A clean finish when we leave.

Trust signals:

- 5-Star Rated
- Fully Insured
- Free Quotes
- Local Team

## Critical No-Pricing Rule

Do not show fixed prices anywhere.

Remove or avoid:

- `from $X`
- package pricing
- product pricing
- pricing cards
- price tables
- visible service costs

Replacement pricing copy:

> Every yard is different. Landscaping costs depend on access, materials, drainage, retaining needs, turf area, preparation work and project scope. Call Greyline Landscaping Melbourne for a free quote based on your property.

## Copy Direction

- Speak to the homeowner's frustration: patchy lawn, tired beds, muddy areas, underused outdoor space, unclear project scope.
- Sell the transformation: cleaner yard, usable weekends, less uncertainty, finished outdoor space.
- Keep language simple, local, and specific.
- Avoid generic luxury filler and vague "quality service" claims.
- Keep the offer simple: call for a free quote.

## Exact Hero Copy

Eyebrow:

```text
MORNINGTON PENINSULA & BAYSIDE
```

Headline:

```text
YOUR YARD CALLED.
IT WANTS ITS WEEKENDS BACK.
```

Subheadline:

```text
Peninsula & Bayside Landscaping That Actually Gets Done
```

Supporting copy:

```text
Patchy lawn, tired garden beds, drainage issues or an outdoor space you never use? Greyline turns it into a cleaner, greener yard - with clear quotes, updates while we work and a clean finish when we leave.
```

Hero CTAs:

```text
Call 0468 107 217
Get a Free Quote
```

Hero trust row:

```text
5-Star Rated | Fully Insured | Free Quotes | Local Team
```

## Design Tokens

Use the Supreme Green structure as inspiration, adapted to Greyline.

```css
--color-charcoal: #2B2B2B;
--color-near-black: #1F1F1F;
--color-deep-green: #5E744F;
--color-dark-green: #3F5637;
--color-primary-green: #1F6B3A;
--color-fresh-green: #4CAF50;
--color-olive-green: #5B6334;
--color-reference-gold: #C6BF70;
--color-gold: #B79B55;
--color-brown-cta: #9D5324;
--color-light-green-grey: #EEF2EA;
--color-soft-grey: #E8E8E4;
--color-white: #FFFFFF;
```

Style rules:

- White content sections.
- Olive/deep green bands.
- Charcoal body text.
- White text over hero and image panels.
- Gold/beige accents for small highlights and stars.
- Brown-orange CTA buttons.
- Deep green secondary CTA buttons.
- Minimal shadows.
- 3px to 4px button/input radius.
- Clean sans-serif typography using existing font, Helvetica Neue, Helvetica, Arial, or Inter fallback.

Avoid:

- Grey textured borders.
- Heavy drop shadows.
- Black full-page backgrounds.
- Decorative fonts.
- Cheap tradie styling.
- Too many colours.
- Public prices.
- Fake testimonials.
- Fake accreditation logos.
- Cluttered icons.

## Required Homepage Order

1. Full-width video or image hero
2. Olive intro band with watermark
3. Portfolio grid
4. Credential / trust strip
5. Three-panel process section
6. Services section
7. Reviews / social proof section
8. Follow Our Work image strip
9. Second trust strip
10. Dark green quote form section
11. Service areas section
12. FAQ section
13. Final CTA band
14. Footer

## Section Requirements

### 1. Hero

- Full-bleed background video if a Greyline video exists; otherwise use the strongest Greyline image.
- Never use Supreme Green media.
- Never use the small sprinkler image as hero.
- Header overlays the hero.
- Logo top-left, nav top center/right, phone CTA top-right.
- Mobile keeps a visible phone CTA.
- Navigation: Home, Services, Portfolio, Process, Reviews, Contact.
- Use dark overlay around 0.25-0.45 opacity.
- Desktop height: 90vh to 100vh.
- Mobile height: 70vh to 85vh.

### 2. Olive Intro Band

Heading:

```text
We Turn Tired Yards Into Clean, Usable Outdoor Spaces
```

Copy:

```text
Greyline Landscaping Melbourne helps homeowners across Mornington Peninsula and Bayside transform patchy lawns, tired garden beds, drainage problems and unfinished outdoor areas into cleaner, greener spaces that are easier to enjoy.
```

Second paragraph:

```text
From garden makeovers and turf installation to retaining walls, paving, decking, drainage and complete garden design and construction, we keep the process clear from quote to clean finish.
```

CTA:

```text
CALL FOR A FREE QUOTE
```

### 3. Portfolio Grid

Heading:

```text
OUR PORTFOLIO
```

Subheading:

```text
Real landscaping upgrades for cleaner, greener, more usable outdoor spaces.
```

Use these images if present:

- `After-10.jpg`
- `WhatsApp-Image-2025-06-27-at-16.49.43_685fd646.jpg`
- `multi-tier-concrete-sleeper-terracing.png`
- `Landscaping-Doncaster-qzywoxb5ytdktmpgz1qfnj6s7wlbpo1m4dk0m514x4.jpg`
- `eHd1XncRnvOwLjCmvPisz1MpaglnYjT3z4qKoCGc.jpg`
- `AdobeStock_491701637.webp`

Potential captions:

- Fresh turf and garden edging
- Finished timber decking
- Tiered retaining wall landscaping
- Paving and garden makeover
- Raised garden beds and backyard planting
- Lawn preparation and turf support

### 4. Trust Strip

Text:

```text
Greyline Landscaping Melbourne is a local landscaping team for Mornington Peninsula and Bayside homeowners.
```

Badges:

- 5-Star Rated
- Fully Insured
- Free Quotes
- Local Team

### 5. Three-Panel Process

Panel 1:

- Title: `CONSULT`
- Copy: `Tell us what you want fixed - patchy lawn, tired garden beds, drainage issues, retaining walls, paving, decking or a full outdoor makeover.`
- Button: `Call Now`

Panel 2:

- Title: `DESIGN`
- Copy: `We look at your yard, access, materials, drainage, retaining needs, turf area and project scope so the plan makes sense before work begins.`
- Button: `Plan Your Yard`

Panel 3:

- Title: `BUILD`
- Copy: `We complete the work with updates along the way and a clean finish when we leave.`
- Button: `Get a Quote`

### 6. Services

Heading:

```text
Landscaping Services Across Mornington Peninsula & Bayside
```

Intro:

```text
From small upgrades to full outdoor transformations, Greyline Landscaping Melbourne helps homeowners create cleaner, more functional yards with clear quoting and a professional finish.
```

Service cards, in order:

- Garden Makeovers
- Garden Design
- Garden Design & Construction
- Turf Installation
- Retaining Walls
- Paving
- Decking
- Drainage Solutions

Rules:

- No prices.
- No packages.
- Benefit-led copy.
- Consistent image ratios.
- Clean grid.
- Subtle hover effect.
- CTA links use `tel:0468107217` unless a working quote form anchor exists.

### 7. Reviews / Social Proof

Heading:

```text
What Local Homeowners Want From A Landscaper
```

If real Greyline reviews exist, use them. If not, do not invent names, platforms, ratings, or testimonials.

Fallback proof copy:

```text
Homeowners choose Greyline because the process is simple: clear quotes before work starts, updates while the job is underway and a clean finish when the team leaves.
```

Trust cards:

- Fully Insured
- Free Quotes
- Local Team
- Clear Quotes
- Updates While We Work
- Clean Finish

### 8. Follow Our Work

Heading:

```text
Follow Our Work
```

Use a horizontal strip or compact grid of real Greyline images. Do not invent an Instagram URL.

### 9. Second Trust Strip

Use real accreditation logos if present. Otherwise use text badges:

- 5-Star Rated
- Fully Insured
- Free Quotes
- Local Team

### 10. Quote Form

Heading:

```text
Ready To Get Your Yard Sorted?
```

Subheading:

```text
Tell us what needs fixing and we'll help you take the next step.
```

Supporting copy:

```text
Prefer to talk? Call 0468 107 217.
```

Fields:

- Name
- Phone
- Email
- Suburb
- Service Needed
- Message / Project Details

Service dropdown:

- Garden Makeover
- Garden Design
- Garden Design & Construction
- Turf Installation
- Retaining Walls
- Paving
- Decking
- Drainage Solutions
- Not Sure Yet

CTA:

```text
Request a Free Quote
```

Privacy text:

```text
Your details are used only to respond to your landscaping enquiry.
```

If the current site already has a working form, preserve backend behavior and update styling/copy only.

### 11. Service Areas

Heading:

```text
Landscaping Across Mornington Peninsula & Bayside
```

Copy:

```text
Greyline Landscaping Melbourne works with homeowners across Mornington Peninsula, Bayside and surrounding suburbs, helping transform tired lawns, unfinished gardens and underused outdoor areas into cleaner, more functional spaces.
```

CTA:

```text
Call 0468 107 217 for a free local landscaping quote.
```

### 12. FAQ

Include:

- Do you offer free quotes?
- Do you show fixed prices online?
- What areas do you service?
- What landscaping services do you offer?
- Can you help with a tired or patchy backyard?

### 13. Final CTA

Text:

```text
FREE QUOTE - Get your yard sorted.
```

Supporting line:

```text
Mornington Peninsula & Bayside landscaping that actually gets done.
```

Phone:

```text
0468 107 217
```

### 14. Footer

- Olive/deep green background.
- Greyline logo or business name.
- Descriptor.
- Phone.
- Website.
- Services.
- Service areas.
- Trust signals.
- Free quote CTA.
- Social icons only if real links exist.

## SEO Requirements

Homepage title:

```text
Greyline Landscaping Melbourne | Mornington Peninsula & Bayside Landscapers
```

Meta description:

```text
Greyline Landscaping Melbourne provides garden makeovers, turf installation, retaining walls, paving, decking, drainage and garden design across Mornington Peninsula and Bayside. Call for a free quote.
```

Use naturally:

- landscaping Mornington Peninsula
- landscaping Bayside
- landscaper Mornington
- landscaper Mt Martha
- landscaper Mt Eliza
- turf installation Mornington Peninsula
- retaining walls Mornington Peninsula
- garden makeovers Bayside
- paving Mornington Peninsula
- decking Mornington Peninsula
- drainage solutions Mornington Peninsula

Structured data if supported:

- Business name: Greyline Landscaping Melbourne
- URL: `https://greylinelandscaping.com`
- Telephone: `0468 107 217`
- Area served: Mornington Peninsula and Bayside
- Service type: Landscaping
- Do not invent a street address.

## Animation And Interaction

- Subtle fade-in on hero content.
- Portfolio hover zoom.
- Process panel hover zoom or overlay lift.
- Buttons darken or shift slightly on hover.
- Smooth anchor scrolling if already supported.
- No heavy animation libraries.
- Respect `prefers-reduced-motion`.

Suggested transition:

```css
transition: transform 250ms ease, opacity 250ms ease, background-color 200ms ease;
```

## Technical Requirements

- Use semantic HTML.
- Maintain accessible heading hierarchy.
- All phone CTAs use `tel:0468107217`.
- Buttons are keyboard-accessible.
- Images have meaningful alt text.
- Lazy-load below-fold images.
- Do not lazy-load hero media if it hurts LCP.
- Preserve current routing.
- Preserve form functionality.
- Do not add unnecessary dependencies.
- Run formatter/linter/build if available.

## Content Cleanup Checklist

- Remove fixed prices and package prices.
- Replace conflicting phone numbers.
- Remove wrong suburbs.
- Strengthen weak CTAs.
- Remove outdated services.
- Remove unsupported claims.
- Do not use fake testimonials.
- Do not use fake accreditations.

## Acceptance Criteria

The homepage should resemble the Supreme Green reference in structure:

- Full-width video/image hero with overlay.
- Overlaid header.
- Centered hero headline.
- Lower hero trust elements.
- Olive intro band.
- Early portfolio grid.
- Trust strip.
- Three image-backed process panels.
- Review/proof section.
- Follow Our Work image strip.
- Dark green quote form section.
- Olive/deep green footer.

The page must be Greyline-specific:

- Greyline logo.
- Greyline colours.
- Greyline services.
- Greyline images.
- Greyline phone number.
- Greyline service areas.
- Quote-first strategy.
- No public pricing.
