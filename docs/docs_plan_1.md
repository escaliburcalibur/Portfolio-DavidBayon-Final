# docs/plan1.md — Responsive Navigation & SPA Sidebar

## 1. AI Prompt / Question

> "I have a portfolio website with a sidebar-based SPA layout. I want a responsive navigation system that works across desktop and mobile without using a framework. The sidebar cards should control which project section is visible. Please propose a clean, scalable approach that preserves editorial aesthetics and avoids page reloads."

---

## 2. AI Planning Response

**Proposed Approach:**

- Use a single-page HTML structure where all project sections exist in the DOM.
- Assign each sidebar card a `data-target` attribute that maps to a project section ID.
- Use JavaScript to:
  - Remove the `.active` class from all project sections
  - Add `.active` to the selected section
- Hide inactive sections with `display: none`.
- Keep navigation logic framework-free for maximum control and performance.
- Ensure responsiveness using CSS Grid/Flexbox and media queries.
- On mobile, stack sidebar and content vertically.

**Why this works:**
- Avoids routing complexity
- Maintains full design control
- Easy to extend with animations

---

## 3. What Was Implemented

- Sidebar cards with `data-target` attributes
- JavaScript click handlers controlling active project state
- `.project` / `.project.active` visibility logic in CSS
- Responsive layout via media queries

---


# docs/plan2.md — GSAP Scroll Animations & Parallax

## 1. AI Prompt / Question

> "I want to add scroll-based reveal animations and subtle parallax effects using GSAP ScrollTrigger. The site is a SPA where sections are shown/hidden dynamically. How should I structure this so animations remain performant and reliable?"

---

## 2. AI Planning Response

**Proposed Approach:**

- Register the ScrollTrigger plugin explicitly.
- Use reusable utility classes (`.reveal`, `.parallax`).
- Animate elements individually using `gsap.utils.toArray()`.
- Use `scrollTrigger.refresh()` whenever the active project changes.
- Keep animations subtle: fade + translate, no heavy transforms.

**Animation Patterns:**
- Reveal: opacity 0 → 1, y: 40 → 0
- Parallax: small `yPercent` movement with `scrub: true`

---

## 3. What Was Implemented

- GSAP + ScrollTrigger registration
- Scroll-based reveal animations
- Parallax image motion in case studies
- ScrollTrigger refresh on project change

---


# docs/plan3.md — Contact CTA (Instagram Integration)

## 1. AI Prompt / Question

> "I want a minimal, editorial-style ‘Contact me’ CTA that links to Instagram. It should fit naturally inside the About section, work in dark/light mode, and avoid looking like a traditional form. What is the cleanest implementation?"

---

## 2. AI Planning Response

**Proposed Approach:**

- Use a simple anchor link to Instagram (no form submission).
- Place CTA at the end of the About section.
- Style as text-based editorial link with animated underline.
- Respect existing CSS variables and typography.
- Optional JS for analytics or future enhancements.

---

## 3. What Was Implemented

- HTML CTA block inside About section
- Custom CSS underline hover animation
- Dark/light mode compatible styling
- Optional JS click handler for tracking

---

## Development & AI Usage Notes

- Each feature was planned before implementation.
- Pre-AI state should be committed before applying changes.
- Suggested commit example:
  - `feat(scroll): before applying AI animation planning`
- PRs should include:
  - Clear summary of AI-assisted changes
  - Notes on deviations from the plan
  - Self-review comments

This documentation preserves transparency and structured development when working with AI assistance.

