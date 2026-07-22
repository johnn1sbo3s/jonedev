import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
