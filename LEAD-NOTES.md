# SCAR / Stephanie Cardona — Lead Notes

**Status:** SIGNED CLIENT (promoted 2026-09-16)
**Added:** 2026-09-16
**Slug:** `scar4ever`

---

## Contact

| | |
|---|---|
| Name | Stephanie Cardona ("SCAR") |
| Instagram | **@scarmosttdope** — 608 posts · 3,254 followers · 7,520 following |
| Threads | @scarmosttdope |
| Site | www.scar4ever.com (Squarespace) |
| YouTube | youtube.com/@scarmosttdope |
| Email | **unknown** — contact form only, no address published |
| Phone | **unknown** — none published |
| Location | Los Angeles CA. Also serves **Honolulu HI** and **El Paso TX** |

**Best channel:** Instagram DM. She has no published email and her own site says allow 24 hours for a form reply.

---

## Her properties

| Property | Platform | Notes |
|---|---|---|
| scar4ever.com | Squarespace + commerce | Portfolio, priced services, cart, contact |
| prettysweetmostlydope.com | Squarespace + commerce | **PSMD** — her own brand since 2016. Phone cases $40, apparel, drinkware, office. |
| wkggrl.com | **Shopify** (Dawn 15.4.1) | Working Girl Collective — LA women-owned streetwear. She's affiliated, not necessarily the owner. |
| bluntcases.com/Scar | affiliate | 15% off code SCAR |

Also lists **South Bay Creative** as an affiliation. `[CONFIRM]` what her role there is — employee, contractor, collective member.

---

## 🚩 The thing to know before you contact her

**She sells website design.** Her services catalogue includes "MosttDope Website Development + Design" as a purchasable product.

Do not open with "your site needs work." Open with the partner angle:

> "You already build sites — I'm not pitching you one. I'm showing you what your brand looks like built instead of templated. And honestly I'd rather build for your clients than compete with you."

The money here is probably **white-label front-end build** for her design clients, not a one-off site for her. She's selling $550 logos and $1,000 identity kits and already offering web as a line item — she needs a builder.

---

## Provable defects — the openers

Every one of these was verified on her live site on 2026-09-16.

1. **Portfolio pages return no readable text.** `/graphics`, `/logodesigns`, `/merch-design` are bare image galleries — no captions, no client names, no alt text. Her **New Era × Bella Doña × Betty Boop** credit is invisible to search.
2. **Homepage sells photoshoots; her bio sells graphic design.** H1s are "book your next photoshoot with me" and "shot by scar." The site argues with her own positioning.
3. **The site looks nothing like the work on it.** Stock Squarespace template wrapping a genuinely loud portfolio. This is the strongest emotional argument.
4. **Page weight.** ~210KB of HTML on the homepage, ~269KB on services, before images — for an audience arriving from Instagram on phones.
5. **Three markets, zero local presence.** Honolulu / El Paso / LA is one line of text on the contact page.
6. **No published email address.**

---

## Verified facts — safe to reference

- Published prices: IG post/flyer from **$125** · product shots from **$150** · sticker pack **$200** · logo from **$550** · content kit from **$750** · Ultimate Brand Identity Kit (CEO tier) **$1,000**
- Real clients: Working Girl Collective, High Rollers, **New Era × Bella Doña × Betty Boop**, Lash Daddie, Lash Drip LA, Not Your Babe, KT Fitness, Maddison Hodges, California Bliss, Chergoodeats
- Service categories (her nav, 2026-09-16): Video · Content · Marketing Design · Branding · Websites · Social Media · Graphic Design · Photography. Mockup ticker merges Video + Content into one item per Alex.
- Additional names from her supplied portfolio files: **Bella Doña** (sticker, eyeliner graphic, "Lucky Me I'm Latina" tote), **AB Gonzalez** (logo), **Bawse Beauty World** (logo, from filename), **Dai Media** (cover, from artwork text). `[CONFIRM]` credits before using in outreach.
- Full service copy supplied by Alex 2026-09-16 (from her store), now on `services.html`:
  - Photo sessions (Product Shots, Brand Lookbook, Senior Portraits, Couples, Maternity, Family, Birthday) and Content Session: listed **from $150** = the deposit. 2-hour session **$580**, balance invoiced, due 24h before or the session is cancelled and deposit kept. 12 edited photos/hour. Content Session adds flash drive + 3 Reels/TikToks.
  - Sticker Pack $200 = 8 unique stickers. Logo from $550 = primary, secondary, submark, 2-color PNG watermark.
  - 🚩 **Brand Identity Kit (CEO tier)** is listed at **$1,000** but her own copy says **project total $2,500**, 50% deposit at checkout (which would be $1,250), then 25% / 25%. Pricing inconsistency on her live store — worth raising gently in the pitch.
  - No description on her store for Instagram Post/Flyer, Social Media Content Kit, or Websites.
