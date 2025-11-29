# Playwright Automation Testing Project

This project contains automated tests for web applications using Playwright, a powerful end-to-end testing framework.

## 🚀 Features

- End-to-end testing with Playwright
- Page Object Model (POM) design pattern
- Support for multiple test scenarios including:
  - Home page tests
  - Login functionality
  - Signup process
  - Product page interactions
- Data generation using Faker.js
- Environment configuration with dotenv

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- Playwright browsers (will be installed automatically)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd auto_demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🏗️ Project Structure

```
.
├── lib/
│   └── pages/           # Page Object Models
│       ├── base_page.ts # Base page with common functionality
│       ├── home_page.ts
│       ├── login_page.ts
│       ├── product_page.ts
│       └── signup_page.ts
├── tests/               # Test files
│   ├── home.spec.ts
│   ├── login.spec.ts
│   ├── product_page.spec.ts
│   └── signup.spec.ts
├── .env                 # Environment variables (create this file)
├── .gitignore
├── package.json
└── README.md
```

## 🧪 Sample Test Scenario: Login Test

Here's an example of a login test scenario that verifies different login behaviors:

```typescript
// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../lib/pages/login_page';

let loginPage: LoginPage;

test.beforeEach(async({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('/login');
});

test('Login page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
});

test('Verify login with valid credentials', async () => {
    await loginPage.inputLoginEmail.fill(process.env.EMAIL_LOGIN!);
    await loginPage.inputLoginPassword.fill(process.env.PASSWORD_LOGIN!);
    await loginPage.loginButton.click();
    await expect(loginPage.logoutButton).toBeVisible();
});

test('Verify login with invalid email format', async () => {
    await loginPage.inputLoginEmail.fill('invalidemailformat');
    await loginPage.inputLoginPassword.fill('somepassword');
    await loginPage.loginButton.click();
    const validation = await loginPage.inputLoginEmail.evaluate(
        el => (el as HTMLInputElement).validationMessage
    );
    await expect(validation).toContain('@');
});

test('Verify login with invalid credentials', async () => {
    await loginPage.inputLoginEmail.fill('nonexistent@example.com');
    await loginPage.inputLoginPassword.fill('wrongpassword');
    await loginPage.loginButton.click();
    await expect(loginPage.errorLoginMessage).toBeVisible();
});
```

## 🚦 Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/login.spec.ts
```

Run tests in headed mode (to see the browser):
```bash
npx playwright test --headed
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

## 📊 Test Reports

After running tests, you can view the HTML report with:
```bash
npx playwright show-report
```

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
