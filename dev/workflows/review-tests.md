# Rule: Reviewing Test Plans and Test Implementations

## Goal

To guide an AI assistant (or human reviewer) in systematically reviewing both test plans and implemented tests. The review ensures black-box discipline, facade completeness, isolation, and operational quality. This workflow is used **after** a test plan is created (via `create-test-plan.md`) and **after** tests are implemented from that plan.

## When to Use

- After a test plan is written, before approving it for implementation.
- After tests are implemented, before merging to main.
- During periodic test suite health checks.
- When a code review surfaces test quality concerns.

## Two-Phase Review

### Phase 1: Review the Test Plan

Run before any test code is written. The plan is the contract.

### Phase 2: Review the Test Implementation

Run after tests are written. Validates that the implementation matches the plan and follows all standards.

---

## Phase 1: Test Plan Review

### 1.1 Facade Coverage Audit

**Check:** Does the Facade Coverage Ledger account for every public surface?

Process:
1. List every public facade in the project (UI routes, API methods, CLI commands, service interfaces).
2. For each facade element, verify the ledger has rows for:
   - Success path (happy path)
   - Failure/error path (bad input, missing data, unauthorized)
   - Edge cases (empty lists, boundary values, concurrent access)
   - Security checks where applicable (auth, traversal, injection)
3. Flag any facade element with zero coverage rows.

**Output:** A gap list -- facade elements missing from the ledger.

### 1.2 Tier Assignment Review

**Check:** Are tiers assigned by business risk, not by implementation convenience?

| Question | Expected Answer |
|----------|----------------|
| Can the customer complete the core journey in Tier 1? | Yes |
| Are error states tested at the same tier as success states? | Yes |
| Is Tier 3 reserved for things that genuinely need real external services? | Yes |
| Are there Tier 2 tests that could be Tier 1 (no network needed)? | Move them up |
| Are there Tier 1 tests that require mocked network? | Move them to Tier 2 |

### 1.3 Black-Box Discipline

**Check:** Does every test scenario reference only public facades?

Red flags:
- Test descriptions mention internal function names (e.g., "_parse_indices", "_read_progress")
- Test inputs include internal data formats (e.g., "synthesize JSONL with operation=scrape_product")
- Expected outputs reference private data structures (e.g., "store dict has search_done=True")

**Rule:** If a test scenario cannot be described using only the facade's documented inputs and outputs, it belongs in a unit test plan, not the E2E plan.

### 1.4 Role-Based Pass

Run the four-role checklist from `create-test-plan.md` Step 4:

**Tester checklist:**
- [ ] All public facades and behaviors listed?
- [ ] Inputs include valid, invalid, edge, and adversarial values?
- [ ] All outcomes observable without looking at internals?
- [ ] Tests can run independently and in parallel?

**Developer checklist:**
- [ ] Tests assert on contracts, not implementation details?
- [ ] No internal modules referenced in test scenarios?
- [ ] Data setup is isolated and local per test?
- [ ] Mock boundaries are clearly defined?

**Product Manager checklist:**
- [ ] Tier 1 proves the promised user experience end-to-end?
- [ ] Error states are graceful (messages, not tracebacks)?
- [ ] Core user actions are verifiably working?

**Engineering Manager checklist:**
- [ ] Tier 1 completes in seconds?
- [ ] Markers/tags allow targeted CI runs?
- [ ] Flakiness guards present (no sleeps, deterministic I/O)?
- [ ] Deferred items tracked as issues with owners?

### 1.5 Plan Review Output

Produce a summary:

```markdown
## Plan Review Summary

### Facade Coverage
- X facade elements covered
- Y gaps identified (list them)

### Tier Distribution
- Tier 1: N scenarios
- Tier 2: N scenarios
- Tier 3: N scenarios
- Deferred: N items

### Issues Found
1. [Issue description] — [Action required]

### Verdict
- [ ] Approved for implementation
- [ ] Approved with changes (list changes)
- [ ] Needs revision (list blockers)
```

---

## Phase 2: Test Implementation Review

### 2.1 Plan-to-Implementation Mapping

**Check:** Does every row in the Facade Coverage Ledger have a corresponding test?

