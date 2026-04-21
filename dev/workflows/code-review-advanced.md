# Code Review — Advanced Checks

Specialized review checks for projects that have grown past MVP. These are not part of the standard code review (`code-review.md`) because they add overhead that isn't justified until the project needs them. Add individual sections to your standard review when the trigger condition is met.

**When to use:** Cherry-pick sections as your project reaches the maturity triggers described below. Don't apply all of these to every PR — that's how reviews become rubber stamps.

---

## A.1 Accessibility (a11y)

**Trigger:** The project has a customer-facing UI used by external users, or the product has accessibility compliance requirements (WCAG, ADA, Section 508).

### Keyboard navigation

- Can every interactive element (buttons, links, form fields, modals, dropdowns) be reached and operated with keyboard only? Tab order should follow visual layout.
- Do modals and dialogs trap focus inside them? (Tab from the last element should cycle to the first, not escape behind the modal.)
- Does Escape close modals, dropdowns, and popovers?
- Are custom interactive components (accordions, tabs, carousels) keyboard-operable — or only mouse-operable?

### Focus management

- When a page transition or dynamic content update occurs, does focus move to the right place? (After deleting an item from a list, focus should land on the next item or a sensible fallback — not reset to the top of the page.)
- Are focus styles visible? If the default browser outline is overridden, is the replacement visible against all backgrounds?
- Are skip-to-content links present for pages with navigation headers?

### Screen readers and ARIA

- Do images have meaningful alt text? (Decorative images: `alt=""`. Informative images: describe the content.)
- Are form fields associated with labels? (`<label for="...">` or `aria-label` / `aria-labelledby`)
- Are ARIA roles used correctly? (`role="button"` on a `<div>` that acts as a button, `role="alert"` for error messages that should be announced immediately.)
- Are dynamic state changes announced? (Loading spinners: `aria-live="polite"`. Error messages: `aria-live="assertive"` or `role="alert"`.)
- Are interactive regions identified? (`aria-expanded` for accordions, `aria-selected` for tabs, `aria-checked` for custom checkboxes.)

### Color and contrast

- Do text and interactive elements meet WCAG AA contrast ratios? (4.5:1 for normal text, 3:1 for large text and UI components.)
- Is color the only way information is conveyed? (Red/green for error/success should also use icons, text, or patterns.)

---

## A.2 Internationalization (i18n) & Localization (l10n)

**Trigger:** The project supports or plans to support multiple languages, locales, or regions.

### Text and translations

