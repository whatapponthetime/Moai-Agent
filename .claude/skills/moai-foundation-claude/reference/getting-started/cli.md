[Skip to Content](https://adk.mo.ai.kr/en/getting-started/cli#nextra-skip-nav)

[Getting Started](https://adk.mo.ai.kr/en/getting-started/introduction "Getting Started") CLI Reference

Copy page

# CLI Reference

Reference all commands and options of the MoAI-ADK command-line interface.

## Command List [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#command-list)

```

moai --help
```

**Output Example:**

```

Usage: moai [OPTIONS] COMMAND [ARGS]...

  MoAI Agentic Development Kit

  SPEC-First DDD Framework with Alfred SuperAgent

Options:
  --version  Show the version and exit.
  --help     Show this message and exit.

Commands:
  claude      Switch to Claude backend (Anthropic API)
  doctor      Run system diagnostics
  glm         Switch to GLM backend (cost-effective) or update API key
  init        Initialize a new MoAI-ADK project
  rank        MoAI Rank - Token usage leaderboard.
  status      Show project status
  statusline  Render Claude Code statusline (internal use only)
  update      Update MoAI-ADK to latest version
  worktree    Manage Git worktrees for parallel SPEC development.
```

| Command | Description |
| --- | --- |
| `moai init` | Initialize project |
| `moai update` | Update MoAI-ADK |
| `moai doctor` | System diagnostics |
| `moai glm` | Switch to GLM backend |
| `moai claude`, `moai cc` | Switch to Claude backend |
| `moai status` | Check project status |
| `moai worktree` | Manage Git worktrees |
| `moai rank` | Token usage ranking |

* * *

## moai init [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-init)

Initialize a project.

```

moai init [PATH] [OPTIONS]
```

### Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#options)

| Option | Description |
| --- | --- |
| `-y, --non-interactive` | Non-interactive mode (use defaults) |
| `--mode [personal|team]` | Project mode |
| `--locale [ko|en|ja|zh]` | Preferred language (default: en) |
| `--language TEXT` | Programming language (auto-detect if specified) |
| `--force` | Force re-initialization without confirmation |

### Examples [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#examples)

```

# Initialize new project
moai init my-project

# Korean, team mode
moai init my-project --locale ko --mode team

# Python project
moai init --language python
```

* * *

## moai update [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-update)

Update MoAI-ADK to the latest version.

```

moai update [OPTIONS]
```

### Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#options-1)

| Option | Description |
| --- | --- |
| `--path PATH` | Project path (default: current directory) |
| `--force` | Force update without backup |
| `--check` | Check version only (no update) |
| `--project` | Sync project templates only |
| `--templates-only` | Sync templates only (skip package upgrade) |
| `--yes` | Auto confirm (CI/CD mode) |
| `-c, --config` | Edit project config (same as initial setup wizard) |
| `--merge` | Auto merge (preserve user changes) |
| `--manual` | Manual merge (create guide) |

### Examples [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#examples-1)

```

# Check for updates
moai update --check

# Force update
moai update --force

# Auto merge
moai update --merge
```

**Important:**`--force` option does not create backups. User changes may be lost.

* * *

## moai doctor [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-doctor)

Run system diagnostics.

```

moai doctor [OPTIONS]
```

### Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#options-2)

| Option | Description |
| --- | --- |
| `-v, --verbose` | Show detailed tool versions and language detection |
| `--fix` | Suggest fixes for missing tools |
| `--export PATH` | Export to JSON file |
| `--check TEXT` | Check only specific tool |
| `--check-commands` | Diagnose slash command loading issues |
| `--shell` | Diagnose shell and PATH configuration (WSL/Linux) |

### Examples [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#examples-2)

```

# Full diagnostics
moai doctor

# Verbose diagnostics
moai doctor --verbose

# Suggest fixes
moai doctor --fix
```

* * *

## moai glm [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-glm)

Switch to GLM backend or update API key.

```

moai glm [OPTIONS] [API_KEY]
```

### Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#options-3)

| Option | Description |
| --- | --- |
| `--help` | Show help |

### Usage [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#usage)

```

# Switch to GLM backend
moai glm

# Update API key
moai glm <api-key>

# Get API key from z.ai
# https://z.ai/subscribe?ic=1NDV03BGWU
```

* * *

## moai claude [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-claude)

Switch to Claude backend (Anthropic API).

```

$ moai claude
# Or shorthand
$ moai cc
```

* * *

## moai status [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-status)

Check project status.

```

moai status
```

**Output Example:**

```

╭────── Project Status ──────╮
│   Mode          personal   │
│   Locale        unknown    │
│   SPECs         1          │
│   Branch        main       │
│   Git Status    Modified   │
╰────────────────────────────╯
```

**Output Information:**

- **Mode**: Work mode (personal, team, manual)
- **Locale**: Language setting
- **SPECs**: Number of active SPECs
- **Branch**: Current branch
- **Git Status**: Git status (Clean, Modified)

* * *

## moai worktree [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-worktree)

Manage Git worktrees for parallel SPEC development.

```

moai worktree [OPTIONS] COMMAND [ARGS]...
```

### Subcommands [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#subcommands)

| Command | Description |
| --- | --- |
| `moai worktree new` | Create new worktree |
| `moai worktree list` | List active worktrees |
| `moai worktree switch` | Switch to a worktree |
| `moai worktree go` | Navigate to worktree directory |
| `moai worktree sync` | Sync with upstream |
| `moai worktree remove` | Remove worktree |
| `moai worktree clean` | Clean up stale worktrees |
| `moai worktree recover` | Recover from existing directory |

### moai worktree new [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-worktree-new)

Create a new worktree.

```

moai worktree new [OPTIONS] SPEC_ID
```

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#options-4)

| Option | Description |
| --- | --- |
| `-b, --branch TEXT` | User branch name |
| `--base TEXT` | Base branch (default: main) |
| `--repo PATH` | Repository path |
| `--worktree-root PATH` | Worktree root path |
| `-f, --force` | Force create even if exists |
| `--glm` | Use GLM LLM settings |
| `--llm-config PATH` | User LLM config file path |

#### Examples [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#examples-3)

```

# Create worktree for SPEC-001
moai worktree new SPEC-001

# Specify user branch
moai worktree new SPEC-001 --branch feature-auth

# Change base branch
moai worktree new SPEC-001 --base develop
```

### moai worktree list [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-worktree-list)

List active worktrees.

```

moai worktree list [OPTIONS]
```

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#options-5)

| Option | Description |
| --- | --- |
| `--format [table|json]` | Output format |
| `--repo PATH` | Repository path |
| `--worktree-root PATH` | Worktree root path |

### moai worktree remove [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-worktree-remove)

Remove a worktree.

```

moai worktree remove [OPTIONS] SPEC_ID
```

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#options-6)

| Option | Description |
| --- | --- |
| `-f, --force` | Force remove uncommitted changes |
| `--repo PATH` | Repository path |
| `--worktree-root PATH` | Worktree root path |

### worktree Workflow [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#worktree-workflow)

* * *

## moai rank [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-rank)

Display token usage ranking.

```

moai rank
```

* * *

## moai hook [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#moai-hook)

Claude Code hook dispatcher for MoAI-ADK events.

```

moai hook <event>
```

### Supported Events [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#supported-events)

| Event | Description |
| --- | --- |
| `PreToolUse` | Before tool execution |
| `PostToolUse` | After tool execution |
| `Notification` | System notifications |
| `Stop` | Session end |

### Examples [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#examples-4)

```

# Run PreToolUse hook
moai hook PreToolUse

# Run PostToolUse hook
moai hook PostToolUse
```

* * *

## Environment Variables [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#environment-variables)

| Variable | Description |
| --- | --- |
| `MOAI_API_KEY` | API key (Claude/GLM) |
| `MOAI_MODE` | Execution mode (development/production) |
| `MOAI_LOCALE` | Language setting (ko/en/ja/zh) |
| `MOAI_WORKTREE_ROOT` | Worktree root path |

* * *

## See Also [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/cli\#see-also)

- [Quick Start](https://adk.mo.ai.kr/en/getting-started/quickstart)
- [Installation](https://adk.mo.ai.kr/en/getting-started/installation)
- [Update](https://adk.mo.ai.kr/en/getting-started/update)

Last updated onFebruary 8, 2026

[Update](https://adk.mo.ai.kr/en/getting-started/update "Update") [What is MoAI-ADK?](https://adk.mo.ai.kr/en/core-concepts/what-is-moai-adk "What is MoAI-ADK?")

* * *