# Repository Guidelines

Guide for AI agents working on the jonedev portfolio project.

## Project Overview

Personal portfolio site for João Paulo Castro (Product Engineer | Frontend Specialist). Built with Nuxt 3.17.4, Tailwind CSS, Vue 3. Deployed on Vercel via static generation (`nuxt generate`).

**Goal:** Attract recruiters with distinctive design and motion.

## Architecture & Data Flow

Single-page portfolio with 2 routes, no API layer, no server-side logic beyond Nuxt defaults.

```
app.vue (root shell)
├── NavigationMenu.vue (fixed nav)
├── NuxtPage (router)
│   ├── index.vue (home: HeroLeftContent + HeroIllustration)
│   └── portfolio.vue (projects: v-for ProjectCard)
└── Background effects (violet lightning blur, blue circle blur)
```

**Data flow:** All data is inline — no fetch calls, no CMS. Portfolio projects are hardcoded in `pages/portfolio.vue` as a local array of objects. Component props flow top-down only. No state management library; `useScrollAnimation` is the sole composable.

**Key architectural pattern:** Design system lives in `assets/css/main.css`, not `tailwind.config.js`. Tailwind handles layout/utility classes. Colors, animations, transitions, and keyframes are plain CSS with custom properties.

## Key Directories

```
pages/              # 2 routes: index.vue, portfolio.vue
components/         # 6 Vue components (auto-imported by Nuxt)
composables/        # 1 composable: useScrollAnimation.ts
assets/css/         # main.css — design system (keyframes, tokens, transitions)
public/img/         # 20 SVGs + 1 PNG static assets
.nuxt/              # Generated (do not edit)
.output/            # Build output (do not edit)
```

## Development Commands

```bash
npm run dev          # Dev server on port 3000
npm run build        # Production build
npm run generate     # Static site generation (Vercel deploy)
npm run preview      # Preview generated site locally
npm run postinstall  # Runs nuxt prepare (generates .nuxt/)
```

**Package manager:** npm. `pnpm-lock.yaml` and `pnpm-workspace.yaml` exist but are gitignored — do not use pnpm.

**No test scripts.** Verification is visual via Playwright (browser-based).

## Code Conventions & Common Patterns

### Component Patterns

- **Vue 3 Composition API** with `<script setup>` — no Options API.
- **Scoped styles:** `<style lang="css" scoped>` in every component.
- **Auto-imports:** Nuxt auto-imports components in `components/` and composables in `composables/`. No manual import statements needed.
- **Props:** Use `defineProps()` with explicit types and defaults. Pattern: `{ propName: Type }` or `{ propName: { type: Type, default: value } }`.

### Props Convention

Components receive data via props only. Example from `ProjectCard.vue`:
```js
defineProps({
  text: { type: String, required: true },
  imageSrc: String,
  logoSrc: String,
  gradientColor: String,
  lightEffectColor: String,
  textColor: String,
})
```

### Styling Patterns

- **Tailwind** for layout, spacing, responsive breakpoints (`lg:`, `xl:`).
- **CSS custom properties** for colors: `--hover-color` in `SimpleButton`, `v-bind()` bridges reactive props to scoped CSS.
- **`:deep()` (ONE colon)** for piercing child component styles in scoped CSS. Two colons (`::deep`) or three (`::deep`) are invalid and silently fail.
- **Color tokens in main.css:**
  - `.color-primary` → `#8B5CF6` (violet)
  - `.color-neutral` → `#3C3842`
  - `.color-neutral-dark` → `#19161D`
  - `.color-neutral-light` → `#65626A`
- **Brand colors:** LinkedIn `#0A66C2`, GitHub `#181717`.

### Animation Patterns

- **Keyframes in main.css:** `fadeInUp`, `fadeInDown`, `slideInRight`, `pulse`.
- **Hero stagger animations:** `anim-hero-name`, `anim-hero-title`, `anim-hero-description`.
- **Orbit animation:** 45s linear infinite rotation on `.orbit-path` containers, counter-rotation on cards to keep them upright. Uses `:deep(.orbit-path .orbit-card)` for scoped child styling.
- **Scroll animation:** `useScrollAnimation` composable — IntersectionObserver (threshold 0.1) adds `.animate-in` class to `[data-animate]` elements on intersect. One-shot (unobserves after trigger).
- **Button hover:** `scaleX(0→1)` fill animation from left, using `--hover-color` CSS variable.
- **Reduced motion:** Every animation has `prefers-reduced-motion: reduce` support. Global catch-all in `main.css`.

### Responsive Design

