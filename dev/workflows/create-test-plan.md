# Rule: Creating a Test Plan

## Goal

To guide an AI assistant in creating a comprehensive test plan for any project. The plan covers **both E2E tests (black-box, facade-driven) and unit tests (module-level, logic-driven)**. The plan is authored **before any tests are written**. It serves as the contract for what gets tested. No test code is produced during this step.

## Philosophy

- **Plan first, implement second.** The test plan is a design document. Tests are built from it later, the same way code is built from a PRD.
- **Two layers of testing.** E2E tests prove the system works for the customer (facade-driven, black-box). Unit tests prove each module's logic is correct (module-driven, can be white-box). Both are planned together but serve different purposes.
- **Facade completeness for E2E.** Every element on every public facade is enumerated. Coverage is driven by contract, not by code structure.
- **Module completeness for unit tests.** Every source module with non-trivial logic gets a test file. Coverage is driven by the module's public interface.
- **Tiered by business risk (E2E only).** Tier 1 covers what customers see. Tier 2 covers how components integrate. Tier 3 validates the real world. Unit tests are not tiered — they all run on every PR.
- **Role-based thinking.** The plan is reviewed through four lenses: Tester, Developer, Product Manager, Engineering Manager.

## Process

### Step 1: Discover Facades and Flows

Before writing anything, inventory every public surface:

1. **List all facades.** For each deployable, identify its public API:
   - UI routes/screens (e.g., `/login`, `/search`, `/download/<id>`)
   - API endpoints (e.g., `CoreApi.run_scrape()`, `WebApi.start_search()`)
   - CLI commands (e.g., `python -m adapters.tli.run --config path`)
   - Service interfaces (e.g., `SiteConfigStore.get()`, `SiteConfig.build_search_url()`)

2. **Map business journeys.** Trace end-to-end flows the customer actually performs:
   - Login -> search -> wait for results -> download report
   - Configure sites -> run scrape -> view cache stats
   - Cancel a running job -> dismiss it from the list

3. **Identify external boundaries.** These are where mocks go in Tier 2:
   - Third-party APIs (Firecrawl, Anthropic, Stripe, etc.)
   - OS/system calls (subprocess, file system, signals)
   - Network (HTTP requests, WebSocket connections)

### Step 2: Build the Facade Coverage Ledger

For each facade element, enumerate every behavior that needs testing. This ledger is the source of truth -- a plan is "complete" when every row is covered or explicitly deferred.

Format:

```markdown
| Facade | Behavior | Inputs/State | Expected Output | Tier | Notes |
|--------|----------|-------------|-----------------|------|-------|
| POST /login | Successful login | Valid creds | 302 to home; session set | 1 | |
| POST /login | Failed login | Wrong password | 200 with error flash | 1 | |
| POST /login | Empty fields | No email | 200 with validation error | 1 | |
| GET /download/<id> | PDF ready | Job done, PDF exists | 200, body starts with %PDF | 1 | |
| GET /download/<id> | PDF not ready | Job done, no file | Flash "not ready", redirect | 1 | |
| CoreApi.run_scrape | Credit limit hit | Low credit_limit | CreditLimitExceeded with partial_result | 2 | |
| CLI --config | Bad path | Nonexistent file | Non-zero exit, error message | 1 | |
```

Rules for the ledger:
- Include success paths, failure paths, edge cases, and security checks.
- Every row references a **public** facade element -- never an internal function.
- The "Notes" column captures why this matters (demo-critical, security, regression, etc.).
- If a behavior cannot be tested at a given tier, note why and which tier it belongs to.

### Step 3: Define Tiers

Assign every ledger row to a tier:

| Tier | What it proves | Environment | Speed target | When to run |
|------|---------------|-------------|-------------|-------------|
| **Tier 1** | Our code is correct. Customer-visible flows work. Basic security holds. | No network. Mocked external deps. tmp_path for all I/O. | < 5 seconds total | Every PR |
| **Tier 2** | Our pipeline works end-to-end. Components integrate correctly. Artifacts are produced. | Mocked network at HTTP boundary. Real internal orchestration. | < 30 seconds total | Every PR + nightly |
| **Tier 3** | The system works against the real world. External services respond as expected. | Real APIs, real network, dev/staging budget. | 1-5 minutes | Post-build, scheduled, or manual |

Tier assignment criteria:
- **Tier 1**: Can the customer do the basic thing? Does bad input get rejected? Are protected routes protected?
- **Tier 2**: Does the full flow produce the right result? Do components talk to each other correctly? Are artifacts (PDFs, logs, cache) written correctly?
- **Tier 3**: Does Firecrawl still return the format we expect? Do CDN URLs still resolve? Does WeasyPrint work on the deploy target?

### Step 4: Role-Based Review of the Plan

