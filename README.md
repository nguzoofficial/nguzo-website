# Nguzo — Marketing Website

Static marketing site for **Nguzo**, a hyper-local peer-to-peer marketplace for
Burundi. Browse what's nearby, message the seller, meet in person — no fees, no
shipping, no middlemen.

The site is a landing page plus legal pages, bilingual (French default / English),
and is deployed on Netlify.

## Tech stack

- Plain **HTML, CSS, and vanilla JavaScript** — no build step, no framework.

- For matters of scalability, webcomponents were used. They're in the components folder.
  For formatting, use the format selection as html extension (but you have  to select the code first, right click and then click on format selection  as  html) and for syntax highlighting, use  the es6-string-html and for autocompletion, add 
  "
    "emmet.includeLanguages": {
      "javascript": "html"
    },
    "emmet.triggerExpansionOnTab": true
  "
  in Preferences: open user settings (json)

- **Netlify** for hosting, redirects, security headers, and form handling.

- **Plus Jakarta Sans** loaded from Google Fonts.

## Project structure

```
.
├── index.html        # Landing page (hero, how-it-works, app showcase, trust, about, contact)
├── terms.html        # Terms of Use (noindex)
├── privacy.html      # Privacy Policy (noindex)
├── style.css         # All styles (design tokens + components + responsive)
├── script.js         # Nav, scroll reveals, language toggle, mobile menu, form
├── netlify.toml      # Publish config, clean-URL redirects, security headers, caching
├── robots.txt        # Crawler rules
├── sitemap.xml       # Sitemap
└── images/           # App screenshots (app-feed, app-listing, app-login, app-profile, app-settings)
```

## Local development

No tooling required. Open `index.html` directly, or serve the folder so that
clean URLs and `fetch` behave closer to production:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit http://localhost:8000.

To exercise the Netlify-specific behaviour (form submissions, `/terms` and
`/privacy` redirects, headers) locally:

```bash
npm install -g netlify-cli
netlify dev
```

## Internationalization

- The **website UI** is bilingual: **French (default)** and English.
- The **app** itself supports four languages (French, Kirundi, Kiswahili, 
  English) — referenced in the About section and structured data, but the
  website only toggles FR/EN.
- Translatable text uses `data-en` / `data-fr` attributes; placeholders use
  `data-ph-en` / `data-ph-fr`. `script.js` swaps them on load and on toggle.
- Language is resolved as: `?lang=` query param → saved preference
  (`localStorage`) → `fr` default.

## Forms

The "Stay informed" waitlist form uses [Netlify Forms](https://docs.netlify.com/forms/setup/)
(`data-netlify="true"`, with a honeypot field). `script.js` submits it via
`fetch` and shows an inline success state, falling back to a normal POST if the
request fails. Submissions appear in the Netlify dashboard.

## Deployment

Pushes to the connected branch deploy automatically on Netlify. Key config lives
in `netlify.toml`:

- `publish = "."` — the repo root is served as-is.
- Clean URLs: `/terms` → `/terms.html`, `/privacy` → `/privacy.html`.
- Security headers including a `Content-Security-Policy` (note: `style-src` does
  **not** allow `'unsafe-inline'`, so avoid inline `style="…"` attributes — use
  CSS classes or set styles via the CSSOM in JS).
- Caching: images 1 year (immutable), CSS/JS 1 day.

## Before going live

The deployed domain is currently the placeholder `nguzo.netlify.app`. When the
production domain is set, update it in:

- `index.html` — canonical, `hreflang`, Open Graph, Twitter, JSON-LD
- `terms.html` / `privacy.html` — canonical
- `sitemap.xml` and `robots.txt`

Also worth doing: add a dedicated 1200×630 Open Graph image and a favicon /
`apple-touch-icon`, and compress the screenshots in `images/` (some are >1 MB).

## License

© 2026 Nguzo. All rights reserved.
# nguz_website
