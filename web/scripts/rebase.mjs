/**
 * GitHub Pages serves this repo from /scar4ever/, not the domain root.
 * After a build, prefix every root-relative href/src in the HTML.
 *
 *   node scripts/rebase.mjs /scar4ever
 *
 * No-op when no prefix is given (Netlify, local preview, custom domain).
 */
import fs from 'node:fs'
import path from 'node:path'

const prefix = (process.argv[2] || process.env.ASTRO_BASE || '').replace(/\/$/, '')
if (!prefix) {
  console.log('rebase: no prefix, nothing to do')
  process.exit(0)
}

const dist = path.resolve('dist')
const files = []
;(function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.html')) files.push(full)
  }
})(dist)

let changed = 0
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8')
  const after = before
    .replace(/(href|src)="\/(?!\/)/g, `$1="${prefix}/`)
    .replace(/srcset="\/(?!\/)/g, `srcset="${prefix}/`)
  if (after !== before) {
    fs.writeFileSync(file, after)
    changed++
  }
}
console.log(`rebase: prefixed ${changed}/${files.length} pages with ${prefix}`)
