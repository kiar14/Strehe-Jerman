---
name: Strehe Jerman
description: Warm architectural presentation for roofing craftsmanship.
colors:
  bronze: "#AA784B"
  paper: "#F3F0E9"
  ink: "#242625"
  bronze-light: "#D6AF8C"
  muted: "#706D67"
  line: "#D9D4CA"
  primary-text: "#161916"
  bronze-hover: "#8A5B34"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(75px, 7.8vw, 112px)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(44px, 4.6vw, 66px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  square: "0px"
  circle: "50%"
spacing:
  control-gap: "24px"
  heading-gap: "48px"
  section-desktop: "112px"
  section-tablet: "85px"
  section-mobile: "65px"
components:
  button-primary:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.primary-text}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "16px 25px"
  button-primary-hover:
    backgroundColor: "{colors.bronze-hover}"
    textColor: "{colors.white}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "16px 25px"
  button-outline:
    backgroundColor: "transparent"
    rounded: "{rounded.square}"
    padding: "16px 25px"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "13px 0 11px"
  service-action:
    rounded: "{rounded.circle}"
    width: "42px"
    height: "42px"
---

# Design System: Strehe Jerman

## Overview

**Creative North Star: "The Crafted Roof"**

The Crafted Roof is a code-led description of the approved bronze design: warm paper, charcoal structure and precise architectural typography. Large roof photography and generous open space give the work prominence, while compact practical copy keeps contact information easy to use.

The original logo anchors the identity. Flat surfaces, fine dividers and circular arrow controls create a restrained, confident presentation; motion introduces imagery and signals interaction without changing the reading order.

This document captures the implemented, approved direction from `src/app/globals.css`, `src/app/page.tsx`, `src/app/layout.tsx` and `src/components/interactions.tsx`. The descriptive name is documentation language, not a new identity proposal. Frontmatter values are normative; sidecar tonal ramps are visualization aids, not additional production colors.

**Key Characteristics:**

- Warm paper and charcoal surfaces with bronze accents.
- Condensed architectural headings paired with clear, compact body text.
- Square photography, open cards and circular directional controls.
- Responsive composition with an explicit reduced-motion alternative.

## Colors

Warm mineral neutrals support a single bronze accent family.

### Primary

- **Craft Bronze** (`bronze`): primary actions, quotation marks and the company stamp.
- **Light Bronze** (`bronze-light`): highlighted heading lines on charcoal surfaces.
- **Deep Bronze** (`bronze-hover`): filled action hover treatment with white text.

### Neutral

- **Warm Paper** (`paper`): default page surface and light foreground on dark sections.
- **Charcoal Ink** (`ink`): main copy, inquiry surface and final contact surface.
- **Quiet Stone** (`muted`): supporting descriptions and captions.
- **Pale Seam** (`line`): separators and structural rules.
- **Deep Button Ink** (`primary-text`): readable text on the bronze action.
- **White** (`white`): logo strip surface and selected inverse states.

**The Bronze Continuity Rule.** Preserve the approved bronze accent family across actions and architectural details.

## Typography

**Display Font:** Barlow Condensed, sans-serif, locally hosted at semibold weight.

**Body Font:** Manrope, sans-serif, locally hosted variable font.

**Character:** Narrow, substantial headings create an architectural silhouette. Manrope carries practical copy, compact labels and navigation with a quieter rhythm.

### Hierarchy

- **Display:** the frontmatter display role is the desktop hero. At the wide breakpoint it becomes 120px; mobile uses 78px with a 0.94 line height.
- **Headline:** section headings use the headline role; mobile defaults to 47px, with larger inquiry and contact treatments.
- **Title:** service headings use the title role. Process and project titles use 28px.
- **Body:** the base role has a 70ch maximum paragraph length; component descriptions use 12–14px and line heights around 1.8–1.9.
- **Label:** compact bold actions use the label role; small captions and supporting labels are 9–11px. The hero location line uses increased letter spacing.

**The Two Voices Rule.** Use Barlow Condensed for architectural emphasis and Manrope for reading and interaction.

## Layout

The main container is capped at 1280px with 56px outer gutters. At 1100px and below, gutters become 32px; at 700px and below, 20px. Section spacing follows the desktop, tablet and mobile tokens. Heading rows align title and supporting copy at their lower edge, becoming vertical on mobile.

