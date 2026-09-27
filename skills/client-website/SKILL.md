---
name: client-website
description: Step-by-step workflow for building a client's website, from research to a clickable demo (prototype) to the full production site and launch. Use whenever the user starts or continues a client website project, types a step code (A1–A4, B1–B5), or says things like "research this business", "new client", "make a demo/prototype", "plan the site", "build the full site", "production", "launch" or "what's the next step". Also use it to plan scroll animations (exploded views, scroll-scrubbed hero videos), shot lists and image- or video-generation prompts for a client site.
---

# Client website workflow

Two tracks. **Part A – Prototype** is a fast demo to win the client. **Part B – Production** is
the full site after they say yes. Run the step the user names. If they don't name one, check
which files exist in `docs/` and propose the next step.

Everything about the project lives in the project repo, in `docs/`, so any later session can
continue. Don't use Notion or other external note tools for this.

Always build with the `premium-web-stack` skill, design with `impeccable`, and keep it fast with
`animated-site-performance`. Never invent reviews, ratings, numbers or certifications. Use
clearly marked placeholders and list them for the user.

Whenever you plan or build motion or pictures, read `references/visual-assets.md`. It covers
the scroll-animation ideas, the shot list to ask the user for, how to write image and video
prompts, which pictures must be real client photos, and how to build frame sequences.

At the end of every step:
1. Summarise what was done.
2. List anything MISSING that the user must get from the client.
3. Name the next step code.

---

## Part A – Prototype (demo)

### A1 · Research → `docs/research.md`
Inputs: business name, current website URL (if any), town.
Tools: Firecrawl (scrape, search, screenshots, branding), Chrome DevTools (screenshots),
`watch-video` for any video links the user gives.

Write these sections:
1. **Facts:** services (with prices if listed), contact details, address, opening hours, service
   area, years in business, certifications, guarantees, team, brands and partners.
2. **What they stand for:** values, promises, what makes them different, how they talk about
   themselves, tone of voice.
3. **Vibe:** the personality the new site should have, based on their site, social media and
   reviews. Give three adjectives and a one-line reason for each.
4. **Current site, visually:** desktop and mobile screenshots of the homepage (save them to
   `docs/screenshots/`). Note the colours (hex values), fonts, logo, photo style and layout. Say
   what works, what looks dated, and what must stay recognisable. List the real photos and
   videos they already have (team, vehicles, workshop, finished projects) and their quality.
5. **What customers care about:** what people praise, complain about and ask before hiring, from
   Google reviews and competitors.
6. **Competitors:** the top 3 in their town, one line each on what they do better or worse.

Mark every unknown as **MISSING**.

### A2 · Demo plan → `docs/demo-plan.md`
Use `impeccable` (shape). Read `docs/research.md`. Keep it short. No page texts yet.
- **Navigation:** the menu items.
- **Home page:** each section in order, with a **name**, **what it is** (one line) and **what it
  looks like** (one line). It must include:
  - **Services:** exactly **5 cards**, one for each of their main services
  - **Trust bar:** the things their customers care about most, taken from research section 5
    (e.g. years of experience, warranty, certified, response time, review score)
- **Motion concept:** propose 2–3 scroll-animation ideas for the hero (for example an exploded
  view, a build-up or a before → after scrub), each tied to what this business does. Say where
  the same technique could carry into other sections or through the whole page when that
  would look great.
- Ask the user about the visual direction and which motion concept they want before finalising.

Then write **`docs/asset-plan.md`** (template in `references/visual-assets.md`):
- the **house style** that every image prompt shares, so all pictures look like one shoot
- the **scroll sequences**: text beats, the 2–4 keyframe stills and the video needed, with
  copy-paste image prompts, a video prompt and the file specs
- **every picture on the home page** (hero, 5 service cards, about, backgrounds), with its
  aspect ratio and a copy-paste prompt, or marked **real photo from client** where AI must not
  be used
- a checklist of what the user must generate or collect, with file names and the folder to put
  them in

On request, plan the **other pages** for the demo in the same format (section name, what it is,
what it looks like) and add them to `docs/demo-plan.md`, with their pictures added to
`docs/asset-plan.md`.

### A3 · Build the demo
Set-up, build and motion are one step. Follow `docs/demo-plan.md` and `docs/research.md`.
- Create the Next.js project with premium-web-stack, including the project MCP servers.
- Build the navigation and the full home page, with the animations the design calls for.
- **Prototype rules:** no database (no Supabase) and no real form sending; the contact form only
  shows a success message. Use their real texts, logo and photos where available, otherwise
  marked placeholders.
- Scroll sequences: if the video is in `assets/raw/`, turn it into frames and build the
  scroll-scrubbed canvas as described in `references/visual-assets.md`. If not, wire the
  animation with a placeholder so the user only has to drop in the files.
- Deploy to Vercel and give the user the preview link. Offer the `impeccable` commands
  (bolder, quieter, typeset, layout, animate) to steer the look.

### A4 · Quick check
`impeccable` polish on the home page, then the `animated-site-performance` speed check with
Chrome DevTools. Fix what it finds and send phone and desktop screenshots. Then tell the user the
demo is ready to send to the client.

---

## Part B – Production (full website)

### B1 · Full plan → `docs/site-plan.md`
Read `docs/research.md`, `docs/demo-plan.md` and the demo. Ask about anything unclear first.
1. **Sitemap:** every page, and the navigation.
2. **Every page, section by section,** in the demo format: name, what it is, what it looks like.
3. **Texts for every page** in the site's language, written with `conversion-copywriting`.
4. **SEO per page:** the main search phrase, title and description (`seo-strategy`), plus the
   questions the page answers for AI search (`bencium-aeo`).
5. **Functions:** forms and where they're delivered (Resend email, or an n8n webhook), whether a
   database is needed (Supabase: only for bookings, accounts or orders), languages (next-intl)
   and analytics.
6. **Pictures and motion:** extend `docs/asset-plan.md` to every page: each image slot with a
   copy-paste prompt (same house style) or marked as a real client photo, plus any extra
   scroll sequences or section transitions worth adding.

### B2 · Build
Set-up, build and motion together, starting from the demo. Build **one page per request**, in
the order of `docs/site-plan.md`, and push with a Vercel preview link each time.
- Supabase only if B1 says so, in an EU region (Frankfurt).
- Real form delivery as planned in B1.
- 3D only where it shows the product better: lazy-loaded, with a still image on mobile.
- Scroll sequences and pictures from `docs/asset-plan.md`, built as in
  `references/visual-assets.md`.

### B3 · Check
On every page: the `animated-site-performance` speed check, then `impeccable` audit and polish.
Review the code with `web-design-guidelines` and `vercel-react-best-practices`. With Supabase,
run its security advisors. Fix everything and report what changed.

### B4 · Launch
Deploy to production on Vercel, connect the domain, and give the exact DNS records. Then run
`seo-strategy` in audit mode on the live URL and fix what it finds.

### B5 · After launch
On request: n8n workflows (for example, form → email the client + add to a Google Sheet), and
Vercel error and log checks.
