# GLC Homepage Project Brief

## Goal
Create a public-facing homepage for GLC that presents the organization, training curriculum, small-business support programs, public notices, and education video content in a credible Korean institutional style.

## Audience
- Public institutions and local governments evaluating education partners.
- Companies looking for leadership, communication, and employee development programs.
- Small-business owners seeking training or consulting support.
- Internal operators who need a simple static site structure for early content iteration.

## Pages
- `Home.html`: brand entry point, major service paths, trust signals, and primary calls to action.
- `About.html`: company story, CEO message, philosophy, methodology, history, certifications, clients, impact, and facts.
- `Curriculum.html`: 2026 curriculum discovery and program information.
- `SmallBiz.html`: small-business education and consulting offering.
- `Notices.html`: notices and public training information.
- `Videos.html`: education video library placeholder.

## Success Criteria
- Korean content is correctly encoded and readable.
- The design follows the GLC design system in `DESIGN.md`.
- Each public page loads without console-blocking syntax errors.
- Navigation works across all page entry points.
- The site remains usable on desktop and mobile widths.

## Current Risks
- Korean text appears corrupted in several HTML and JSX files.
- Some JSX strings may be syntactically broken because of the same encoding corruption.
- The current CDN/Babel runtime is convenient for prototyping but not ideal for production.
- There is no automated test or build step yet.

## Recommended Next Steps
1. Recover or rewrite the Korean source copy from the brochure PDFs or an authoritative source.
2. Run each HTML page in a browser and fix syntax/runtime errors.
3. Add a responsive navigation pattern for mobile.
4. Decide whether to keep the static prototype model or migrate to a bundled React/Vite project.
5. Connect a remote Git repository and choose a deployment target.
