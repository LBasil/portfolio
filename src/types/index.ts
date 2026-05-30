export interface Project {
  title: string
  description: string
  url?: string
  image?: string
  badges: string[]
  archived: boolean
  hasBlog?: boolean
  blogUrl?: string
}

export interface TimelineEntry {
  type: 'maj' | 'devblog' | 'live'
  image: string
  alt: string
  date: string
  title: string
  description: string
  articleUrl: string
}

export type TimelineFilter = 'all' | 'maj' | 'devblog' | 'live'

export interface SkillCategory {
  icon: string
  title: string
  items: string[]
}
