# Code Review Workflow

A structured review process for every PR before merge. Covers correctness, portability, cost safety, and customer impact. Language and framework agnostic.

**When to use:** Every PR to main. No exceptions. The reviewer follows this checklist. The author does not merge their own PR.

**Parallelization:** Phases 0–5 are independent. Run as many as possible in parallel using separate agents — one agent per phase or group of phases. A single agent collates all findings into one unified review at the end, organized by phase, with severity (blocker / warning / nit) on each item.

---

## Phase 0: Gates

Binary pass/fail. If these fail, send back immediately — don't waste time reviewing code that can't merge.

### 0.1 Linting

- Does the code pass the project's linter without errors? (ESLint, flake8, ruff, pylint — whatever the project uses)
- If the project doesn't have a linter configured, flag that as a blocker — set one up before reviewing code
- No linting = no merge. Non-negotiable.

### 0.2 Reuse & duplication

Before writing new code, the author should have searched for existing implementations. **New code is a last resort, not a first instinct.**

**Did the author look first?**
- Is there already a function/module that does this? (Search the codebase for similar names, similar logic)
- If existing code was close but not quite right, was it extended — or was a second version written from scratch?

**Within the changed files:**
- Are there two functions that do nearly the same thing? (e.g., `_img_tag` and `_img_tag_with_class`)
- Are there copy-pasted blocks with minor variations?
- Is the same logic repeated in a loop that could be extracted?

**Across the codebase:**
- Does the same functionality now exist in two different files? (e.g., path resolution in `cache_manager.py` AND inline in `report_generator.py`)
- Is there a utility module where this logic belongs instead?
- Search for the key function/concept name across all files — if it appears in 3+ places, it needs a single source
- If a value is used in multiple places (store names, API keys, default configs), is there one canonical source?

---

## Phase 1: Does it work correctly?

### 1.1 Trace the full code path

Don't review the diff in isolation. For every changed function:
- Start from the caller and trace through to the final side effect (file write, API call, UI render)
- Identify every consumer of the changed code — not just the direct caller
- If the change modifies a data format (schema, path structure, config shape), find ALL readers of that data
- If the change modifies an API response or error shape, verify every client/consumer handles the new shape. A changed response that one caller handles and two others ignore is a silent breakage.
- If the change adds or modifies an error response, check that it follows the project's existing error shape (status codes, error object structure, field names). Inconsistent error formats across endpoints are a maintenance trap.

**The lesson:** A cache that stores relative paths is useless if 3 consumers read the cache directly and assume absolute paths. One change, multiple breakpoints.

### 1.2 Test plan compliance

Before looking at test code, check the test plan. The test plan is the contract — the tests are just the implementation of it. Functionality adds to itself; the plan should already cover the new behavior.

**Does a test plan exist?**
- Look for the project's test plan (typically `{deployable}/docs/e2e-tests.md` or similar). Check the project's CLAUDE.md for the location.
- If there's no test plan, flag that as a blocker. Tests without a plan are ad hoc — they cover whatever the author thought of, not what the system needs. The plan should be created first, following the tiered structure defined in `~/.claude/workflows/create-test-plan.md`.

**Is the plan complete for this change?**
- Does the Facade Coverage Ledger have rows for the new or changed behavior?
- Are both success and failure paths covered in the ledger?
- Are the new rows assigned to the correct tier? (Tier 1: no network, <5s, every PR. Tier 2: mocked network, <30s. Tier 3: real services, manual/scheduled.)
- If the change adds a new facade method, route, or CLI command, the ledger must have rows for it — no exceptions.

**Do the tests match the plan?**
- Every ledger row for the changed behavior should have a corresponding test. A ledger row without a test is a coverage gap.
- Any new test without a corresponding ledger row is an orphan — it may be fine, but verify it's needed and add it to the plan.

### 1.3 Test coverage and quality

If the PR description says "X now works" or "Y is fixed":
- Check that the code actually does what the description claims
- Look for the test that proves it
- If there's no test, that's a blocker — not a nice-to-have

**Where do tests live?** Check the project's CLAUDE.md for test conventions, then look for existing test files (co-located `test_*.py` next to source, or `tests/` directory). Follow whichever pattern the project already uses.

**Happy path first.** The first test for any feature should prove the feature works as a real user would use it — not edge cases, not validation, not error handling. If the happy path isn't tested, everything else is theater. (Example: a phone number field's first test is "valid number gets saved and retrieved" — not "reject letters in phone field.")

