# CogniWeave-AI Website

Marketing site for [CogniWeave-AI](https://cogniweave-ai.com) — production Agentic AI platforms for banks and fintechs. Tagline: *Using AI to weave the future*.

Live site: **https://cogniweave-ai.com**

## Pages

| Path | Description |
|------|-------------|
| `index.html` | Company homepage (About, Products, Work, Contact) |
| `powerloom.html` | Powerloom — collaborative AI agents for enterprise software |
| `strataweave.html` | Strataweave — agentic AI digital banking platform |

Shared styles live in `styles.css`; product pages add `powerloom.css` / `strataweave.css`. Interaction is in `script.js`.

## Stack

Static HTML, CSS, and vanilla JavaScript. Served via GitHub Pages (`CNAME` → `cogniweave-ai.com`).

Typography: [Manrope](https://fonts.google.com/specimen/Manrope) (body) and [Sora](https://fonts.google.com/specimen/Sora) (headings).

## Local preview

No build step. From this directory:

```bash
# Python
python3 -m http.server 8080

# or Node
npx --yes serve .
```

Then open `http://localhost:8080`.

## Repo layout

```text
cogniweave-website/
├── index.html
├── powerloom.html / powerloom.css
├── strataweave.html / strataweave.css
├── styles.css
├── script.js
├── assets/images/
├── CNAME
├── robots.txt
└── sitemap.xml
```

## Development workspace

For Cursor multi-root editing alongside related repos, see [`cw-website-cursor-dev-workspace`](https://github.com/weave-ai-net/cw-website-cursor-dev-workspace).
