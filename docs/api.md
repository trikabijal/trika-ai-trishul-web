# API Reference

This is a static marketing website. There are no API routes, facades, or programmatic interfaces.

## Pages

| Route | Component | Type | Description |
|-------|-----------|------|-------------|
| `/` | `src/app/page.tsx` | Server | Home page |
| `/auditpro` | `src/app/auditpro/page.tsx` | Server | AuditPro product page |
| `/company` | `src/app/company/page.tsx` | Server | Company/About page |
| `/founders` | `src/app/founders/page.tsx` | Server | Founders page |
| `/demo` | `src/app/demo/page.tsx` | Client | Cal.com booking embed |

## Shared components

| Component | Path | Type | Props |
|-----------|------|------|-------|
| `Nav` | `src/components/Nav.tsx` | Client | None |
| `Footer` | `src/components/Footer.tsx` | Server | None |

## Configuration

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Tailwind theme tokens (colors, fonts) |
| `src/app/layout.tsx` | Root layout, global metadata, font loading |
| `next.config.ts` | Next.js config (standalone output) |
| `railway.json` | Railway deployment config |

## External integrations

| Service | Integration point | Config location |
|---------|-------------------|-----------------|
| Cal.com | iframe embed | `CAL_URL` constant in `src/app/demo/page.tsx` |