Before any tests are written, review the plan through four lenses:

**Tester (completeness and observability):**
- Are all facade elements and behaviors listed?
- Do inputs include valid, invalid, edge, and adversarial values?
- Are all outcomes observable without looking at internals?
- Can every test run independently and in parallel?

**Developer (contract clarity and isolation):**
- Do tests assert on contracts, not implementation details?
- Is the mock boundary clear? (What's mocked, what's real?)
- Is data setup isolated per test? No shared global state?
- Would a refactor of internals break any test? (It shouldn't.)

**Product Manager (experience and value):**
- Does Tier 1 prove the promised user experience?
- Are error states graceful? Do users see helpful messages, not tracebacks?
- Are the core calls-to-action verifiably working (search, download, report)?

**Engineering Manager (operational quality):**
- Does Tier 1 complete in seconds?
- Are markers/tags defined for CI selection (e.g., `pytest -m "client and tier1"`)?
- Are deferred items tracked as issues with owners and milestones?
- Is the suite xdist-safe? No flakiness vectors (sleeps, timing, shared state)?

### Step 5: Define Test Constraints

Document these in the plan:

**Isolation:**
- Every test creates its own data (tmp_path, seeded fixtures).
- No test reads from or writes to real repo files.
- Mocks are applied at external boundaries only (HTTP, subprocess, OS).

**Parallelism:**
- No shared global state across tests.
- No ordering assumptions.
- No shared ports, locks, or file paths.

**Performance:**
- Tier 1 budget: < 5 seconds.
- No sleeps. No real network. No heavy operations (no PDF rendering in Tier 1).

**Markers/Tags:**
- Layer markers: `client`, `core`, `adapter`, `cli`
- Tier markers: `tier1`, `tier2`, `tier3`
- CI examples: `pytest -m "client and tier1"`, `pytest -m "tier2"`, `pytest -m "not tier3"`

**Security checks included:**
- Protected routes require auth (redirect to login).
- File/path endpoints reject traversal (`../`) and disallowed extensions.
- Secrets are never asserted on; test creds only.

### Step 6: Identify Deferrals

Any behavior that cannot be tested now gets a deferral entry:

```markdown
## Deferred Items

| Item | Reason | Tier | Tracking |
|------|--------|------|----------|
| Session persistence across deploys | Needs staging environment | 3 | Issue #XX |
| Full-chain integration test | Post-MVP scope | 2 | Issue #YY |
```

---

## Part 2: Unit Test Plan

Unit tests are planned alongside E2E tests but follow different rules. E2E tests prove the system works for the customer. Unit tests prove each module's logic is correct.

### How Unit Tests Differ from E2E

| | E2E Tests | Unit Tests |
|---|---|---|
| **Boundary** | Public facades only | One module/class/function |
| **Imports** | Facade module only | The module under test + its direct deps |
| **Mocks** | External services (HTTP, subprocess) | Collaborators (other internal modules) |
| **What breaks them** | Behavior change visible to users | Any logic change in that module |
| **Black-box?** | Always | Usually, but white-box is acceptable |
| **Tiered?** | Yes (Tier 1/2/3) | No — all unit tests run on every PR |

### Step 7: Inventory Modules

List every source module that contains non-trivial logic. Exclude:
- Pure config/constants files
- `__init__.py` files that only re-export
- Generated code

For each module, identify its **public interface** — the functions and methods that other modules call. This is what gets tested.

Format:

```markdown
| Module | Public Interface | Priority | Notes |
|--------|-----------------|----------|-------|
| scraper.py | scrape_all_sites(), _is_junk_page(), _apply_markers() | Critical | Pipeline orchestrator |
| markdown_parser.py | parse_product_markdown(), parse_listing_markdown() | Critical | Data extraction |
| cache_manager.py | lookup(), store(), verify_images(), get_stats() | Critical | Cache correctness |
| credit_tracker.py | record(), check_limit(), get_summary() | High | Thread-safety matters |
| image_downloader.py | download_product_images(), _is_product_image() | High | Quality filtering |
| intent_filter.py | filter_by_intent() | Medium | Fail-open by design |
| site_config_loader.py | SiteConfig methods, SiteConfigStore methods | Medium | Data-driven config |
| post_run_validator.py | validate_run() | Medium | Never crashes |
```

**Priority** determines authoring order, not runtime order. All unit tests run always.

- **Critical:** Modules on the main execution path. If broken, nothing works. Write tests first.
- **High:** Modules that handle important concerns (caching, credits, image quality). Write tests second.
- **Medium:** Supporting modules. Write tests third.

### Step 8: Define Unit Test Scenarios

For each module, enumerate test scenarios. Unlike E2E, unit tests CAN test internal functions directly.

**What to test for each function:**

1. **Happy path** — normal input produces expected output.
2. **Empty/null input** — empty list, empty string, None, zero.
3. **Boundary values** — min, max, exactly-at-threshold.
4. **Error paths** — invalid input, exceptions from collaborators.
5. **Edge cases** — unicode, very large input, concurrent access, duplicate data.

Format:

```markdown
### cache_manager.py

| Function | Scenario | Input | Expected | Notes |
|----------|----------|-------|----------|-------|
| lookup() | Cache hit | Known URL | Returns CacheEntry | |
| lookup() | Cache miss | Unknown URL | Returns None | |
| lookup() | Stale entry | Old date_scraped | Returns None (re-scrape) | |
| store() | New product | Product + paths | Stored, retrievable | |
| store() | Update existing | Same URL, new data | Entry updated | |
| verify_images() | All present | Paths exist on disk | Empty list (no missing) | |
| verify_images() | Some missing | 1 of 3 deleted | Returns missing paths | |
| get_stats() | Empty cache | No entries | {total: 0, stale: 0, ...} | |
```

### Step 9: Define Unit Test Principles

Document these in the plan:

**One test file per source file:**
- `scraper.py` → `test_scraper.py`
- Co-located with source, OR in a parallel `tests/` directory. Pick one per project, be consistent.

**Test the module's public interface:**
- Functions and methods that other modules call.
- Internal helpers (single underscore prefix) are fair game IF they contain complex logic worth isolating (e.g., `_is_junk_page`, `_apply_markers`).
- Truly trivial helpers (one-liners, simple wrappers) don't need their own tests.

**Mock collaborators, not the module under test:**
- If `scraper.py` calls `cache_manager.lookup()`, the scraper test mocks the cache manager.
- Never mock parts of the module you're testing — that defeats the purpose.
- Mock external libraries at the call boundary (e.g., `requests.Session.get`, `anthropic.Anthropic`).

**Assert on behavior, not implementation:**
- Assert on what the function returns or what side effects it produces.
- Don't assert that an internal helper was called N times (unless the call count IS the documented behavior, like "retries 3 times").

**Every test is independent:**
- Uses `tmp_path` for file I/O.
- Mocks all collaborators.
- No shared state between tests.
- No ordering assumptions.

**No tiers — all unit tests run on every PR:**
- Unit tests are fast by definition (milliseconds each, no network, no heavy I/O).
- No reason to defer any to nightly or weekly.
- If a unit test is slow, that's a bug in the test, not a reason to tier it.

**Thread-safety tests for shared-state modules:**
- Modules accessed by multiple threads (cache, credit tracker, API logger) need concurrent access tests.
- Use `concurrent.futures.ThreadPoolExecutor` to simulate parallel access.
- Assert no data corruption, no lost increments, no deadlocks.

**Fail-open modules get fail-open tests:**
- If a module is designed to fail open (intent filter: API failure → return all products), test that explicitly.
- Mock the external dependency to raise an exception, assert the module returns the safe default.

---

## Output

- **Format:** Markdown (`.md`)
- **Location:** `{deployable}/docs/e2e-tests.md` for E2E plans; unit test scenarios can be in the same file or in `{deployable}/docs/unit-tests.md`
- **Structure:**
  1. Introduction (what this plan covers)
  2. **E2E Plan:**
     a. Facade Coverage Ledger (the full table)
     b. Tier 1 tests (grouped by facade)
     c. Tier 2 tests (grouped by facade)
     d. Tier 3 tests (grouped by facade)
  3. **Unit Test Plan:**
     a. Module inventory with priorities
     b. Test scenarios per module
  4. Deferred items
  5. CI mapping (which tests run when)

## What This Document Does NOT Do

- It does not produce test code. Tests are implemented in a separate step.
- It does not prescribe test frameworks or languages. Those are project decisions.

## Interaction Model

1. The AI reads existing project docs (CLAUDE.md, architecture docs, API references, PRDs).
2. The AI asks clarifying questions about facades, flows, and priorities.
3. The AI produces the Facade Coverage Ledger (E2E) and Module Inventory (unit tests).
4. The user confirms or adjusts. The AI then produces the full plan.
5. The plan is saved. **No tests are written yet.**
6. Tests are implemented later using the `process-task-list.md` workflow or direct implementation from the plan.

## Final Instructions

1. Do NOT write test code during this step. This produces a plan only.
2. The plan has two parts: E2E (facade-driven, black-box) and Unit (module-driven, can be white-box). Both are required.
3. For E2E: every scenario references a public facade element. No internal modules.
4. For unit tests: every scenario references a source module's public interface. Internal helpers with complex logic are fair game.
5. Ask clarifying questions about which facades exist and which modules contain critical logic.
6. The Facade Coverage Ledger + Module Inventory together define "complete." If both are complete, the plan is complete.
