# End-to-End Flows

## Page request flow

All pages are statically generated at build time. At runtime:

1. Request hits Railway → Next.js standalone server
2. Server serves pre-rendered HTML from `.next/server/app/`
3. Client hydrates React components (only `Nav` and `demo/page.tsx` are client components)

## Navigation flow

1. User lands on Home (`/`)
2. `Nav` component renders top bar with links: AuditPro, Company, Founders, Book a Demo
3. All navigation uses `next/link` for client-side transitions (no full page reloads)
4. "Book a Demo" CTA buttons throughout the site link to `/demo`

## Demo booking flow

1. User navigates to `/demo`
2. Client component mounts → Cal.com iframe loads from `CAL_URL`
3. User books directly through Cal.com's embedded scheduler
4. Confirmation handled by Cal.com (no backend on our side)

## Build and deploy flow

1. Developer pushes to `feat/*` branch
2. Creates PR to `main`
3. On merge to `main` → Railway detects push
4. Railway runs `npm install` + `npm run build` (Nixpacks)
5. Railway starts with `npm run start` (respects `PORT` env var)
6. Healthcheck polls `GET /` to verify deployment
