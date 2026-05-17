# Development Specification

## Goal
Migrate the current static HTML plus runtime Babel prototype into a Vite + React static site that can be developed locally, built reliably, previewed before release, and deployed to Vercel.

## Target Stack
- **Runtime:** React
- **Build tool:** Vite
- **Language:** JavaScript with JSX
- **Styling:** Existing `colors_and_type.css` and `DESIGN.md`
- **Deployment:** Vercel static deployment from Vite `dist`
- **Package manager:** npm unless the project owner chooses otherwise before implementation

## Why Not Next.js For This Phase
Next.js is not required for the current site because the product is mostly static public content: homepage, company intro, curriculum, small-business program, notices, and videos. Vite gives the project a proper local dev server, build step, and Vercel-compatible static output without adding server rendering, app-router conventions, or backend complexity.

Next.js can be reconsidered later if the site needs CMS-backed content, authenticated admin workflows, server APIs, dynamic metadata at scale, or database-backed program pages.

## Current State
- HTML entry points live in `website/*.html`.
- JSX files live in `website/*.jsx`.
- React, ReactDOM, and Babel standalone are loaded from CDNs at runtime.
- Shared design tokens live in `colors_and_type.css`.
- There is no `package.json`, Vite config, test runner, linter, formatter, or Vercel config yet.
- Korean text is corrupted in multiple files and must be recovered before production.

## Target Architecture
The Vite app should use a single root HTML file and React-managed routing.

Recommended structure:

```text
C:\work\glc_homepage
|-- index.html
|-- package.json
|-- vite.config.js
|-- vercel.json
|-- src/
|   |-- main.jsx
|   |-- App.jsx
|   |-- routes.js
|   |-- data/
|   |   `-- curriculum.js
|   |-- components/
|   |   |-- PublicNav.jsx
|   |   |-- PublicFooter.jsx
|   |   `-- QuickAction.jsx
|   `-- pages/
|       |-- Home.jsx
|       |-- About.jsx
|       |-- Curriculum.jsx
|       |-- SmallBiz.jsx
|       |-- Notices.jsx
|       `-- Videos.jsx
|-- public/
|   |-- assets/
|   `-- docs/
|-- colors_and_type.css
|-- DESIGN.md
`-- docs/
```

## Routing
Use client-side routing for the first Vite migration, with Vercel rewrites sending all public page paths to `index.html`.

Required routes:
- `/`
- `/about`
- `/curriculum`
- `/smallbiz`
- `/notices`
- `/videos`

Legacy `.html` paths should redirect to clean routes:
- `/website/Home.html` -> `/`
- `/website/About.html` -> `/about`
- `/website/Curriculum.html` -> `/curriculum`
- `/website/SmallBiz.html` -> `/smallbiz`
- `/website/Notices.html` -> `/notices`
- `/website/Videos.html` -> `/videos`

## Content Requirements
- Restore Korean copy from the source PDFs or another authoritative source before launch.
- Keep all source files encoded as UTF-8.
- Avoid committing generated or machine-corrupted text as final content.
- Keep brochure PDFs available if they are needed as downloadable reference assets.

## Design Requirements
- `DESIGN.md` and `colors_and_type.css` are the design source of truth.
- Reuse the current green, warm-neutral, and gold token system.
- Preserve institutional credibility and Korean public-sector readability.
- Mobile navigation must be implemented before production deployment.
- New visual patterns require an update to `DESIGN.md`.

## Build And Deployment Requirements
- `npm run dev` starts local development.
- `npm run build` creates production output in `dist`.
- `npm run preview` serves the built output locally.
- Vercel imports the Git repository and uses the Vite build output.
- Vercel output directory must be `dist`.
- Vercel build command must be `npm run build`.

## Acceptance Criteria
- `npm install` completes successfully.
- `npm run dev` serves the site locally.
- `npm run build` exits successfully and writes `dist`.
- `npm run preview` serves the production build.
- All required routes load without a blank screen.
- The browser console has no syntax errors or missing local asset errors.
- Korean text renders correctly.
- Main navigation works on desktop and mobile.
- Vercel preview deployment succeeds.
