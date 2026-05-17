# Development Checklist

## Phase 1: Prepare The Current Prototype
- [ ] Confirm the repository is clean before migration work starts.
- [ ] Commit the documentation files currently added to the repository.
- [ ] Review all current pages and identify broken JSX syntax caused by mojibake.
- [ ] Decide whether Korean copy will be recovered from PDFs or rewritten manually.
- [ ] Preserve a backup branch or tag before moving files into the Vite structure.

## Phase 2: Create The Vite React Environment
- [x] Add `package.json`.
- [x] Add Vite, React, and ReactDOM dependencies.
- [x] Add scripts: `dev`, `build`, `preview`, and `test`.
- [x] Add `index.html` at the project root.
- [x] Add `vite.config.js`.
- [x] Create `src/main.jsx`.
- [x] Create `src/App.jsx`.
- [x] Keep brand assets importable from the existing `assets/` folder.
- [x] Keep `colors_and_type.css` available to the Vite entry point.

## Phase 3: Convert Pages And Components
- [x] Convert homepage composition into `src/pages/Home.jsx`.
- [x] Convert about page composition into `src/pages/About.jsx`.
- [x] Convert curriculum page composition into `src/pages/Curriculum.jsx`.
- [x] Convert small-business page composition into `src/pages/SmallBiz.jsx`.
- [x] Convert notices page into `src/pages/Notices.jsx`.
- [x] Convert videos page into `src/pages/Videos.jsx`.
- [x] Move reusable navigation/footer/action components into `src/components`.
- [x] Move shared data into `src/data`.
- [x] Remove runtime Babel from the production entry point.
- [x] Remove CDN React and ReactDOM from the production entry point.

## Phase 4: Routing And Vercel Setup
- [x] Add clean client routes for `/`, `/about`, `/curriculum`, `/smallbiz`, `/notices`, and `/videos`.
- [x] Add legacy redirects from old `.html` paths to clean routes.
- [x] Add `vercel.json`.
- [x] Configure Vercel rewrites so clean routes serve the Vite app.
- [x] Confirm Vercel build command is `npm run build`.
- [x] Confirm Vercel output directory is `dist`.

## Phase 5: Content Recovery
- [ ] Recover all corrupted Korean navigation labels.
- [ ] Recover homepage hero copy.
- [ ] Recover company/about page copy.
- [ ] Recover curriculum page copy and data.
- [ ] Recover small-business page copy.
- [ ] Recover footer company/contact/legal text.
- [ ] Verify no mojibake remains with a text search and browser review.

## Phase 6: Responsive And Browser QA
- [ ] Implement mobile navigation.
- [ ] Check desktop width around 1440px.
- [ ] Check tablet width around 768px.
- [ ] Check mobile width around 390px.
- [ ] Verify no horizontal scrolling.
- [ ] Verify CTA buttons fit their labels.
- [ ] Verify images and SVG assets load.
- [ ] Verify all navigation links work.
- [ ] Verify browser console has no syntax/runtime errors.

## Phase 7: Build And Deployment Verification
- [x] Run `npm.cmd install`.
- [x] Run `npm.cmd test`.
- [x] Run `npm.cmd run build`.
- [x] Run `npm.cmd run preview` smoke check for `/`, `/about`, and `/curriculum`.
- [ ] Commit the Vite migration.
- [ ] Connect the GitHub remote repository.
- [ ] Push the branch.
- [ ] Import the repository into Vercel.
- [ ] Confirm preview deployment succeeds.
- [ ] Confirm production deployment succeeds after approval.
