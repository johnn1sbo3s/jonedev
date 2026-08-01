export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all [data-animate] elements after DOM is ready
    nextTick(() => {
      document.querySelectorAll('[data-animate]').forEach((el) => {
        observer.value?.observe(el)
      })
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  function observe(el: HTMLElement | null) {
    if (el && observer.value) {
      observer.value.observe(el)
    }
  }

  return { observe }
}
