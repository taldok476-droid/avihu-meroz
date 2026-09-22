# אביהו מרוז — סטודיו ואקדמיה

A complete Hebrew RTL, mobile-first Next.js App Router website. TypeScript, Tailwind CSS 4, Framer Motion, locally hosted Heebo, and the supplied photography.

## Run

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. Production: `npm run build` creates the portable static site in `out/`. Serve that directory with any static host. `npm run typecheck` validates TypeScript.

## Editing

- `data/site.ts`: business phone, WhatsApp international number, Instagram URL, optional booking URL, gallery categories/captions, services, academy curriculum, testimonials and FAQs.
- `components/`: reusable page sections and interactive controls.
- `app/globals.css`: colors, typography, spacing and responsive layout.
- `public/images/`: all 11 supplied original photos plus optimized WebP versions. `node scripts/optimize-images.mjs` regenerates WebP assets after replacing original JPGs.

## Visual system

The entrance uses an ivory split layout: Hebrew brand copy on the right and one offset portrait frame on the left. Mobile puts the booking action before the image. It is followed by a native horizontal portfolio, an acid-green kids story, a personal studio chapter, a sticky graphite Academy curriculum, service rows, a manual quote carousel and a burnt-orange booking statement.

Portfolio images support swipe, arrow buttons, keyboard scrolling, category filters and a modal viewer. The curriculum and studio heading pin only on desktop; mobile uses an independent stacked composition. Motion respects reduced-motion preferences. The cursor treatment appears only over portfolio images on pointer devices.

## Contact setup

The orange final section is the sole contact panel and leads directly into the footer. It contains direct booking, telephone, WhatsApp, Academy and Instagram links, plus the full address. All business details are configured in `data/site.ts`. WhatsApp uses `972548120581` and generates its URL with `encodeURIComponent` so every action prefills “היי אביהו, הגעתי מהאתר”; Instagram uses the official `https://www.instagram.com/avihumeroz/` profile, displayed as `@avihumeroz`. The reusable address component displays העצמאות 21, נחלת יהודה / ראשון לציון / בתוך המרכז in the hero, contact panel, footer and mobile menu. There is no inquiry form, form state, validation or lead collection.

The Hebrew marquee uses two identical, non-shrinking groups in an LTR track, with RTL phrases inside each group. Translating the track by exactly half its total width produces a seamless constant-speed loop. Each group is at least one viewport wide; reduced-motion preferences disable the animation.

No analytics, cookies, third-party embeds or browser persistence are used.

## Testimonials

The included quotes are clearly marked samples. Replace them with genuine authorized reviews and set `isSample: false`. No rating, customer count, course duration, price, or opening schedule has been invented.

## Publishing

`.openai/hosting.json` identifies a registered, unpublished private Sites project and its static `out/` directory. Source and photographs have not been uploaded: automatic approval review requires explicit approval for that external upload. The same output can be deployed on another static hosting service. Review contact details and replace sample reviews before public launch.
