---
name: site-speed-audit
description: Diagnose and fix Core Web Vitals / Google Lighthouse performance issues (slow LCP, layout shift/CLS, sluggish INP, unminified CSS/JS, images loading too early) in Next.js + Prismic projects. Trigger this whenever the user says "site-speed-audit", "run the speed audit", "performance audit", "why is this site slow", "fix Lighthouse score", "Core Web Vitals", "page speed issue", "lazy load images", "minify CSS/JS", "improve CLS/INP", or asks to diagnose or fix site performance in a Next.js/Prismic codebase — even if they don't name the skill directly, and even if they only paste a Lighthouse/PageSpeed screenshot or score. Always run this instead of free-handing a performance fix in a Next.js project. Reads the project's code first, reports findings in plain English, and waits for the user's explicit go-ahead before changing anything. STRICTLY functional/performance fixes only — never touches visual design, layout, styling, colors, spacing, fonts' visual appearance, or copy.
metadata:
  version: 1.0.0
  stack: nextjs + prismic
---

# Site Speed Audit (Next.js + Prismic)

You are diagnosing and fixing Google Lighthouse / Core Web Vitals issues in a Next.js + Prismic project. This skill has two hard rules that override everything else below.

## Rule 1 — Report first, fix second, never skip the pause

Never edit a file in the same turn you first diagnose the project. The flow is always:
1. Read the project and diagnose.
2. Give the user a short, plain-English report of what you found.
3. Stop and wait. Do not touch any files until the user replies with something like "fix it," "go ahead," or points at a specific item on your list.
4. Only then make changes — and only the ones the user approved (or all of them, if they said "fix everything").

## Rule 2 — Functional fixes only. Never touch UI/design.

This is the most important constraint in this skill and it must never be silently relaxed.

**Allowed to change** (functional/technical, invisible to the eye):
- Loading strategy: adding `loading="lazy"`, `priority`, or converting raw `<img>`/CSS background images to `next/image`
- Script loading strategy: `next/script` `strategy` prop (`afterInteractive`, `lazyOnload`, `worker`)
- Code splitting: converting eager imports of below-fold components to `next/dynamic`
- Removing genuinely unused CSS/JS (dead code, unused imports, duplicate library imports)
- Reserving `width`/`height` or `aspect-ratio` for images/embeds that don't already have it (this prevents layout shift — it does not change how anything looks once loaded, only stops it from jumping)
- Font loading mechanics via `next/font` (self-hosting, `display: swap`) — as long as the rendered font, size, and weight stay identical
- Prismic-specific: adding Imgix URL params (`?w=`, `?q=`, `?fm=webp`) to Prismic image fetches for responsive/compressed delivery, without changing the image itself

**Never touch, under any circumstances, even if it looks related:**
- Colors, spacing, margins, padding, typography choices, breakpoints, component layout/structure
- Copy, content, Prismic slice content or slice order
- Any Tailwind/CSS class that affects visual appearance (only touch attributes that affect *when/how* something loads, never *how it looks*)
- Component visual props (variants, sizes as seen by the user)

If a fix is genuinely ambiguous — e.g., "this image needs a fixed aspect-ratio box, which will very slightly change how the page renders while loading" — flag it to the user explicitly and let them decide. Never guess silently on anything touching appearance.

