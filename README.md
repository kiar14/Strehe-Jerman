# Strehe Jerman — presentation demo

Slovenian responsive Next.js website, with user-approved bronze palette and supplied photographs.

## Run

```sh
npm ci
npm run dev
```

Production: `npm run build && npm run start`. Checks: `npm run lint`, `npm run typecheck`.

## Behavior

Five service links preselect the inquiry form. Form submission is a client-only demonstration; no personal data is sent or stored. Project gallery supports arrow keys and Escape. Logo strip pauses on hover/focus and when offscreen. Reduced-motion users receive a static presentation. Site is intentionally excluded from indexing.

## Editing

Content: `src/app/page.tsx`. Interactions: `src/components/interactions.tsx`. Design: `src/app/globals.css`. Images: `public/images`. Research and asset provenance: `docs`.

## Hosting

The final version is available locally at http://localhost:3002 while the production server is running. An earlier temporary Vercel preview expires automatically and does not include the final accessibility fixes. Publishing the final source and supplied images to Vercel is awaiting explicit transfer approval after automatic approval review blocked the update. The existing domain was not changed.

## Latest refinement
Reference-led form, process and testimonial carousel, centered service dropdown, hero trust strip, colored logos and expanded footer. Future service, FAQ and legal routes intentionally have no pages yet. See docs/refinement-verification.md.
