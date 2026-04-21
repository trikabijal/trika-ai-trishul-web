# trika.ai Copy Registry

Single source of truth for all trika.ai marketing copy. Every channel pulls from here. If copy is not in this file, it is not canonical.

**Canonical location:** Google Doc (see link in CLAUDE.md). This repo copy is a snapshot.

Last updated: 2026-04-21

---

## 1. Core Positioning Blocks

Blocks are grouped by theme. When you change one block in a group, check the others — they use overlapping language.

---

### GROUP A: Company identity

These all describe what trika.ai is. If you change the core phrase "AI-powered SaaS for automotive dealer networks," update all four.

**A1 — Company one-liner**
> trika.ai builds AI-powered SaaS for automotive dealer networks.

Deployed: [website-meta-title], [home-hero-eyebrow], [home-hero-body], [company-hero-body], [cal.com-description], [outreach-opener]

**A2 — Meta title**
> trika.ai — AI-powered SaaS for automotive dealer networks

Deployed: [layout.tsx meta title]

**A3 — Site meta description**
> trika.ai builds AI-powered SaaS for automotive dealer networks. Our flagship, AuditPro, verifies every day whether your sales team followed the 7-step Road to the Sale.

Deployed: [layout.tsx meta description], [home-hero-body (variant)]

**A4 — Credibility headline**
> Built by operators who've spent 18+ years building automotive software.

Deployed: [home-credibility-h2], [company-hero-h1 (variant)]

---

### GROUP B: AuditPro product identity

These all describe what AuditPro is. The one-liner, paragraph, meta, and engine tagline must stay aligned.

**B1 — AuditPro one-liner**
> AuditPro is the accountability layer for your sales process.

Deployed: [auditpro-hero-h1], [home-meet-auditpro-body], [outreach-product-line], [mobile-app-header]

**B2 — AuditPro one-paragraph**
> AuditPro is an audit engine that can verify any dealership process — using AI-powered audio detection, photo evidence, GPS tracking, and timestamps. The Road to the Sale is the first audit we built. It won't be the last.

Deployed: [auditpro-hero-body]

**B3 — AuditPro meta description**
> AuditPro is the audit engine for dealership operations. AI-powered audio detection, photo evidence, GPS tracking — starting with the NADA Road to the Sale.

Deployed: [auditpro-page-meta]

**B4 — Audit engine tagline**
> The audit engine for dealership operations.

Deployed: [auditpro-hero-eyebrow], [bi-dashboard-header]

**B5 — "Beyond Road to Sale" statement**
> The Road to Sale is where you start. It's not where you stop.

Supporting copy:
> The Road to Sale audit is a specific application of the AuditPro engine — purpose-built and ready to deploy on day one. But the engine underneath can audit any process you define.

Deployed: [auditpro-beyond-section]

---

### GROUP C: Problem & differentiator

These describe the problem AuditPro solves and why it's different from mystery shopping. The "two processes" hook and the "every day" punchline appear in multiple places.

**C1 — Problem statement**

Headline:
> Every dealership runs two processes.

Body:
> The one in the handbook. And the one that actually happens on the floor.

Punchline:
> AuditPro closes that gap. Every day.

Deployed: [home-problem-section], [auditpro-problem-section (expanded variant)]

**C2 — Differentiator**
> Mystery shopping tells you what happened. Once a quarter. On a deal we picked.

> AuditPro runs five random deal audits every single day. Your team knows they're being measured. That changes behavior, not just reporting.

Deployed: [auditpro-differentiator-section], [outreach-differentiator]

---

### GROUP D: Credibility & founders

These describe the founders and their experience. The "18+ years" claim threads through all of them — it always applies to founders, never to AuditPro.

**D1 — Founder credibility statement**
> trika.ai's founders have spent 18+ years serving major automotive OEMs — building dealer-network software at OEM scale, learning what dealerships actually need from software, and learning what gets ignored. AuditPro is the first product we're bringing to the US market. It is purpose-built on the NADA Road to the Sale methodology — the same framework your team was trained on.

Structure that must survive: experience claim → AuditPro as deliberately-new US product → NADA as methodology anchor.

Deployed: [home-credibility-body], [company-who-we-are (variant)], [outreach-credibility]

