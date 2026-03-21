# Agentic Admin for WP — Landing Page

Single-page static landing page for [Agentic Admin for WP](https://github.com/pluginslab/wp-agentic-admin), an AI-powered WordPress admin assistant that runs entirely in the browser.

**Live site:** https://bitpolar-tech.github.io/wp-agentic-admin-landing

## Prerequisites

- **Node.js** 20+
- **npm** (comes with Node.js)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Open http://localhost:4321
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Tech Stack

- **[Astro](https://astro.build)** v4 — static site generator
- **[Tailwind CSS](https://tailwindcss.com)** v3 — utility-first styling
- **Inter** + **JetBrains Mono** — fonts via Google Fonts

Zero client-side JavaScript frameworks. Only tiny inline scripts for navigation and scroll animations.

## Project Structure

```
src/
├── pages/
│   └── index.astro              # Single landing page
├── layouts/
│   └── BaseLayout.astro         # HTML shell, SEO meta, fonts, JSON-LD
├── components/
│   ├── Nav.astro                # Sticky navigation with mobile menu
│   ├── Hero.astro               # Hero section with product screenshot
│   ├── TrustBar.astro           # Key stats strip (Local, Free, 30+ Abilities)
│   ├── ValueProps.astro         # 4 value proposition cards
│   ├── HowItWorks.astro         # ReAct reasoning flow + terminal example
│   ├── Abilities.astro          # CSS-only tabbed interface, 30+ abilities
│   ├── Workflows.astro          # 5 pre-built workflow cards
│   ├── Transparency.astro       # Thinking out loud + feedback screenshot
│   ├── LocalAI.astro            # Model comparison (Qwen 3 vs 2.5)
│   ├── ComparisonTable.astro    # Feature comparison table
│   ├── SafeByDefault.astro      # Safety guardrails
│   ├── Extensibility.astro      # WordPress standards + code example
│   ├── Requirements.astro       # Requirements + quick start guide
│   ├── FinalCTA.astro           # Bottom call to action
│   └── Footer.astro             # Footer with links
└── styles/
    └── global.css               # Tailwind directives, utilities, animations

public/
└── images/
    ├── chat-window.png          # Product screenshot: chat interface
    ├── abilities-overview.png   # Product screenshot: abilities panel
    ├── feedback-collection.png  # Product screenshot: feedback system
    ├── ai-brain.jpg             # Generated: neural network illustration
    ├── security-shield.jpg      # Generated: security shield illustration
    └── workflow-nodes.jpg       # Generated: workflow nodes illustration
```

## Configuration

- `astro.config.mjs` — Astro + Tailwind integration
- `tailwind.config.js` — Custom color palette (navy, accent-blue, accent-indigo, accent-purple)
- `tsconfig.json` — TypeScript strict mode with `@/*` path alias

## Deployment

Build the static site and deploy the `dist/` folder to any static hosting:

```bash
npm run build
```

The `dist/` folder contains a single `index.html` and associated assets. Deploy to:
- **Netlify** — drag & drop or connect repo
- **Vercel** — auto-detects Astro
- **GitHub Pages** — push `dist/` contents
- **Any static host** — upload `dist/` folder

## Content

All landing page content is sourced from `MARKETING.md`. To update copy, edit the content directly in the corresponding component files under `src/components/`.

## License

GPL-2.0-or-later
