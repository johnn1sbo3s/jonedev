# Mouse Glow Effect — Design Spec

## Overview

Add a subtle violet glow effect that follows the mouse cursor across the viewport, complementing the existing violet/blue visual identity of the portfolio.

## Goals

- Add visual depth and interactivity to the desktop experience
- Maintain the existing design language (violet `#8B5CF6`, blur effects)
- Zero impact on performance (requestAnimationFrame, no layout thrash)
- Full respect for `prefers-reduced-motion`
- No interference on touch devices

## Architecture

### New files

- `app/composables/useMouseGlow.ts` — reactive composable exposing `{ x, y }` of a smoothed cursor position

### Modified files

- `app/App.vue` — render glow div, consume the composable

## Component Design

### `useMouseGlow` composable

```ts
// Returns reactive { x, y } in pixels (viewport-relative)
// Uses requestAnimationFrame + linear interpolation (lerp ~0.12)
// Only active on pointer-capable devices (pointer: fine)
// Disabled when prefers-reduced-motion is reduce
```

**Behavior:**
- Listens to `mousemove` on `window`
- Interpolates toward target position using lerp for smooth trailing
- Cleans up listeners on `onUnmounted`
- Returns `{ x: Ref<number>, y: Ref<number> }`

### Glow element (in App.vue)

A single `<div>` positioned `fixed` over the entire viewport:

```
pointer-events: none
position: fixed
inset: 0
z-index: 0 (behind content, above background effects)
width: 500px
height: 500px
border-radius: 50%
background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)
filter: blur(40px)
transform: translate(calc(x - 250px), calc(y - 250px))
transition: transform 0s (no CSS transition — JS handles smoothness via rAF)
```

## Behavior Details

| Condition | Behavior |
|---|---|
| Desktop with mouse | Glow follows cursor with smooth lerp |
| Touch device | Glow hidden (`display: none`) |
| `prefers-reduced-motion: reduce` | Glow hidden |
| Window resize | No issue (viewport-relative positioning) |
| Scroll | No issue (fixed position, no layout impact) |

## Performance

- Single `requestAnimationFrame` loop, no event throttling needed
- No CSS transitions on the glow element (JS-driven via rAF)
- `pointer-events: none` ensures zero interaction cost
- Lerp computation is trivial (< 0.1ms per frame)

## Reduced Motion

The composable checks `window.matchMedia('(prefers-reduced-motion: reduce)')`. When true, the glow div is not rendered at all.
