import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light'
  )

  function applyTheme(value: 'light' | 'dark') {
    document.documentElement.setAttribute('data-bs-theme', value)
  }

  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  watch(theme, (value) => {
    localStorage.setItem('theme', value)
    applyTheme(value)
  }, { immediate: true })

  return { theme, toggle }
})