**Self-contained tests.** Every test must create its own data, run its assertions, and clean up after itself. No test depends on another test having run first. This is non-negotiable for E2E tests — they must have their own setup and teardown. Interdependent tests block parallelism, break randomly, and become impossible to debug at scale.

**Test quality checks:**
- Do tests assert the *right thing* — or just run without crashing? A test that calls the function but doesn't check the output gives false confidence.
- Do tests mimic real user behavior? Users use the system to accomplish something — test that flow. Adversarial/negative tests come second, and only where explicit validation exists.
- If the PR fixes a bug, is there a regression test that would have caught it?
- Are tests deterministic? No time-dependent assertions, no network calls, no reliance on execution order.

**The lesson:** "Cache index alone will save credits" was a claim, not a fact. The code showed `verify_images()` required files on disk. Reading 10 more lines would have caught it.

### 1.4 Check edge cases for the specific change

- What happens when the input is empty? (empty list, empty string, missing field)
- What happens when the input is unexpected? (null, wrong type, extra fields)
- What happens when the external dependency fails? (API timeout, file not found, network error)

### 1.5 Security basics

- **Input validation at system boundaries:** Is user input, API input, or file input validated/sanitized before use? (SQL injection, command injection, path traversal, XSS)
- **Auth/authz:** If the change touches a route or endpoint, does it check that the user is authenticated AND authorized for that specific action? Not just logged in — permitted.
- **Sensitive data exposure:** Are passwords, tokens, or PII written to logs, error messages, or client-visible responses?
- **Trust boundaries:** Does the code trust data from an external source (API response, user upload, webhook) without validating it?

### 1.6 Error propagation

Errors must propagate to the top with context. Hidden errors are bugs that haven't surfaced yet — and they surface at the worst possible time, in the hardest place to debug.

- **No swallowed errors.** Every `catch`/`except` block must either (a) handle the error completely with a clear recovery path, or (b) re-raise with added context. `except: pass` (Python: catches every exception including KeyboardInterrupt and does nothing — the operation failed but the program continues as if it succeeded), bare `catch (e) { }` (JavaScript/Java: empty catch block, error silently discarded), or "log and continue" is a blocker unless the operation is explicitly optional and documented as such.
- **Context at every layer.** When re-raising, wrap with what the system was trying to do: `raise RuntimeError(f"Failed to load site config for {domain}") from e` — not just `raise`. A stack trace tells you *where* it broke. Context tells you *what the system was trying to accomplish*.
- **No error code telephone.** If a function catches an error and converts it to a return code (False, None, -1, empty string), trace the full chain. By the time a return code passes through 3 functions, all context is gone. Prefer exceptions/errors that carry the original cause.
- **Verify propagation to the top.** For every new error path: trace it from the throw site to the final handler (UI, CLI, API response). Does the user/caller see a meaningful message? Or does it vanish into a log file nobody reads?

### 1.7 Concurrency

Only applies when the change touches shared state, threads, async, or multiprocessing. Skip if the change is single-threaded with no shared mutable state.

- **Shared mutable state:** Is any variable, file, or resource written by one thread/process and read by another? If yes, is there a lock, atomic operation, or thread-safe data structure protecting it?
- **Race conditions:** Could two concurrent executions of this code path produce corrupted results? (Classic: read-modify-write without a lock, check-then-act without holding the lock through both steps.)
- **Deadlocks:** If multiple locks are acquired, is the order consistent everywhere? Two code paths acquiring lock A then B, and lock B then A, will deadlock.
- **Resource cleanup:** Are threads, connections, file handles, and subprocess handles properly closed/joined on both success and failure paths? A leaked thread or connection under error conditions is a slow resource exhaustion bug.

### 1.8 Data integrity

Only applies when the change touches database queries, schema changes, or persistent storage. Skip if the change doesn't interact with a database.

- **Transaction boundaries:** Are related writes wrapped in a transaction? A failure halfway through should not leave the database in an inconsistent state.
- **Missing constraints:** If the change adds a new column or table, are NOT NULL, UNIQUE, FOREIGN KEY, and CHECK constraints defined? Missing constraints let bad data in — and bad data is harder to fix than a constraint violation.
- **Missing indexes:** If the change adds a query with a WHERE or JOIN on a column, is that column indexed? A missing index on a small dataset works fine and then falls off a cliff at scale.
- **N+1 queries:** Does the code query inside a loop? (Fetch a list, then for each item fetch related data = N+1 queries.) Use joins or batch queries.
- **Schema migration safety:** If the change modifies a schema, can it be applied without downtime? Adding a column is safe. Renaming or dropping a column while old code is still running is not.
- **Idempotency for writes:** If the same write operation is executed twice (retry, duplicate request), does it produce the correct result? Or does it create duplicate records / double-charge / corrupt state?

