# GLC Homepage

Vite + React homepage for GLC education and consulting services, prepared for static deployment on Vercel.

## Current Structure
- `index.html`: Vite application entry point.
- `src/`: React application source, pages, components, data, tests, and styles.
- `vercel.json`: Vercel build, output, redirect, and rewrite configuration.
- `package.json`: npm scripts for local development, tests, build, and preview.
- `website/`: legacy prototype files kept as reference during migration.
- `colors_and_type.css`: shared CSS variables, typography, buttons, cards, surfaces, and inputs.
- `DESIGN.md`: agent-readable design system based on the Stitch `DESIGN.md` convention.
- `docs/DEVELOPMENT_SPEC.md`: target Vite + React architecture for Vercel deployment.
- `docs/DEVELOPMENT_CHECKLIST.md`: implementation checklist for the Vite migration and deployment path.
- `assets/`: brand SVG assets.
- `glc_2026_04.pdf`, `glc_brochure_2026.pdf`: source brochure/reference PDFs.

## Local Preview
Install dependencies, then start the Vite dev server:

```powershell
npm.cmd install
npm.cmd run dev
```

Build and preview the production output:

```powershell
npm.cmd run build
npm.cmd run preview
```

## Development Notes
- Vite writes production output to `dist`.
- Vercel is configured to use `npm run build` and deploy `dist`.
- Use `npm.cmd` on Windows PowerShell if `npm` is blocked by script execution policy.
- Keep visual changes aligned with `DESIGN.md` and `colors_and_type.css`.

## Known Issues
- The legacy `website/` prototype still contains mojibake and is no longer the production entry point.
- Some production copy is reconstructed and should be checked against the official brochure/source materials.