- **Tailwind breakpoints only** — no `$device.isDesktop` from `@nuxtjs/device` (module is installed but should be avoided).
- **Desktop threshold:** `lg:` (1024px). Orbit illustration hidden below 1500px via `hidden lg:block` pattern.
- **Single-component approach:** Use `hidden lg:flex` / `flex lg:hidden` for responsive visibility, not separate mobile/desktop components.

## Important Files

| File | Purpose |
|---|---|
| `nuxt.config.ts` | Nuxt config: 7 modules, Clarity analytics, global CSS |
| `assets/css/main.css` | **Design system** — all keyframes, color tokens, animations, transitions |
| `app.vue` | Root layout: background effects (lightning blur, circle blur), NuxtPage |
| `pages/index.vue` | Home page: hero content + orbit illustration |
| `pages/portfolio.vue` | Portfolio: hardcoded projects array, v-for ProjectCard |
| `components/HeroIllustration.vue` | Orbit animation (45s rotation, counter-rotation) |
| `components/ProjectCard.vue` | Project card with gradient bg, v-bind() reactive CSS |
| `components/SimpleButton.vue` | Link button with hover fill animation |
| `composables/useScrollAnimation.ts` | IntersectionObserver composable for scroll reveals |
| `tailwind.config.js` | Minimal Tailwind config (no theme extensions) |
| `eslint.config.mjs` | ESLint 9 flat config with @nuxt/eslint |

## Nuxt Modules

Installed in `nuxt.config.ts`:
1. `@nuxt/eslint` — ESLint integration
2. `@nuxtjs/tailwindcss` — Tailwind CSS
3. `@nuxt/fonts` — Font loading (Lexend)
4. `@nuxtjs/device` — Device detection (installed but **avoid using** — prefer Tailwind responsive classes)
5. `nuxt-icon` — Icon component
6. `@nuxt/image-edge` — Image optimization
7. `nuxt-scripts` — Microsoft Clarity analytics (id: `ruuv9lie14`)

## Static Assets

All in `public/img/` — 20 SVGs + 1 PNG:
- **Profile:** `picture.svg`
- **Project images:** project-specific SVGs (e.g., `project-*.svg`)
- **Logos:** `linkedin.svg`, `github.svg`, `vercel.svg`, `nuxt.svg`, `vuejs.svg`, `tailwindcss.svg`
- **Backgrounds:** `bg-texture.png` (appears unused)

## Testing & QA

**No automated test suite.** Verification is visual:

1. Start dev server: `npm run dev` (port 3000)
2. Playwright browser testing for visual confirmation
3. Test at 1920px (desktop) and 375px (mobile)
4. Check console for errors
5. Verify animations work smoothly
6. Verify `prefers-reduced-motion` is respected

**Pre-claim checklist:**
- [ ] Dev server runs without errors
- [ ] No console errors in browser
- [ ] Visual verification with Playwright
- [ ] Tested at 1920px width (desktop)
- [ ] Tested at 375px width (mobile)
- [ ] Animations work smoothly
- [ ] `prefers-reduced-motion` respected

## Git Rules

### NEVER Do Without Permission
- **NEVER push to remote** — always ask first
- **NEVER commit** — always ask first
- **NEVER delete files** — always ask first

### Commit Convention
- Messages in **ENGLISH**
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- One logical change per commit
- Add only relevant files: `git add <specific-files>`

### .gitignore
```
*.png, *.jpg              # Screenshots and images
pnpm-lock.yaml            # Project uses npm
pnpm-workspace.yaml
.playwright-mcp/          # Playwright MCP files
.mimocode/                # MiMoCode internal files
```

## Critical Lessons

These are non-obvious pitfalls discovered during development:

1. **CSS `clamp()` in `@keyframes` breaks animations.** Never use `clamp()`, `min()`, `max()`, or `var()` inside animation keyframe transforms. Use fixed values in keyframes; use responsive values only on static properties.
2. **`:deep()` needs exactly ONE colon.** `::deep` and `:::deep` are invalid and silently fail. Use `:deep(.parent .child)`.
3. **Don't touch working animation CSS.** Orbit animations with `:deep()` selectors are fragile. Do not refactor unless the user explicitly asks.
4. **`@nuxtjs/device` is unreliable.** Use Tailwind responsive classes (`hidden lg:block`) instead of `$device.isDesktop`.
5. **Background effects need `overflow-hidden`.** Large absolute-positioned blurs (1200px) cause horizontal scroll. Always contain with `overflow-hidden`.
6. **Playwright screenshots fail on complex CSS animations.** Elements with `transform + rotate` (orbit) may not render in screenshots. Verify with DOM checks or user's browser instead.
7. **Never commit automatically.** Each commit request is independent — permission does not carry over.
