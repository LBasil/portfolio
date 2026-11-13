import type { LocalizedText } from '@/i18n'

export interface Project {
  title: string
  description: LocalizedText
  url?: string
  repoUrl?: string
  image?: string
  badges: string[]
  archived: boolean
  hasBlog?: boolean
  blogUrl?: string
  blogLabel?: LocalizedText
}

export interface TimelineEntry {
  type: 'maj' | 'devblog' | 'live'
  image: string
  /** Titre officiel de la publication (conservé en français : c'est le nom de la mise à jour). */
  alt: string
  /** Mois au format AAAA-MM, formaté selon la langue à l'affichage. */
  date: string
  title: string
  description: LocalizedText
  articleUrl: string
}

export type TimelineFilter = 'all' | 'maj' | 'devblog' | 'live'

export interface BackgroundItem {
  period: LocalizedText
  title: LocalizedText
  place: string
  detail?: LocalizedText
}