**D2 — Three credibility pillars**
1. **18+ years in automotive.** Founders with deep tenure serving major automotive OEMs.
2. **NADA-aligned.** AuditPro is built on the 7-step Road to the Sale — the framework your team was trained on.
3. **Sits beside your stack.** AuditPro is not a CRM or DMS. It layers on top of CDK, VinSolutions, DealerSocket, or Reynolds & Reynolds — without replacing anything.

Deployed: [home-credibility-pillars]

**D3 — Founder intro**
> Bijal and Teena have worked together — as friends and collaborators — for 16 years. Trika is the company they built together to bring 18+ years of automotive software experience to the global dealer market as AI-powered SaaS.

Deployed: [founders-hero-body]

**D4 — Bijal bio**
Title: Co-founder and CEO, trika.ai
> Bijal has spent 27 years building and scaling enterprise software companies — across three companies that grew past $100M. His background spans AI, product, and the unglamorous work of turning technical breakthroughs into products people actually pay for. Trika is his first venture focused on the automotive dealer ecosystem.

Deployed: [founders-page], [linkedin-about (adapt)]

**D5 — Teena bio**
Title: Co-founder, trika.ai
> Teena is also the CEO of Tiez Interactive Pvt Ltd, the company she founded over a decade ago, where she has spent the last decade-plus building automotive technology for OEMs and their dealer networks. Her career in the auto industry spans 18+ years across enterprise software delivery, product operations, and dealer-network programs. At Trika, she brings the operating depth that comes from having actually run dealer software at scale.

Deployed: [founders-page], [linkedin-about (adapt)]

Note: The brief uses "Tina" throughout. "Teena Shah" is the canonical name per LinkedIn and deployed website.

**D6 — Partnership statement**
> Teena has spent her career building and delivering software for automotive dealer networks. Bijal has spent his building and scaling enterprise software companies. The partnership is simple: Teena brings the operating depth in automotive. Bijal brings the product engine. Neither of us could build Trika alone. Together, we have what the market has been missing — operators who understand both the product depth and the dealer floor.

Deployed: [founders-page-partnership-section]

---

### GROUP E: CTAs

All demo-related copy. If you change the duration or the ask, update all of these.

**E1 — CTA button text**
> Book a demo

**E2 — Demo page headline**
> Book a demo of AuditPro.

**E3 — Demo page subheadline**
> 30 minutes. Real dealership scenarios. No slideware.

**E4 — Home page final CTA**

Headline:
> Stop guessing whether the process was followed. Find out.

Body:
> Book a 30-minute demo. We'll walk you through AuditPro on real dealership scenarios.

**E5 — AuditPro page final CTA**
> See AuditPro on your deals. A 30-minute demo. We'll walk through real dealership scenarios — no canned slideware.

Deployed: [home-final-cta], [auditpro-final-cta], [demo-page-hero], [cal.com-title], [outreach-cta]

---

## 2. Vocabulary Table

| Use This | Never This | Why |
|----------|-----------|-----|
| trika.ai (lowercase, with .ai) | Trika.ai, TRIKA.AI | Domain/brand in running text is always lowercase. |
| Trika (capitalized) | trika, TRIKA | Company name without domain form. "Trika is the company we built..." |
| 18+ years (founders/team only) | "AuditPro has 18+ years..." | Experience belongs to founders. AuditPro is new to US. Central credibility risk. |
| major automotive OEMs | Mahindra, Nissan, Renault, Tata, any named OEM | No specific OEM names. Ever. |
| gross per deal | gross per copy | Simpler dealership language. |
| your trainer | your 20 Group coach | More universal. Not every dealer uses a 20 Group. |
| multi-point inspection | MPI | Spell it out for clarity. |
| sits alongside / layers on top of | replaces, competes with | AuditPro is additive, never a replacement. |
| CDK, VinSolutions, DealerSocket, Reynolds & Reynolds | Any claim of "integration" or "partnership" | Name as co-existing. Never claim formal partnerships. |
| accountability | AI-powered intelligence, AI-driven insights | AI is implementation detail. Accountability is the hero. |
| audit, verify, measure | empower, transform, reimagine | Operational verbs. No SaaS fog. |
| the first product we're bringing to the US | battle-tested, proven across hundreds of dealers | AuditPro is new in the US. The founders are not. |
| designed to connect with your CRM | fully integrated with, out-of-box CRM integration | CRM connection exists in demo but not productized yet. |
| Teena Shah | Tina, Tina Shah | Canonical name per LinkedIn. |
| AuditPro | Audit Pro, auditpro, AUDITPRO | One word, capital A, capital P. |
| Road to the Sale | road to the sale, RTTS | Full name, title case. "Road to Sale" OK in casual contexts. |
| NADA | Nada, nada | Always all-caps (acronym). |
| F&I | F and I, f&i, FNI | Ampersand, both caps. |
| T.O. (turn-over) | TO, turnover | Periods, both caps. Spell out on first use. |

