---
title: "Quickstart"
description: "Get started with an AI-powered coding assistant in a few minutes using Claude Code."
---

# Quickstart

This quickstart guide will have you using AI-powered coding assistance in just a few minutes. By the end, you'll understand how to use Claude Code for common development tasks.

## Before You Begin

Make sure you have:

- An open terminal or command prompt
- A code project to work with
- A Claude subscription (Pro, Max, Teams, Enterprise), a Claude Console account, or access through supported cloud providers

## Step 1: Install Claude Code

Install Claude Code using one of these methods:

### Native Install (Recommended)

**macOS, Linux, WSL:**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows CMD:**

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

### Homebrew

```bash
brew install --cask claude-code
```

### WinGet

```powershell
winget install Anthropic.ClaudeCode
```

## Step 2: Log In to Your Account

You need an account to use Claude Code. When you start a conversational session with the `claude` command, you'll be prompted to log in:

```bash
claude
# You'll be prompted to log in the first time you use it
```

```bash
/login
# Follow the prompts to log in to your account
```

You can log in with these account types:

- **Claude Pro, Max, Teams, Enterprise** (recommended)
- **Claude Console** (API access with prepaid credits based on usage). A "Claude Code" workspace is automatically created in Console on first login for centralized cost tracking.
- **Amazon Bedrock, Google Vertex AI, Microsoft Foundry** (enterprise cloud providers)

Once logged in, your credentials are stored and you won't need to log in again. To switch accounts later, use the `/login` command.

## Step 3: Start Your First Session

Open a terminal in any project directory and start Claude Code:

```bash
cd /path/to/your/project
claude
```

You'll see the Claude Code startup screen with session information, recent conversations, and latest updates. Type `/help` for available commands or `/resume` to continue previous conversations.

## Step 4: Ask Your First Question

Let's start by understanding your codebase. Try one of these commands:

```
What does this project do?
```

Claude will analyze files and provide a summary. You can also ask more specific questions:

```
What technologies does this project use?
```

```
Where is the main entry point?
```

```
Can you describe the folder structure?
```

You can also ask questions about Claude's capabilities:

```
How do I create custom skills in Claude Code?
```

```
Can Claude Code work with Docker?
```

## Step 5: Make Your First Code Change

Now let's have Claude Code do some actual coding. Try a simple task:

```
Add a hello world function to the main file
```

Claude Code will:

1. Find the appropriate file
2. Show the proposed changes
3. Ask for approval
4. Make the edits

## Step 6: Using Git with Claude Code

Claude Code makes Git workflows conversational:

```
What files did you change?
```

```
Commit changes with descriptive messages
```

More complex Git workflows are also possible:

```
Create a new branch feature/quickstart
```

```
Show last 5 commits
```

```
Help resolve merge conflicts
```

## Step 7: Fix a Bug or Add a Feature

Claude excels at debugging and feature implementation.

Describe what you want in natural language:

```
Add input validation to user registration form
```

Or fix an existing problem:

```
There's a bug where users can submit empty forms - please fix it
```

Claude Code will:

- Find relevant code
- Understand context
- Implement solution
- Run tests if possible

## Step 8: Test Other Common Workflows

There are many ways to work with Claude:

### Refactor Code

```
Refactor auth module to use async/await instead of callbacks
```

### Write Tests

```
Write unit tests for calculator function
```

### Update Documentation

```
Update README with installation instructions
```

### Code Review

```
Review changes and suggest improvements
```

## Essential Commands

The most important commands for everyday use:

| Command | Function | Example |
|------|----------|---------|
| `claude` | Start conversational mode | `claude` |
| `claude "task"` | Run one-off task | `claude "fix build error"` |
| `claude -p "query"` | Run one-off query then exit | `claude -p "explain this function"` |
| `claude -c` | Continue recent conversation in current directory | `claude -c` |
| `claude -r` | Restart previous conversation | `claude -r` |
| `claude commit` | Create git commit | `claude commit` |
| `/clear` | Clear conversation history | `/clear` |
| `/help` | Show available commands | `/help` |
| `exit` or Ctrl+C | Exit Claude Code | `exit` |

See [CLI Reference](/claude-code/cli-reference) for the complete command list.

## Pro Tips for Beginners

- **Be specific**: Mention relevant files, constraints, and example patterns
- **Iterate**: Don't worry if the first attempt isn't perfect—keep the conversation going
- **Provide context**: Paste screenshots or share error messages
- **Experiment**: Ask Claude questions about your project and explore its capabilities

## Next Steps

You've learned the basics, now explore advanced features:

- [How It Works](/claude-code/how-it-works) - Understand the agent loop, tools, and context management
- [Common Workflows](/claude-code/common-workflows) - Explore codebases, fix bugs, refactor
- [Best Practices](/claude-code/best-practices) - Tips for effective Claude Code usage
- [Settings](/claude-code/settings) - How to configure Claude Code

## Getting Help

- **Inside Claude Code**: Type `/help` or ask "how do I..." questions
- **Documentation**: You're here—explore other guides
- **Community**: Join Discord for tips and support

---

**Sources:**
- [Quickstart](/claude-code/quickstart)