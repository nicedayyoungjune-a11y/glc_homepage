# GLC Homepage Agent Instructions

## Project Goal
Build and maintain the GLC homepage as a Vite + React static site for Vercel deployment.

The production app lives in `index.html` and `src/`. The legacy `website/` folder is reference material only and should not be treated as the production source.

## Current Stack
- React
- Vite
- JavaScript with JSX
- Vitest + Testing Library
- Vercel static deployment
- Shared CSS tokens in `colors_and_type.css`

Use `npm.cmd` on Windows PowerShell because plain `npm` may be blocked by execution policy.

## Important Files
- `src/App.jsx`: app shell and route rendering.
- `src/routes.js`: public route definitions.
- `src/pages/`: route-level pages.
- `src/components/`: shared UI components.
- `src/data/curriculum.js`: shared curriculum and notice data.
- `src/styles.css`: app-specific layout and responsive styles.
- `colors_and_type.css`: global design tokens and base styles.
- `DESIGN.md`: design-system source of truth.
- `vercel.json`: Vercel build, redirect, and rewrite configuration.
- `docs/DEVELOPMENT_SPEC.md`: implementation target and acceptance criteria.
- `docs/DEVELOPMENT_CHECKLIST.md`: migration and deployment checklist.

## Design Rules
- Follow `DESIGN.md` and `colors_and_type.css` before inventing new visual styles.
- Preserve the warm institutional green palette and Korean public-sector tone.
- Use full-width section bands and focused cards for repeated content.
- Do not add generic SaaS gradients, decorative blobs, or unrelated color systems.
- Keep mobile layouts usable and avoid horizontal scrolling.

## Development Rules
- Prefer changes in `src/` over editing legacy `website/` files.
- Keep Korean text as valid UTF-8.
- Do not copy mojibake text from legacy files into production code.
- If source copy is uncertain, use clear placeholder-quality Korean and note that it needs official copy review.
- Keep components focused and small.
- Update docs when architecture, routing, deployment, or design rules change.

## Verification
Run these before claiming work is complete:

```powershell
npm.cmd test
npm.cmd run build
```

For deployment-related changes, also run:

```powershell
npm.cmd run preview
```

Then smoke-check these routes:
- `/`
- `/about`
- `/curriculum`
- `/smallbiz`
- `/notices`
- `/videos`

## Vercel Deployment Expectations
- Build command: `npm run build`
- Output directory: `dist`
- Clean public routes are handled by the React app and `vercel.json`.
- Legacy `/website/*.html` paths should redirect to the clean routes.

## Known Risks
- Legacy `website/` files contain corrupted Korean text and broken JSX fragments.
- Production copy in `src/` has been reconstructed and still needs official content review.
- GitHub remote and Vercel project import are not connected yet.
