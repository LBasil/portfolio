import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface CountUpOptions {
  duration?: number
  decimals?: number
}

export function useCountUp(target: number, options: CountUpOptions = {}) {
  const { duration = 1400, decimals = 0 } = options
  const displayed = ref(0)
  const el = ref<HTMLElement | null>(null)
  let triggered = false

  function animate() {
    if (triggered) return
    triggered = true

    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = parseFloat((eased * target).toFixed(decimals))
      displayed.value = Math.min(target, current)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        displayed.value = target
      }
    }

    requestAnimationFrame(step)
  }

  useIntersectionObserver(el, ([entry]) => {
    if (entry.isIntersecting) animate()
  }, { threshold: 0.4 })

  return { displayed, el }
}
