# Architecture

## Overview

Trika.ai's website is a static marketing site built with Next.js App Router. All pages are statically generated at build time — no server-side rendering or API routes.

## Components

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout — Nav, Footer, Geist font, global metadata
│   ├── globals.css         # Tailwind v4 theme tokens (colors, fonts)
│   ├── page.tsx            # Home page
│   ├── auditpro/page.tsx   # AuditPro product page
│   ├── company/page.tsx    # Company/About page
│   ├── founders/page.tsx   # Founders page
│   └── demo/
│       ├── layout.tsx      # Demo page metadata (client component can't export metadata)
│       └── page.tsx        # Cal.com booking embed (client component)
├── components/
│   ├── Nav.tsx             # Top navigation with mobile hamburger (client component)
│   └── Footer.tsx          # Footer with contact links (server component)
```

## Design decisions

### Static generation
All pages except `/demo` are server components rendered at build time. The demo page is a client component because it loads a Cal.com iframe. Its metadata is in a separate `layout.tsx`.

### Tailwind v4 theme tokens
Colors and fonts are defined as CSS custom properties in `globals.css` using `@theme inline`. Components use semantic token names (`text-muted`, `bg-surface`, `border-border`) rather than raw color values.

### Standalone output
`next.config.ts` sets `output: "standalone"` for Railway deployment. Deploy config lives in `deployment/railway.json`. This bundles only the files needed to run the server, reducing the deployment footprint.

### Static assets
Static assets (logos, favicon) live in `public/images/`. Next.js serves `public/` at the root path.

### No component library
The site uses plain Tailwind utility classes. No shadcn, no Radix, no component library. For a 5-page marketing site, the overhead isn't justified.

### Cal.com over Calendly
Demo booking uses Cal.com via iframe embed. The URL is stored as a constant in `src/app/demo/page.tsx`.

## Isolation

This is a single-deployable project. There are no API routes, no database, no auth. The only external dependency at runtime is the Cal.com iframe.