When you eventually hand off code changes (in Rule 1's step 4), explicitly restate to yourself and in your summary to the user: *"No UI, layout, styling, or content was changed — only loading/technical attributes."*

---

## Workflow

### Step 0 — Figure out if you need a live URL

You do NOT need to ask for a URL to run the code-level diagnosis — that part works from the codebase alone. A live URL is only useful as a *bonus* validation step (real Lighthouse/PageSpeed numbers to confirm the code-level findings actually matter).

Try to find it yourself first, in this order, before asking:
- `vercel.json`, `.env`, `.env.production` (look for `NEXT_PUBLIC_SITE_URL`, `SITE_URL`, etc.)
- `package.json` `"homepage"` field
- `README.md`

If you find one, mention it and offer to use it — don't silently fetch it without confirming it's the right live URL. If you don't find one, do NOT block on this — proceed with the code-only diagnosis and just ask once, briefly: *"Do you have a live URL for this project? I can cross-check against a real PageSpeed report, or skip that and go code-only."* If they don't answer or say skip, proceed without it.

### Step 1 — Read the project

Scan for:
- `next.config.js` / `next.config.mjs` (image domains, `images.formats`, `compress`, `swcMinify`/build settings)
- All image usage across pages/components — raw `<img>` tags vs `next/image`, and whether `next/image` calls have `priority` set on things that clearly aren't above-the-fold
- Prismic image/rich-text rendering (usually via `@prismicio/react`'s `PrismicNextImage` or a custom slice component) — check whether images go through Prismic's Imgix pipeline with resize/format params, or are pulled at full original size
- Third-party `<script>` tags or analytics snippets — are they using `next/script` with a lazy strategy, or a raw blocking `<script>` in `_document`/`layout`?
- Below-the-fold sections/slices — are they statically imported at the top of the page, or code-split with `next/dynamic`?
- Font loading — `next/font` vs a `<link>`-based Google Fonts import or `@import` in CSS (render-blocking)
- Bundle bloat — large libraries imported globally in `_app`/`layout` that are only used on one page

Read `references/nextjs-prismic-checklist.md` for the full, detailed checklist with what "good" vs "bad" looks like for each item — load it before diagnosing, don't rely on memory of the summary above.

### Step 2 — If a live URL is available, cross-check

Fetch a live PageSpeed Insights report for the URL (mobile and desktop) and note:
- Lab scores (Performance/Accessibility/Best Practices/SEO)
- Field data if available (real-user LCP/CLS/INP — this is the ground truth; lab scores are a stricter simulation and can look worse than reality)

Use this only to prioritize and confirm the code findings — never invent a score you didn't actually fetch.

### Step 3 — Report findings in plain English

Give the user a short list, ranked by impact vs. effort, in this shape per item:
- **What's happening** (plain English, not jargon — e.g., "12 images below the fold are loading immediately instead of waiting until scrolled into view")
- **Where** (exact file + line/component)
- **Why it matters** (which metric it hurts — load speed, layout shift, responsiveness)
- **Effort to fix**: Low / Medium / High

Do not include a code diff yet. Do not touch any files yet. End the report by asking which items to fix, or whether to fix everything.

### Step 4 — Wait

Stop here. This is a hard stop, not a soft suggestion. Let the user respond.

### Step 5 — Apply approved fixes only

Make only the changes the user approved. Follow Rule 2 strictly. After each file change, note in your summary exactly what changed and confirm it was loading/technical, not visual.

### Step 6 — Offer to re-check

If a live URL was available in Step 2, offer to re-fetch PageSpeed after the fixes are deployed to show the before/after delta. If not, just summarize what was changed and what improvement to expect (e.g., "fewer render-blocking requests on first paint").

---

## Output style
- Plain English, no unexplained jargon — this report often gets read by non-technical stakeholders before a developer touches code.
- Lead with the ranked list, not a wall of methodology.
- Always restate the "no UI changes" guarantee when reporting what was fixed.


---

# Next.js + Prismic Performance Checklist

Use this as the detailed reference during Step 1 of the audit. For each category: what "bad" looks like in code, what "good" looks like, and which fix is allowed under Rule 2 (functional-only).

## 1. Images

**Look for:**
- Raw `<img src=... />` tags instead of `next/image`'s `<Image>` component
- `<Image>` components with `priority` set on images that are clearly below the fold (hero images should have it; gallery/footer/testimonial images should not)
- Prismic images rendered via a plain `<img src={field.url} />` instead of `PrismicNextImage` (from `@prismicio/next`) or `next/image` pointed at the Prismic/Imgix URL
- Prismic image URLs with no query params (`?w=`, `?q=`, `?fm=webp`/`avif`) — Prismic's backend is Imgix, which supports on-the-fly resize/format/compress via URL params. Full-resolution originals being shipped to every device is a very common, very fixable issue.
- Images missing explicit `width`/`height` (or `fill` with a sized parent) — causes CLS as the browser doesn't reserve space before load

**Fix (allowed):**
- Swap raw `<img>` for `next/image` / `PrismicNextImage`
- Remove unnecessary `priority` from below-fold images (Next.js lazy-loads non-priority `<Image>` by default — no extra `loading="lazy"` needed on `next/image`, just don't mark things priority that aren't)
- Add Imgix params to Prismic image URLs, or use `PrismicNextImage`'s built-in `imgixParams` prop
- Add missing `width`/`height`/`fill` + sized container

**Never do:** change the image itself, its crop, its position in the layout, or its visual size on the page.

## 2. CSS/JS bloat

**Look for:**
- Large libraries (date pickers, chart libs, animation libs, icon packs) imported at the top of `_app.tsx` / `layout.tsx` and used on only one page
- Global CSS imports pulling in a whole framework/utility set when only a fraction of classes are used
- Duplicate libraries doing the same job (e.g., two different date libraries)
- No bundle analysis config (`@next/bundle-analyzer`) if the user wants ongoing visibility

**Fix (allowed):**
- Move library imports into the specific page/component that uses them
- Convert to dynamic `import()` / `next/dynamic` for anything not needed on first paint
- Remove genuinely dead/duplicate code
- Add `@next/bundle-analyzer` as a dev dependency if the user wants a recurring check (this is tooling, not a design change)

**Never do:** remove a class or style that's actually rendering something visible, even if it "looks unused" at a glance — verify usage across the whole codebase (including dynamic class construction) before removing anything CSS-related.

## 3. Below-the-fold content / code splitting

**Look for:**
- Prismic slice components all statically imported and rendered eagerly at the top of the page file, including slices that only appear far down the page (FAQ accordions, testimonial carousels, footers with embedded maps/widgets)
- Heavy client components (maps, carousels, video embeds) with no `next/dynamic` + `ssr: false` where appropriate

**Fix (allowed):**
- Wrap below-fold slice components in `next/dynamic`, optionally with a lightweight loading skeleton that matches the existing layout's reserved space (so this doesn't itself cause CLS)

**Never do:** change the *order* slices appear in, or remove/hide a slice — only change *how* it's loaded (eager vs. deferred).

## 4. Third-party scripts (analytics, chat widgets, pixels)

**Look for:**
- Raw `<script src=...>` tags in `_document.tsx` or `layout.tsx` `<head>` with no `strategy`
- Scripts blocking render that don't need to run until after interaction (chat widgets, marketing pixels)

**Fix (allowed):**
- Convert to `next/script` with `strategy="afterInteractive"` (runs after page is interactive) or `strategy="lazyOnload"` (runs when browser is idle) depending on how time-sensitive the script is
- Analytics that must fire on every pageview immediately → `afterInteractive`
- Chat widgets, non-critical pixels → `lazyOnload`

**Never do:** remove a tracking/analytics script the business relies on without asking first — this is a business decision, not a pure performance one.

## 5. Fonts

**Look for:**
- `<link>`-based Google Fonts import in `_document.tsx`/`layout.tsx`, or `@import url(...)` inside a CSS file — both are render-blocking
- No `next/font` usage

**Fix (allowed):**
- Migrate to `next/font/google` or `next/font/local`, which self-hosts and inlines font-loading CSS, removing the render-blocking network request
- Keep the exact same font family, weights, and `display` behavior the user currently has — this is a delivery-mechanism change only, the rendered text must look identical

**Never do:** change the font family, size, weight, or line-height as part of this — if the user wants that, it's a design decision outside this skill's scope.

## 6. Layout shift (CLS) sources beyond images

**Look for:**
- Ads, embeds, or dynamically-injected banners with no reserved space
- Web fonts causing a FOUT/FOIT swap that visibly reflows text (mitigated by the font fix above using `display: swap` or `optional`)
- Client-side data fetches that insert content above already-rendered content (e.g., a banner that loads in above the hero after the page has already painted)

**Fix (allowed):**
- Reserve space (min-height, aspect-ratio box) for anything that loads in asynchronously
- Move late-arriving above-fold content fetches to fetch earlier (server-side / at build time via Prismic's API) where feasible, so it's present on first paint instead of shifting in afterward

**Never do:** change the visual container styling beyond what's needed to reserve space — don't restyle it.

## 7. INP / responsiveness

**Look for:**
- Long synchronous tasks on the main thread triggered by user interaction (large state updates, unthrottled scroll/resize handlers, heavy computation in click handlers)
- Missing `useMemo`/`useCallback` in hot paths causing unnecessary re-renders on interaction

**Fix (allowed):**
- Debounce/throttle scroll and resize handlers
- Break up long tasks (`requestIdleCallback`, chunking heavy work)
- Add memoization where re-renders are demonstrably expensive and unnecessary

**Note:** INP often shows "N/A" in PageSpeed field data until enough real interaction samples accumulate — a lab-only fix here is preventive, not something you can prove moved the needle until real traffic confirms it.