---
title: "Settings"
description: "Configure Claude Code with global and project-level settings, environment variables."
---

# Settings

Claude Code provides a variety of settings to configure behavior to your needs. When using the interactive REPL, run the `/config` command to configure. This command opens a tabbed settings interface where you can view status information and modify configuration options.

## Configuration Scopes

Claude Code uses a **scope system** that determines where configuration applies and who it's shared with. Understanding scopes helps you decide how to configure Claude Code for personal use, team collaboration, or enterprise deployment.

### Available Scopes

| Scope | Location | Who it affects | Share with team? |
|------|----------|----------------|-----------|
| **Managed** | System-level `managed-settings.json` | All users on system | Yes (deployed by IT) |
| **User** | `~/.claude/` directory | User across all projects | No |
| **Project** | `.claude/` in repo | All collaborators in this repo | Yes (committed to git) |
| **Local** | `.claude/*.local.*` files | Only user in this repo | No (gitignored) |

### When to Use Each Scope

**Managed scope** is best for:

- Security policies that must be enforced across an organization
- Compliance requirements that cannot be overridden
- Standardized configurations deployed by IT/DevOps

**User scope** is best for:

- Personal preferences you want in all projects (theme, editor settings)
- Tools and plugins you use across all projects
- API keys and authentication stored securely

**Project scope** is best for:

- Team-shared settings (permissions, hooks, MCP servers)
- Plugins that the entire team should have
- Tool standardization across collaborators

**Local scope** is best for:

- Personal overrides for specific projects
- Testing configurations before sharing with team
- Machine-specific settings that won't work for others

### How Scopes Interact

When the same setting is configured in multiple scopes, the more specific scope takes precedence:

1. **Managed** (highest) - Cannot be overridden by anything else
2. **Command-line arguments** - Temporary overrides for specific sessions
3. **Local** - Overrides project and user settings
4. **Project** - Overrides user settings
5. **User** (lowest) - Applies when nothing else specifies the setting

For example, if permissions are allowed in user settings but denied in project settings, the project settings take precedence and the permission is blocked.

### Using Scopes

Scopes apply to many Claude Code features:

| Feature | User location | Project location | Local location |
|------|---------------|------------------|----------------|
| **Settings** | `~/.claude/settings.json` | `.claude/settings.json` | `.claude/settings.local.json` |
| **Subagents** | `~/.claude/agents/` | `.claude/agents/` | — |
| **MCP servers** | `~/.claude.json` | `.mcp.json` | `~/.claude.json` (project-specific) |
| **Plugins** | `~/.claude/settings.json` | `.claude/settings.json` | `.claude/settings.local.json` |
| **CLAUDE.md** | `~/.claude/CLAUDE.md` | `CLAUDE.md` or `.claude/CLAUDE.md` | `CLAUDE.local.md` |

---

## Settings Files

The `settings.json` file is the official mechanism to configure Claude Code through hierarchical settings:

- **User settings** are defined in `~/.claude/settings.json` and apply to all projects.
- **Project settings** are stored in the project directory:
  - `.claude/settings.json` - Settings committed to source control and shared with the team
  - `.claude/settings.local.json` - Non-committed settings, for personal preferences and experimentation. When created, Claude Code configures git to ignore this file.
- **Managed settings**: For organizations that need centralized control, Claude Code supports `managed-settings.json` and `managed-mcp.json` files that can be deployed to system directories:
  - macOS: `/Library/Application Support/ClaudeCode/`
  - Linux and WSL: `/etc/claude-code/`
  - Windows: `C:\Program Files\ClaudeCode\`

See [Managed settings](https://code.claude.com/docs/en/settings#managed-settings) and [Managed MCP configuration](https://code.claude.com/docs/en/settings#managed-mcp-configuration) for details.

- **Other configuration** is stored in `~/.claude.json`. This file contains preferences (theme, notification settings, editor mode), OAuth sessions, MCP server configuration for user and local scopes, project-specific state (allowed tools, trust settings), and various caches. Project-scope MCP servers are stored separately in `.mcp.json`.

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test:*)",
      "Read(~/.zshrc)"
    ],
    "deny": [
      "Bash(curl:*)",
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  },
  "env": {
    "CLAUDE_CODE_ENABLE_TELEMETRY": "1",
    "OTEL_METRICS_EXPORTER": "otlp"
  },
  "companyAnnouncements": [
    "Welcome to Acme Corp! Please review our coding guidelines at docs.acme.com",
    "Reminder that all PRs require code review",
    "New security policy in effect"
  ]
}
```

