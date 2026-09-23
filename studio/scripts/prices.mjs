/** Fill in the variant prices Alex pulled from her Squarespace checkout. */
import {createClient} from '@sanity/client'
import fs from 'node:fs'

const token = fs
  .readFileSync('../.env', 'utf8')
  .match(/^SANITY_WRITE_TOKEN\s*=\s*(.+)$/m)[1]
  .trim()

const client = createClient({
  projectId: 'ouk6ju6k',
  dataset: 'production',
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
})

const services = await client.fetch(`*[_type == "service"]{_id, title, group, options, price, priceNote}`)
const byTitle = (t) => services.find((s) => s.title === t)

const setOptions = async (title, opts, extra = {}) => {
  const doc = byTitle(title)
  if (!doc) return console.log('  ! not found:', title)
  await client
    .patch(doc._id)
    .set({
      options: opts.map((o, i) => ({_key: `opt${i}`, _type: 'option', ...o})),
      ...extra,
    })
    .commit()
  console.log('  ✓', title)
}

console.log('photo sessions — her copy says 2-hour session $580:')
for (const t of [
  'Product Shots',
  'Brand Lookbook',
  'Senior Portraits',
  'Couples Session',
  'Maternity Session',
  'Family Session',
  'Birthday Session',
]) {
  await setOptions(t, [
    {label: 'Deposit only', price: 'from $150', highlight: true},
    {label: 'Pay in full', price: '$580'},
  ])
}

console.log('content session:')
await setOptions('Content Session — Photo + Video', [
  {label: 'Deposit only', price: 'from $150', highlight: true},
  {label: 'Pay in full', price: '$580'},
])

console.log('website package:')
await setOptions(
  'MosttDope Website Development + Design',
  [
    {label: 'Deposit only', price: '$550', highlight: true},
    {label: 'Half payment', price: '$1,750'},
    {label: 'Pay in full', price: '$3,500'},
  ],
  {price: 'from $550', priceNote: '· $3,500 total · 4-8 week timeline'},
)

console.log('brand identity kit — all three tiers priced the same on her store:')
await setOptions('The Ultimate Brand Identity Kit', [
  {label: 'CEO', price: '$1,000', highlight: true},
  {label: 'BOSS', price: '$1,000'},
  {label: 'Orange', price: '$1,000'},
])

const left = await client.fetch(
  `*[_type == "service"]{title, "missing": count(options[!defined(price) || price == ""])}[missing > 0]`,
)
console.log('\nstill missing prices:')
left.forEach((s) => console.log(`  ${s.title}: ${s.missing}`))