Process:
1. Open the test plan (e2e-tests.md).
2. For each test scenario in the plan, find the implementing test function.
3. Flag any plan scenario without a test (missing coverage).
4. Flag any test without a plan scenario (unplanned test -- may be fine, but verify it's needed).

### 2.2 Black-Box Compliance Audit

**Check:** Do implemented tests only go through public facades?

**Imports audit** -- For every E2E test file, check imports:

Allowed:
- Facade modules (e.g., `from core.api import CoreApi, ScrapeResult`)
- Test framework (`pytest`, `unittest.mock`)
- Standard library (`json`, `pathlib`, `os`)
- External boundary mocks (`requests`, `subprocess`)

Forbidden in E2E tests:
- Internal modules (`from core.scraper import Scraper`)
- Internal functions (`from core.scraper import _is_junk_page`)
- Internal classes (`from core.image_downloader import ImageDownloader`)
- Private methods called directly (`api._load_jobs()`, `api._load_adapter_defaults()`)

**Assertion audit** -- For every assertion, check:
- Does it assert on a documented return value (status code, response shape, file existence)?
- Or does it assert on an internal data structure (store dict keys, internal operation names)?

Red flags:
```python
# BAD: Asserting on internal JSONL operation names
assert result["progress"]["stores"]["site.com"]["search_done"] is True

# GOOD: Asserting on documented ProgressInfo shape
assert "stores_done" in result["progress"]
assert result["status"] == "done"

# BAD: Importing and calling internal methods
from core.scraper import _apply_markers
result = _apply_markers(markdown, markers)

# GOOD: Driving through the facade
result = api.run_scrape(config)
# Assert on ScrapeResult fields

# BAD: Patching internal classes
patch.object(ImageDownloader, "download_product_images", ...)

# GOOD: Patching at external boundary
patch("requests.Session.post", ...)
patch("requests.Session.get", ...)
```

### 2.3 Isolation Audit

**Check:** Can every test run independently, in any order, in parallel?

For each test file:
- [ ] Uses `tmp_path` or equivalent for all file I/O?
- [ ] Seeds its own data (users, jobs, config) -- does not read repo files?
- [ ] Does not modify shared state (global variables, environment without monkeypatch)?
- [ ] Does not depend on another test having run first?
- [ ] Cleans up after itself (or uses fixtures that do)?

Red flags:
- Tests that write to real `users.json`, `jobs.json`, or `cache/`
- Tests that call `password_change` and then "restore" the original
- Tests that rely on a job created by a previous test
- Tests that share a module-scoped fixture that mutates state

### 2.4 Performance Audit

**Check:** Does the suite meet its runtime budget?

| Tier | Budget | Actual | Pass? |
|------|--------|--------|-------|
| Tier 1 | < 5s | ___s | |
| Tier 2 | < 30s | ___s | |
| Tier 1+2 | < 35s | ___s | |

Check for:
- [ ] No `time.sleep()` calls in tests (use mocked time)
- [ ] No real network calls in Tier 1 or Tier 2
- [ ] No heavy operations (PDF rendering, image processing) in Tier 1
- [ ] Sleeps in source code are patched out in test fixtures

### 2.5 Marker/Tag Audit

**Check:** Can CI select the right tests?

Verify these commands work and return the expected counts:

```bash
pytest -m "client and tier1" --co -q    # Should list client Tier 1 tests
pytest -m "core and tier1" --co -q      # Should list core Tier 1 tests
pytest -m "tier2" --co -q               # Should list all Tier 2 tests
pytest -m "not tier3" --co -q           # Should list everything except live tests
```

For each test function, verify it has both:
- A layer marker (`client`, `core`, `adapter`)
- A tier marker (`tier1`, `tier2`, `tier3`)

### 2.6 Security Check

For UI/API facades:
- [ ] All protected routes tested with and without auth?
- [ ] Path traversal rejected on file-serving endpoints?
- [ ] Disallowed file extensions rejected?
- [ ] Test credentials used (never real secrets)?
- [ ] No secrets appear in test output or assertions?

### 2.7 Deferral Tracking

**Check:** Are deferred items from the plan tracked?

- [ ] Each deferred item has a GitHub issue (or equivalent)?
- [ ] Issues have labels, acceptance criteria, and milestone?
- [ ] The test plan links to the issues?

---

## Phase 3: Unit Test Review

Unit tests follow different rules than E2E tests. Review them separately.

### 3.1 Module Coverage Audit

**Check:** Does every source module with non-trivial logic have a corresponding test file?

Process:
1. List every source file in the project (excluding `__init__.py`, pure config, generated code).
2. For each source file, check if a test file exists (e.g., `scraper.py` → `test_scraper.py`).
3. Flag modules without test files, ordered by priority (critical path first).

**Output:** A coverage table:

```markdown
| Module | Test File | Status |
|--------|-----------|--------|
| scraper.py | test_scraper.py | Covered |
| cache_manager.py | test_cache_manager.py | Covered |
| report_generator.py | (none) | GAP — critical |
```

### 3.2 Mock Discipline

**Check:** Are collaborators mocked correctly?

Allowed:
```python
# GOOD: Mock a collaborator the module calls
with patch.object(cache_manager, "lookup", return_value=None):
    result = scraper.scrape_single_site(...)

# GOOD: Mock an external library at the call boundary
with patch("requests.Session.post", side_effect=fake_response):
    result = scraper._firecrawl_post(...)
```

Forbidden:
```python
# BAD: Mocking the module under test — defeats the purpose
with patch.object(scraper, "_parse_results", return_value=[]):
    result = scraper.scrape_single_site(...)

# BAD: Mocking so deeply that no real code runs
with patch.object(scraper, "_search_products"), \
     patch.object(scraper, "_scrape_product_pages"), \
     patch.object(scraper, "_download_images"):
    result = scraper.scrape_all_sites(...)  # Nothing real happened
```

Rule of thumb: if your test has more `patch` decorators than assertions, you're mocking too much.

### 3.3 Behavior vs Implementation

**Check:** Do assertions test what the function does, not how it does it?

Red flags:
```python
# BAD: Asserting on call count (implementation detail)
assert mock_helper.call_count == 3

# BAD: Asserting on internal state
assert tracker._total_used == 5  # Use the public getter instead

# GOOD: Asserting on return value
assert tracker.total_used == 5

# GOOD: Asserting on observable side effect
assert Path(cache_dir / "cache_index.json").exists()
```

Exception: Call count assertions ARE valid when the count is the documented behavior (e.g., "retries up to 3 times", "circuit breaker trips after 3 consecutive failures").

### 3.4 Edge Case Completeness

**Check:** For each tested function, are these input classes covered?

- [ ] Happy path (normal input → expected output)
- [ ] Empty input (empty string, empty list, 0, None)
- [ ] Boundary values (exactly at threshold, one above, one below)
- [ ] Error path (invalid input, collaborator raises exception)
- [ ] Concurrent access (for thread-shared modules only)

Not every function needs every category. Use judgment — a simple lookup function needs happy path + miss + stale. A complex parser needs all five.

### 3.5 Unit Test Independence

Same standards as E2E:
- [ ] Uses `tmp_path` for file I/O?
- [ ] Mocks collaborators instead of relying on real instances?
- [ ] No shared state between test functions?
- [ ] No ordering assumptions?

Additional unit test concern:
- [ ] No test modifies module-level globals that persist across tests?
- [ ] Monkeypatch is function-scoped (not session-scoped) for env vars?

### 3.6 Unit Test Performance

Unit tests should be fast:
- [ ] Each test completes in milliseconds (no sleeps, no real I/O)
- [ ] Total unit test suite: < 5 seconds
- [ ] If a unit test is slow (>100ms), investigate — it's likely doing real I/O or not mocking a collaborator

---

## Review Output Template

```markdown
## Test Review Summary

### E2E Coverage
- Plan scenarios: X
- Implemented E2E tests: Y
- Coverage: Y/X (Z%)
- Gaps: [list any missing scenarios]

### E2E Black-Box Compliance
- E2E files audited: N
- Internal imports found: [list violations or "None"]
- Internal assertions found: [list violations or "None"]

### Unit Test Coverage
- Source modules: X
- Modules with test files: Y
- Coverage: Y/X (Z%)
- Gaps: [list untested modules by priority]

### Unit Test Quality
- Mock discipline violations: [list or "None"]
- Implementation-coupled assertions: [list or "None"]
- Missing edge case categories: [list or "None"]

### Isolation
- Files with isolation issues: [list or "None"]
- Shared state risks: [list or "None"]

### Performance
- Unit tests: Xs (budget: <5s) — PASS/FAIL
- E2E Tier 1+2: Xs (budget: <35s) — PASS/FAIL
- Full suite (excl. Tier 3): Xs — PASS/FAIL

### Markers
- All tests tagged: YES/NO
- CI selection verified: YES/NO

### Security
- Auth coverage: YES/NO
- Traversal tests: YES/NO
- Extension allowlist tests: YES/NO

### Deferrals
- Tracked items: N
- Untracked gaps: [list or "None"]

### Verdict
- [ ] Approved to merge
- [ ] Approved with fixes (list fixes)
- [ ] Needs revision (list blockers)

### Action Items
1. [File] — [What to fix] — [Priority]
```

---

## Principles to Enforce

1. **Plan before code.** If there's no test plan, don't review test code — create the plan first.
2. **Two layers, different rules.** E2E tests are black-box (facade only). Unit tests can be white-box (test internals directly). Don't mix them — an E2E test importing `_is_junk_page` belongs in a unit test file.
3. **Facade is the E2E boundary.** E2E tests that import internal modules are wrong, period. Move internal-testing logic to unit test files.
4. **Mock collaborators, not the module under test.** In unit tests, mock what the module calls, not the module itself. In E2E tests, mock at external boundaries only (HTTP, subprocess, OS).
5. **Every test is a standalone story.** If you can't understand what a test does from its name and assertions, it's too coupled.
6. **The ledger + module inventory are the source of truth.** An E2E test without a ledger row is an orphan. A ledger row without a test is a gap. A source module without a test file is a gap. All need resolution.
7. **Unit tests have no tiers.** They're all fast, all free, all run on every PR. If a unit test is slow, fix the test.

## Final Instructions

1. Always review the plan first (Phase 1), then the implementation (Phase 2).
2. Produce the Review Output Template at the end of every review.
3. Be specific -- name files, functions, and line numbers in findings.
4. Distinguish between "must fix before merge" and "nice to have."
5. If the suite is fundamentally sound, say so. Don't invent issues to fill space.