The service composition uses six underlying columns: three two-column cards followed by two three-column cards. It collapses to one column at 700px. Desktop inquiry and company sections are paired columns; mobile stacks their content. Process steps move from four columns to two at 800px, then to numbered rows at 700px. The project gallery pairs a tall left image with two right images and becomes a single column on mobile. Testimonials follow the same three-to-one simplification.

Header heights are 96px, 86px and 78px across desktop, tablet and mobile. Navigation becomes a right-hand dialog at 800px. The hero uses viewport-relative height with bounded minimum and maximum height; desktop and mobile have separate image sources at 701px.

## Elevation & Depth

No box shadows are used. Depth comes from photographic cropping, tonal section changes, fine separators and dark dialog overlays. The company stamp overlaps its photograph. Hero gradients preserve foreground legibility without introducing additional card surfaces.

**The Flat Surface Rule.** Keep content surfaces flat; use tone, spacing and imagery to establish depth.

## Shapes

Cards, images, primary buttons and fields have square corners. Circular geometry is reserved for arrow actions, gallery controls, close buttons and the large contact action. Thin rules structure forms, navigation and supporting lists. Hero headline lines clip their entrance motion, and image frames clip modest hover scaling.

## Components

### Buttons

Direct and compact. Filled actions use the bronze or charcoal variant, square corners, a minimum height of 54px and the frontmatter padding. The outline variant uses a current-color 1px border. Background and transform states transition over 250ms; arrows move 2px upward and right on hover. Disabled buttons show half opacity and a disabled cursor. Keyboard focus uses a 3px deep-bronze outline with 5px offset.

### Cards / Containers

Open image-and-caption compositions, without enclosing backgrounds or shadows. Service images use a 1.4 aspect ratio, with wider 2.15 frames on the second desktop row; mobile normalizes them to 1.45. A circular outlined arrow sits beside the heading. Hover enlarges service photography slightly (1.035) over 700ms. Project photography enlarges to 1.025 over 600ms and opens a keyboard-friendly image dialog.

### Inputs / Fields

Restrained underlined fields on charcoal. Inputs, selects and textareas have transparent backgrounds, square corners and a single bottom border. Focus shifts the border to light bronze; invalid fields use a warm red border and adjacent error text. Labels remain visible. The form presents validation and a demo confirmation without sending or storing information.

### Navigation

Small Manrope links with an animated bronze underline on desktop. The mobile dialog uses larger condensed links, fine separators and a circular close button. Preserve dialog semantics, focus handling, the skip link and direct section anchors.

### Hero and motion

Three charcoal panels retract from the top over 1.15 seconds with 0.1-second stagger. Headline lines enter over one second; the photograph settles from a 1.06 scale over 1.9 seconds. GSAP uses `power3.out` for the main entrance and `power2.out` for the photograph. Desktop parallax starts at 769px and shifts the photograph by 12 percent through the hero scroll range. Lenis uses a 1.05-second duration and shares the GSAP ticker.

With reduced motion enabled, entrance animation, parallax, smooth scrolling and CSS transitions are disabled. Essential content is visible without animation. Avoid adding loaders or scroll locking to the entrance.

### Manufacturer strip

Six monochrome logos move in a 32-second linear loop while the strip is active. A visible pause control lets users stop it. Reduced motion displays one wrapping static group and removes the duplicated decorative group and pause control.

## Do's and Don'ts

### Do:

- Do preserve the original logo and approved bronze, paper and ink palette.
- Do use Barlow Condensed for headings and Manrope for interface and body copy.
- Do retain visible keyboard focus, descriptive labels and reduced-motion alternatives.
- Do keep illustrative service imagery distinguishable from real project photography.

### Don't:

- Don't replace the approved visual identity with a new palette or font pairing.
- Don't introduce shadows or rounded card shells into the existing flat composition.
- Don't hide essential content behind animation or require motion to understand the page.

## Approved refinement — 27 September 2026
User supplied three explicit reference screenshots. Their form card, centered review carousel, and four-step connector layout override earlier stylistic restrictions on labels and cards. Use light bronze #D6AF8C for CTA buttons; retain original paper/charcoal/bronze identity elsewhere. Desktop navigation is centered with a service dropdown, phone and CTA. Trust metrics sit inside the hero. Service images retain full 4:3 framing. Logos keep original color and blend into the warm background. Reviews remain source-attributed summaries with no invented ratings. Service, FAQ and legal routes are future production destinations and intentionally have no pages in this prototype.
