# Visual assets and motion

How to plan the scroll animations and every picture of a client site, tell the user exactly
what to generate or collect, and build it once the files arrive.

The signature effect is the **scroll-scrubbed sequence**: a short video is split into frames,
drawn on a canvas, and the scroll position picks the frame. Scrolling down plays it, scrolling
up plays it backwards. It feels premium because the visitor is in control (Apple product pages,
the "exploding iPhone").

The in-between frames come from an **AI video model** (tools with start and end frame support,
such as Kling, Veo, Runway or Luma) fed with keyframe stills from an **image model**. We can't
invent realistic in-between frames in code. Without a video, fall back to layered 2.5D motion
(section 1, "Without a video").

---

## 1. Pick the motion concept

Offer **2–3 concepts** for the hero. For each, give:
- **Name**, for example "Roof, layer by layer"
- **What the visitor sees** while scrolling (one or two lines)
- **Why it fits**, tied to `docs/research.md` (their service, what customers care about)
- **Assets needed**: number of keyframes, one video
- **Effort**: easy / medium / hard to generate well

Prefer ideas that **show the expertise**: what is inside, how it is built, what changes after
the job. A generic "pretty background video" is the weakest option.

### Concept patterns

| Pattern | What happens on scroll | Good for |
|---|---|---|
| **Exploded view** | The object comes apart into its layers or parts | Anything with an inside: heat pump, boiler, window, roof build-up, e-bike, wall insulation, tooth implant |
| **Build-up / assembly** | Parts fly in and assemble, or empty → finished | Construction, kitchens, bathrooms, gardens, furniture, carpentry |
| **Before → after** | Same camera, the state changes | Cleaning, detailing, renovation, restoration, painting |
| **Cutaway / push-in** | Camera pushes through a surface to show the layers behind it | Insulation, plumbing in walls, electrics, dental |
| **Orbit / turntable** | The hero object turns 90–360° | Products, cars, machines, jewellery |
| **Fly-through** | Camera travels from outside through the door into the space | Restaurants, hotels, salons, gyms, showrooms |
| **Ingredient burst** | Ingredients or materials float and combine into the product | Bakeries, restaurants, coffee, cosmetics, drinks |
| **Process in one shot** | One continuous shot shows the job step by step | Any service with clear steps |

### Ideas by business type

| Business | Hero idea |
|---|---|
| Roofer | A roof section explodes into tiles, battens, membrane, insulation, rafters |
| Heating / plumbing | A heat pump or boiler opens up into its components |
| Electrician / solar | A house: solar panels fly onto the roof, cables glow through the walls to the fuse box |
| Windows / doors | A window profile explodes into glass panes, seals, frame chambers |
| Kitchen / bathroom fitter | An empty room builds itself into the finished kitchen or bathroom |
| Carpenter / furniture | Wood pieces float in and join into the finished piece |
| Landscaping | A bare plot grows into the finished garden, day to golden hour |
| Cleaning / detailing | A dirty surface or car turns spotless as you scroll |
| Car workshop | A car body lifts off to reveal engine, brakes, suspension |
| Dentist | A tooth cutaway: crown, implant and bone layers separate |
| Bakery / restaurant | Ingredients float in and assemble into the signature dish |
| Salon / beauty | Slow orbit of the product or styled result with light sweeping across |
| Gym / physio | Anatomical layers of a moving body (muscle → skeleton) |
| Manufacturer | Their product explodes into parts, then reassembles |

### Beyond the hero

When it fits, suggest carrying the technique further. Use at most **one heavy frame sequence
on screen at a time**. Everything else should be light (CSS/GSAP transforms, short muted loops).

- **Pinned story:** the hero canvas stays pinned while 3–4 text panels scroll past, each timed
  to a phase of the video ("20 cm mineral wool" appears as the insulation layer separates).
  Turns the hero into the services or "how we work" section.
- **One thread through the page:** the same object or scene continues through the whole page,
  each section scrubs the next chapter (explode → install → finished house). Very strong, but
  only one per site and only when the story is clear.
- **Section transitions:** a short scrubbed clip between two sections (rough → finished, day →
  night, zoom out from a detail to the whole house).
- **Service cards:** a still image that plays a 2–4 s muted loop on hover (desktop only, poster
  image on mobile), or a small before → after drag slider.
