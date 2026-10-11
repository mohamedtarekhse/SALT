# passthesalt.com — Home page brief

Source: `https://passthesalt.com/` (WordPress theme `salt-site`). Clone target: the site homepage.

## Evidence (do not edit)
- `home.html` — rendered homepage markup (header, hero, featured work, awards, Press, footer).
- `main.css` — theme stylesheet (tokens, type scale, hero geometry, marquees).
- `main.js` — GSAP + Swiper behaviour used for the hero pin and carousels.

## Page structure (single `data-theme` stack)
1. **Header** — sticky, `--bg-color` background, centred SALT mark in an `h1`. On the home page the header logo starts at `opacity:0` and fades in only once the hero logo animation finishes (`.logo-in-place`). Burger toggles a slide-out nav panel that is hidden at `md` and up.
2. **Hero** — `data-theme="default"`. A 200lvh scroll track with a sticky 100lvh stage: a centred video square (`--hero-square-height`) expands to full width while two headline lines ("Where Production" / "Gets Creative") slide up into a clipped region; the SALT mark scales down into an in-header position. Ends with the intro copy, the cycling words strip, and a "Let's go →" pill.
3. **Featured Work** — `data-theme="beige"`. Section header + a horizontal carousel of 8 work tiles; hover reveals a 6×6 pixel-grid wipe and the project title; hover zones (desktop) advance/reverse. "See all work" pill.
4. **Awards** — `data-theme="default"`. Section header + intro copy, then a `--move-speed:70s` CSS marquee of 16 unique award tiles (silver/gold/platinum/winner medals + organiser logo + category).
5. **Press** — `data-theme="default"`. Section header + a 3-slide testimonial carousel (image + quote + attribution) with prev/next arrows.
6. **Footer** — midnight background. A steel "Work With Us" marquee linking to `/contact#work-with-us`, then the large SALT logo (steel fill), three link columns, a Pinch sister-agency link, and the legal line.

## Design tokens (`src/components/sites/salt/salt.css`)
- eggshell `#FDFAF1`, beige `#E2D7CE`, midnight `#15171A`, cream `#FDFAF1`, steel `#323A40`, mist `#A3E1EA`, plum `#5D0F3E`, pink `#FF99AD`, hero plum text `#350016`.
- `--container-padding: 60px` (30px ≤767, 20px ≤500); `--section-gap: 75px` (25px mobile); `--header-height: 78px`; `--header-height-hero: 79px`; `--hero-square-height: calc(100lvh - 2*header)`.
- Type: Integral for headings (`.t-h1`–`.t-h4`), Good Sans for body (`.t-lg`, `.t-md`, `.t-body`, `.t-sm`); `.t-section-header` = 1px top rule, 12px uppercase, 0.1em tracking.
- Grid: 12 columns, 10px gap (30px at `md`).

## Interaction notes
- The hero animation is implemented with `position:sticky` + a scroll-progress calculation in `hero.tsx` (rather than GSAP), driving the media square, the two headline rows, and the logo scaling. Progress is measured against `2 × innerHeight` of scroll.
- Carousels use native horizontal scroll with `scroll-snap` plus hover zones (work) / arrow buttons (Press).

## Assets
All rendered assets live under `public/sites/salt/` (`fonts/`, `images/`, `favicon.ico`); the favicon is also copied to `src/app/favicon.ico`.
