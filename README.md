# auto_demo

Lightweight Playwright end-to-end test project using a small Page Object Model.

## Overview

- Purpose: automated UI tests for example flows using `@playwright/test`.
- Test files: `tests/` (e.g. `tests/login.spec.ts`).
- Page objects: `lib/pages/*` (each page class accepts a Playwright `Page` and exposes `Locator` fields).

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Set the application base URL (used by `playwright.config.ts`):

```bash
# zsh
export BASE_URL=https://example.com
# or create a .env file with BASE_URL=https://example.com
```

3. Run the test suite:

```bash
npx playwright test
```

4. Run a single spec file:

```bash
npx playwright test tests/login.spec.ts
```

5. Open the HTML report produced by Playwright:

```bash
npx playwright show-report
```

## Project structure

- `playwright.config.ts` — Playwright Test configuration. Important notes:
	- Reads `process.env.BASE_URL` and imports `dotenv/config`.
	- Reporter: `html` (use `npx playwright show-report`).
	- Trace: `on-first-retry` for debugging flaky tests.
- `tests/` — test specs using Playwright test fixtures (see `tests/login.spec.ts`).
- `lib/pages/` — Page Object Model. Example classes:
	- `base_page.ts` — common helpers (`navigateTo`, `waitForTimeout`, `takeScreenshot`).
	- `login_page.ts` — example of locator initialization:

```ts
this.textSignupName = loginPage.locator('input[data-qa="signup-name"]');
```

## Conventions & patterns

- Page objects accept a Playwright `Page` in the constructor and store `Locator` fields as public properties so tests can assert directly or call page methods.
- Prefer selecting elements by `data-qa` when available (see `lib/pages/login_page.ts`).
- Add helper methods to page classes instead of spreading selectors in tests. Use `BasePage.takeScreenshot(testTitle)` to save screenshots to `screenshots/${testTitle}.jpg`.


- If tests can't reach the app, ensure `BASE_URL` is set and reachable.
- For flaky tests: rerun with `--retries` (configured via CI), inspect Playwright traces and the HTML report.

## Examples

- Create and use a page object in a test (from `tests/login.spec.ts`):

```ts
let loginPage: LoginPage;
test.beforeEach(async ({ page }) => {
	loginPage = new LoginPage(page);
	await loginPage.navigateTo('/login');
});

test('Login page has title', async ({ page }) => {
	await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
});
```

## Development notes

- Node assumes `type: "commonjs"` per `package.json` — keep imports and exports consistent with the repo's TypeScript configuration.
- This repo includes `@faker-js/faker` as a dependency — use it for synthetic test data when needed.

---