- PSMD founded **2016**
- Current fonts: **Archivo Black** + **Space Grotesk**
- Her own site tagline: *"INSTAGRAM ISN'T FOREVER BUT THIS WEBSITE WILL BE"* — she already believes the argument. Use her line back to her.

---

## Open questions / `[CONFIRM]`

- Email address
- Her role at South Bay Creative
- Her relationship to Working Girl Collective — owner, partner, or contracted designer?
- Years on each portfolio piece
- Whether the New Era work can be shown publicly
- Whether commerce (cart + priced services) stays on a rebuilt site
- Whether PSMD is in scope or stays separate
- Exact brand hex values and licensed display font

---

## 🔴 ACTION: Alex to send the remaining variant prices

Select each option at checkout on her live store and screenshot the price that appears:
Brand Identity Kit (BOSS, Orange) · Logo Design (one single logo, pay in full) · Website (half payment, pay in full) · Content Kit (5 posts, 10 posts, 5 Reels/TikToks, 10 Reels/TikToks) · Instagram Post/Flyer (3 day, 2 day, next day rush).

## ⏳ INTERIM: rebuild plumbing (revisit before launch)

Current setup is a stopgap, not the final one:
- **GitHub Pages + Actions** builds the site; preview at https://thinkfirst-studios.github.io/scar4ever/
- **Sanity webhook → GitHub `repository_dispatch`** using a fine-grained PAT (Contents: read+write, this repo only). Publish → live in ~1–2 min.
- ✅ Webhook verified working 2026-09-20 (Sanity → GitHub 204, build ~35s, live in ~1 min). The 15-minute cron fallback has been removed.

