/**
 * One-off: load the current site's content into Sanity.
 * Reads the existing HTML pages, uploads the images, creates documents.
 *
 *   node scripts/import.mjs            # dry run, shows what it would create
 *   node scripts/import.mjs --write    # actually writes to Sanity
 *
 * Needs SANITY_WRITE_TOKEN in ../.env (Editor token, never committed).
 */
import {createClient} from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, '../..')
const WRITE = process.argv.includes('--write')

// --- token ------------------------------------------------------------
const envPath = path.join(ROOT, '.env')
let token = process.env.SANITY_WRITE_TOKEN
if (!token && fs.existsSync(envPath)) {
  const m = fs.readFileSync(envPath, 'utf8').match(/^SANITY_WRITE_TOKEN\s*=\s*(.+)$/m)
  if (m) token = m[1].trim().replace(/^["']|["']$/g, '')
}
if (WRITE && !token) {
  console.error('No SANITY_WRITE_TOKEN found in .env — cannot write.')
  process.exit(1)
}

const client = createClient({
  projectId: 'ouk6ju6k',
  dataset: 'production',
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
})

const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8')
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

// --- portfolio, straight out of portfolio.html ------------------------
function portfolioItems() {
  const html = read('portfolio.html')
  const out = []
  const re = /<figure class="piece reveal" data-cat="(\w+)">([\s\S]*?)<\/figure>/g
  let m
  while ((m = re.exec(html))) {
    const [, category, block] = m
    const img = block.match(/<img src="([^"]+)"[^>]*alt="([^"]*)"/)
    const strong = block.match(/<strong>([\s\S]*?)<\/strong>/)
    const spans = [...block.matchAll(/<span>([\s\S]*?)<\/span>/g)].map((s) => decode(s[1]))
    if (!img || !strong) continue
    out.push({
      category,
      file: img[1],
      alt: decode(img[2]),
      title: decode(strong[1]),
      subtext: spans.find((s) => s && !s.startsWith('[CONFIRM')) || '',
    })
  }
  return out
}

// --- services, transcribed from her store copy ------------------------
const SESSION_TERMS = [
  'A link to download your images',
  '12 edited photos per hour of session',
  '2-hour session — $580',
  '$150 deposit to book. The remaining balance is invoiced and must be paid at least 24 hours before the session.',
  'If the remaining balance is not paid 24 hours before the session, the session is cancelled and the deposit is not returned.',
  'Choose deposit only or pay in full at checkout.',
]

const SESSIONS = [
  ['Product Shots', 'product-shots', 'Product Shots, Ecom + Lifestyle'],
  ['Brand Lookbook', 'brand-lookbook', 'Brand Lookbook'],
  ['Senior Portraits', 'senior-portraits', 'Senior Portraits'],
  ['Couples Session', 'couples-session', 'Couples Photo Session'],
  ['Maternity Session', 'maternity-session', 'Maternity Photo Session'],
  ['Family Session', 'family-session', 'Family Photo Session'],
  ['Birthday Session', 'birthday-session', 'Birthday Photo Session'],
]

function services() {
  const list = SESSIONS.map(([title, slug, alt], i) => ({
    title,
    group: 'photography',
    price: 'from $150',
    image: `assets/services/${slug}.webp`,
    alt: `Service card on leopard print: ${alt}`,
    showSessionTerms: true,
    featured: title === 'Product Shots',
    options: [
      {label: 'Deposit only', price: 'from $150', highlight: true},
      {label: 'Pay in full', price: ''},
    ],
  }))

  list.push({
    title: 'Content Session — Photo + Video',
    group: 'video',
    price: 'from $150',
    tier: 'my fav',
    lead: 'Great for content creators who need to shoot outfits and lifestyle pictures. Also great for outdoor, editorial-style photoshoots.',
    includes: ['All photos via flash drive', '12 edited photos per hour', '3 lifestyle Reels / TikToks'],
    image: 'assets/services/content-session.webp',
    alt: 'Service card on leopard print: Content Session',
    showSessionTerms: true,
    featured: true,
    options: [
      {label: 'Deposit only', price: 'from $150', highlight: true},
      {label: 'Pay in full', price: ''},
    ],
  })

  list.push({
    title: 'The Ultimate Brand Identity Kit',
    group: 'branding',
    price: '$1,000',
    priceNote: '· CEO tier · project total $2,500',
    tier: '3 tiers',
    lead: 'Brand identity is not just your logo. Think of this kit as the foundation needed to build your business on. We will establish who your business caters to and create an aesthetic that will allow your consumers to build a close relationship to your brand.',
    body: 'This is a foundation for your business. To have a cohesive, solid brand, keep in mind that your products and website should also reflect this. Payment: 50% deposit at checkout, 25% three-quarters of the way through, 25% at completion.',
    includes: [
      'Your "why", mission, values, personality, positioning, voice, ideal clients, goals',
      'Logo kit (3)',
      'Typography / font pairing',
      'Custom colour palette',
      'Brand style guide (mood board)',
      'Branded pattern',
      'Brand mockups',
      'Final brand guide',
      '5 branded collateral designs',
      'Instagram profile picture + 5 highlight covers',
      '1-hour final strategy call',
    ],
    options: [
      {label: 'CEO', price: '$1,000', highlight: true},
      {label: 'BOSS', price: ''},
      {label: 'Orange', price: ''},
    ],
    image: 'assets/services/brand-identity-kit.webp',
    alt: 'Service card on leopard print: Brand Design Identity Kit',
    featured: true,
  })

  list.push({
    title: 'Logo Design',
    group: 'branding',
    price: 'from $550',
    lead: 'Instagram logo format, unless told otherwise.',
    includes: [
      'Primary logo — suitable for an Instagram profile picture',
      'Secondary logo — a simplified version',
      'Submark — for watermarks and small formats',
      'Watermark in 2 colour options, .PNG',
    ],
    options: [
      {label: 'One single logo', price: ''},
      {label: 'Deposit for the logo package', price: 'from $550', highlight: true},
      {label: 'Pay in full', price: ''},
    ],
    image: 'assets/services/logo-design.webp',
    alt: 'Service card: scarmosttdope primary logo, secondary logo and submark',
    featured: true,
  })

  list.push({
    title: 'Social Media Content Kit',
    group: 'branding',
    price: 'from $750',
    lead: 'Depending on how much content you need, you can choose from these packages.',
    options: [
      {label: '5 posts', price: 'from $750', highlight: true},
      {label: '10 posts', price: ''},
      {label: '5 Reels / TikToks', price: ''},
      {label: '10 Reels / TikToks', price: ''},
    ],
    image: 'assets/services/social-media-content-kit.webp',
    alt: 'Service card on leopard print: Social Media Aesthetic Kit',
    featured: true,
  })

  list.push({
    title: 'Instagram Post / Flyer',
    group: 'branding',
    price: 'from $125',
    lead: 'Sized for your Instagram feed and story. Great for flyers, or a super cute post personalised and styled by me. All I need is your picture and info.',
    options: [
      {label: 'No rush', price: 'from $125', highlight: true},
      {label: '3 day', price: ''},
      {label: '2 day', price: ''},
      {label: 'Next day', price: ''},
    ],
    image: 'assets/services/instagram-post-flyer.webp',
    alt: 'Service card on leopard print: Post + Flyer, Instagram / Print',
    featured: true,
  })

  list.push({
    title: 'Sticker Pack Design',
    group: 'graphic',
    price: '$200',
    lead: 'I create sticker packs that feel expressive, collectible and visually cohesive — not just random graphics.',
    body: 'Through custom illustration, typography and creative direction, I design 8 unique stickers that align with your brand’s identity, aesthetic and overall vision.',
    includes: ['Packaging', 'Promos', 'Merch drops', 'Adding personality to your brand experience'],
    image: 'assets/services/sticker-pack.webp',
    alt: 'Service card on leopard print: Sticker Pack Design',
    featured: true,
  })

  list.push({
    title: 'MosttDope Website Development + Design',
    group: 'websites',
    price: 'from $550',
    priceNote: '· 4-8 week timeline',
    body: 'Once you have purchased, I will contact you to schedule our first meeting — we will discuss project goals, build a timeline and set the start date. Payment plans up to 4 months are available.',
    includes: [
      'Brand / website discovery call',
      'Domain setup or transfer',
      'Privacy policy + terms upload',
      'Back-end setup: email blasts, communication',
      'Up to 5 custom-designed pages',
      'SEO optimised on all pages',
      'Product page template',
      'Branded checkout page',
      'Pop-up newsletter sign-up',
      'Favicon',
      'Social sharing image per page',
      'Photoshoot for website content',
    ],
    options: [
      {label: 'Deposit only', price: 'from $550', highlight: true},
      {label: 'Half payment', price: ''},
      {label: 'Pay in full', price: ''},
    ],
    image: 'assets/services/website-design.webp',
    alt: 'Service card on leopard print: Website Design & Development',
  })

  return list
}

const SETTINGS = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  instagramHandle: '@scarmosttdope',
  youtubeHandle: '@scarmosttdope',
  email: 'contact.scarmosttdope@gmail.com',
  responseTime: 'please allow 24 hours to get back to you',
  markets: ['Honolulu HI', 'El Paso TX', 'Los Angeles CA'],
  sessionTerms: SESSION_TERMS,
}

// --- run --------------------------------------------------------------
async function upload(file) {
  const full = path.join(ROOT, file)
  if (!fs.existsSync(full)) throw new Error(`missing image: ${file}`)
  const asset = await client.assets.upload('image', fs.createReadStream(full), {
    filename: path.basename(full),
  })
  return asset._id
}

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)

