# Samco Plumbing Solutions — concept website

A complete, editable, English single-page React/Vite demo for a Fort Worth, Texas plumbing business. This is an independent concept by The Grind Internet Shop, not the official business website. No repository or live site was created.

## Run locally

Use Node.js 24 LTS and npm. From this project folder:

```bash
npm install
npm run dev
npm run build
```

Open the local URL printed by Vite. The production output is **dist**, not build. The build first bundles assets, then renders complete HTML using react-dom/server; .prerender is a temporary intermediate that the build removes. `npm run preview` serves the production build locally. `npm run lint` runs ESLint with zero warnings allowed. CI uses the included lockfile with `npm ci`.

## Edit the site

- `src/utils/constants.js`: business details, contact links, original copy, services, gallery items, reviews, FAQs and navigation. Check SOURCES.md before changing factual claims.
- `src/components/`: one folder per section, each with matching JSX and CSS. App assembles the page.
- `src/index.css`: shared layout, typography, colors and responsive rules.
- `src/assets/images/`: optimized supplied photos and transparent `samco-logo.webp`. The hero uses `samco-truck-equipment.webp`; gallery imports/captions live in constants.js. `public/favicon.png`: resized supplied favicon. No manual asset additions are needed.
- `index.html`: English title/description, Open Graph metadata, theme color and demo noindex. Final canonical, sitemap and schema steps are in LAUNCH.md.
- `src/vendor/normalize.css`: official unmodified Normalize.css 8.0.1. Do not edit or reformat it.

Technologies: React 19, Vite 8, JavaScript/JSX, ES modules and plain CSS. No TypeScript, Tailwind, Bootstrap, remote fonts or unnecessary production packages. Node 24 is the current LTS major per https://nodejs.org/en/about/previous-releases checked September 26, 2026.

## GitHub Pages preview

Proposed repository name: `samco-plumbing-demo`.

**Proposed URL — NOT LIVE or deployment-tested:**
`https://thegrindnet.github.io/samco-plumbing-demo/`

1. David creates that repository in the `thegrindnet` account.
2. Unzip and put the project’s contents at the repository root. Include `.github/workflows/deploy.yml` and `package-lock.json`. Do not upload `node_modules`, secrets or `dist`.
3. Add the files to the `main` branch using your preferred GitHub workflow.
4. In the repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open **Actions → Deploy to GitHub Pages**. A push to main runs it automatically; Run workflow is also enabled. The workflow uses Node 24, npm ci, lint and build, then deploys dist.
6. Wait for the workflow to succeed. Open the actual URL GitHub reports. Confirm images, navigation, phone/email links and the narrow mobile layout. Only then put the verified URL in OUTREACH.md in place of `[LIVE GITHUB PAGES PREVIEW URL]`.

Vite uses `base: './'` for portable project-subdirectory assets. Do not manually upload dist. No HostGator .htaccess rules. No commit, push or deployment was performed here.

## Verification — September 26, 2026 revision

- npm install, npm run lint and npm run build: passed. Development server served HTML and transformed JSX successfully.
- Production build tested locally under `/samco-plumbing-demo/`. Direct JS, CSS and PNG requests returned 200 with their correct content types, not HTML. All supplied photo assets and the logo decoded successfully.
- Chromium checks at 320, 375, 390, 768, 1024 and 1440px: no horizontal overflow or missing images; all navigation anchors matched IDs. Mobile toggle, link-close, Escape/focus return and outside-close passed.
- Keyboard skip-link/focus, native FAQ keyboard activation and safe external-link attributes passed. axe-core 4.10.3 WCAG A/AA automated checks at 390/1440px returned zero violations. This is not a comprehensive accessibility certification or cross-browser test.
- Exact-case local imports and JSX/CSS component pairs checked. Official Normalize.css SHA-256 verified and its import precedes custom styles.
- Full desktop/mobile screenshots were visually reviewed for layout. No live GitHub deployment, phone call, message delivery, final-domain purchase, QR code or Google profile edit was tested or performed.
- npm printed a runtime `http-proxy` environment deprecation warning, unrelated to the project. No lint/build warnings or errors remain.

See verification.json for measured browser results. Updated screenshots are supplied separately. Full code and assets are included in this ZIP; node_modules and dist are intentionally excluded and reproducible with the commands above.

## Architecture and launch

DESIGN.md records current-main reference inspection and conformance. Gallery and Testimonials now use the required matching JSX/CSS folder pattern. Gallery contains 12 supplied images, including an explicit before/after pair. Testimonials contains all five user-supplied reviews in full; no star ratings, aggregate score or review schema were invented. Reviewer profile links are not presented as review permalinks. SOURCES.md documents business qualification, exact searches, public contacts and gaps. ASSETS.md records provenance. OUTREACH.md holds unsent email/text drafts with the exact $800 offer. LAUNCH.md covers owner approval, domain, final SEO and the two pending QR codes.

## Revision details

- Replaced the original concept symbol with the supplied transparent Samco logo, and replaced the favicon and hero image.
- Added Gallery and Testimonials. Navigation includes Our work and Reviews; the mobile menu now activates at 1000px to accommodate the extra links.
- Gallery images open their full optimized versions in a new tab, with native lazy loading. The before/after pair uses the supplied filenames to establish order. Captions describe visible content without inventing project locations or dates.
- All five reviews preserve the supplied wording (whitespace normalized). Jo Hanen’s February 19, 2021 service date remains visible; no missing review dates are invented. Names with supplied Facebook URLs link to their cleaned profile URLs.
- The supplied images totaled 5,946,640 bytes; deployed image assets total 2,009,685 bytes, a 66.2% reduction. Photos use WebP, large images are capped at 1200px, the transparent logo is 600×200, and the supplied favicon is 64×64 PNG. See image-optimization.json for photo mappings and dimensions.
- The demo remains noindex. No repository, deployment, message, profile edit or QR code was created.

## Complete source tree

```text
samco-plumbing-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.png
├── scripts/
│   └── prerender.mjs
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── bathroom-after.webp
│   │       ├── bathroom-before.webp
│   │       ├── bathtub-installation.webp
│   │       ├── excavation-equipment.webp
│   │       ├── exposed-plumbing.webp
│   │       ├── freestanding-tub-shower.webp
│   │       ├── outdoor-worksite.webp
│   │       ├── residential-trench.webp
│   │       ├── samco-logo.webp
│   │       ├── samco-truck-equipment.webp
│   │       ├── service-truck-outdoors.webp
│   │       ├── shower-fixtures.webp
│   │       ├── underground-piping.webp
│   │       └── yard-trench.webp
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── FAQ/
│   │   │   ├── FAQ.css
│   │   │   └── FAQ.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Gallery/
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── Navigation/
│   │   │   ├── Navigation.css
│   │   │   └── Navigation.jsx
│   │   ├── Services/
│   │   │   ├── Services.css
│   │   │   └── Services.jsx
│   │   └── Testimonials/
│   │       ├── Testimonials.css
│   │       └── Testimonials.jsx
│   ├── utils/
│   │   ├── assetUrl.js
│   │   └── constants.js
│   ├── vendor/
│   │   └── normalize.css
│   ├── entry-server.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── ASSETS.md
├── DESIGN.md
├── LAUNCH.md
├── OUTREACH.md
├── README.md
├── SOURCES.md
├── eslint.config.js
├── image-optimization.json
├── index.html
├── package-lock.json
├── package.json
├── verification.json
└── vite.config.js
```
