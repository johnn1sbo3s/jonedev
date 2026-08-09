# Currículo (download) + SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a CV download button to the hero and full SEO head (OG, canonical, hreflang, sitemap, JSON-LD, OG image) to the jonedev Nuxt 4 portfolio.

**Architecture:** Static Nuxt 4 SPA (2 routes, i18n EN/PT/ES, EN unprefixed). SEO head via `useLocaleHead({ seo: true })` + `i18n.baseUrl` in `nuxt.config.ts`; sitemap/robots as static files in `public/`; CV button is a new `SimpleButton` with a `download` prop; OG image is a headless-screenshot PNG placed in `public/img/`.

**Tech Stack:** Nuxt 4.5, @nuxtjs/i18n v10, Tailwind v4, npm.

## Global Constraints

- Package manager: **npm only** (pnpm files are gitignored).
- Locale files use **tab indentation** — match it exactly.
- All 3 locale files (`i18n/locales/en.json`, `pt.json`, `es.json`) must be edited together.
- Production domain (verbatim): `https://jonedev.vercel.app`
- CV file (verbatim): `public/cv_en.pdf`, served at `/cv_en.pdf`
- **NEVER commit** — repo rule: commit only with explicit user permission. Last task asks the user.
- Do NOT touch orbit animation CSS, keyframes, or `:deep()` selectors.
- Verification commands (run once at end): `npm run lint`, `npm run type-check`, `npm run generate`.
- No test suite exists; verification is build + static-HTML inspection + browser.

---

### Task 1: Add `hero.downloadCv` i18n keys

**Files:**
- Modify: `i18n/locales/en.json` (hero block, ~line 5)
- Modify: `i18n/locales/pt.json` (hero block, ~line 5)
- Modify: `i18n/locales/es.json` (hero block, ~line 5)

**Interfaces:**
- Produces: `hero.downloadCv` string in all 3 locales — consumed by Task 3 via `$t('hero.downloadCv')`.

- [ ] **Step 1: Add the key to each locale**

In each file, inside the `"hero": { ... }` object, after the `"description"` line, add (keep tabs):

`i18n/locales/en.json`:
```json
		"downloadCv": "Download CV"
```

`i18n/locales/pt.json`:
```json
		"downloadCv": "Baixar currículo"
```

`i18n/locales/es.json`:
```json
		"downloadCv": "Descargar currículum"
```

Existing `"description"` line must keep its trailing comma (it is no longer the last key).

- [ ] **Step 2: Validate JSON**

Run: `jq empty i18n/locales/en.json i18n/locales/pt.json i18n/locales/es.json`
Expected: no output, exit 0.

---

### Task 2: Add `download` prop to SimpleButton

**Files:**
- Modify: `app/components/SimpleButton.vue` (template line 2, script props block)

**Interfaces:**
- Consumes: nothing new.
- Produces: `SimpleButton` accepts optional `download?: boolean` — consumed by Task 3.

- [ ] **Step 1: Update the template anchor**

In `app/components/SimpleButton.vue`, change line 2 from:

```html
  <a class="simple-button" :style="{ '--hover-color': hoverColor }" :href="link" target="_blank" rel="noopener noreferrer">
```

to:

```html
  <a class="simple-button" :style="{ '--hover-color': hoverColor }" :href="link" :target="download ? undefined : '_blank'" :rel="download ? undefined : 'noopener noreferrer'" :download="download || undefined">
```

When `download` is true: no `target`/`rel` rendered + `download` attr → download in the same tab context, zero chance of a blank tab. When false: identical to today (`target="_blank"`, `rel="noopener noreferrer"`).

- [ ] **Step 2: Update the props**

Change the script block from:

```ts
withDefaults(defineProps<{
  link: string
  title: string
  hoverColor?: string
}>(), {
  hoverColor: '#8B5CF6',
})
```

to:

```ts
withDefaults(defineProps<{
  link: string
  title: string
  hoverColor?: string
  download?: boolean
}>(), {
  hoverColor: '#8B5CF6',
  download: false,
})
```

- [ ] **Step 3: Type-check**

Run: `npm run type-check`
Expected: exit 0 (the vue-router/volar `sfc-route-blocks` stderr warning is harmless — ignore it).

---

### Task 3: CV download button in the hero