- **Process section:** 3–5 keyframes scrubbed horizontally, one per step.
- **Without a video:** layered 2.5D. Cut the subject out of a still, move subject, background
  and foreground at different speeds, add clip-path reveals and scale on scroll.

Always add a `prefers-reduced-motion` fallback: show the key still (usually the end frame)
instead of the animation.

---

## 2. What to ask the user for

### Keyframes and video (per scroll sequence)

- **2–4 keyframe stills**: start, 1–2 middle states, end. The video model uses these as anchors.
- **One video** of 5–10 s generated from those keyframes.

Video specs to give the user:

| Spec | Value |
|---|---|
| Length | 5–10 s (longer = more frames = heavier page) |
| Shot | One continuous shot. No cuts, no camera shake, no speed ramps |
| Camera | Locked off, or one slow smooth move (e.g. 20° orbit) |
| Background | Plain, matching the section background colour, so the video blends into the page. Or a full-bleed scene |
| Framing | Subject placed where the plan says, with empty space for the headline |
| Content | No text, labels, logos or watermarks inside the video |
| Holds | Start and end frame stay still for ~0.5 s |
| Size | At least 1920×1080 (4K better), 24–30 fps, MP4 (H.264) |
| Mobile | A separate 9:16 version, or a 16:9 with the subject inside a centre-safe area |
| File names | Lowercase, no spaces: `hero-explode.mp4`, `hero-kf-01-start.jpg` |
| Folder | `assets/raw/` in the project repo |

### Every other picture

List every image slot on the page with: **ID, page and section, purpose, aspect ratio and
minimum size, source** (AI / real client photo / client logo), and the prompt or note.

Typical slots: hero (or hero poster frame), 5 service cards, about or "why us", process steps,
section backgrounds and textures, contact section, Open Graph share image (1200×630).

### Real photos vs AI pictures

**AI is fine for:** hero art, concept and service visuals, illustrations, backgrounds, textures,
generic product-style shots, the exploded and build-up sequences.

**Must be real, from the client:** the team and the owner, their vehicles, workshop or premises,
portfolio and "our projects", before → after results presented as their work, anything next to
reviews, certificates and awards. If missing, use a marked placeholder and list it as
**MISSING**. An AI picture must never pretend to be their real team or their real work.

Never put readable text or logos inside generated images (models garble them). The client's logo
and any labels are added in code.

---

## 3. Writing image prompts

Write prompts in **English** (image models follow English best, even for a German site). Keep
them tool-agnostic so they work in any image model (e.g. Nano Banana / Gemini, ChatGPT images,
Midjourney, Flux).

### House style

Define it once in `docs/asset-plan.md` from the research (colours, vibe, photo style) and paste
it at the end of **every** prompt, so all pictures look like one shoot. Describe brand colours
in words plus hex. Example:

