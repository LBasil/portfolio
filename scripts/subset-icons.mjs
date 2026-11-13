// Génère un sous-ensemble de Font Awesome Free : uniquement les icônes utilisées dans src/.
//
//   npm run icons
//
// Sortie (à committer) :
//   src/assets/fonts/fa-solid-subset.woff2
//   src/assets/fonts/fa-brands-subset.woff2
//   src/assets/styles/icons.css
//
// À relancer chaque fois qu'une classe `fa-...` est ajoutée ou retirée dans le code.
// Le script repère toutes les chaînes `fa-xxx` dans src/ (templates, TypeScript, noms d'icônes en données).
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs'
import { join, extname } from 'node:path'
import subsetFont from 'subset-font'

const FA = 'node_modules/@fortawesome/fontawesome-free'
const OUT_FONTS = 'src/assets/fonts'
const OUT_CSS = 'src/assets/styles/icons.css'

// Tailles supportées (utilitaires Font Awesome `fa-2x`, `fa-lg`, etc.)
const SIZES = {
  'fa-2xs': '0.625em', 'fa-xs': '0.75em', 'fa-sm': '0.875em', 'fa-lg': '1.25em', 'fa-xl': '1.5em', 'fa-2xl': '2em',
  'fa-1x': '1em', 'fa-2x': '2em', 'fa-3x': '3em', 'fa-4x': '4em', 'fa-5x': '5em'
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return walk(path)
    return ['.vue', '.ts'].includes(extname(path)) ? [path] : []
  })
}

// 1. Classes fa-* présentes dans le code
const used = new Set()
for (const file of walk('src')) {
  for (const match of readFileSync(file, 'utf8').matchAll(/\bfa-[a-z0-9]+(?:-[a-z0-9]+)*/g)) used.add(match[0])
}

// 2. Table nom -> point de code, lue dans le CSS officiel (Font Awesome 6.7 : `.fa-bolt { --fa: "\f0e7"; }`)
// Les icônes de marques (GitHub, Vue…) sont dans brands.css, les autres dans fontawesome.css.
const css = ['css/fontawesome.css', 'css/brands.css'].map((file) => readFileSync(join(FA, file), 'utf8')).join('\n')
const codepoints = new Map()
for (const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const content = rule[2].match(/(?:content|--fa):\s*"\\([0-9a-fA-F]+)"/)
  if (!content) continue
  for (const selector of rule[1].split(',')) {
    const name = selector.trim().match(/^\.(fa-[a-z0-9-]+)(?:::before)?$/)
    if (name) codepoints.set(name[1], content[1].toLowerCase())
  }
}

const icons = []
const sizes = []
const unknown = []
for (const token of [...used].sort()) {
  if (codepoints.has(token)) icons.push(token)
  else if (SIZES[token]) sizes.push(token)
  else unknown.push(token)
}
if (unknown.length) {
  console.error(`Classes fa-* inconnues (ni icône Font Awesome Free, ni taille prise en charge) : ${unknown.join(', ')}`)
  process.exit(1)
}

// 3. Sous-ensembles des deux polices (le glyphe n'existe que dans l'une des deux : l'autre l'ignore)
const text = icons.map((name) => String.fromCodePoint(parseInt(codepoints.get(name), 16))).join('')
mkdirSync(OUT_FONTS, { recursive: true })
const report = []
for (const [label, source, target] of [
  ['solid', 'fa-solid-900.ttf', 'fa-solid-subset.woff2'],
  ['brands', 'fa-brands-400.ttf', 'fa-brands-subset.woff2']
]) {
  const subset = await subsetFont(readFileSync(join(FA, 'webfonts', source)), text, { targetFormat: 'woff2' })
  writeFileSync(join(OUT_FONTS, target), subset)
  report.push(`${label}: ${(subset.length / 1024).toFixed(1)} Ko`)
}

// 4. CSS
const lines = [
  '/* GÉNÉRÉ par scripts/subset-icons.mjs : ne pas modifier à la main (npm run icons). */',
  "@font-face { font-family: 'FA Solid'; font-style: normal; font-weight: 900; font-display: block; src: url('../fonts/fa-solid-subset.woff2') format('woff2'); }",
  "@font-face { font-family: 'FA Brands'; font-style: normal; font-weight: 400; font-display: block; src: url('../fonts/fa-brands-subset.woff2') format('woff2'); }",
  '',
  '.fas, .fab { display: inline-block; font-style: normal; font-variant: normal; line-height: 1; text-rendering: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }',
  ".fas { font-family: 'FA Solid'; font-weight: 900; }",
  ".fab { font-family: 'FA Brands'; font-weight: 400; }",
  '',
  ...sizes.map((name) => `.${name} { font-size: ${SIZES[name]}; line-height: 0.5em; vertical-align: -0.0625em; }`),
  '',
  ...icons.map((name) => `.${name}::before { content: "\\${codepoints.get(name)}"; }`)
]
writeFileSync(OUT_CSS, lines.join('\n') + '\n')

console.log(`${icons.length} icônes, ${sizes.length} tailles. Polices : ${report.join(', ')}.`)