**Files:**
- Modify: `app/components/HeroLeftContent.vue` (template buttons row + script)
- Modify: `app/utils/constants.ts` (add CV_URL)

**Interfaces:**
- Consumes: `SimpleButton` `download` prop (Task 2), `hero.downloadCv` (Task 1).
- Produces: button rendering at `/cv_en.pdf` — verified in Task 8.

- [ ] **Step 1: Add the CV URL constant**

In `app/utils/constants.ts`, after the `CONTACT_EMAIL` line, add:

```ts
export const CV_URL = '/cv_en.pdf'
```

- [ ] **Step 2: Add the button**

In `app/components/HeroLeftContent.vue`, inside the buttons row (`<div class="z-50 mt-4 flex w-full max-w-100 flex-col gap-2 lg:flex-row">`), after the GitHub `SimpleButton` and BEFORE the mobile-only contact `<div class="lg:hidden">`, add:

```html
      <SimpleButton :link="cvLink" :title="$t('hero.downloadCv')" hover-color="#8B5CF6" download>
        <template #icon>
          <Icon name="lucide:file-down" :size="22" style="color: var(--color-icon)" />
        </template>
      </SimpleButton>
```

- [ ] **Step 3: Add the script wiring**

In the same file's script block, change:

```ts
import { CONTACT_EMAIL } from '~/utils/constants'

const contactLink = `mailto:${CONTACT_EMAIL}`
```

to:

```ts
import { CONTACT_EMAIL, CV_URL } from '~/utils/constants'

const contactLink = `mailto:${CONTACT_EMAIL}`
const cvLink = CV_URL
```

- [ ] **Step 4: Type-check**

Run: `npm run type-check`
Expected: exit 0.

---

### Task 4: Set `i18n.baseUrl`

**Files:**
- Modify: `nuxt.config.ts` (i18n block)

**Interfaces:**
- Produces: `i18n.baseUrl` — required by `useLocaleHead({ seo: true })` in Task 6 to emit canonical + hreflang + og:locale.

- [ ] **Step 1: Add baseUrl**

In `nuxt.config.ts`, inside the `i18n: {` object, as the first key, add:

```ts
    baseUrl: 'https://jonedev.vercel.app',
```

- [ ] **Step 2: Restart dev server (if running) and confirm no i18n errors**

Run: `npx nuxt prepare`
Expected: exits 0 with no i18n/config errors.

---

### Task 5: Generate OG image (1200×630 PNG)

**Files:**
- Create (temp): `og-mockup.html` (project root — deleted at end of this task)
- Create: `public/img/og-image.png`

**Interfaces:**
- Produces: `public/img/og-image.png` — referenced by absolute URL in Task 6 (`https://jonedev.vercel.app/img/og-image.png`).

- [ ] **Step 1: Write the mockup HTML**