> Photorealistic editorial photography, soft diffused daylight from the left, calm warm palette
> of off-white (#F4F1EC), deep navy (#1B2A41) and brushed brass accents, shallow depth of field,
> clean uncluttered surroundings, no text, no logos, no watermarks.

### Prompt formula

`[subject and what it's doing]`, `[setting]`, `[lighting]`, `[camera: angle, lens, distance]`,
`[composition: where the empty space for text is]`, `[mood]`, then the house style and the
aspect ratio.

Each prompt block in the asset plan:

```
ID: svc-03 · Home › Services › "Heat pumps" card · 4:3 · min 1200×900
Prompt: …
Avoid: text, logos, people's faces, cluttered background
Reference: attach hero-kf-01-start.jpg for consistent style (optional)
```

### Keeping keyframes consistent

1. Generate the **start frame** first. Make 3–4 variants and pick the best.
2. Make every next keyframe as an **edit of the start frame** (attach it as the reference image):
   "Same image, same camera angle, lens, lighting and background. Change only: …".
   Edit-capable models do this best.
3. Keep studio sequences on a plain background in the page's background colour.

### Example: roofer, "Roof, layer by layer"

**Start frame (16:9):**
> Photorealistic product-style render of a one-metre section of a pitched roof with anthracite
> clay tiles, floating centred-right on a plain warm off-white background (#F4F1EC),
> three-quarter view from slightly above, 50 mm lens, soft studio lighting with a gentle contact
> shadow below, empty space in the left third for a headline, crisp detail, no text, no logos.
> [house style] 16:9.

**End frame (edit of the start frame):**
> Same image, same camera angle, lighting and background. The roof section is now an exploded
> view: its layers float apart vertically with even gaps, perfectly aligned, from top to bottom:
> anthracite clay tiles, wooden battens, counter battens, breathable roofing membrane, 20 cm
> mineral wool insulation between the rafters, vapour barrier, interior plasterboard. Clean
> technical look, no labels, no text.

**Middle frame (optional):**
> Same image, same camera, lighting and background. Only the tiles have lifted about 15 cm above
> the battens; all other layers are still together.

### Video prompt formula

For start and end frame models, attach the keyframes, then:

> Slow, smooth, continuous motion from the first frame to the last. [Describe the motion in
> order.] Camera: [locked off / slow 20° orbit to the right]. Constant speed, no cuts, no
> camera shake, background stays unchanged. [Length] seconds.

Example:

> Slow, smooth, continuous motion. The roof tiles lift first, then the battens, then the
> membrane, then the insulation, each layer rising and separating evenly until the full exploded
> view is reached. Camera locked off. Constant speed, no cuts, no camera shake, the off-white
> background stays unchanged. 8 seconds.

Tips for the user:
- Generate 2–4 variants. Pick the **smoothest motion**, not the prettiest last frame.
- If the model makes a mess, ask for less motion or add a middle keyframe.
- With 3–4 keyframes and a tool that takes only two: generate 1→2, 2→3, 3→4 and join the clips.
  The joins are seamless because the shared frames are identical.
- The `remotion-best-practices` skill can trim, join, add holds or re-time clips if needed.

---

## 4. `docs/asset-plan.md` template

```markdown
# Asset plan: <Business>

## House style
<one paragraph, pasted at the end of every prompt>

## Motion concept
Chosen: <name>. What the visitor sees, why it fits.
Alternatives considered: <name>, <name>.

## Scroll sequences
### S1 · Home › Hero: <name>
- What the visitor sees:
- Scroll length: e.g. pinned for 250vh
- Text beats: 0% headline + CTA · 40% "<beat>" · 80% "<beat>" · 100% CTA returns
- Keyframes:
  | File | State | Prompt |
- Video: file name, length, video prompt
- Mobile: 9:16 version / centre-safe crop
- Reduced motion: shows <file>

## Pictures
| ID | Page › section | Purpose | Ratio · min size | Source | Prompt / note |

## Prompts
<every prompt in full, copy-paste ready, grouped by ID>

## Checklist for you
- [ ] Generate … → save as `assets/raw/…`
- [ ] From the client: team photo, logo (SVG), … (MISSING)
```

---

## 5. Building a scroll sequence

Follow `premium-web-stack` (GSAP ScrollTrigger + Lenis) and `animated-site-performance`.

1. Keep originals in `assets/raw/` (no spaces in file names).
2. Extract frames with ffmpeg as WebP. Aim for 90–150 frames, about 6–8 MB in total on desktop
   and 3 MB on mobile:
   ```bash
   mkdir -p public/sequences/hero/desktop public/sequences/hero/mobile
   ffmpeg -i assets/raw/hero-explode.mp4 -vf "fps=15,scale=1600:-2" -c:v libwebp -quality 72 public/sequences/hero/desktop/%04d.webp
   ffmpeg -i assets/raw/hero-explode-mobile.mp4 -vf "fps=15,scale=800:-2" -c:v libwebp -quality 70 public/sequences/hero/mobile/%04d.webp
   ```
   Adjust `fps` to hit the frame count (8 s × 15 fps = 120 frames).
3. Draw on a `<canvas>` sized to the container × devicePixelRatio (capped at 2), cover-fit.
   A pinned section with ScrollTrigger `scrub`, frame = `Math.round(progress * (count - 1))`.
   Draw only when the frame index changes, inside `requestAnimationFrame`.
4. Show the first frame as a normal `<img>` with priority loading (it is the LCP image), then
   load the rest progressively: last frame, every 8th, then fill the gaps. Scrubbing works
   before everything has loaded, using the nearest loaded frame.
5. Serve the mobile set below 768 px. With `prefers-reduced-motion` show the key still only.
   With Save-Data or a slow connection, load every 2nd frame.
6. Time text beats to scroll progress with the same ScrollTrigger timeline.

Before the assets arrive, build everything with a placeholder frame (the start keyframe or a
neutral box) so dropping in the files is the only step left.
