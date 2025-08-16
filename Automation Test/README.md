## Playwright automation UI test for CrudApp-with-Login-Auth-system Application
📁 Project Structure
Automation Test/
├── tests/                  # Test specs for Login and Dashboard
│   ├── Login-Logout.spec.js
│   └── Todo-Dashboard.spec.js
├── utils/                  # Modular utilities for test actions and selectors
│   ├── Actions/
│   ├── Elements/
│   └── Variables/
├── playwright.config.js    # Playwright configuration
├── README.md               # Project documentation



✅ Features Tested
🔐 Authentication
- Successful login with valid credentials
- Login failure with invalid credentials
- Logout functionality
📋 Dashboard & CRUD Operations
- Create new Todo items
- Read and verify item details
- Update existing items
- Delete items and confirm removal
🚫 Negative Test Cases
- Attempting actions without authentication
- Submitting empty or invalid form data
- Accessing restricted pages directly

🚀 Getting Started
1. Install Dependencies
npm install


2. Run Tests
npx playwright test


3. View Reports
npx playwright show-report



🛠️ Tech Stack
- Framework: Playwright
- Language: JavaScript (ES6)
- Test Runner: Playwright Test
- Reports: HTML via Playwright’s built-in reporter

📌 Best Practices Followed
- Modular test utilities for reusability
- Clear separation of selectors, variables, and actions
- Use of async/await for reliable test execution
- Assertions for both visibility and content validation
- Coverage of edge cases and error handling

🤖 API Test on Postman 
- Link [here](https://app.getpostman.com/join-team?invite_code=a1b4242549c938f5c0ea8fcbb8477734d9b3a2a8714cb650cc648019cc40b603&target_code=27653fb7e67d4e999b4a1024af0cf675)
- This link will add you in my workspace collection with all the apis and the test script