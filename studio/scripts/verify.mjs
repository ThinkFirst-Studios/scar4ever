import {createClient} from '@sanity/client'

const c = createClient({
  projectId: 'ouk6ju6k',
  dataset: 'production',
  apiVersion: '2024-10-01',
  useCdn: false,
})

const counts = await c.fetch(`{
  "portfolio": count(*[_type == "portfolioItem"]),
  "photo": count(*[_type == "portfolioItem" && category == "photo"]),
  "graphics": count(*[_type == "portfolioItem" && category == "graphics"]),
  "logo": count(*[_type == "portfolioItem" && category == "logo"]),
  "merch": count(*[_type == "portfolioItem" && category == "merch"]),
  "withImage": count(*[_type == "portfolioItem" && defined(image.asset)]),
  "services": count(*[_type == "service"]),
  "servicesWithImage": count(*[_type == "service" && defined(image.asset)]),
  "settings": count(*[_id == "siteSettings"])
}`)
console.log(counts)

const sample = await c.fetch(
  `*[_type == "portfolioItem"] | order(orderRank asc)[0...3]{title, subtext, category, "img": image.asset->url}`,
)
sample.forEach((s) => console.log(`- ${s.title} | ${s.subtext} | ${s.category} | ${s.img ? 'image ok' : 'NO IMAGE'}`))

const svc = await c.fetch(
  `*[_type == "service"] | order(orderRank asc){title, group, price, "opts": count(options)}`,
)
svc.forEach((s) => console.log(`- ${s.title} (${s.group}) ${s.price || '-'} · ${s.opts || 0} options`))

const settings = await c.fetch(`*[_id == "siteSettings"][0]{email, instagramHandle, "terms": count(sessionTerms)}`)
console.log(settings)
