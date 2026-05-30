import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection() {
  const activeSection = ref('')

  function onScroll() {
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      const el = section as HTMLElement
      if (window.scrollY >= el.offsetTop - 100) {
        activeSection.value = el.id
      }
    })
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { activeSection }
}
