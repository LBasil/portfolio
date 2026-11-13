import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import { fr } from './fr'
import { en } from './en'

export type Locale = 'fr' | 'en'
export type LocalizedText = Record<Locale, string>

const STORAGE_KEY = 'locale'

function isLocale(value: unknown): value is Locale {
  return value === 'fr' || value === 'en'
}

/**
 * Le site est en français par défaut (cible principale, et c'est ce que voient les robots d'indexation).
 * Ordre : ?lang=en|fr (lien partageable) > choix mémorisé > français.
 */
function detectLocale(): Locale {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (isLocale(fromUrl)) return fromUrl
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // stockage indisponible (navigation privée, etc.) : on retombe sur le français
  }
  return 'fr'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'fr',
  messages: { fr, en },
  warnHtmlMessage: false
})

export function rememberLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // sans importance
  }
}

// Garde <html lang>, le titre de l'onglet et la meta description alignés sur la langue affichée.
watch(
  () => i18n.global.locale.value,
  (value) => {
    const locale: Locale = isLocale(value) ? value : 'fr'
    document.documentElement.lang = locale
    document.title = i18n.global.t('meta.title')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', i18n.global.t('meta.description'))
  },
  { immediate: true }
)
