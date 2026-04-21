# trika.ai Website

Marketing website for [trika.ai](https://trika.ai) — AI-powered SaaS for automotive dealer networks.

## What is this

A 5-page marketing site built with Next.js and Tailwind CSS:

- **Home** — Hero, problem statement, AuditPro intro, credibility
- **AuditPro** (`/auditpro`) — Full product page with audit modes, NADA 7-step process, positioning
- **Company** (`/company`) — About Trika, why AuditPro, beliefs
- **Founders** (`/founders`) — Bijal Sanghavi and Teena Shah bios
- **Demo** (`/demo`) — Cal.com booking embed

## How to build

```bash
./build.sh          # Install deps + production build
```

Or manually:

```bash
npm install
npm run build
```

## How to run

```bash
./run.sh            # Start production server on PORT (default 3000)
```

Or for development:

```bash
npm run dev         # Dev server with hot reload at localhost:3000
```

## How to test

```bash
./test.sh           # Run lint + build check
```

## Deployment

Deployed to Railway. Push to `main` triggers deployment.

- Config: `railway.json`
- Output: Next.js standalone
- Healthcheck: `GET /`

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Railway (hosting)
- Cal.com (demo booking)
