# Development Guide

## Current Architecture
This project is a Vite + React static site prepared for Vercel deployment. The legacy `website/` prototype remains in the repository as reference material, but the production entry point is now `index.html` with React source under `src/`.

The app uses client-side routing for `/`, `/about`, `/curriculum`, `/smallbiz`, `/notices`, and `/videos`. Vercel rewrites these clean routes to `index.html`.

## Key Files
- `index.html`: Vite application entry point.
- `src/main.jsx`: React mount point and global CSS imports.
- `src/App.jsx`: app shell, route selection, navigation behavior.
- `src/routes.js`: clean route definitions.
- `src/pages/*.jsx`: page-level components.
- `src/components/*.jsx`: shared navigation, footer, action, and section components.
- `src/data/curriculum.js`: shared curriculum and notice data.
- `src/App.test.jsx`: route and homepage smoke tests.
- `vercel.json`: Vercel build, redirect, and rewrite configuration.
- `colors_and_type.css`: shared design tokens and base component styles.
- `DESIGN.md`: design-system source of truth for agents and contributors.

## Local Preview
Install dependencies:

```powershell
npm.cmd install
```

Start the dev server:

```powershell
npm.cmd run dev
```

Build and preview production output with `npm.cmd run build` and `npm.cmd run preview`.

## Development Workflow
1. Check `git status --short --branch` before editing.
2. Keep visual changes aligned with `DESIGN.md` and `colors_and_type.css`.
3. Prefer editing shared components in `src/components` instead of duplicating page-level markup.
4. Keep Korean source copy in UTF-8 and verify it renders correctly in the browser.
5. After changes, run tests, build, and browser-check affected routes.
6. Commit with a conventional commit message, for example `docs: add development guide` or `fix: restore Korean homepage copy`.

## Verification Checklist
- `npm.cmd test` passes.
- `npm.cmd run build` passes.
- The changed route loads without a blank screen.
- The browser console has no syntax errors or missing local file errors.
- Navigation links work across the main pages.
- Korean text is readable and not mojibake.
- Layout remains usable on desktop and mobile widths.
- New colors, spacing, or component patterns are either already covered by `DESIGN.md` or added there.

## Known Technical Debt
- Korean text appears corrupted in multiple HTML and JSX files and needs recovery.
- Some JSX may fail to compile because corrupted strings broke quotes or tags.
- Legacy `website/` files remain corrupted and should not be treated as production source.
- Production copy is reconstructed and should be reviewed against official materials.
- Linting and formatting are not configured yet.

## Recommended Production Path
The chosen medium-term direction is Vite + React, not Next.js. The core migration is in place; next work should focus on copy verification, visual QA, GitHub remote connection, and Vercel import.
