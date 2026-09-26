# Verification

- Production build: passed (Next.js 16.3.6 / Turbopack).
- ESLint: passed; generated .next and .vercel outputs excluded.
- TypeScript strict check: passed.
- Browser: 375px, 768px and 1440px checked, no horizontal page overflow.
- Service link selects Tesarstvo in inquiry form.
- Empty form reports errors for name, phone and message.
- Valid demo data produces explicit not-sent success feedback; no backend exists.
- Mobile menu opens, navigates and closes.
- Gallery opens real project image, advances to second image and closes.
- Logo pause toggles state and accessible name.
- Final Lighthouse mobile accessibility 100, best practices 100, agentic browsing 100.
- Lighthouse SEO 66 solely because preview is intentionally noindex via metadata, HTTP headers and robots.txt. Do not remove noindex for the demo.
- Chrome DevTools local lab trace at 390x844, Fast 4G and 4x CPU: observed LCP 288ms, CLS 0.00. Warm local resources; these are not field or cold remote performance results.
- Browser console: no errors observed.
- Impeccable detector: one false-positive missing-src warning for the getImageProps spread on picture img. Browser confirms real image currentSrc and loaded pixels.
- Responsive hero uses mobile source at 375px.
- Reduced motion: CSS removes animation/transition, hides shutters, displays static logo grid; GSAP/Lenis are created only in no-preference media query.

## Publishing status
Initial version was published as a temporary Vercel deployment, expiring one hour after creation. The final accessibility-fixed source was built and validated locally. Updating Vercel was blocked by automatic approval review requesting specific consent to transfer the project source and supplied images to Vercel. No alternate publication route was used.