Create `og-mockup.html` at the project root with exactly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;900&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: #19161D;
    font-family: 'Lexend', sans-serif;
    overflow: hidden;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    position: relative;
  }
  .glow {
    position: absolute; width: 700px; height: 700px; border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.55), transparent 70%);
    top: -250px; left: -150px; filter: blur(40px);
  }
  .glow2 {
    position: absolute; width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(33, 173, 254, 0.35), transparent 70%);
    bottom: -200px; right: -100px; filter: blur(50px);
  }
  .logo {
    position: absolute; top: 48px; left: 56px;
    display: flex; align-items: center; gap: 14px;
    color: #fff; font-size: 30px; font-weight: 700;
  }
  .logo-dot { width: 18px; height: 18px; border-radius: 50%; background: #8B5CF6; }
  .name { color: #fff; font-size: 76px; font-weight: 900; letter-spacing: -1px; }
  .role { color: #A78BFA; font-size: 38px; font-weight: 400; margin-top: 18px; letter-spacing: 0.5px; }
  .bar { width: 110px; height: 8px; border-radius: 999px; background: linear-gradient(90deg, #8B5CF6, #21ADFE); margin-top: 40px; }
  .url { position: absolute; bottom: 44px; right: 56px; color: #65626A; font-size: 26px; font-weight: 400; }
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="glow2"></div>
  <div class="logo"><div class="logo-dot"></div>JoneDev</div>
  <div class="name">João Paulo Castro</div>
  <div class="role">Product Engineer | Frontend Specialist</div>
  <div class="bar"></div>
  <div class="url">jonedev.vercel.app</div>
</body>
</html>
```

- [ ] **Step 2: Screenshot at 1200×630**

Via the browser tool: open `file:///Users/jone/Projetos/jonedev/og-mockup.html` with viewport `{ width: 1200, height: 630 }`, wait for the Google Fonts to load, take a full-page screenshot. The tool returns a screenshot path.

- [ ] **Step 3: Move to public and verify dimensions**

Run (replace `<screenshot-path>` with the tool's returned path):

```bash
cp <screenshot-path> public/img/og-image.png
sips -g pixelWidth -g pixelHeight public/img/og-image.png
```

Expected: `pixelWidth: 1200`, `pixelHeight: 630`.

- [ ] **Step 4: Delete the temp mockup**

```bash
rm og-mockup.html
```

---

### Task 6: SEO head tags (App.vue + both pages)

**Files:**
- Modify: `app/App.vue` (script block — add head logic; template untouched)
- Modify: `app/pages/index.vue` (script block)
- Modify: `app/pages/portfolio.vue` (script block)

**Interfaces:**
- Consumes: `i18n.baseUrl` (Task 4), `public/img/og-image.png` (Task 5), `CONTACT_EMAIL` (existing in `app/utils/constants.ts`).
- Produces: per-route `<html lang>`, canonical, hreflang alternates, og:locale, og:image, twitter:card, JSON-LD Person — verified in Task 8.

- [ ] **Step 1: App.vue — root head (locale SEO + common OG + JSON-LD)**

In `app/App.vue`, add a `<script setup lang="ts">` block (there is none today) with:

```ts
import { CONTACT_EMAIL } from '~/utils/constants'

const head = useLocaleHead({ seo: true })

const seoHead = computed(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang },
  meta: [
    ...(head.value.meta ?? []),
    { property: 'og:site_name', content: 'JoneDev' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://jonedev.vercel.app/img/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'João Paulo Castro – Product Engineer | Frontend Specialist' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [...(head.value.link ?? [])],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'João Paulo Castro',
        jobTitle: 'Product Engineer | Frontend Specialist',
        url: 'https://jonedev.vercel.app',
        email: CONTACT_EMAIL,
        sameAs: [
          'https://www.linkedin.com/in/joaopaulo-castro/',
          'https://github.com/johnn1sbo3s/',
        ],
      }),
    },
  ],
}))

useHead(seoHead)
```

- [ ] **Step 2: index.vue — per-page title/description**

In `app/pages/index.vue`, in the existing script block after `useScrollAnimation()`, add:

```ts
const { t } = useI18n()

useHead(() => ({
  title: `João Paulo Castro – ${t('hero.title')}`,
  meta: [
    { name: 'description', content: t('hero.description') },
    { property: 'og:title', content: `João Paulo Castro – ${t('hero.title')}` },
    { property: 'og:description', content: t('hero.description') },
  ],
}))
```

- [ ] **Step 3: portfolio.vue — per-page title/description**

In `app/pages/portfolio.vue`, after `useScrollAnimation()`, add:

```ts
const { t } = useI18n()

useHead(() => ({
  title: `${t('portfolio.sectionTitle')} – João Paulo Castro`,
  meta: [
    { name: 'description', content: t('portfolio.subtitle') },
    { property: 'og:title', content: `${t('portfolio.sectionTitle')} – João Paulo Castro` },
    { property: 'og:description', content: t('portfolio.subtitle') },
  ],
}))
```

(Note: `useI18n` is already destructured in portfolio.vue as `const { tm, rt } = useI18n()` — add `t` to that destructure instead of a second call.)

- [ ] **Step 4: Type-check**

Run: `npm run type-check`
Expected: exit 0.

---

### Task 7: sitemap.xml + robots.txt

**Files:**
- Create: `public/sitemap.xml`
- Modify: `public/robots.txt` (add Sitemap line)

**Interfaces:**
- Produces: static files copied to `.output/public/` on generate — verified in Task 8.

- [ ] **Step 1: Write sitemap.xml**

Create `public/sitemap.xml` with exactly:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://jonedev.vercel.app/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://jonedev.vercel.app/" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://jonedev.vercel.app/pt/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://jonedev.vercel.app/es/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://jonedev.vercel.app/" />
  </url>
  <url>
    <loc>https://jonedev.vercel.app/portfolio</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://jonedev.vercel.app/portfolio" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://jonedev.vercel.app/pt/portfolio" />
    <xhtml:link rel="alternate" hreflang="es" href="https://jonedev.vercel.app/es/portfolio" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://jonedev.vercel.app/portfolio" />
  </url>
</urlset>
```

- [ ] **Step 2: Update robots.txt**

Change `public/robots.txt` from:

```
User-Agent: *
Disallow:
```

to:

```
User-Agent: *
Disallow:

Sitemap: https://jonedev.vercel.app/sitemap.xml
```

- [ ] **Step 3: Validate XML**

Run: `xmllint --noout public/sitemap.xml`
Expected: no output, exit 0. (If xmllint is missing, skip — the generate step in Task 8 copies it as-is.)

---

### Task 8: Build + end-to-end verification

**Files:** none modified — verification only.

**Interfaces:** exercises everything produced by Tasks 1–7.

- [ ] **Step 1: Lint + type-check**

Run: `npm run lint`
Expected: exit 0.

Run: `npm run type-check`
Expected: exit 0 (ignore the vue-router/volar stderr warning).

- [ ] **Step 2: Static generation**

Run: `npm run generate`
Expected: exits 0; `.output/public/` contains `sitemap.xml`, `robots.txt`, `cv_en.pdf`, `img/og-image.png`.

Verify: `ls .output/public/sitemap.xml .output/public/robots.txt .output/public/cv_en.pdf .output/public/img/og-image.png`

- [ ] **Step 3: Serve the generated site**

Run: `npm run preview` (starts on http://localhost:4173).

- [ ] **Step 4: Inspect static HTML head (3 locales)**

Run and confirm each of the following contains the expected tags:

```bash
curl -s http://localhost:4173/ | grep -o '<title>[^<]*</title>'
curl -s http://localhost:4173/ | grep -c 'rel="canonical"'
curl -s http://localhost:4173/ | grep -c 'hreflang='
curl -s http://localhost:4173/ | grep -o 'og:image[^>]*'
curl -s http://localhost:4173/ | grep -o 'application/ld+json'
curl -s http://localhost:4173/pt/ | grep -o '<html[^>]*lang="[^"]*"'
curl -s http://localhost:4173/pt/portfolio | grep -o '<title>[^<]*</title>'
```

Expected:
- `/` title: `João Paulo Castro – Product Engineer – Frontend Specialist`
- canonical present (absolute URL, `https://jonedev.vercel.app/`)
- ≥ 3 hreflang links on `/` (en/pt/es + x-default)
- og:image = `https://jonedev.vercel.app/img/og-image.png`
- JSON-LD script present
- `/pt/` html lang = `pt`
- `/pt/portfolio` title = `Portfólio – João Paulo Castro`

- [ ] **Step 5: Browser check (visual + download)**

Headless browser at http://localhost:4173/:
- Hero shows the new CV button (icon + translated label) next to LinkedIn/GitHub.
- Click CV button → file downloads (or anchor has `download` attr + `/cv_en.pdf` returns 200).
- Console: no errors.
- Switch locale (top bar on mobile viewport or URL `/pt/`) → title/labels switch language.

- [ ] **Step 6: Stop the preview server**

Stop the `npm run preview` process.

- [ ] **Step 7: Ask the user about committing**

Per repo rule, do NOT commit. Report completion and ask: "quer que eu commite essas mudanças?" — only commit if the user says yes.

---

## Self-Review Notes

- Spec coverage: CV button (Tasks 1–3), baseUrl (Task 4), OG image (Task 5), head tags + JSON-LD (Task 6), sitemap/robots (Task 7), verification (Task 8). No spec item left uncovered.
- Placeholders: none — every step has concrete content.
- Type consistency: `SimpleButton.download?: boolean` defined in Task 2, consumed in Task 3; `hero.downloadCv` defined in Task 1, consumed in Task 3; `i18n.baseUrl` Task 4 → Task 6; `public/img/og-image.png` Task 5 → Task 6. All names consistent.