**Her admin is self-hosted at `/admin`** (Sanity's hosted deploy fails: the orderable-document-list plugin breaks `sanity schema extract`). Now: https://thinkfirst-studios.github.io/scar4ever/admin/ → at launch: scar4ever.com/admin.

**At launch, replace all of it with Netlify:**
1. Connect the repo in Netlify (config already in `netlify.toml`).
2. Swap the Sanity webhook to Netlify's build hook URL (no token needed).
4. **Revoke the GitHub PAT** and the Sanity `import` token.
5. Point scar4ever.com at Netlify (web records only, never MX).
6. Add a CORS origin for the live domain and **remove the `https://thinkfirst-studios.github.io` origin** (it allows credentialed requests from any page on that shared GitHub domain).

## 🔒 Sanity security rules (project `ouk6ju6k`, org `oaktpd857`)

Free plan = **public dataset**. Anyone with the project ID can read all documents **including unpublished drafts**.
- Only public website content goes in Sanity: portfolio pieces, service copy/prices, site settings.
- **Never** in Sanity: enquiry submissions, client contracts, invoices, NDA work, personal contact details.
- Tell SCAR plainly: saving without publishing does **not** hide an unannounced drop.
- Write tokens live only in server-side `.env` (gitignored). Never in `PUBLIC_*` vars or client code.
- Revoke the `import` token once the migration is done.
- Pre-launch check: query the dataset with the project ID alone and confirm everything returned is meant to be public.
- Trial note: Growth trial ends ~2026-10-20 and auto-downgrades to Free.

## 🔴 ACTION: mention the admin login in the email to Stephanie

She needs a **free Sanity account** to use her admin — it isn't a username/password we hand over.
How it works: we invite `contact.scarmosttdope@gmail.com` from the project's **Members** tab → she gets an email → she signs up (Google sign-in is the easiest) → she lands in her admin.
Say in the email: "You'll get an invite from Sanity — that's the login for your website admin. Sign in with Google and you're in. It's free and there's nothing to install."
Free plan allows up to 20 users, so her seat costs nothing.

## 🔧 Admin spec (from Alex, 2026-09-20)

Client must be able to:
1. Add portfolio pieces (upload image, set category).
2. Edit the title and sub-text on portfolio pieces.
3. **Reorder** pieces within each category (drag and drop).
4. Add new services; edit service text, prices and sub-text.
5. Change which YouTube video is featured.

## 🔴 ACTION: email Stephanie for the original portfolio photos

**Status 2026-09-19:** all four folders supplied (Graphics 40, Logo Design 38, Merch 25, Photography 16 thumbnails). 77 pieces now live: 16 photo + 21 graphics + 23 logo + 17 merch — curated from 119 source files (duplicates and alternate logo versions left out; the rest are on file if she wants more shown).

**Left off the site deliberately:**
- `social+banner+psmd.webp`, `PSMD+logo+official.webp` — she asked for no PSMD content.
- `Screenshot+2023-07-25…` (Kobe) — likeness plus the 1996 draft photo of him at 17.
- `Soulful+Karol+G`, `Soulful+Selena` — celebrity likenesses.
- Three merch photos modelled by young children (`3.35.25`, `3.36.27`, `3.36.43`) — no-minors rule. The flat-lay versions of the same kids' garments are shown instead.
- Duplicate/alternate logo files (Cherry Baby ×3, YBB ×4, Mars Glam ×2, Young Bull ×3 etc.) — one per client.

**Captions need her input:** every piece is `[CONFIRM] year`, and six merch pieces are `[CONFIRM] client` (DESSXMX hoodies, LA Soul / Have Soul / Souls in Blue tees, Qué Chimba illustration, skate decks, loteria tee). Still need the **full sets** (multiple images per project) + years, so each project can become a gallery rather than a single frame.
- ⚠️ File in `MADDISON HODGES/` is named `NOT YOUR BABE-Thumbnail.webp` — different photo to the Not Your Babe one, so treated as Maddison Hodges. Confirm with her.
- ⚠️ **New Era × Bella Doña × Betty Boop** is now shown on the site (it's public on her own site). Get her written OK before launch.

Her Squarespace portfolio pages don't give usable image files — the work is published as flattened/composite images and the page can only be saved as HTML, so nothing can be lifted at print or gallery quality.

**Ask her for:** the original photo files (full resolution) for each project in `images/Portfolio/Photography & Styling/`, ideally one folder per project, plus the year and the client name for each. Dropbox / Drive / WeTransfer all fine.

Folders are already created and waiting for: WKGGRL Summer BBQ · Bday Shoot Karina · KT Fitness · High Rollers "Camo" · High Rollers "Don't Crash Out" · New Era × Bella Doña × Betty Boop · WKGGRL Cyber Stone · WKGGRL × Chergoodeats · WKGGRL "PTO" Lookbook · WKGGRL "Hotline Trucker" · Lash Daddie · Lash Drip LA · Not Your Babe · Maddison Hodges · California Bliss · Drea 4 Scar.

Also confirm with her: which projects can be shown publicly (especially New Era × Bella Doña × Betty Boop).

## ⚠️ Before launch, no matter what

- **Terms of Service** and **Privacy Policy** pages, linked in the footer of every page.
- Needed because the site has a contact form (personal data) and will take deposits/payments.
- She's in California → CCPA / CalOPPA expect a posted privacy policy.
- Ask who supplies the wording: her own, a generator (Termly / iubenda), or reuse from Squarespace. TFS drafts a starting point only, clearly marked for her review.
- Also confirm the cancellation / deposit terms shown on Services match what she actually enforces.

## Follow-up details (collect after the questionnaire)

The client questionnaire is kept short on purpose. Get these separately (call, DM or email):

- Where form messages go; phone (y/n); target launch date
- Booking tool decision (HoneyBook / Dubsado / scheduler + Stripe)
  - ✅ Verified 2026-09-19 from her live store: session checkout already offers **DEPOSIT ONLY / PAY IN FULL** (Squarespace product option + Stripe). So payment choice already exists — the gaps are self-serve **date picking** and **contracts**.
  - ✅ All **7 photo sessions checked one by one** (Product Shots, Brand Lookbook, Senior Portraits, Content Session, Couples, Maternity, Family, Birthday): identical copy, identical terms, from $150 / 2h $580, deposit-or-full. The shared "How sessions work" box on the site is accurate for all of them — no per-session differences to chase.
  - ✅ Verified prices: Content Session Photo + Video from $150 (2h $580); Sticker Pack Design $200.
  - ✅ Website package (verified 2026-09-19): **from $550**, 4–8 week timeline, full inclusion list, payment options **Deposit only / Half payment / Pay in full**, plus payment plans up to 4 months (invoiced separately). Note: her own package includes uploading privacy policy + terms — she already expects those pages.
  - Social Media Content Kit has 4 packages: **5 posts / 10 posts / 5 Reels-TikToks / 10 Reels-TikToks** — need the price of each and which one the "from $750" refers to.
  - Instagram Post / Flyer has rush options: **No rush / 3 day / 2 day / Next day** — need the fee for each.
  - Logo Design checkout has 3 payment options: **One single logo** / **Deposit for logo package** / **Pay in full** — need the price of each (site shows "from $550").
  - 🚩 Brand Identity Kit has **3 tiers** on her store (package dropdown): **CEO** (the $1,000 listing), **BOSS**, **Orange**. Need price + inclusions for BOSS and Orange, and the $1,000 vs $2,500 answer.
- YouTube videos to feature; is there a separate @scar4ever IG?
- More photo/video galleries; new scar4ever shop products when ready
- Brand Identity Kit: $1,000 or $2,500 total?
- Prices: Social Media Content Kit, IG Post/Flyer, website package; descriptions for those three
- PSMD★ prices for every product
- Celebrity-likeness products (LATTO BBY, Mister West, FERXXO, Kimmie Star): licensed?
- Horseshoe-and-cross emblem (Ffiti Flower, Chromie): original design?
- New Era × Bella Doña × Betty Boop: written OK + files; anything under NDA
- Portfolio years; confirm Dai Media, Bawse Beauty World, tee-graphic client
- Files for High Rollers, Lash Daddie, Lash Drip LA, Not Your Babe, Maddison Hodges, California Bliss, Drea 4 Scar, other WGC projects
- Role at South Bay Creative / Working Girl Collective
- Honolulu / El Paso / LA: one line or local pages
- Sales tax registration (domains, email, Squarespace renewal/export, shipping and Shopify are in the questionnaire)
- GitHub account (for the admin login)

## Outreach log

| Date | Channel | What happened |
|---|---|---|
| 2026-09-16 | — | Lead added. Research complete, mockup brief written. |
| 2026-09-16 | — | **Signed.** Mockup live at thinkfirst-studios.github.io/scar4ever (noindex). Admin/CMS discussed. |
| 2026-09-17 | email | Questionnaire sent (Google Doc). |
| 2026-09-18 | email | Questionnaire answered. v1 backed up (tag `v1-pitch-mockup`, branch `v1-backup`, zip). v2 built: brand colours/fonts, photo-first, PSMD removed, follow + booking sections, affiliates page. |

---

## If she signs

See the checklist at the end of `PROMPT.md`. The two that will bite: **commerce migration** (Squarespace cart + priced service products) and **URL redirects** — she has roughly ten indexed URLs and a single-page rebuild kills all of them.

DNS: change web records only. **Never touch MX.**
