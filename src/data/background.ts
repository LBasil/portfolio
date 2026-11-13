import type { BackgroundItem } from '@/types'

// Source : CV (hors poste actuel, déjà détaillé dans la section « Chez Ankama »).
export const background: BackgroundItem[] = [
  {
    period: { fr: 'Avril → juillet 2023', en: 'April → July 2023' },
    title: { fr: 'Stage - Développeur Vue.js', en: 'Internship - Vue.js developer' },
    place: 'Misyl Services',
    detail: {
      fr: "ERP en low-code/no-code, écrans avec Ant Design, coordination avec l'équipe back-end, mentorat d'un stagiaire.",
      en: 'Low-code/no-code ERP, screens built with Ant Design, coordination with the back-end team, mentoring an intern.'
    }
  },
  {
    period: { fr: '2022 - 2023', en: '2022 - 2023' },
    title: {
      fr: 'Licence pro Métiers de l\'informatique : Applications Web',
      en: "Professional bachelor's degree in IT: Web Applications"
    },
    place: 'Université de Lille'
  },
  {
    period: { fr: '2020 - 2022', en: '2020 - 2022' },
    title: {
      fr: 'DUT Informatique (diplôme universitaire de technologie)',
      en: 'DUT in Computer Science (university diploma of technology)'
    },
    place: 'Université Polytechnique Hauts-de-France'
  },
  {
    period: { fr: '2025', en: '2025' },
    title: {
      fr: 'Formation « TypeScript - Maîtriser et Développer »',
      en: 'Training "TypeScript - Master and Develop"'
    },
    place: 'Certification'
  },
  {
    period: { fr: '2022', en: '2022' },
    title: { fr: 'TOEIC niveau B2', en: 'TOEIC level B2' },
    place: 'Anglais professionnel'
  }
]
