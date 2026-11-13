import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { rememberLocale, type Locale, type LocalizedText } from '@/i18n'

export function useLocale() {
  const { locale } = useI18n()

  const current = computed<Locale>(() => (locale.value === 'en' ? 'en' : 'fr'))
  const otherLocale = computed<Locale>(() => (current.value === 'fr' ? 'en' : 'fr'))

  function setLocale(next: Locale) {
    locale.value = next
    rememberLocale(next)
  }

  function toggleLocale() {
    setLocale(otherLocale.value)
  }

  /** Texte d'un fichier de données : soit une chaîne unique (noms propres), soit { fr, en }. */
  function localize(text: LocalizedText | string): string {
    return typeof text === 'string' ? text : text[current.value]
  }

  /** « 2023-11 » → « Novembre 2023 » / « November 2023 » */
  function formatMonth(isoMonth: string): string {
    const [year, month] = isoMonth.split('-').map(Number)
    const label = new Date(year, month - 1, 1).toLocaleDateString(current.value, {
      month: 'long',
      year: 'numeric'
    })
    return label.charAt(0).toUpperCase() + label.slice(1)
  }

  return { locale: current, otherLocale, setLocale, toggleLocale, localize, formatMonth }
}