async function main() {
  const items = portfolioItems()
  const svcs = services()
  console.log(`portfolio: ${items.length} pieces`)
  for (const cat of ['photo', 'graphics', 'logo', 'merch']) {
    console.log(`   ${cat}: ${items.filter((i) => i.category === cat).length}`)
  }
  console.log(`services: ${svcs.length}`)
  const missing = [...items.map((i) => i.file), ...svcs.map((s) => s.image)].filter(
    (f) => f && !fs.existsSync(path.join(ROOT, f)),
  )
  if (missing.length) {
    console.error('missing files:', missing)
    process.exit(1)
  }
  if (!WRITE) {
    console.log('\nDry run only. Re-run with --write to push to Sanity.')
    return
  }

  let n = 0
  for (const [i, item] of items.entries()) {
    const assetId = await upload(item.file)
    await client.createOrReplace({
      _id: `portfolio-${slug(item.title + '-' + path.basename(item.file, '.webp'))}`,
      _type: 'portfolioItem',
      title: item.title,
      subtext: item.subtext,
      category: item.category,
      alt: item.alt,
      featured: false,
      orderRank: String(i + 1).padStart(4, '0'),
      image: {_type: 'image', asset: {_type: 'reference', _ref: assetId}},
    })
    n++
    if (n % 10 === 0) console.log(`   ...${n} portfolio pieces`)
  }
  console.log(`portfolio done: ${n}`)

  for (const [i, s] of svcs.entries()) {
    const doc = {
      _id: `service-${slug(s.title)}`,
      _type: 'service',
      ...s,
      orderRank: String(i + 1).padStart(4, '0'),
      options: (s.options || []).map((o, j) => ({_key: `opt${j}`, _type: 'option', ...o})),
    }
    if (s.image) {
      const assetId = await upload(s.image)
      doc.image = {_type: 'image', asset: {_type: 'reference', _ref: assetId}}
    }
    await client.createOrReplace(doc)
  }
  console.log(`services done: ${svcs.length}`)

  await client.createOrReplace(SETTINGS)
  console.log('site settings done')
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
