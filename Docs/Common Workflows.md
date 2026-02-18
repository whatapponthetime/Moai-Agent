---
title: "Common Workflows"
description: "Step-by-step guides for exploring codebases, fixing bugs, refactoring, testing, and other everyday tasks."
---

# Common Workflows

Practical workflows for everyday development. Includes exploring unfamiliar code, debugging, refactoring, writing tests, creating PRs, and session management. Each section includes example prompts you can adapt to your project. For higher-level patterns and tips, see [Best Practices](/claude-code/best-practices).

## Understanding a New Codebase

### Get a Quick Codebase Overview

Let's say you've joined a new project and need to understand the structure quickly.

**Prompt:**

```
Please give me an overview of this project. Describe the main features and directory structure, and list the technology stack used.
```

**What Claude Does:**

1. Explore project root and key directories
2. Read config files like `package.json`, `requirements.txt`, `go.mod`
3. Identify main entry points
4. Summarize architecture and core modules

### Finding Related Code

Let's say you need to find code that implements a specific feature or functionality.

**Prompt:**

```
Please find the code that implements [feature description]. List the relevant files and key functions/classes.
```

**Example:**

```
Find the code that handles user authentication flow.
```

**What Claude Does:**

1. Search for files with relevant keywords
2. Analyze function/class definitions
3. Trace call graphs
4. Summarize related files and their roles

## Fixing Bugs Efficiently

Let's say you've found an error message and need to find the root cause and fix it.

**Prompt:**

```
Please fix the following error:

[paste error message or screenshot]

Analyze the related code and implement a fix that addresses the root cause.
```

**What Claude Does:**

1. Analyze stack trace/error message
2. Locate relevant source files
3. Read code context
4. Propose and implement fix
5. Run tests if possible

## Refactoring Code

Let's say you need to update legacy code to use modern patterns and conventions.

**Prompt:**

```
Please refactor the following files to use modern best practices:

- [files/modules to refactor]
- [goal: e.g., use async/await, improve type safety, consistent patterns]
```

**Example:**

```
Refactor src/auth/ module to use async/await instead of callbacks.
```

**What Claude Does:**

1. Analyze target files
2. Create refactoring plan
3. Implement changes incrementally
4. Verify functionality preserved (run tests)

## Using Specialized Subagents

Let's say you want to use a specialized AI subagent for a specific task.

**Prompt:**

```
Use [subagent type] subagent to perform [task description].
```

**Example:**

```
Use security-reviewer subagent to review the authentication code.
```

**What Claude Does:**

1. Select appropriate subagent for the task
2. Execute task in isolated context
3. Return summary and report

## Safe Code Analysis with Plan Mode

Plan mode instructs Claude to analyze your codebase with read-only operations to create a plan, making it perfect for safely exploring codebases, planning complex changes, or reviewing code without modifications.

### When to Use Plan Mode

- **Multi-step Implementation**: When you need to edit many files for a feature
- **Code Exploration**: When you want to thoroughly investigate before changing anything
- **Interactive Development**: When you want to iterate on direction with Claude

### How to Use Plan Mode

**Toggle Plan Mode During Session**

During a session, you can use **Shift+Tab** to cycle through permission modes.

In normal mode, pressing **Shift+Tab** once switches to auto-approve mode, showing `⏵⏵ accept edits on` at the bottom of the terminal. Pressing **Shift+Tab** again switches to plan mode, showing `⏸ plan mode on`.

**Start New Session in Plan Mode**

Use the `--permission-mode plan` flag to start a new session in plan mode:

```bash
claude --permission-mode plan
```

**Run "Headless" Query in Plan Mode**

You can also run queries directly in plan mode using `-p` (i.e., "headless mode"):

```bash
claude --permission-mode plan -p "Analyze the authentication system and suggest improvements"
```

### Example: Planning Complex Refactoring

```bash
claude --permission-mode plan
```

```
> The authentication system needs to be refactored to use OAuth2. Please create a detailed migration plan.
```

Claude analyzes the current implementation and creates a comprehensive plan. Refine with follow-up:

```
> What about backward compatibility?
> How should database migrations be handled?
```

## Testing Work

Let's say you need to add tests for untested code.

**Prompt:**

```
Please write tests for [file/module].

- [specific behaviors/paths to test]
- Follow the project's existing test framework and style
```

**What Claude Does:**

1. Analyze target code
2. Check existing test files
3. Follow project's test patterns and conventions
4. Write test cases
5. Run tests

## Creating Pull Requests

Let's say you need to create a well-documented PR for your changes.

**Prompt:**

```
Please create a pull request for the current changes.

- Summary of changes
- Related issue/ticket references
- Testing plan included
- Screenshots/demos if applicable (for UI changes)
```

**What Claude Does:**

1. Analyze changes with git diff
2. Write PR title and body
3. Create PR (`gh` CLI used)

## Working with Documentation

Let's say you need to add or update documentation for code.

