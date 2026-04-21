# trika.ai Website

Marketing website for trika.ai — AI-powered SaaS for automotive dealer networks.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Netlify (free tier, auto-deploys from main)
- **Booking:** Cal.com embed (iframe)

## Project structure

Single-deployable project. Source at `src/`, docs at `docs/`, tests at `tests/`.

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home (/)
│   ├── auditpro/     # AuditPro product page (/auditpro)
│   ├── company/      # Company/About page (/company)
│   ├── founders/     # Founders page (/founders)
│   └── demo/         # Cal.com booking page (/demo)
├── components/       # Shared components (Nav, Footer)
public/               # Static assets (Trishul logo, favicon, robots.txt)
```

## Build and run

```bash
./build.sh            # Install deps + build
./build.sh dev        # Dev server
./run.sh              # Start production server
./test.sh             # Run tests
```

Or directly:

```bash
npm install && npm run build    # Build
npm run dev                     # Dev server (localhost:3000)
npm run start                   # Production server
npm run lint                    # Lint
```

## Environment

- See `.env.example` for all variables

## Copy registry

**Before writing or modifying any marketing copy, read the copy registry first.**

- **Google Doc (master):** https://docs.google.com/document/d/1pyyGBFGye5cBOCVqn3geZqb6e_Lmm3NQtvtrsWkfFvc/edit
- **Repo snapshot:** `copy/registry.md`

The Google Doc is the single source of truth. The repo file is a snapshot. Both contain canonical copy blocks (grouped A-E), vocabulary table, rules checklist, and channel map.

## Content rules

This site follows strict content guidelines from the website brief:

- **Never** name specific OEM customers (Mahindra, Nissan, etc.)
- **Never** claim AuditPro has been deployed at scale — it's new in the US
- **Never** add pricing, testimonials, or case studies without founder approval
- **18+ years** experience claim applies to founders only, not AuditPro
- Voice: confident, specific, dealership-floor language. No SaaS buzzwords.
- Keep US dealer jargon simple — founders are India-OEM insiders, not US floor veterans
- See `copy/registry.md` for the full vocabulary table and rules checklist

## Deployment

Netlify (free tier). Auto-deploys from `main`. Config in `netlify.toml`.

## Key contacts

- **Bijal Sanghavi** — Co-founder & CEO — bijal@trika.ai
- **Teena Shah** — Co-founder
