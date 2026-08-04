import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseGlow() {
  const x = ref(-500)
  const y = ref(-500)

  let targetX = -500
  let targetY = -500
  let rafId: number | null = null
  let active = false
  let mediaQuery: MediaQueryList | null = null

  const lerp = (current: number, target: number, factor: number) =>
    current + (target - current) * factor

  const animate = () => {
    x.value = lerp(x.value, targetX, 0.12)
    y.value = lerp(y.value, targetY, 0.12)
    rafId = requestAnimationFrame(animate)
  }

  const onMouseMove = (e: MouseEvent) => {
    targetX = e.clientX
    targetY = e.clientY
  }

  const handleMediaChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      stop()
    } else {
      start()
    }
  }

  const start = () => {
    if (active) return
    active = true
    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)
  }

  const stop = () => {
    active = false
    window.removeEventListener('mousemove', onMouseMove)
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  onMounted(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hasFinePointer || prefersReducedMotion) return

    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', handleMediaChange)

    start()
  })

  onUnmounted(() => {
    stop()
    if (mediaQuery) {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  })

  return { x, y }
}