---

## Phase 2: Does it work everywhere?

### 2.1 Environment portability

Every path, URL, and config value must work across environments (local dev, CI, staging, production).

- **Paths:** Are they relative or absolute? If absolute, will they work on a different machine/container? Search for hardcoded paths.
- **Config:** Are environment-specific values driven by env vars or config, not hardcoded?
- **Secrets:** Are any API keys, passwords, or tokens in the diff? In any log output? In any error message?

**The lesson:** Cache paths stored as `/Users/bijal/Desktop/code/...` break on Railway. Paths stored as `images/domain/product/img.jpg` (relative to a configurable base) work everywhere.

### 2.2 Dependency completeness

If the change adds a new library or feature:
- Is the Python/Node dependency in requirements.txt / package.json?
- Does it need system-level libraries? (C libs, fonts, etc.)
- Are those system libraries in the Dockerfile / nixpacks.toml / CI workflow?
- **Is there a build-time check that catches missing deps before runtime?**

**The lesson:** WeasyPrint needs 9 system C libraries. We found them one by one across 3 production deploys. A Dockerfile `RUN python -c "from weasyprint import HTML"` catches all of them at build time.

### 2.3 Time handling

Only applies when the change touches dates, times, durations, or scheduling. Skip if the change doesn't deal with time.

- **Storage:** Are timestamps stored in UTC? Storing in local time creates bugs that only appear when the server moves, DST changes, or users cross timezones.
- **Display:** Is timezone conversion applied only at the display boundary (UI, reports, logs shown to users) — not in business logic or storage?
- **Durations:** Are elapsed-time measurements using monotonic clocks (e.g., `time.monotonic()`, `performance.now()`), not wall-clock time? Wall-clock can jump backwards (NTP sync, DST) and produce negative durations.
- **DST awareness:** If the code schedules something "daily at 2am" or calculates "24 hours from now," does it handle the DST transition where 2am doesn't exist or happens twice?

---

## Phase 3: Does it cost what we expect?

### 3.1 External API cost

