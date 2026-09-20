/**
 * Rewrite orderRank values in the LexoRank format the orderable-document-list
 * plugin expects: "0|" + 6 base36 chars, spaced apart so items can be dragged
 * in between. Keeps the current order.
 *
 *   node scripts/rerank.mjs --write
 */
import {createClient} from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, '../..')
const WRITE = process.argv.includes('--write')

let token = process.env.SANITY_WRITE_TOKEN
const envPath = path.join(ROOT, '.env')
if (!token && fs.existsSync(envPath)) {
  const m = fs.readFileSync(envPath, 'utf8').match(/^SANITY_WRITE_TOKEN\s*=\s*(.+)$/m)
  if (m) token = m[1].trim().replace(/^["']|["']$/g, '')
}

const client = createClient({
  projectId: 'ouk6ju6k',
  dataset: 'production',
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
})

const rank = (i) => `0|${((i + 1) * 1000).toString(36).padStart(6, '0')}`

const CATEGORY_ORDER = ['photo', 'graphics', 'logo', 'merch']
const GROUP_ORDER = ['photography', 'video', 'branding', 'graphic', 'websites']

async function run() {
  const items = await client.fetch(
    `*[_type == "portfolioItem"]{_id, title, category, orderRank}`,
  )
  const services = await client.fetch(`*[_type == "service"]{_id, title, group, orderRank}`)

  // keep existing order inside each category / group
  const byKey = (list, key, order) => {
    const out = []
    for (const k of order) {
      out.push(
        ...list
          .filter((d) => d[key] === k)
          .sort((a, b) => String(a.orderRank).localeCompare(String(b.orderRank))),
      )
    }
    out.push(...list.filter((d) => !order.includes(d[key])))
    return out
  }

  const orderedItems = byKey(items, 'category', CATEGORY_ORDER)
  const orderedServices = byKey(services, 'group', GROUP_ORDER)

  console.log(`portfolio: ${orderedItems.length}, services: ${orderedServices.length}`)
  console.log('first ranks:', orderedItems.slice(0, 3).map((_, i) => rank(i)).join(' '))

  if (!WRITE) {
    console.log('dry run — add --write')
    return
  }

  let tx = client.transaction()
  orderedItems.forEach((d, i) => {
    tx = tx.patch(d._id, (p) => p.set({orderRank: rank(i)}))
  })
  orderedServices.forEach((d, i) => {
    tx = tx.patch(d._id, (p) => p.set({orderRank: rank(i)}))
  })
  await tx.commit()
  console.log('ranks rewritten')

  const check = await client.fetch(
    `*[_type == "portfolioItem"] | order(orderRank asc)[0...5]{title, orderRank}`,
  )
  check.forEach((c) => console.log(`  ${c.orderRank}  ${c.title}`))
  const dupes = await client.fetch(
    `count(*[_type == "portfolioItem" && !defined(orderRank)])`,
  )
  console.log('missing rank:', dupes)
}

run().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