### Available Settings

`settings.json` supports many options:

| Key | Description | Example |
|------|-------------|---------|
| `apiKeyHelper` | Custom script to run to generate auth value (run in `/bin/sh`) | `/bin/generate_temp_api_key.sh` |
| `cleanupPeriodDays` | Delete inactive sessions older than this period on startup. Set to `0` to delete all sessions immediately (default: 30 days) | `20` |
| `companyAnnouncements` | Announcements to show users on startup. Multiple announcements cycle randomly | `["Welcome to Acme Corp!"]` |
| `env` | Environment variables to apply to all sessions | `{"FOO": "bar"}` |
| `attribution` | Custom attribution user for git commits and pull requests | `{"commit": "Generated with Claude Code", "pr": ""}` |
| `includeCoAuthoredBy` | **Deprecated**: Use `attribution` instead. Whether to include "Co-Authored-By Claude" byline in git commits and pull requests (default: `true`) | `false` |
| `permissions` | See permissions settings table below for structure | |
| `hooks` | Configure custom commands to run before/after tool execution. See [Hooks documentation](/advanced/hooks-guide) | `{"PreToolUse": {"Bash": "echo 'Running command...'"}}` |
| `disableAllHooks` | Disable all hooks | `true` |
| `allowManagedHooksOnly` | (Managed settings only) Prevent loading user, project, and plugin hooks. Only allow managed hooks and SDK hooks. See [Hook configuration](https://code.claude.com/docs/en/settings#hook-configuration) | `true` |
| `model` | Override default model for Claude Code | `"claude-sonnet-4-5-20250929"` |
| `otelHeadersHelper` | Script for dynamic OpenTelemetry header generation. Run at startup and periodically (see dynamic headers) | `/bin/generate_otel_headers.sh` |
| `statusLine` | Configure custom status line to display context. See `statusLine` documentation | `{"type": "command", "command": "~/.claude/statusline.sh"}` |
| `fileSuggestion` | Configure custom script for `@` file autocompletion. See [File suggestion settings](https://code.claude.com/docs/en/settings#file-suggestion-settings) | `{"type": "command", "command": "~/.claude/file-suggestion.sh"}` |
| `respectGitignore` | Control whether `@` file picker respects `.gitignore` patterns. When `true` (default), files matching `.gitignore` patterns are excluded from suggestions | `false` |
| `forceLoginMethod` | Set to `claudeai` to restrict login to Claude.ai accounts, or `console` to restrict to Claude Console (API usage billed) accounts | `claudeai` |
| `language` | Configure Claude's preferred response language (e.g., `"japanese"`, `"spanish"`, `"french"`). Claude will respond in this language by default | `"japanese"` |

### Permissions Settings

| Key | Description | Example |
|------|-------------|---------|
| `allow` | Array of permission rules to allow tool usage. See permission rule syntax for pattern matching details | `[ "Bash(git diff:*)" ]` |
| `ask` | Array of permission rules to ask for confirmation on tool usage. See permission rule syntax | `[ "Bash(git push:*)" ]` |
| `deny` | Array of permission rules to deny tool usage. Use to exclude sensitive files from Claude Code access. See permission rule syntax and Bash permission caveats | `[ "WebFetch", "Bash(curl:*)", "Read(./.env)", "Read(./secrets/**)" ]` |
| `additionalDirectories` | Additional working directories Claude can access | `[ "../docs/" ]` |
| `defaultMode` | Default permission mode when Claude Code opens | `"acceptEdits"` |
| `disableBypassPermissionsMode` | Set to `"disable"` to prevent activating `bypassPermissions` mode. Disables the `--dangerously-skip-permissions` command-line flag. See [Managed settings](https://code.claude.com/docs/en/settings#managed-settings) | `"disable"` |

### Permission Rule Syntax

Permission rules follow the format `Tool` or `Tool(specifier)`. Understanding the syntax helps you write rules that match exactly what you want.

#### Rule Evaluation Order

When multiple rules could match the same tool usage, rules are evaluated in this order:

1. **Deny** rules are checked first
2. **Ask** rules are checked second
3. **Allow** rules are checked last

The first matching rule determines the behavior. This means a deny rule always takes precedence over an allow rule, even when both rules match.

#### Match All Uses of a Tool

To match all uses of a tool, use just the tool name without parentheses:

| Rule | Effect |
|------|--------|
| `Bash` | Matches **all** Bash commands |
| `WebFetch` | Matches **all** web fetch requests |
| `Read` | Matches **all** file reads |

`Bash(*)` is equivalent to `Bash` and matches all Bash commands. Both syntaxes can be used interchangeably.

#### Add Specifiers for Fine Control

Add a specifier in parentheses to match specific tool usages:

| Rule | Effect |
|------|--------|
| `Bash(npm run build)` | Matches exact command `npm run build` |
| `Read(./.env)` | Matches reading the `.env` file in the current directory |
| `WebFetch(domain:example.com)` | Matches fetch requests for example.com |

#### Wildcard Patterns

Bash rules have two wildcard syntaxes:

| Wildcard | Location | Behavior | Example |
|----------|----------|----------|---------|
| `:*` | End of pattern only | **Prefix match** with word boundaries. Must have space or end of string after prefix | `Bash(ls:*)` matches `ls -la` but not `lsof` |
| `*` | Anywhere in pattern | **Glob match** without word boundaries. Matches any character sequence at that position | `Bash(ls*)` matches both `ls -la` and `lsof` |

**Prefix match with `:*`**

The `:*` suffix matches all commands starting with the specified prefix. This works with multi-word commands. The following configuration allows npm and git commit commands but blocks git push and rm -rf:

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run:*)",
      "Bash(git commit:*)",
      "Bash(docker compose:*)"
    ],
    "deny": [
      "Bash(git push:*)",
      "Bash(rm -rf:*)"
    ]
  }
}
```

**Glob match with `*`**

The `*` wildcard can appear at the start, middle, or end of a pattern. The following configuration allows git commands targeting main (e.g., `git checkout main`, `git merge main`) and all version-checking commands (e.g., `node --version`, `npm --version`):

```json
{
  "permissions": {
    "allow": [
      "Bash(git * main)",
      "Bash(* --version)"
    ]
  }
}
```

---

## Environment Variables

Claude Code supports the following environment variables to control behavior:

| Variable | Purpose |
|------|---------|
| `ANTHROPIC_API_KEY` | API key sent as `X-Api-Key` header, primarily for Claude SDK (run `/login` for interactive use) |
| `ANTHROPIC_AUTH_TOKEN` | Custom value for `Authorization` header (your value is prefixed with `Bearer`) |
| `CLAUDE_DEFAULT_HAIKU_MODEL` | See [Model configuration](https://code.claude.com/docs/en/settings#model-configuration) |
| `CLAUDE_DEFAULT_OPUS_MODEL` | See [Model configuration](https://code.claude.com/docs/en/settings#model-configuration) |
| `CLAUDE_DEFAULT_SONNET_MODEL` | See [Model configuration](https://code.claude.com/docs/en/settings#model-configuration) |
| `BASH_DEFAULT_TIMEOUT_MS` | Default timeout for long-running bash commands |
| `BASH_MAX_OUTPUT_LENGTH` | Maximum character count for bash output before mid-stream truncation |
| `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` | Set context capacity percentage (1-100) at which auto-compaction triggers. By default, auto-compaction triggers at about 95% capacity. Lower values like `50` compact earlier. Values higher than the default threshold have no effect |
| `CLAUDE_CODE_ENABLE_TELEMETRY` | Set to `1` to enable OpenTelemetry data collection for metrics and logging. Must be enabled first to configure OTel exporters. See [Monitoring](https://code.claude.com/docs/en/settings#monitoring) |
| `CLAUDE_CODE_HIDE_ACCOUNT_INFO` | Set to `1` to hide your email address and organization name in the Claude Code UI. Useful when streaming or recording |
| `CLAUDE_CODE_SHELL` | Override automatic shell detection. Useful when your login shell differs from your working shell (e.g., `bash` vs `zsh`) |
| `DISABLE_AUTOUPDATER` | Set to `1` to disable automatic updates |
| `DISABLE_BUG_COMMAND` | Set to `1` to disable the `/bug` command |
| `DISABLE_ERROR_REPORTING` | Set to `1` to opt out of Sentry error reporting |
| `ENABLE_TOOL_SEARCH` | Control MCP tool search. Values: `auto` (default, enabled at 10% context), `auto:N` (custom threshold, e.g., `auto:5` for 5%), `true` (always on), `false` (disabled) |

For the complete list of environment variables, see [official documentation](https://code.claude.com/docs/en/settings#environment-variables).

---

**Sources:**
- [Claude Code settings](https://code.claude.com/docs/en/settings)