### Banned words (never use in any channel)

empower, transform, reimagine, unlock, supercharge, next-generation, revolutionary, seamless, best-in-class, holistic, synergy, end-to-end, leverage (as a verb), battle-tested, proven at scale, trusted by industry leaders

---

## 3. Rules Checklist

Quick-check before publishing anything.

**Experience claims**
- "18+ years" = founders/team only, never AuditPro itself
- Never "deployed at scale" or "hundreds of dealers"
- Never cite dealer counts, revenue, or customer counts
- Structure: experience → AuditPro as new US product → NADA anchor

**OEM and naming**
- No specific OEM names (no Mahindra, Nissan, Renault, Tata)
- No Tiez except once in Teena's bio on founders page
- No AnnotatorPro or unnamed future products
- No "coming soon" pages

**Product claims**
- AI = implementation detail; accountability = hero
- AuditPro "sits alongside" the stack; never "replaces"
- Named tools (CDK, VinSolutions) are co-existing, not partners
- CRM connection = "designed to connect," not "integrated"
- No pricing anywhere

**Content restrictions**
- No testimonials/case studies without founder approval
- No internal GTM content (ICPs, prospects, deadlines, limitations)
- No stock imagery
- No generic SaaS framing
- Industry stats require founder verification before publishing

**Voice**
- Short sentences. Real numbers. Named processes.
- Dealership floor language, but keep it simple — founders are India-OEM insiders, not US floor veterans
- No SaaS-corporate vocabulary (see banned words)
- Confident, not salesy. Specific, not generic.

---

## 4. Channel Map

### Website
| Surface | Blocks |
|---------|--------|
| Home hero | A1, A3, C1 |
| Home - Meet AuditPro | B1, B4 |
| Home - Credibility | D1, A4, D2 |
| Home - Final CTA | E4 |
| AuditPro hero | B1, B2, B4 |
| AuditPro meta | B3 |
| AuditPro - Beyond Road to Sale | B5 |
| AuditPro - Differentiator | C2 |
| AuditPro - Final CTA | E5 |
| Company hero | A1, A4 (variant) |
| Company - Who we are | D1 (variant) |
| Founders hero | D3 |
| Founders - Bios | D4, D5 |
| Founders - Partnership | D6 |
| Demo page | E2, E3 |
| Meta tags | A2, A3 |

### Cal.com booking page
| Surface | Source |
|---------|--------|
| Event title | E2 |
| Event description | E3 |
| Form question | "What's the one thing you'd want AuditPro to prove on your floor in week one?" |

### Outreach emails
| Surface | Source |
|---------|--------|
| Opener | A1 |
| Product line | B1 |
| Credibility | D1 (condensed) |
| Problem hook | C1 |
| Differentiator | C2 (condensed) |
| CTA | E4 |

### LinkedIn — Bijal
| Surface | Source |
|---------|--------|
| Headline | "Co-founder & CEO, trika.ai — AI-powered SaaS for automotive dealer networks" |
| About | Adapt D4 + A1 + B1 |

### LinkedIn — Teena
| Surface | Source |
|---------|--------|
| Headline | "Co-founder, trika.ai — AI-powered SaaS for automotive dealer networks" |
| About | Adapt D5 + A1 + B1 |

### Product demos
| Surface | Source |
|---------|--------|
| Mobile app header | B1 |
| BI dashboard header | B4 |

---

## Appendix: Discrepancies Between Brief and Deployed Site

1. **Demo duration:** Brief says 20 min. Site says 30 min. Site is canonical.
2. **Co-founder name:** Brief says "Tina." Site says "Teena Shah." Site is canonical.
3. **AuditPro framing:** Brief uses "remote, physical, observational audits." Site uses "audit engine" + 5 evidence types. Site is canonical.
4. **Jargon:** Brief uses "gross per copy," "20 Group coach," "MPI." Site uses simpler versions. Site is canonical.
