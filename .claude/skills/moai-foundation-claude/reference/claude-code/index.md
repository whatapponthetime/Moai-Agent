[Skip to Content](https://adk.mo.ai.kr/en/claude-code#nextra-skip-nav)

Claude CodeClaude Code Overview

Copy page

# Claude Code Overview

Claude Code is an AI-powered coding tool developed by Anthropic that runs directly in your terminal, allowing you to quickly turn ideas into code.

## Get Started in 30 Seconds [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#get-started-in-30-seconds)

### Prerequisites [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#prerequisites)

- Claude subscription (Pro, Max, Teams, Enterprise) or Claude Console account

### Install Claude Code [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#install-claude-code)

**Native Install (Recommended)**

**macOS, Linux, WSL:**

```

curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**

```

irm https://claude.ai/install.ps1 | iex
```

**Windows CMD:**

```

curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**Homebrew:**

```

brew install --cask claude-code
```

**WinGet:**

```

winget install Anthropic.ClaudeCode
```

### Start Using Claude Code [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#start-using-claude-code)

You’ll be prompted to log in the first time you use it. That’s it!

## What Claude Code Does [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#what-claude-code-does)

### From Features to Implementation [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#from-features-to-implementation)

Describe what you want in plain language. Claude Code will plan, write code, and verify it works.

### Debug and Fix Bugs [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#debug-and-fix-bugs)

Describe a bug or paste an error message. Claude Code analyzes your codebase, identifies the problem, and implements the fix.

### Explore Any Codebase [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#explore-any-codebase)

Ask questions about your team’s codebase and get thoughtful answers. Claude Code is aware of your entire project structure, can find up-to-date information on the web, and can pull data from external sources like Google Drive, Figma, and Slack through MCP.

### Automate Tedious Tasks [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#automate-tedious-tasks)

Fix lint issues, resolve merge conflicts, write release notes, and more—run from your dev machine as a one-off command or automatically in CI.

## Why Developers Love Claude Code [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#why-developers-love-claude-code)

### Runs in Your Terminal [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#runs-in-your-terminal)

Not another chat window. Not another IDE. Claude Code works where you already work, with tools you already love.

### Direct Action [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#direct-action)

Claude Code can directly edit files, run commands, and create commits. Need more functionality? With MCP, Claude can read design docs from Google Drive, update tickets in Jira, use custom developer tools, and more.

### Unix Philosophy [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#unix-philosophy)

Claude Code is composable and scriptable.

```

tail -f app.log | claude -p "Let me know if you see anything suspicious in this log stream, notify me on Slack"
```

This command actually works. CI can run:

```

claude -p "If there's new French text strings, translate them and open a PR for review to @lang-fr-team"
```

### Enterprise Ready [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#enterprise-ready)

Use the Claude API or host on AWS or GCP. Enterprise-grade security, privacy, and compliance built in.

## Use Claude Code Everywhere [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#use-claude-code-everywhere)

Claude Code works across your entire development environment: terminal, IDE, cloud, and Slack.

### Available Environments [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#available-environments)

| Environment | Description |
| --- | --- |
| **Terminal (CLI)** | The core Claude Code experience. Run `claude` in any terminal |
| **Claude Code on the Web** | Use via browser at claude.ai/code or Claude iOS app, no local setup required |
| **Desktop App** | Standalone app with diff review, parallel sessions, and cloud session launch features |
| **VS Code** | Native extension with inline diff, @-mentions, and plan review |
| **JetBrains IDE** | Plugin with IDE diff view and context sharing |
| **GitHub Actions** | Automated code review, issue triage in CI/CD with `@claude` mentions |
| **GitLab CI/CD** | Event-based automation for GitLab merge requests and issues |
| **Slack** | Mention Claude in Slack to route coding tasks to Claude Code web and get PR review |
| **Chrome** | Connect to your browser for live debugging, design verification, and web app testing |

## Next Steps [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#next-steps)

- [Quickstart](https://adk.mo.ai.kr/claude-code/quickstart) \- Start using Claude Code in 5 minutes
- [How It Works](https://adk.mo.ai.kr/claude-code/how-it-works) \- Understand the agent loop, tools, and project interaction
- [Common Workflows](https://adk.mo.ai.kr/claude-code/common-workflows) \- Explore codebases, fix bugs, refactor

## Additional Resources [Permalink for this section](https://adk.mo.ai.kr/en/claude-code\#additional-resources)

- [Official Documentation](https://code.claude.com/docs)
- [GitHub Repository](https://github.com/anthropics/claude-code)

Last updated onFebruary 8, 2026

[FAQ](https://adk.mo.ai.kr/en/moai-rank/faq "FAQ") [Quick Start](https://adk.mo.ai.kr/en/claude-code/quickstart "Quick Start")

* * *