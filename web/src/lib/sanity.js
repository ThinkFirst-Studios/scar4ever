import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ouk6ju6k',
  dataset: 'production',
  apiVersion: '2024-10-01',
  // false so a build right after she publishes never picks up cached content.
  // Build-time only — visitors get static HTML, so there's no speed cost.
  useCdn: false,
})

const builder = imageUrlBuilder(client)

/** Sanity CDN url at a given width, as webp */
export function img(source, width = 1000) {
  return builder.image(source).width(width).auto('format').quality(78).url()
}

/** Intrinsic size so the browser can reserve space before the image loads */
export function dims(source, width = 1000) {
  const ref = source?.asset?._ref || ''
  const m = ref.match(/-(\d+)x(\d+)-/)
  if (!m) return {width, height: Math.round(width * 1.25)}
  const [, w, h] = m.map(Number)
  const height = Math.round((h / w) * width)
  return {width, height}
}

export const CATEGORIES = [
  {title: 'Photo &amp; Styling', value: 'photo', note: 'shotbyscar'},
  {title: 'Graphics', value: 'graphics'},
  {title: 'Logo Design', value: 'logo'},
  {title: 'Merch', value: 'merch'},
]

export const GROUPS = [
  {title: 'Photography', value: 'photography'},
  {title: 'Video + Content', value: 'video'},
  {title: 'Branding + Social Media', value: 'branding'},
  {title: 'Graphic + Marketing Design', value: 'graphic'},
  {title: 'Websites', value: 'websites'},
]

export const getPortfolio = () =>
  client.fetch(
    `*[_type == "portfolioItem" && defined(image.asset)] | order(orderRank asc){
      _id, title, subtext, year, category, alt, featured, image
    }`,
  )

export const getServices = () =>
  client.fetch(
    `*[_type == "service"] | order(orderRank asc){
      _id, title, group, price, priceNote, tier, lead, body, includes, options,
      alt, featured, showSessionTerms, image
    }`,
  )

export const getSettings = () =>
  client.fetch(`*[_id == "siteSettings"][0]{
    featuredVideoUrl, featuredVideoTitle, instagramHandle, youtubeHandle,
    email, responseTime, markets, bookingUrl, sessionTerms
  }`)

export const getInstagramPosts = () =>
  client.fetch(
    `*[_type == "instagramPost" && hidden != true] | order(orderRank asc){
      _id, url, note, image, alt, caption
    }`,
  )

/** Pull the shortcode out of any Instagram post/reel link */
export function instagramCode(url = '') {
  const m = String(url).match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/)
  return m ? m[1] : null
}

/** Pull the id out of any YouTube url so we can embed it */
export function youtubeId(url = '') {
  const m = String(url).match(
    /(?:youtu\.be\/|watch\?v=|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{6,})/,
  )
  return m ? m[1] : null
}
