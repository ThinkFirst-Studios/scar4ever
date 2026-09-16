# SCAR — scar4ever.com — Pitch Mockup

**Spec build. Prospect has not signed.**

- Brief: `PROMPT.md`
- Lead tracking: `LEAD-NOTES.md`
- Preview: open `index.html` (or right-click -> Open with Live Server)
- Live preview (noindex): https://thinkfirststudios.github.io/scar4ever/

## Build notes

- **Real imagery (2026-09-16):** `images/` holds the originals SCAR's portfolio + service cards (gitignored, ~21MB). Optimized copies live in `assets/work` and `assets/services` (~1.3MB total). The New Era × Bella Doña × Betty Boop slot is still a labelled placeholder, no file supplied yet.
- **Excluded:** `Merch Design/Screenshot+2023-07-25…webp` (Kobe "Big Dreams Bigger Soul"): appears to use his 1996 draft photo (age 17), which breaks the no-minors rule, and it leans on Lakers/celebrity likeness. Not shown.
- **Work filters** now follow her own portfolio pages: Graphics · Logo Design · Merch · Photo & Styling. Verified clients without files are listed as text under "also on the list".
- **Weight:** HTML ~15KB + CSS ~18KB + JS ~3KB, plus Google Fonts. Current Squarespace homepage is ~210KB of HTML alone.
- **Hex values** (`--pink #ff2e93`, `--acid #c8ff00`, `--red #ff1f1f`) are working picks — no artwork was supplied to sample from. `[CONFIRM]`.
- **Fonts:** Archivo Black (display, already hers) · Space Grotesk (body, already hers) · Fredoka 700 as a stand-in for the soft rounded "scar" wordmark. `[CONFIRM]` her licensed wordmark face.
- **Work filters:** category tags on each piece are inferred from project names; anything not obvious is marked `[CONFIRM] type`. Templates filter shows an honest empty state — no template work is in her published portfolio.
- **PSMD** is included in Links with a visible `[CONFIRM] keep in scope?` tag rather than silently dropped.
- **Not in this mockup (needed for a real build):** commerce / cart, priced services, redirects for her ~10 existing Squarespace URLs. See `PROMPT.md`.

## Pages (matches her live nav: HOME · PORTFOLIO · SERVICES · CONTACT · PSMD★)

| Mockup page | Her current Squarespace URL | Real build |
|---|---|---|
| `index.html` | `/` | keep |
| `portfolio.html` | `/portfolioo` (+ `/graphics`, `/logodesigns`, `/merch-design`, photo page) | redirect all to portfolio |
| `services.html` | `/designservices` | redirect; commerce decision still open |
| `contact.html` | `/contact` | keep; form handler `[CONFIRM]` |
| `psmd.html` | external → prettysweetmostlydope.com | PSMD★ product page; each product links to her PSMD store |

- Header/footer are duplicated across the four pages (no build step). Edit all four when the nav changes.
- CSS/JS links carry a `?v=` stamp. Bump it on every deploy — GitHub Pages caches CSS for 10 min, and a stale stylesheet with new HTML breaks the grid.
- Her logo (`images/scar+patch+logo.webp`) replaces the stand-in wordmark font: `assets/brand/`.

## PSMD★ products

Source files in `PSMD/` (gitignored); optimized copies in `assets/psmd/`. Cases shown at $40 (per lead research); other prices `[CONFIRM]`.
Excluded from the site:
- **Prettysweet Friends plush:** the shirt print is a photo of a young child (no-minors rule).
- **Kimmie Star case:** Kim Kardashian likeness.
- **NY Feverr case:** New York Yankees "NY" trademark pattern.
- Ffiti Flower (shown) carries a Chrome Hearts-style horseshoe emblem reading Prettysweet Mostlydope. Worth a look before launch.
