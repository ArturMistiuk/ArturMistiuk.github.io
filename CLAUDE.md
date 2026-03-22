# CLAUDE.md

## Project Overview

Personal portfolio website for Artur Mistiuk (Data Analyst / Data Scientist), deployed to GitHub Pages via GitHub Actions.

- **Branch**: `main` — current active branch (Astro v2 site, deployed)
- **Old branch**: `portfolio-v2` — development branch, merged into main
- **Live URL**: `https://ArturMistiuk.github.io`

## Tech Stack

- **Framework**: Astro (static output, zero-JS by default)
- **CSS**: Tailwind CSS v3 + CSS custom properties (`src/styles/global.css`)
- **Deployment**: GitHub Actions → GitHub Pages (push to `portfolio-v2` auto-deploys)
- **Node.js**: v20 (required locally; GitHub Actions installs it automatically)

## Commands

```bash
npm install        # Install dependencies (requires Node.js v20+)
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build to dist/ (Astro static output)
npm run preview    # Preview built site locally
```

> Node.js is NOT installed on this machine by default. Install from nodejs.org before running these locally.

## File Structure — Edit Points

Content lives in TypeScript data files. These are the PRIMARY edit points:

| File | What it controls |
|---|---|
| `src/data/projects.ts` | Project cards (title, description, image, tags, links) |
| `src/data/experience.ts` | Work, education, and certification timeline |
| `src/data/skills.ts` | Tech skills grouped by category |

## CV / Download

CV file lives at `public/CV_ArturMistiuk.pdf` — replace this file to update the download.
The original PDF is also kept at the repo root (not served by Astro — root-level files are just for reference).

## Adding / Updating Projects

1. Edit `src/data/projects.ts` — add an entry following the `Project` interface
2. Drop image/video into `public/projects/`
3. Push to `main` — GitHub Actions handles the deploy

```typescript
// Minimum required fields:
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Two to three sentences.',
  imageAlt: 'Descriptive alt text',
  tags: ['Python', 'SQL'],
  githubUrl: 'https://github.com/ArturMistiuk/repo',
}
```

## Design System

Design tokens are CSS variables in `src/styles/global.css`. NEVER hardcode colors or fonts — always use variables:

```css
--color-bg-base:        #0d1117   /* page background */
--color-bg-surface:     #161b22   /* cards */
--color-accent:         #58a6ff   /* links, CTAs */
--color-accent-green:   #3fb950   /* featured badge */
--color-text-primary:   #e6edf3
--color-text-secondary: #8b949e
```

Fonts: `var(--font-sans)` (Inter) and `var(--font-mono)` (JetBrains Mono).

## Deployment

- Push to `main` → `.github/workflows/deploy.yml` triggers automatically
- GitHub Pages must be set to **Source: GitHub Actions** in repo Settings → Pages
- Build artifact: `dist/` directory

## Coding Conventions

- Astro components: one component per file in `src/components/`
- No inline styles — use CSS in `<style>` blocks (scoped) or utility classes
- Images: use `loading="lazy"` except hero image (`loading="eager"`)
- Animations: wrap in `@media (prefers-reduced-motion: no-preference)`
- Accessibility: all interactive elements need `aria-label` if icon-only

## Available Agents

Defined in `.claude/agents/` — invoke when appropriate:

- **`ui-designer`** — design system changes, new component specs, color/spacing decisions
- **`frontend-developer`** — component implementation, TypeScript, accessibility
- **`deployment-engineer`** — CI/CD, GitHub Actions, build configuration
- **`project-manager`** — planning, milestones

## What NOT to Do

- Do NOT break the `main` branch — it's the live production site
- Do NOT add server-side code — GitHub Pages is static hosting only
- Do NOT hardcode personal info (email, URLs) outside the data files and component defaults
- Do NOT commit `node_modules/`, `dist/`, or `.astro/` — all in `.gitignore`