**Prompt:**

```
Please write/update documentation for [code/feature].

- README, API docs, or code comments
- Include usage examples
- Follow project documentation style
```

## Working with Images

Let's say you need to work with images in your codebase and need Claude's image content analysis help.

**Prompt:**

```
Please analyze [image file path or paste] and perform [task description].
```

**Example:**

```
Analyze this screenshot and [UI implementation]:
```

**What Claude Does:**

1. Interpret image content
2. Find or write related code
3. Compare visual requirements with implementation

## File and Directory References

Use `@` to quickly include files or directories so Claude doesn't wait to read them.

```
@src/components/Button.tsx please cleanup the abbreviation
```

```
@lib/utils has a bug in the date utility. Please check @lib/utils/date.ts file and fix it.
```

## Using Extended Thinking (Thinking Mode)

Extended thinking is enabled by default and reserves up to 31,999 tokens for Claude to reason through complex problems step-by-step. You can see this reasoning by pressing `Ctrl+O` to toggle detailed mode, showing the internal reasoning in gray italic text.

Extended thinking is particularly useful for complex architecture decisions, tricky bugs, multi-step implementation plans, and evaluating trade-offs between different approaches. It allows space to explore multiple solutions, analyze edge cases, and fix mistakes.

### Configuring Thinking Mode

Thinking is enabled by default but can be adjusted or disabled.

| Scope | How to Configure | Details |
|------|-----------------|---------|
| **Toggle Shortcut** | Press `Option+T` (macOS) or `Alt+T` (Windows/Linux) | Toggles thinking for current session. May need terminal configuration to enable this shortcut |
| **Global Default** | Toggle thinking mode with `/config` | Sets default for all projects. Saved as `alwaysThinkingEnabled` in `~/.claude/settings.json` |
| **Token Budget Limit** | Set `MAX_THINKING_TOKENS` environment variable | Limits thinking budget to specific token count. Example: `export MAX_THINKING_TOKENS=10000` |

To see Claude's thinking process, press `Ctrl+O` to toggle detailed mode and view the internal reasoning displayed in gray italic text.

## Restarting Previous Conversations

When starting Claude Code, you can restart previous sessions:

- `claude --continue` continues the most recent conversation in the current directory
- `claude --resume` opens a conversation chooser or restarts by name

Inside an active session, use `/resume` to switch to a different conversation.

Sessions are saved per project directory. The `/resume` chooser shows sessions from the same git repository, including worktrees.

### Naming Sessions

Give your sessions descriptive names so you can find them later. This is a best practice when working on multiple tasks or features.

```
/rename oauth-migration
```

```
/rename debugging-memory-leak
```

## Running Parallel Claude Code Sessions with Git Worktree

Let's say you need to work on multiple tasks simultaneously and need complete code isolation between Claude Code instances.

Git worktree allows you to create separate directories for each branch, enabling complete isolation of Claude Code sessions.

```bash
# Main repository
cd main-project

# Create worktree for feature-1
git worktree add ../feature-1 feature-branch-1

# Create worktree for feature-2
git worktree add ../feature-2 feature-branch-2
```

Now you can run separate Claude Code sessions in each worktree:

```bash
# Terminal 1
cd ../feature-1
claude

# Terminal 2
cd ../feature-2
claude
```

Each session is completely isolated with its own files, git state, and context.

## Using Claude as Unix-Style Utility

### Add Claude to Validation Pipeline

Let's say you want to use Claude Code as a linter or code reviewer.

**Add Claude to Build Script:**

```json
// package.json
{
    "scripts": {
        "lint:claude": "claude -p \"you are a linter. please look at the changes vs main and report any issues related to typos. report the filename and line number on one line, and a description of the issue on the second line. do not return any other text.\""
    }
}
```

### Piping, Piping Out

Let's say you want to pipe data to Claude and receive it back in a structured format.

**Pipe Data Through Claude:**

```bash
cat build-error.txt | claude -p "Briefly explain the root cause of this build error" > output.txt
```

### Controlling Output Format

Let's say you need specific output formats from Claude for integration with scripts or other tools.

```bash
# JSON output
claude -p "List all API endpoints" --output-format json

# Streaming JSON
claude -p "Analyze log file" --output-format stream-json
```

## Asking Claude About Features

Claude has built-in access to its own documentation and can answer questions about its capabilities and limitations.

### Example Questions

```
Can Claude Code create pull requests?
```

```
How does Claude Code handle permissions?
```

```
What skills are available?
```

```
How do I use MCP with Claude Code?
```

```
What are the limitations of Claude Code?
```

## Next Steps

- [How It Works](/claude-code/how-it-works) - Understand the agent loop, tools, context management
- [Best Practices](/claude-code/best-practices) - Tips from environment configuration to parallel sessions
- [Settings](/claude-code/settings) - Configuration options

---

**Sources:**
- [Common workflows](/claude-code/common-workflows)