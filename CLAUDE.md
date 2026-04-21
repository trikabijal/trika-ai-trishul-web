# trika.ai Website

Marketing website for trika.ai — AI-powered SaaS for automotive dealer networks.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Railway (standalone output)
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

- `PORT` — Server port (default: 3000, Railway injects this)
- See `.env.example` for all variables

## Content rules

This site follows strict content guidelines from the website brief:

- **Never** name specific OEM customers (Mahindra, Nissan, etc.)
- **Never** claim AuditPro has been deployed at scale — it's new in the US
- **Never** add pricing, testimonials, or case studies without founder approval
- **18+ years** experience claim applies to founders only, not AuditPro
- Voice: confident, specific, dealership-floor language. No SaaS buzzwords.
- See `dev/tasks/` for the full website brief if available

## Deployment

Railway via `railway.json`. Standalone Next.js output. Healthcheck on `/`.

## Key contacts

- **Bijal Sanghavi** — Co-founder & CEO — bijal@trika.ai
- **Teena Shah** — Co-founder
