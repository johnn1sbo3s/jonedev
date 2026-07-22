# AGENTS.md

Guide for AI agents working on the jonedev portfolio project.

## Project Overview

Personal portfolio site for João Paulo Castro (UX Designer + Frontend Developer). Built with Nuxt 3.17.5, Tailwind CSS, Vue 3. Deployed on Vercel.

**Goal:** Attract recruiters with distinctive design and motion.

## Tech Stack

- **Framework:** Nuxt 3.17.5 (Vue 3)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (not TypeScript)
- **Package Manager:** npm (NOT pnpm)
- **Deployment:** Vercel
- **Device Detection:** @nuxtjs/device

## Git Rules

### NEVER Do Without Permission
- **NEVER push to remote** - always ask first
- **NEVER commit** - always ask first
- **NEVER delete files** - always ask first

### Commit Convention
- **Messages in ENGLISH** - the project uses English commit messages
- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Keep commits focused - one logical change per commit

### What to Ignore in .gitignore
```
*.png, *.jpg          # Screenshots and images
pnpm-lock.yaml        # Project uses npm
pnpm-workspace.yaml
.playwright-mcp/      # Playwright MCP files
.mimocode/            # MiMoCode internal files
```

## Development Workflow

### Before Making Changes
1. Run `git status` to see current state
2. Check if you need to create a new branch

### When Implementing Features
1. **Always verify with Playwright** - don't claim work is done without visual testing
2. Start dev server: `npm run dev` (usually runs on port 3001)
3. Test on desktop (1920px) and mobile viewports
4. Check console for errors

### After Making Changes
1. Run `git status` - avoid committing unrelated files
2. Add only relevant files: `git add <specific-files>`
3. Commit with English message
4. **Wait for user approval before pushing**

## Architecture

### File Structure
```
pages/
  index.vue          # Home page with hero + orbit cards
  portfolio.vue      # Portfolio page with project cards
components/
  NavigationMenu.vue # Nav with Home/Portfolio links
  ProjectCard.vue    # Desktop project card (with images)
  MobileProjectCard.vue # Mobile project card
  OrbitCard.vue      # Orbiting skill card (home page)
assets/css/
  main.css           # Global styles, animations, keyframes
public/img/          # Static images (SVGs, PNGs)
```

### Key Design Decisions

1. **Home Page Layout:** Split layout on desktop (text left, orbit illustration right). Stacked on mobile. Right side hidden on screens < 1500px.

2. **Orbit Animation:** 3 skill cards orbit around profile photo using CSS animations. 45s rotation period. Cards counter-rotate to stay upright.

3. **Z-index Stacking:**
   - `.profile-photo`: z-index: 1
   - `.orbit-path`: z-index: 10
   - `.orbit-card`: z-index: 10

4. **Color Scheme:** Primary violet `#8B5CF6`, neutral `#3C3842`, background `#edf0f1`

5. **Reduced Motion:** Always respect `prefers-reduced-motion: reduce`

## Common Tasks

### Adding a New Component
1. Create in `components/` directory
2. Use Vue 3 Composition API (`<script setup>`)
3. Add scoped styles with `<style lang="css" scoped>`
4. Test with Playwright before committing

### Modifying Animations
1. Check `assets/css/main.css` for existing keyframes
2. Add new keyframes there if needed
3. Use animation classes: `anim-hero-name`, `anim-hero-title`, etc.
4. Test animation speed and easing
5. Verify with Playwright (animations can break layout)

### Working with SVGs
- Profile photo: `public/img/picture.svg`
- Project images: `public/img/*.svg`
- Icons: `public/img/linkedin.svg`, `public/img/github.svg`
- These are static files - edit with care

## Testing Checklist

Before claiming work is done:
- [ ] Dev server runs without errors
- [ ] No console errors in browser
- [ ] Visual verification with Playwright
- [ ] Tested at 1920px width (desktop)
- [ ] Tested at 375px width (mobile)
- [ ] Animations work smoothly
- [ ] `prefers-reduced-motion` respected

## User Preferences

- **Language:** Brazilian Portuguese for communication
- **Commits:** English only
- **Design:** Distinctive, not templated. One signature element.
- **Motion:** Deliberate, not excessive. One orchestrated moment.
- **Verification:** Always visual confirmation before claiming done
