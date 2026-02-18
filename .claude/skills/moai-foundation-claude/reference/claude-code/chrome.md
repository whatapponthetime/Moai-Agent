[Skip to Content](https://adk.mo.ai.kr/en/claude-code/chrome#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Chrome Browser Integration

Copy page

# Chrome Browser Integration

Control Chrome browser directly from Claude Code CLI to perform web app testing, debugging, and automation without switching between terminal and browser.

One-line summary: Running Claude Code with `claude --chrome` command allows you to open Chrome browser tabs and perform tasks like reading page content, filling forms, and checking console errors directly from the terminal.

## What is Chrome Integration? [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#what-is-chrome-integration)

### Understanding the Concept [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#understanding-the-concept)

During web development, you repeatedly modify code, switch to the browser to check results, and return to the terminal to check logs. Chrome integration eliminates this repetitive process. Since Claude Code can control Chrome browser directly from the terminal, you can handle code modification and browser verification in a single flow.

To use an analogy, the traditional approach is like a chef preparing ingredients and going to another room each time to taste. Chrome integration is like placing a tasting tool next to the chef, allowing everything to be handled in one place.

### Architecture Overview [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#architecture-overview)

Let’s examine the communication structure of Chrome integration with a diagram.

### Data Flow Details [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#data-flow-details)

Let’s explain each step of the above diagram in detail.

1. **Claude Code CLI**: Claude Code running in the terminal generates browser operation commands. For example, it handles requests like “open localhost:3000 and test the login form.”

2. **Native Messaging API**: This is Chrome’s official communication protocol. It’s a standard interface provided by Chrome for secure data exchange with external programs. It enables external programs to communicate with Chrome extensions.

3. **Claude in Chrome Extension**: An extension installed from the Chrome Web Store. It receives commands from the CLI and converts them into actual browser actions. It performs actions like opening new tabs, reading page content, clicking, and inputting text.

4. **Chrome Browser Tab**: The actual space where web pages are displayed. Under the extension’s guidance, it loads pages, returns DOM state, and collects console logs.


This process is bidirectional. When Claude Code sends a command, the result returns via the same path in reverse order. All this happens in milliseconds, so users barely feel any delay.

## Key Features [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#key-features)

Chrome integration provides 7 core features. Each feature represents tasks frequently needed in real development situations.

| Feature | Description | Specific Examples |
| --- | --- | --- |
| **Real-time Debugging** | Read console errors and DOM state, modify code | Detect TypeError shown in console, find and fix cause code |
| **Design Verification** | Implement UI based on Figma mockups, verify in browser | Check if implemented button color, size, spacing match design |
| **Web App Testing** | Test form validation, visual regression, user flows | Verify error message displays when entering invalid email in signup form |
| **Authenticated Web App Access** | Access logged-in services like Google Docs, Gmail, Notion | Write text directly in Google Docs or read Notion page content |
| **Data Extraction** | Extract structured information from web pages | Extract product names, prices, ratings from product list page to CSV |
| **Task Automation** | Automate data entry, form filling, multi-site workflows | Enter customer information from CSV file into CRM system one by one |
| **Session Recording** | Record browser interactions as GIF | Create GIF for feature demo, attach to PR or documentation |

**What is Authenticated Web App Access?** Normally, accessing services like Google Docs or Gmail programmatically requires complex processes like OAuth token issuance, API key setup, SDK installation, etc. Chrome integration requires none of these processes. It uses the state where the user is already logged in Chrome browser as-is. If you’re logged into Gmail in your browser, Claude Code can also access that Gmail. This means you can interact with various web services without separate API connectors.

## Prerequisites [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#prerequisites)

Here’s what you need to use Chrome integration. All items must be properly configured for normal operation.

| Requirement | Minimum Version | Description |
| --- | --- | --- |
| Google Chrome browser | Latest stable version | Official Chrome required, not Chromium-based browsers |
| Claude in Chrome extension | v1.0.36 or higher | Install from Chrome Web Store |
| Claude Code CLI | v2.0.73 or higher | Check with `claude --version` in terminal |
| Claude paid plan | - | Requires Pro, Team, or Enterprise plan |

**Paid Plan Required**: Chrome integration is not available on free plans. You must be subscribed to Pro, Team, or Enterprise plan. If not yet subscribed, upgrade your plan at claude.ai.

### Detailed Description of Each Item [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#detailed-description-of-each-item)

**Google Chrome Browser**: Chrome integration uses Chrome’s Native Messaging API, so Google’s official Chrome browser is required. It may not work on Chromium-based browsers like Brave, Edge, Arc, etc. If Chrome is not installed, download it from google.com/chrome.

**Claude in Chrome Extension**: Search for “Claude in Chrome” in the Chrome Web Store and install it. This extension acts as a bridge between the CLI and browser. After installation, check its activation status in the extension icon next to the Chrome address bar.

**Claude Code CLI**: A command-line tool for running Claude Code in the terminal. You can check the current version with the following command.

```

claude --version
```

If the version is lower than v2.0.73, an update is required.

**Claude Paid Plan**: Chrome integration features are activated only on paid plans. You can check your current plan in your account settings at claude.ai.

## Setup Method [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#setup-method)

Chrome integration setup completes in 3 steps. Follow each step in order.

### Step 1: Update Claude Code [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#step-1-update-claude-code)

First, update Claude Code CLI to the latest version. Chrome integration is supported in v2.0.73 and above.

```

claude update
```

Check the version after update.

```

claude --version
```

### Step 2: Run with Chrome Flag [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#step-2-run-with-chrome-flag)

Run Claude Code with the `--chrome` flag added. This flag activates Chrome browser tools.

```

claude --chrome
```

When you run this command, Claude Code attempts to connect to the Chrome extension. Chrome browser must be running, and the Claude in Chrome extension must be installed and activated.

### Step 3: Verify Connection [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#step-3-verify-connection)

Enter the `/chrome` command within the Claude Code session to check connection status.

```

/chrome
```

If the connection is normal, a message indicating Chrome integration is activated will be displayed. You can now request browser-related tasks to Claude Code.

### Default Activation Settings [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#default-activation-settings)

To always use Chrome integration without entering the `--chrome` flag each time, you can set it to default activation.

Run the `/chrome` command within the Claude Code session and select the “Enabled by default” option. From then on, Chrome tools will automatically load with just the `claude` command.

**Context Usage Trade-off**: When Chrome integration is set to default activation, browser tools are always loaded, increasing context usage. Even in general coding sessions that don’t require browser tasks, additional context is consumed. If browser tasks are frequently needed, default activation is convenient, but if not, we recommend using the `--chrome` flag only when needed. Site permissions are inherited from Chrome extension settings.

## Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#usage-examples)

Here are 7 representative usage scenarios for Chrome integration. Each example includes a situation a junior developer might actually encounter, the command to input, and expected results.

### 1\. Local Web App Testing [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#1-local-web-app-testing)

**Situation**: Developing a React app running on `localhost:3000`. Want to verify that login form validation works correctly.

**Input to Claude Code**:

```

Open localhost:3000 and test the login form.
Test with empty email, incorrectly formatted email, and correct email,
and verify that error messages display correctly.
```

**Process**:

1. Claude Code opens `localhost:3000` in Chrome as a new tab
2. Finds the login form and identifies the email field
3. Presses submit button in empty state to verify “Please enter email” error message
4. Enters “abc” to verify “Not a valid email format” error
5. Enters “ [user@example.com](mailto:user@example.com)” to verify normal operation
6. Summarizes test results and reports to terminal

**Expected Result**: Test case pass/fail status and discovered issues are displayed organized in the terminal.

### 2\. Console Log Debugging [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#2-console-log-debugging)

**Situation**: Clicking a button in the web app produces no response. Opening browser developer tools shows there might be an error in the console, but it’s difficult to grasp exactly what error.

**Input to Claude Code**:

```

Open localhost:3000/dashboard and click the "Generate Report" button.
If there's an error in the console, read it, analyze the cause, and fix the code.
```

**Process**:

1. Claude Code opens the page and starts console monitoring
2. Finds and clicks the “Generate Report” button
3. Detects `TypeError: Cannot read property 'map' of undefined` error in console
4. Tracks the file and line where the error occurred
5. Analyzes the cause. Example: Attempting to iterate data before API response arrives
6. Adds appropriate null check to code and fixes it

**Expected Result**: Error cause analysis along with immediate application of fixed code. After fix, clicks button again to verify the problem is resolved.

### 3\. Automatic Form Entry [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#3-automatic-form-entry)

**Situation**: Have a CSV file with 100 customer information entries that need to be entered one by one into a CRM web app’s customer registration form. Manual work would take several hours.

**Input to Claude Code**:

```

Read the customers.csv file and register each customer
into the CRM system (localhost:8080/customers/new).
Fill in the name, email, phone number fields and press the save button.
```

**Process**:

1. Claude Code reads the `customers.csv` file and parses customer data
2. Opens the CRM system’s customer registration page
3. Enters the first customer’s name, email, phone number in each field
4. Clicks save button and verifies success message
5. Moves to next customer and repeats the process
6. Reports progress to terminal

**Expected Result**: All customer data is registered in CRM, and success/failure counts are summarized and displayed.

### 4\. Writing Content to Google Docs [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#4-writing-content-to-google-docs)

**Situation**: Need to write a technical design document for the project in Google Docs. Already logged into Google account in Chrome.

**Input to Claude Code**:

```

Create a new document in Google Docs and write the API design document
for the current project. Analyze and document endpoints in the src/api/ directory.
```

**Process**:

1. Claude Code first analyzes the `src/api/` directory to understand API endpoints
2. Opens Google Docs and creates a new document
3. Writes title, overview, and description of each endpoint
4. Includes request/response format, parameter descriptions
5. When document writing is complete, reports URL to terminal

**Expected Result**: API design document is created in Google Docs, and document link is displayed in terminal. Utilizes browser’s login session without separate API key setup or OAuth authentication.

### 5\. Web Page Data Extraction [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#5-web-page-data-extraction)

**Situation**: Need to collect product name, price, rating information from a competitor’s product page to create analysis materials.

**Input to Claude Code**:

```

Open the https://example-store.com/products page and
extract all product names, prices, ratings and save to products.csv file.
```

**Process**:

1. Claude Code opens the page in a new tab
2. Analyzes page DOM structure to identify elements containing product information
3. Extracts name, price, rating for each product
4. If pagination exists, moves to next page and continues collection
5. Structures collected data in CSV format and saves to file

**Expected Result**: `products.csv` file is created, and number of extracted products with data preview is displayed in terminal.

### 6\. Multi-Site Workflow [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#6-multi-site-workflow)

**Situation**: Need to check this week’s meeting schedule in Google Calendar, collect LinkedIn profile information of meeting attendees, and create meeting preparation document.

**Input to Claude Code**:

```

Check this week's meeting schedule in Google Calendar,
look up each meeting attendee's LinkedIn profile,
and create a meeting preparation summary document as meeting-prep.md.
```

**Process**:

1. Opens Google Calendar page and checks this week’s schedule
2. Collects attendee names and emails for each meeting
3. Searches LinkedIn for each attendee and collects title, company, key experience
4. Organizes collected information by meeting and creates Markdown document

**Expected Result**: `meeting-prep.md` file is created with attendee information and background organized for each meeting.

### 7\. GIF Demo Recording [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#7-gif-demo-recording)

**Situation**: Need to create a feature demo GIF to attach to a PR. Want to show the newly implemented dark mode toggle feature.

**Input to Claude Code**:

```

Open localhost:3000 and record a GIF demonstrating the dark mode toggle feature.
Start in light mode, click the toggle button, and show the transition to dark mode.
```

**Process**:

1. Claude Code starts session recording
2. Opens page in light mode state
3. Finds dark mode toggle button and clicks it
4. Records theme transition process
5. Ends recording and saves as GIF file

**Expected Result**: GIF file showing dark mode transition process is created and can be directly attached to PR or documentation.

## Detailed Operation [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#detailed-operation)

Understanding Chrome integration’s internal operation in more detail allows for effective utilization.

### Browser Interaction Flow [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#browser-interaction-flow)

A diagram representing the entire process of Claude Code interacting with the browser.

### Core Operation Principles [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#core-operation-principles)

**Use New Tabs**: Claude Code always opens new tabs for work. It doesn’t take or disturb tabs the user already has open. This is a design to protect the user’s work environment.

**Share Login State**: Claude Code uses cookies and sessions stored in the browser as-is. If the user is logged into Google, GitHub, Notion, etc. in Chrome, Claude Code can also access those services. No separate authentication process is needed.

**Visible Browser Required**: Chrome integration doesn’t support headless mode. In other words, the Chrome browser window must be visible on screen. This is so users can verify Claude Code’s browser actions in real-time. Operating invisibly in the background is not supported.

### Login and CAPTCHA Handling [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#login-and-captcha-handling)

While navigating websites, login screens or CAPTCHAs may appear. Claude Code automatically detects these situations and asks the user to handle them.

This approach considers both security and user experience. Since Claude Code doesn’t enter passwords or solve CAPTCHAs, sensitive credentials aren’t exposed to AI. After the user handles it directly, Claude Code continues the operation.

## Best Practices [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#best-practices)

Best practices for effective Chrome integration usage.

| Item | Recommendation | Avoid |
| --- | --- | --- |
| **Tab Management** | Use a new tab for each session | Don’t reuse tabs from previous sessions |
| **Console Output** | Filter console output with specific patterns | Don’t indiscriminately collect all console output |
| **Page Loading** | Start work after page is fully loaded | Don’t work without waiting for async loading in SPAs |
| **Error Handling** | Check specific error messages when errors occur | Don’t ignore errors and continue |
| **Session Separation** | Separate independent tasks into distinct sessions | Don’t mix unrelated tasks in one session |
| **Browser State** | Keep Chrome window visible | Don’t minimize or hide browser |

**Modal Dialog Warning**: When modal dialogs like JavaScript’s `alert()`, `confirm()`, `prompt()` appear, all browser events are blocked. In this state, Claude Code also can’t communicate with the browser. When modal dialogs appear, the user must close them directly in the browser. If your app under development uses `alert()`, replacing it with `console.log()` is better for Chrome integration compatibility.

## Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#troubleshooting)

Common problems that may occur while using Chrome integration and their solutions.

| Problem | Cause | Solution |
| --- | --- | --- |
| Extension not found | Claude in Chrome extension not installed or disabled | Install and activate extension from Chrome Web Store |
| Version compatibility error | CLI or extension version too low | Update CLI with `claude update` and update extension to latest version |
| Browser unresponsive | Modal dialog blocking browser | Close open modal dialogs in browser |
| Connection lost | Chrome terminated or extension deactivated | Restart Chrome and check extension activation status |
| Page access denied | Extension lacks site access permission | Allow site access permission in Chrome extension settings |
| Tab not opening | Native Messaging Host not installed | See “First-time Setup Notes” below |

### Extension Detection Failure [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#extension-detection-failure)

The most common problem. Check in the following order.

1. Verify Chrome browser is running
2. Enter `chrome://extensions` in address bar and verify Claude in Chrome extension is installed
3. Verify extension is activated (toggle on)
4. Verify extension version is v1.0.36 or higher
5. Verify Claude Code CLI version is v2.0.73 or higher (`claude --version`)
6. If all above are normal, restart both Chrome and Claude Code

### Browser Unresponsive [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#browser-unresponsive)

If Claude Code sent a command to the browser but there’s no response, check the following.

1. Check for and close any modal dialogs (`alert`, `confirm`, `prompt`)
2. If the problem occurred in an existing tab, create a new tab for the task
3. Deactivate and reactivate the Chrome extension
4. If above doesn’t resolve, completely terminate and restart Chrome

### First-time Setup Notes [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#first-time-setup-notes)

When setting up Chrome integration for the first time, Native Messaging Host installation is required. Native Messaging Host is a system-level component that enables Chrome extensions and external programs (Claude Code CLI) to communicate.

Generally, installing the Claude in Chrome extension automatically configures it. If automatic configuration doesn’t work, try the following.

1. Completely terminate Chrome (all windows and processes)
2. Restart Chrome
3. When Claude in Chrome extension requests Native Messaging Host installation, allow it
4. Run Claude Code again with `claude --chrome`

On macOS, system security settings may block Native Messaging Host installation. In this case, you may need to allow it in Privacy & Security in system settings.

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/chrome\#related-documents)

Documents useful to reference along with Chrome integration.

- [CLI Reference](https://adk.mo.ai.kr/claude-code/cli-reference) \- Complete list of Claude Code command-line options
- [Common Workflows](https://adk.mo.ai.kr/claude-code/common-workflows) \- Step-by-step guides by development task
- [Settings](https://adk.mo.ai.kr/claude-code/settings) \- Claude Code configuration and environment setup
- [Troubleshooting](https://adk.mo.ai.kr/claude-code/troubleshooting) \- Comprehensive guide to common problems
- [Best Practices](https://adk.mo.ai.kr/claude-code/best-practices) \- Effective Claude Code usage
- [Extensions](https://adk.mo.ai.kr/claude-code/extensions) \- Extension systems including Skills, MCP, Hooks

Last updated onFebruary 12, 2026

[Settings](https://adk.mo.ai.kr/en/claude-code/settings "Settings") [Troubleshooting](https://adk.mo.ai.kr/en/claude-code/troubleshooting "Troubleshooting")

* * *