If the change involves external API calls (Firecrawl, Anthropic, Stripe, etc.):
- Is every API call going through a centralized wrapper? (No direct `requests.post` scattered around)
- Does the wrapper count costs from the provider's response, not from assumptions?
- Are retries bounded? What's the worst-case cost of a single user action?
- Are failed calls (timeouts, errors) correctly counted — do they cost or not?
- **Money/precision:** If the code calculates costs, credits, or monetary amounts, is it using decimal/fixed-precision types — not floats? Float arithmetic drifts: `0.1 + 0.2 = 0.30000000000000004`. Over thousands of transactions, that drift accumulates.
- **Rounding rules:** If amounts are rounded for display, is the rounding rule explicit and consistent? (Round half-up? Banker's rounding? Truncate?) Different rounding in different places = mismatched totals the customer sees.

**The lesson:** We assumed 408 timeouts cost 1 credit (they cost 0). We assumed `/search` costs 1 credit (it costs 2). We assumed cache hits save credits (they didn't because images were missing). Every assumption about cost must be verified against the actual provider.

### 3.2 Unnecessary calls

Every external API call costs money. Before approving, check:
- **Could this call be eliminated?** Is the data already available — in cache, in a prior response, in another variable? Don't re-fetch what you already have.
- **Could multiple calls be batched?** If the code loops over items calling the API once per item, does the API support batch/bulk endpoints instead?
- **Is there an O(n²) or worse pattern involving external calls?** A nested loop where the inner loop hits an API means n² calls. If the outer list grows, costs grow quadratically. Anything worse than O(n) in external calls needs justification.
- **Is the same URL/query being called more than once in a single run?** Search for the endpoint or wrapper function — if it's called from multiple code paths with the same arguments, that's wasted credits.

### 3.3 Credit/resource safety

- Is there a kill switch that stops before exceeding a budget?
- Does the kill switch use accurate counts (from the provider, not internal estimates)?
- What happens when the kill switch triggers — does the user see a clear message?

---

## Phase 4: What does the customer see?

### 4.1 Number accuracy

Every number shown to the customer (product counts, store counts, progress indicators) must come from a single source of truth, counted at the moment of confirmation.

- If the UI says "46 products" and the PDF says "46 products", they must come from the same counter
- If a count increments, it should increment at the exact moment the thing is confirmed (image downloaded, payment processed, etc.) — not before, not after

**The lesson:** JSONL logged 1,056 "products" (API calls). PDF showed 219 (actual products with images). The UI showed JSONL numbers. Customer sees mismatched counts = lost trust immediately.

### 4.2 Error messages

- Does the customer see internal implementation details? (API provider names, error codes, file paths)
- Are error messages actionable from the customer's perspective?
- Do transient errors (API timeout, slow network) look like permanent failures?

**The lesson:** "Credit limit reached" — was it our internal limit or Firecrawl's billing? The customer shouldn't know or care about Firecrawl. Show "Search credit limit reached" — that's the product's limit, not a third-party billing issue.

### 4.3 Instant feedback

- Does every user action produce immediate visual feedback?
- If an operation takes time, is there a loading state?
- Can the user accidentally trigger the same action twice? (double-click, double-submit)

---

## Phase 5: Code quality

Is the code clean, readable, and maintainable? These require reviewer judgment — not binary pass/fail like Phase 0.

### 5.1 Facade compliance

- Do external consumers (adapters, UI, CLI) only import from the facade?
- If the change adds a new capability, is it exposed through the facade?
- Are there any new direct imports of internal modules from outside the boundary?

### 5.2 Readability

- Can you understand what a function does by reading its name and first 3 lines?
- Does the code flow top-to-bottom in the order a reader would expect? (setup → main logic → cleanup, not interleaved)
- Are variable names descriptive? (`domain` not `d`, `product_count` not `cnt`)
- Would a new team member understand this code without asking the author?

### 5.3 Code smells

- **Large functions:** Any function over ~50 lines should be justified. Can it be broken down?
- **Large files:** Any file over ~500 lines is a red flag. Does it have multiple responsibilities that should be separated?
- **Deep nesting:** More than 3 levels of if/for/try nesting is hard to follow. Flatten with early returns or extract helpers.
- **Magic constants:** Are there raw numbers or strings in the code without explanation? (`if len(images) > 40` — why 40? It should be a named constant with a comment: `JUNK_IMAGE_COUNT_THRESHOLD = 40  # listing pages typically have 40+ images`)
- **Boolean parameters:** `generate_hero(use_scattered=True)` is fine. `process(True, False, True)` is not — use named parameters or config objects.
- **Redundant state:** State that duplicates existing state, cached values that could be derived, observers/effects that could be direct calls.
- **Parameter sprawl:** Adding new parameters to a function instead of generalizing or restructuring existing ones.
- **Leaky abstractions:** Exposing internal details that should be encapsulated, or breaking existing abstraction boundaries.
- **Stringly-typed code:** Using raw strings where constants or enums already exist in the codebase.

### 5.4 Dead code

- Does the change leave behind dead code? (unused functions, commented-out blocks, stale imports, unreachable branches)
- Are there backwards-compatibility shims that are no longer needed? (renamed variables kept around, re-exports of moved code)
- Were any functions/classes made obsolete by this change but not removed?

### 5.5 Documentation accuracy

- Do docs still match the code? (File paths, architecture descriptions, config examples, API signatures)
- If the change modifies behavior, are the relevant docs updated in the same PR?
- Are comments in the code still accurate, or do they describe the old behavior?

### 5.6 Efficiency

- **Unnecessary work:** Redundant computations, repeated file reads, duplicate network/API calls, N+1 patterns.
- **Missed concurrency:** Independent operations run sequentially when they could run in parallel.
- **Hot-path bloat:** New blocking work added to startup or per-request/per-render hot paths.
- **Unnecessary existence checks:** Pre-checking file/resource existence before operating (TOCTOU anti-pattern) — operate directly and handle the error.
- **Memory:** Unbounded data structures, missing cleanup, event listener leaks.
- **Overly broad operations:** Reading entire files when only a portion is needed, loading all items when filtering for one.

### 5.7 Observability

- **Log levels:** Are log levels appropriate? Errors for things that need attention, warnings for degraded-but-functioning, info for key business events, debug for troubleshooting detail. Not everything is an error — and not everything is info.
- **Structured context:** Do log messages include enough context to diagnose the issue without reproducing it? (Which user, which request, which record.) "Failed to process" is useless. "Failed to download image for product X from store Y: 403 Forbidden" is actionable.
- **No sensitive data in logs:** Are passwords, tokens, PII, or API keys being logged? Check log statements, error messages, and stack traces that might include function arguments.
- **Key operations logged:** Are the important business events (job started, payment processed, scrape completed, error recovered) logged at info level so you can reconstruct what happened from logs alone?
