# Visual assets and motion

Plan one or two signature moments per site that make it feel expensive, tell the user exactly
what to create, and know how to build them. Be creative, but every effect must **show what the
business does** (its craft, product or result). Effects without a point look cheap.

## 1. Think of the idea

Start from the business: what is impressive about the work that a photo can't show? The
inside of the product, how it is built, the change from before to after, the journey from
first call to finished job. Turn that into motion. Pick **one hero moment** and at most one or
two supporting ones. Everything else stays calm (fade-ins, subtle parallax).

Techniques to combine (not all are scroll-driven):

| Technique | What it looks like | Example |
|---|---|---|
| **Scroll-scrubbed video** | Scroll plays a clip forwards and backwards | Heat pump explodes into its parts; empty room builds into a kitchen |
| **3D object** | A real 3D model turns, opens or assembles on scroll, or follows the cursor | Window profile rotating to show its chambers; product turntable |
| **Before → after reveal** | A vertical line sweeps across, revealing the new state. Driven by scroll or dragged by the visitor | Old facade → new facade; dirty → cleaned; bare garden → finished |
| **Journey through the site** | The page is one path: a camera flight through a scene, or a line (pipe, cable, road, thread) that draws itself and connects the sections like stations | Plumber: a pipe runs through the page, each bend is a service; builder: camera flies from plot to finished house |
| **Pinned story** | The visual stays fixed while text beats scroll past, timed to it | Roof layers separate as each layer's benefit appears |
| **Layered 2.5D** | Cut-out subject, background and foreground move at different speeds, with mask reveals | Any strong still photo, no video needed |
| **Micro-interactions** | Short loops on hover, magnetic buttons, cursor light, smooth page transitions | Service cards play a 3 s clip on hover |

Present **2–3 concepts**: name, what the visitor sees, why it fits this business, what it
needs from the user, and effort (easy / medium / hard). Recommend one.

## 2. What each technique needs from the user

**Scroll-scrubbed video**
- 2–4 keyframe images (start, middle, end), then a 5–10 s video made from them in an AI video
  tool with start and end frames (Kling, Veo, Runway, Luma).
- One continuous shot, no cuts or shake, locked camera or one slow move, plain background in
  the page colour, no text in the video, ≥1920×1080. Optional 9:16 version for mobile.

**3D object**
- Best: a `.glb` model. Made in **Blender**, or generated from product photos with an image-to-3D
  tool (Meshy, Tripo, Hunyuan3D) and cleaned up in Blender. Keep it light: under 50k
  triangles, textures ≤2K, exported with Draco compression, under ~5 MB.
- Alternative for a photoreal look without WebGL: render a turntable or explode animation in
  Blender as 90–150 transparent PNG frames and use it like a scroll-scrubbed video.
- Ask for: product photos from all sides, or dimensions and materials if modelling from scratch.

**Before → after reveal**
- Two images with **exactly the same camera, framing and size** (≥2400 px wide).
- Real project: the client's photos from the same spot. Illustrative: a real or AI "before",
  and the "after" made as an **edit of that same image** so everything lines up.

**Journey**
- Camera flight: one long video (15–30 s) or a 3D scene. Line journey: no assets, built in SVG.
  Just needs the idea of what the line is (pipe, cable, road, stitching, vine).

**Every other picture**
- Each slot on each page (hero, service cards, about, backgrounds, share image 1200×630) with
  its aspect ratio and a copy-paste prompt.

### Real photos vs AI

AI is fine for hero art, concept and service visuals, backgrounds, 3D renders and clearly
illustrative visualisations. **Must be real, from the client:** team, owner, vehicles,
premises, portfolio and any before → after shown as their own work. If missing, use a marked
placeholder and list it as **MISSING**. Never put text or logos inside generated images; add
them in code.

## 3. Prompts

Write prompts in English. Define a **house style** once (lighting, palette with hex values,
photo style, "no text, no logos") and end every prompt with it, so all pictures look like one
shoot.

- **Image prompt:** subject and action, setting, lighting, camera angle and lens, composition
  (where the empty space for the headline is), mood, house style, aspect ratio.
- **Keyframes and "after" images:** make each one as an edit of the first: "Same image, same
  camera, lighting and background. Change only: …".
- **Video prompt:** "Slow, smooth, continuous motion: [what moves, in order]. Camera [locked /
  slow 20° orbit]. Constant speed, no cuts, no shake, background unchanged. [N] seconds."
- Tell the user to make 2–4 variants and pick the smoothest, not the prettiest.

## 4. `docs/asset-plan.md`

```markdown
# Asset plan: <Business>
## House style
## Signature moments        (chosen concept, where it sits, what the visitor sees, text beats)
## What to create           (per moment: files, specs, prompts, tool)
## Pictures                 | ID | Page › section | Ratio · size | AI / real | Prompt |
## Checklist for you        (file names without spaces, all into `assets/raw/`)
```

## 5. Building it

Use `premium-web-stack` (GSAP ScrollTrigger, Lenis, React Three Fiber) and keep it fast with
`animated-site-performance`. Before the assets exist, build with placeholders so the user only
drops in files.

- **Frame sequence** (video or Blender render): ffmpeg → 90–150 WebP frames (~1600 px desktop,
  ~800 px mobile, e.g. `ffmpeg -i in.mp4 -vf "fps=15,scale=1600:-2" -c:v libwebp -quality 72
  out/%04d.webp`). Draw on a `<canvas>` in a pinned section, frame = scroll progress. First
  frame as a priority `<img>`, the rest loaded progressively.
- **3D:** R3F `useGLTF` + Draco, lazy-loaded, rotation or explode tied to a ScrollTrigger
  timeline. Still image on mobile and low-power devices.
- **Before → after:** stack both images, animate `clip-path: inset(0 0 0 X%)` on the top one
  with a thin line at the edge. Scroll-scrubbed in a pinned section, or a draggable handle
  (keyboard accessible).
- **Line journey:** one SVG path through the page, `stroke-dashoffset` scrubbed by scroll,
  sections anchored to points on the path.
- **Everywhere:** with `prefers-reduced-motion`, show the final state as a still.
- The `remotion-best-practices` skill can trim, join or re-time clips when needed.
