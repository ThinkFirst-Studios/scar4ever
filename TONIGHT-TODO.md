# Tonight — scar4ever · 2026-09-22

Live preview: https://scar4ever.netlify.app · Her admin: https://scar4ever.netlify.app/admin

**Done today:** all 20 prices verified and live · migrated to Netlify · admin cache bug fixed · admin URL clean · contact form wired to Netlify Forms · Sanity CORS updated · publish→live verified at 45 seconds · broken Instagram embeds hidden.

---

## 1 · Finish the contact form  (10 min)

- [ ] Netlify → Forms → check the forms list. Is `enquiry` there?
      - **Not there** → Deploys → Trigger deploy → **Deploy project without cache**, wait, check again.
      - Still not there after that → tell Claude, don't keep redeploying.
- [ ] Edit the email notification → change recipient to **your own address** for now.
- [ ] Tell Claude "test the form" → it submits one real enquiry → you confirm it hits your inbox.
- [ ] Once confirmed, add a **second** notification for `scarmosttdope@gmail.com`
      (one recipient per notification — it's two entries, not a comma-separated list).

> Why yours first: a test enquiry would otherwise land in her inbox unannounced,
> before she's even seen the new site.

---

## 2 · Invite her to the admin  (5 min)

- [ ] sanity.io/manage → scar4ever.com → **Members** → Invite
- [ ] `scarmosttdope@gmail.com` — role **Editor**, not Administrator
- [ ] She signs in with Google. Free, nothing to install, her seat costs nothing (free plan allows 20 users).

**This is the thing you promised her "in a day or two" on Sept 21. It's due today.**

---

## 3 · Send her the email  (15 min — Claude drafts, you edit and send)

The existing draft is now wrong in three places: it points at the old GitHub preview,
says the contact form is still being finished, and says the admin is still coming.

- [ ] Ask Claude to rewrite it. It needs to cover:
      - New link + her admin login (watch for the Sanity invite)
      - **Questions that have piled up:**
        - Her site publishes contact.scarmosttdope@ but she emails from
          scarmosttdope@ — which does she actually check? Notifications currently
          go to scarmosttdope@, the one she replies from.
        - Brand Identity Kit: all three tiers ring up at $1,000, but her description
          says $2,500 with a 50% deposit. Which is right? What separates BOSS from Orange?
        - Her product title still reads "(CEO tier)" whichever package is picked.
        - Is social media **management** a separate service from the Content Kit?
          (Her URL says management, the product sells the kit.)
        - Her store lists "SENIOR PORTRIATS" — typo, worth fixing on Squarespace.
        - Instagram: send 4–6 posts **with the images**, not just links. Instagram
          blocks about two thirds of embeds; images always work.
      - Still outstanding from the last email: original photos, 7 client credits,
        New Era permission, booking setup answers.

---

## 4 · Retire the old hosting  (10 min — do AFTER she has the new link)

- [ ] GitHub → Settings → Developer settings → revoke the **fine-grained PAT**
- [ ] Sanity → API → Tokens → revoke the **import** token
- [ ] Tell Claude to delete `.github/workflows/deploy.yml`
- [ ] Drop the `https://thinkfirststudios.github.io` CORS origin (Claude can do this)

> Order matters: her Sept 21 email links to the GitHub preview. Don't break it
> until the new link is in her hands.

---

## If you still have energy

- [ ] Decide: should uploaded images be the **default** for Instagram, with embeds as
      the fallback? Right now her admin presents it the other way around. One-line change.
- [ ] Read the DRAFT Terms and Privacy at /terms and /privacy with fresh eyes.
      They need a real review with her before launch — don't let this be the thing
      that holds up the DNS switch.

---

## Do NOT do tonight

- **Don't touch DNS.** Launch is its own block: her review of Terms + Privacy,
  redirects for ~10 indexed Squarespace URLs, removing `noindex`, then the switch.
  Web records only — **never MX**, or her email dies.
- Don't chase the remaining `[CONFIRM]` markers (7 portfolio credits, booking tool,
  affiliate links). All nine are waiting on her, not on you.