- Are all user-visible strings externalized into a translation file / resource bundle — not hardcoded in source?
- Are string concatenations avoided for building sentences? (`"Welcome, " + name + "!"` breaks in languages where word order differs. Use parameterized templates: `t("welcome", { name })`)
- Is pluralization handled correctly? (English has 2 forms: singular/plural. Arabic has 6. Russian has 3. Use the locale's plural rules, not `count === 1 ? "item" : "items"`.)
- Are translations complete for the change? If a new string is added, are translations provided or flagged as pending for all supported locales?

### Dates, numbers, and currency

- Are dates formatted using locale-aware formatters? (`Intl.DateTimeFormat`, `datetime.strftime` with locale — not hardcoded `MM/DD/YYYY` which is meaningless outside the US.)
- Are numbers formatted with locale-appropriate separators? (US: `1,000.50`. Germany: `1.000,50`. India: `1,00,000`.)
- Are currency amounts displayed with the correct symbol and position for the locale? (US: `$1,000`. EU: `1.000 €`. Japan: `¥1,000`.)

### Layout and directionality

- Does the layout support RTL (right-to-left) languages if the project targets Arabic, Hebrew, Farsi, or Urdu? (CSS `direction: rtl`, mirrored icons, flipped navigation.)
- Are fixed widths avoided for text containers? (Translated strings can be 30-50% longer than English. German and Finnish are especially verbose.)
- Are icons and images culturally neutral? (Hand gestures, religious symbols, and color associations vary by culture.)

---

## A.3 Privacy & Compliance

**Trigger:** The project stores or processes personal data (names, emails, addresses, payment info, health data, behavioral analytics), or operates in a regulated market (GDPR, CCPA, HIPAA, PCI-DSS).

### Data minimization

- Does the change collect only the data it needs? If a feature needs a user's city, it shouldn't also store their full address "just in case."
- Are new fields justified? For every new piece of personal data stored, there should be a documented purpose. "We might need it later" is not a purpose.
- Is derived data stored when it could be computed on demand? (Storing age when you already have date of birth = unnecessary duplication of PII.)

### Retention and erasure

- Does the new data have a defined retention period? Data stored indefinitely is a liability.
- If the project supports account deletion or data erasure requests, does the new data get included in that flow? A new table or field that stores PII but isn't covered by the deletion routine is a compliance gap.
- Are backups and logs considered? Deleting a user from the database but leaving their data in 90 days of log files is not erasure.

### Consent and purpose limitation

- If the data is used for a new purpose (analytics, ML training, marketing), is there consent for that purpose? Data collected for "account creation" cannot be silently repurposed for "email marketing" without explicit consent under GDPR/CCPA.
- Are consent records stored? (Who consented, to what, when, which version of the policy.)

### Audit logging

- Are access and modification events for sensitive data logged? (Who accessed what record, when, from which endpoint.)
- Are audit logs tamper-evident? (Append-only, separate storage from application logs, not deletable by the application itself.)

### Data residency

- If the project has geographic data residency requirements (EU data stays in EU), does the new data flow comply? Check database regions, CDN caching, log aggregation services, and third-party analytics.

---

## A.4 Configuration & Feature Flags

**Trigger:** The project uses a feature flag system (LaunchDarkly, Unleash, ConfigCat, custom), or has complex configuration with multiple sources and override layers.

### Configuration validation

- Is configuration validated at startup, not at first use? A bad config value that crashes 2 hours into a production job is worse than a startup failure.
- Are required values checked? Optional values with sensible defaults? Invalid values rejected with a clear error message that names the config key and explains what's expected?
- Is there a `.env.example` or config schema that documents all keys, their types, defaults, and what they control?

### Precedence and overrides

- If config comes from multiple sources (env vars, config files, CLI flags, defaults), is the precedence order documented and consistent? (Typical: CLI flags > env vars > config file > defaults.)
- Can the precedence be verified? (A `/debug/config` endpoint or startup log that shows resolved values — with secrets masked.)

### Secure defaults

- Are new config options secure by default? (HTTPS on, debug off, auth required, verbose logging off.) The developer who forgets to set a flag should get the safe behavior, not the unsafe one.
- Are dangerous config options guarded? (If a flag disables auth for testing, does it refuse to activate in production? Does it log a loud warning?)

### Feature flags

- Are new flags default-off? A flag that's default-on and untested-off is not a feature flag — it's just code with an extra `if` statement.
- Does the flag have a kill-switch path? If the feature behind the flag breaks in production, can you turn it off without a deploy and does the system degrade gracefully?
- Is there a cleanup plan? Every flag should have an expiration date or a ticket to remove it once the feature is stable. Stale flags accumulate and become dead code that nobody dares to remove.
- Are flag checks in the right place? (At the entry point / facade level, not scattered through internal code. One check, not twelve.)

---

## A.5 Containers & Supply Chain

**Trigger:** The project builds and ships container images, or has strict supply chain security requirements (SOC2, FedRAMP, enterprise customers who audit your build pipeline).

### Container hygiene

- **Non-root user:** Does the container run as a non-root user? (`USER appuser` in Dockerfile.) Running as root means a container escape gives the attacker root on the host.
- **Minimal base image:** Is the base image minimal? (`python:3.11-slim` not `python:3.11`, `node:20-alpine` not `node:20`.) Smaller images = smaller attack surface = faster pulls.
- **No `:latest` tag:** Are base images pinned to a specific version or digest? (`:latest` is a moving target — your build can break or introduce vulnerabilities without any code change.)
- **Multi-stage builds:** Is the final image free of build tools, compilers, and dev dependencies? (Build in one stage, copy only the artifact to the final stage.)
- **Healthchecks:** Does the Dockerfile or orchestration config define a healthcheck? Without one, the orchestrator can't tell if the container is alive or just not-crashed-yet.

### Dependency supply chain

- **Lockfiles committed:** Are dependency lockfiles (`package-lock.json`, `poetry.lock`, `Gemfile.lock`) committed and used in CI? Without lockfiles, `npm install` can resolve to different versions on different machines.
- **Pinned versions:** Are dependencies pinned to exact versions (not ranges) in production? `"lodash": "^4.0.0"` means any minor version — including one that was compromised yesterday.
- **Vulnerability scanning:** Is there a dependency vulnerability scan in CI? (`npm audit`, `pip-audit`, `trivy`, Snyk, Dependabot.) A scan that runs but nobody looks at is security theater — are results blocking or just advisory?
- **License compliance:** Do new dependencies have licenses compatible with the project's license and distribution model? (GPL in a proprietary SaaS = legal problem. MIT/Apache = generally fine.)

### Build reproducibility

- **Deterministic builds:** Can the same source + lockfile produce the same image? (Avoid `apt-get update` without pinned package versions, `curl | sh` from URLs without checksums.)
- **SBOM (Software Bill of Materials):** For projects with enterprise/compliance customers — can you produce a list of everything in the image? (Tools: `syft`, `docker sbom`, Trivy.)
- **Image scanning:** Is the built image scanned for OS-level vulnerabilities before push? (`trivy image`, `docker scout`, Snyk Container.)
