---
title: "CLI Reference"
description: "Complete reference to the Claude Code command-line interface, including commands and flags."
---

# CLI Reference

Complete reference to the Claude Code command-line interface, including commands and flags.

## CLI Commands

| Command | Description | Example |
|------|-------------|---------|
| `claude` | Start interactive REPL | `claude` |
| `claude "query"` | Start REPL with initial prompt | `claude "project overview"` |
| `claude -p "query"` | Query via SDK then exit | `claude -p "explain this function"` |
| `cat file \| claude -p "query"` | Process piped content | `cat logs.txt \| claude -p "explain"` |
| `claude -c` | Continue recent conversation in current directory | `claude -c` |
| `claude -c -p "query"` | Continue via SDK | `claude -c -p "check formatting errors"` |
| `claude -r "<session>" "query"` | Resume session by ID or name | `claude -r "auth-refactor" "PR complete"` |
| `claude update` | Update to latest version | `claude update` |
| `claude mcp` | Configure Model Context Protocol (MCP) servers | See [Claude Code MCP documentation](https://code.claude.com/docs/en/mcp) |

## CLI Flags

Customize Claude Code behavior with the following command-line flags:

| Flag | Description | Example |
|------|-------------|---------|
| `--add-dir` | Add additional working directories Claude can access (ensure each path exists as a directory) | `claude --add-dir ../apps ../lib` |
| `--agent` | Specify agent for current session (overrides `agent` setting) | `claude --agent my-custom-agent` |
| `--agents` | Dynamically define custom subagents in JSON (see format below) | `claude --agents '{"reviewer":{"description":"code review","prompt":"be a code reviewer"}}'` |
| `--allowedTools` | Tools to run without permission prompts. See [Permission rule syntax](https://code.claude.com/docs/en/settings#permission-rule-syntax). Use `--tools` instead to restrict available tools | `"Bash(git log:*)" "Bash(git diff:*)" "Read"` |
| `--continue`, `-c` | Load recent conversation in current directory | `claude --continue` |
| `--dangerously-skip-permissions` | Skip all permission prompts (use with caution) | `claude --dangerously-skip-permissions` |
| `--debug` | Enable debug mode with optional category filtering (e.g., `"api,hooks"` or `"!statsig,!file"`) | `claude --debug "api,mcp"` |
| `--disable-slash-commands` | Disable all skills and slash commands for this session | `claude --disable-slash-commands` |
| `--disallowedTools` | Tools removed from model's context and unavailable | `"Bash(git log:*)" "Bash(git diff:*)" "Edit"` |
| `--fork-session` | Create new session ID on resume (use with `--resume` or `--continue`) | `claude --resume abc123 --fork-session` |
| `--model` | Set model for current session as an alias (`sonnet` or `opus`) or the model's full name | `claude --model claude-sonnet-4-5-20250929` |
| `--output-format` | Specify output format in print mode (options: `text`, `json`, `stream-json`) | `claude -p "query" --output-format json` |
| `--permission-mode` | Start with specified permission mode | `claude --permission-mode plan` |
| `--print`, `-p` | Print response without interactive mode (see SDK documentation for programmatic usage) | `claude -p "query"` |
| `--resume`, `-r` | Resume specific session by ID or name, or open conversation chooser | `claude --resume auth-refactor` |
| `--session-id` | Use specific session ID for conversation (must be valid UUID) | `claude --session-id "550e8400-e29b-41d4-a716-446655440000"` |
| `--system-prompt` | Replace entire system prompt with custom text (works in both interactive and print modes) | `claude --system-prompt "Python expert"` |
| `--append-system-prompt` | Append custom text to end of default prompt (works in both interactive and print modes) | `claude --append-system-prompt "always use TypeScript"` |
| `--tools` | Control built-in tools Claude can use. Use `""` for none, `"default"` for all, or tool names like `"Bash,Edit,Read"` | `claude --tools "Bash,Edit,Read"` |
| `--verbose` | Enable verbose logging, showing turn-by-turn output (useful for debugging in both print and interactive modes) | `claude --verbose` |
| `--version`, `-v` | Print version number | `claude -v` |

## System Prompt Flags

Claude Code provides 4 flags for customizing the system prompt, each serving different purposes:

| Flag | Behavior | Mode | Use case |
|------|----------|------|----------|
| `--system-prompt` | **Replace** entire default prompt | Interactive + Print | Complete control over Claude's behavior and instructions |
| `--system-prompt-file` | **Replace** with file contents | Print only | Load prompts from files for reproducibility and version control |
| `--append-system-prompt` | **Append** to default prompt | Interactive + Print | Add specific instructions while preserving Claude Code defaults |
| `--append-system-prompt-file` | **Append** file contents to default prompt | Print only | Load versioned additions from files while preserving defaults |

**When to use each:**

- **`--system-prompt`**: Use when you need complete control over Claude's system prompt. Removes all default Claude Code instructions, providing a clean slate.

  ```bash
  claude --system-prompt "Python expert who only writes code with type annotations"
  ```

- **`--system-prompt-file`**: Useful when you need custom prompts from files for team consistency or version-controlled prompt templates.

  ```bash
  claude -p --system-prompt-file ./prompts/code-review.txt "review PR"
  ```

- **`--append-system-prompt`**: Safest option for adding specific instructions while keeping Claude Code's default functionality. Recommended for most use cases.

  ```bash
  claude --append-system-prompt "always include TypeScript and JSDoc comments"
  ```

- **`--append-system-prompt-file`**: Useful for loading additional instructions from files while preserving defaults.

  ```bash
  claude -p --append-system-prompt-file ./prompts/style-rules.txt "review PR"
  ```

For most use cases, `--append-system-prompt` or `--append-system-prompt-file` are recommended because they preserve Claude Code's built-in functionality while adding your custom requirements. Use `--system-prompt` or `--system-prompt-file` only when you need complete control over the system prompt.

## See Also

- [Chrome extension](/claude-code/chrome) - Browser automation and web testing
- [Interactive mode](/claude-code/interactive-mode) - Keyboard shortcuts, input modes, interactive features
- [Quickstart](/claude-code/quickstart) - Get started with Claude Code
- [Common workflows](/claude-code/common-workflows) - Advanced workflows and patterns
- [Settings](/claude-code/settings) - Configuration options
- [SDK documentation](https://code.claude.com/docs/en/sdk) - Programmatic usage and integration

---

**Sources:**
- [CLI reference](/claude-code/cli-reference)